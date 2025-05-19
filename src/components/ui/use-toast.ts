// components/ui/use-toast.ts

import * as React from "react"
import { ToastActionElement, type ToastProps } from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

type ActionType = keyof typeof actionTypes

type Action =
  | {
      type: "ADD_TOAST"
      toast: ToasterToast
    }
  | {
      type: "UPDATE_TOAST"
      toast: Partial<ToasterToast>
    }
  | {
      type: "DISMISS_TOAST"
      toastId?: ToasterToast["id"]
    }
  | {
      type: "REMOVE_TOAST"
      toastId?: ToasterToast["id"]
    }

const toastReducer = (
  state: ToasterToast[],
  action: Action
): ToasterToast[] => {
  switch (action.type) {
    case "ADD_TOAST":
      return [action.toast, ...state].slice(0, TOAST_LIMIT)
    case "UPDATE_TOAST":
      return state.map((t) =>
        t.id === action.toast.id ? { ...t, ...action.toast } : t
      )
    case "DISMISS_TOAST": {
      const { toastId } = action

      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.forEach((t) => addToRemoveQueue(t.id))
      }

      return state.map((t) =>
        t.id === toastId || toastId === undefined
          ? {
              ...t,
              open: false,
            }
          : t
      )
    }
    case "REMOVE_TOAST":
      return state.filter((t) => t.id !== action.toastId)
    default:
      return state
  }
}

const listeners: Array<(state: ToasterToast[]) => void> = []

let memoryState: ToasterToast[] = []

function dispatch(action: Action) {
  memoryState = toastReducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

function useToast() {
  const [state, setState] = React.useState<ToasterToast[]>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) =>
      dispatch({ type: "DISMISS_TOAST", toastId }),
    toasts: state,
  }
}

function toast({ ...props }: ToastProps) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })

  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id,
    dismiss,
    update,
  }
}

export { useToast, toast }
