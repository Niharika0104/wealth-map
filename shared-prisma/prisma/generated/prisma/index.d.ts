
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Employees
 * 
 */
export type Employees = $Result.DefaultSelection<Prisma.$EmployeesPayload>
/**
 * Model Companies
 * 
 */
export type Companies = $Result.DefaultSelection<Prisma.$CompaniesPayload>
/**
 * Model Assets
 * 
 */
export type Assets = $Result.DefaultSelection<Prisma.$AssetsPayload>
/**
 * Model CandidateAssetOwnership
 * 
 */
export type CandidateAssetOwnership = $Result.DefaultSelection<Prisma.$CandidateAssetOwnershipPayload>
/**
 * Model Candidates
 * 
 */
export type Candidates = $Result.DefaultSelection<Prisma.$CandidatesPayload>
/**
 * Model Logging
 * 
 */
export type Logging = $Result.DefaultSelection<Prisma.$LoggingPayload>
/**
 * Model Views
 * 
 */
export type Views = $Result.DefaultSelection<Prisma.$ViewsPayload>
/**
 * Model Bookmarks
 * 
 */
export type Bookmarks = $Result.DefaultSelection<Prisma.$BookmarksPayload>
/**
 * Model Constants
 * 
 */
export type Constants = $Result.DefaultSelection<Prisma.$ConstantsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employees`: Exposes CRUD operations for the **Employees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employees.findMany()
    * ```
    */
  get employees(): Prisma.EmployeesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companies`: Exposes CRUD operations for the **Companies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.companies.findMany()
    * ```
    */
  get companies(): Prisma.CompaniesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assets`: Exposes CRUD operations for the **Assets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.assets.findMany()
    * ```
    */
  get assets(): Prisma.AssetsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidateAssetOwnership`: Exposes CRUD operations for the **CandidateAssetOwnership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CandidateAssetOwnerships
    * const candidateAssetOwnerships = await prisma.candidateAssetOwnership.findMany()
    * ```
    */
  get candidateAssetOwnership(): Prisma.CandidateAssetOwnershipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidates`: Exposes CRUD operations for the **Candidates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidates
    * const candidates = await prisma.candidates.findMany()
    * ```
    */
  get candidates(): Prisma.CandidatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logging`: Exposes CRUD operations for the **Logging** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loggings
    * const loggings = await prisma.logging.findMany()
    * ```
    */
  get logging(): Prisma.LoggingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.views`: Exposes CRUD operations for the **Views** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Views
    * const views = await prisma.views.findMany()
    * ```
    */
  get views(): Prisma.ViewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookmarks`: Exposes CRUD operations for the **Bookmarks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookmarks
    * const bookmarks = await prisma.bookmarks.findMany()
    * ```
    */
  get bookmarks(): Prisma.BookmarksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.constants`: Exposes CRUD operations for the **Constants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Constants
    * const constants = await prisma.constants.findMany()
    * ```
    */
  get constants(): Prisma.ConstantsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Employees: 'Employees',
    Companies: 'Companies',
    Assets: 'Assets',
    CandidateAssetOwnership: 'CandidateAssetOwnership',
    Candidates: 'Candidates',
    Logging: 'Logging',
    Views: 'Views',
    Bookmarks: 'Bookmarks',
    Constants: 'Constants'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "employees" | "companies" | "assets" | "candidateAssetOwnership" | "candidates" | "logging" | "views" | "bookmarks" | "constants"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Employees: {
        payload: Prisma.$EmployeesPayload<ExtArgs>
        fields: Prisma.EmployeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          findFirst: {
            args: Prisma.EmployeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          findMany: {
            args: Prisma.EmployeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>[]
          }
          create: {
            args: Prisma.EmployeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          createMany: {
            args: Prisma.EmployeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>[]
          }
          delete: {
            args: Prisma.EmployeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          update: {
            args: Prisma.EmployeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          deleteMany: {
            args: Prisma.EmployeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>[]
          }
          upsert: {
            args: Prisma.EmployeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          aggregate: {
            args: Prisma.EmployeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployees>
          }
          groupBy: {
            args: Prisma.EmployeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeesCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeesCountAggregateOutputType> | number
          }
        }
      }
      Companies: {
        payload: Prisma.$CompaniesPayload<ExtArgs>
        fields: Prisma.CompaniesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompaniesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompaniesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          findFirst: {
            args: Prisma.CompaniesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompaniesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          findMany: {
            args: Prisma.CompaniesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>[]
          }
          create: {
            args: Prisma.CompaniesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          createMany: {
            args: Prisma.CompaniesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompaniesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>[]
          }
          delete: {
            args: Prisma.CompaniesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          update: {
            args: Prisma.CompaniesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          deleteMany: {
            args: Prisma.CompaniesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompaniesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompaniesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>[]
          }
          upsert: {
            args: Prisma.CompaniesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          aggregate: {
            args: Prisma.CompaniesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanies>
          }
          groupBy: {
            args: Prisma.CompaniesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompaniesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompaniesCountArgs<ExtArgs>
            result: $Utils.Optional<CompaniesCountAggregateOutputType> | number
          }
        }
      }
      Assets: {
        payload: Prisma.$AssetsPayload<ExtArgs>
        fields: Prisma.AssetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetsPayload>
          }
          findFirst: {
            args: Prisma.AssetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetsPayload>
          }
          findMany: {
            args: Prisma.AssetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetsPayload>[]
          }
          create: {
            args: Prisma.AssetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetsPayload>
          }
          createMany: {
            args: Prisma.AssetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetsPayload>[]
          }
          delete: {
            args: Prisma.AssetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetsPayload>
          }
          update: {
            args: Prisma.AssetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetsPayload>
          }
          deleteMany: {
            args: Prisma.AssetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssetsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetsPayload>[]
          }
          upsert: {
            args: Prisma.AssetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetsPayload>
          }
          aggregate: {
            args: Prisma.AssetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssets>
          }
          groupBy: {
            args: Prisma.AssetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetsCountArgs<ExtArgs>
            result: $Utils.Optional<AssetsCountAggregateOutputType> | number
          }
        }
      }
      CandidateAssetOwnership: {
        payload: Prisma.$CandidateAssetOwnershipPayload<ExtArgs>
        fields: Prisma.CandidateAssetOwnershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateAssetOwnershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAssetOwnershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateAssetOwnershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAssetOwnershipPayload>
          }
          findFirst: {
            args: Prisma.CandidateAssetOwnershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAssetOwnershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateAssetOwnershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAssetOwnershipPayload>
          }
          findMany: {
            args: Prisma.CandidateAssetOwnershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAssetOwnershipPayload>[]
          }
          create: {
            args: Prisma.CandidateAssetOwnershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAssetOwnershipPayload>
          }
          createMany: {
            args: Prisma.CandidateAssetOwnershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateAssetOwnershipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAssetOwnershipPayload>[]
          }
          delete: {
            args: Prisma.CandidateAssetOwnershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAssetOwnershipPayload>
          }
          update: {
            args: Prisma.CandidateAssetOwnershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAssetOwnershipPayload>
          }
          deleteMany: {
            args: Prisma.CandidateAssetOwnershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateAssetOwnershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateAssetOwnershipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAssetOwnershipPayload>[]
          }
          upsert: {
            args: Prisma.CandidateAssetOwnershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateAssetOwnershipPayload>
          }
          aggregate: {
            args: Prisma.CandidateAssetOwnershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidateAssetOwnership>
          }
          groupBy: {
            args: Prisma.CandidateAssetOwnershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateAssetOwnershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateAssetOwnershipCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateAssetOwnershipCountAggregateOutputType> | number
          }
        }
      }
      Candidates: {
        payload: Prisma.$CandidatesPayload<ExtArgs>
        fields: Prisma.CandidatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatesPayload>
          }
          findFirst: {
            args: Prisma.CandidatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatesPayload>
          }
          findMany: {
            args: Prisma.CandidatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatesPayload>[]
          }
          create: {
            args: Prisma.CandidatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatesPayload>
          }
          createMany: {
            args: Prisma.CandidatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidatesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatesPayload>[]
          }
          delete: {
            args: Prisma.CandidatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatesPayload>
          }
          update: {
            args: Prisma.CandidatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatesPayload>
          }
          deleteMany: {
            args: Prisma.CandidatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidatesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatesPayload>[]
          }
          upsert: {
            args: Prisma.CandidatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatesPayload>
          }
          aggregate: {
            args: Prisma.CandidatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidates>
          }
          groupBy: {
            args: Prisma.CandidatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidatesCountArgs<ExtArgs>
            result: $Utils.Optional<CandidatesCountAggregateOutputType> | number
          }
        }
      }
      Logging: {
        payload: Prisma.$LoggingPayload<ExtArgs>
        fields: Prisma.LoggingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoggingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoggingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload>
          }
          findFirst: {
            args: Prisma.LoggingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoggingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload>
          }
          findMany: {
            args: Prisma.LoggingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload>[]
          }
          create: {
            args: Prisma.LoggingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload>
          }
          createMany: {
            args: Prisma.LoggingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoggingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload>[]
          }
          delete: {
            args: Prisma.LoggingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload>
          }
          update: {
            args: Prisma.LoggingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload>
          }
          deleteMany: {
            args: Prisma.LoggingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoggingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoggingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload>[]
          }
          upsert: {
            args: Prisma.LoggingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload>
          }
          aggregate: {
            args: Prisma.LoggingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogging>
          }
          groupBy: {
            args: Prisma.LoggingGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoggingGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoggingCountArgs<ExtArgs>
            result: $Utils.Optional<LoggingCountAggregateOutputType> | number
          }
        }
      }
      Views: {
        payload: Prisma.$ViewsPayload<ExtArgs>
        fields: Prisma.ViewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          findFirst: {
            args: Prisma.ViewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          findMany: {
            args: Prisma.ViewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>[]
          }
          create: {
            args: Prisma.ViewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          createMany: {
            args: Prisma.ViewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>[]
          }
          delete: {
            args: Prisma.ViewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          update: {
            args: Prisma.ViewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          deleteMany: {
            args: Prisma.ViewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>[]
          }
          upsert: {
            args: Prisma.ViewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          aggregate: {
            args: Prisma.ViewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViews>
          }
          groupBy: {
            args: Prisma.ViewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewsCountArgs<ExtArgs>
            result: $Utils.Optional<ViewsCountAggregateOutputType> | number
          }
        }
      }
      Bookmarks: {
        payload: Prisma.$BookmarksPayload<ExtArgs>
        fields: Prisma.BookmarksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookmarksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookmarksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload>
          }
          findFirst: {
            args: Prisma.BookmarksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookmarksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload>
          }
          findMany: {
            args: Prisma.BookmarksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload>[]
          }
          create: {
            args: Prisma.BookmarksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload>
          }
          createMany: {
            args: Prisma.BookmarksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookmarksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload>[]
          }
          delete: {
            args: Prisma.BookmarksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload>
          }
          update: {
            args: Prisma.BookmarksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload>
          }
          deleteMany: {
            args: Prisma.BookmarksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookmarksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookmarksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload>[]
          }
          upsert: {
            args: Prisma.BookmarksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload>
          }
          aggregate: {
            args: Prisma.BookmarksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookmarks>
          }
          groupBy: {
            args: Prisma.BookmarksGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookmarksGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookmarksCountArgs<ExtArgs>
            result: $Utils.Optional<BookmarksCountAggregateOutputType> | number
          }
        }
      }
      Constants: {
        payload: Prisma.$ConstantsPayload<ExtArgs>
        fields: Prisma.ConstantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConstantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConstantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstantsPayload>
          }
          findFirst: {
            args: Prisma.ConstantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConstantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstantsPayload>
          }
          findMany: {
            args: Prisma.ConstantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstantsPayload>[]
          }
          create: {
            args: Prisma.ConstantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstantsPayload>
          }
          createMany: {
            args: Prisma.ConstantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConstantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstantsPayload>[]
          }
          delete: {
            args: Prisma.ConstantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstantsPayload>
          }
          update: {
            args: Prisma.ConstantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstantsPayload>
          }
          deleteMany: {
            args: Prisma.ConstantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConstantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConstantsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstantsPayload>[]
          }
          upsert: {
            args: Prisma.ConstantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstantsPayload>
          }
          aggregate: {
            args: Prisma.ConstantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConstants>
          }
          groupBy: {
            args: Prisma.ConstantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConstantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConstantsCountArgs<ExtArgs>
            result: $Utils.Optional<ConstantsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    employees?: EmployeesOmit
    companies?: CompaniesOmit
    assets?: AssetsOmit
    candidateAssetOwnership?: CandidateAssetOwnershipOmit
    candidates?: CandidatesOmit
    logging?: LoggingOmit
    views?: ViewsOmit
    bookmarks?: BookmarksOmit
    constants?: ConstantsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    userlogs: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userlogs?: boolean | UsersCountOutputTypeCountUserlogsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUserlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoggingWhereInput
  }


  /**
   * Count Type CompaniesCountOutputType
   */

  export type CompaniesCountOutputType = {
    admins: number
  }

  export type CompaniesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | CompaniesCountOutputTypeCountAdminsArgs
  }

  // Custom InputTypes
  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesCountOutputType
     */
    select?: CompaniesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeesWhereInput
  }


  /**
   * Count Type AssetsCountOutputType
   */

  export type AssetsCountOutputType = {
    owners: number
    Views: number
    Bookmarks: number
  }

  export type AssetsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owners?: boolean | AssetsCountOutputTypeCountOwnersArgs
    Views?: boolean | AssetsCountOutputTypeCountViewsArgs
    Bookmarks?: boolean | AssetsCountOutputTypeCountBookmarksArgs
  }

  // Custom InputTypes
  /**
   * AssetsCountOutputType without action
   */
  export type AssetsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetsCountOutputType
     */
    select?: AssetsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssetsCountOutputType without action
   */
  export type AssetsCountOutputTypeCountOwnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateAssetOwnershipWhereInput
  }

  /**
   * AssetsCountOutputType without action
   */
  export type AssetsCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewsWhereInput
  }

  /**
   * AssetsCountOutputType without action
   */
  export type AssetsCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarksWhereInput
  }


  /**
   * Count Type CandidatesCountOutputType
   */

  export type CandidatesCountOutputType = {
    assets: number
  }

  export type CandidatesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | CandidatesCountOutputTypeCountAssetsArgs
  }

  // Custom InputTypes
  /**
   * CandidatesCountOutputType without action
   */
  export type CandidatesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatesCountOutputType
     */
    select?: CandidatesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidatesCountOutputType without action
   */
  export type CandidatesCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateAssetOwnershipWhereInput
  }


  /**
   * Count Type ConstantsCountOutputType
   */

  export type ConstantsCountOutputType = {
    assets: number
    Users: number
    Logging: number
  }

  export type ConstantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | ConstantsCountOutputTypeCountAssetsArgs
    Users?: boolean | ConstantsCountOutputTypeCountUsersArgs
    Logging?: boolean | ConstantsCountOutputTypeCountLoggingArgs
  }

  // Custom InputTypes
  /**
   * ConstantsCountOutputType without action
   */
  export type ConstantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstantsCountOutputType
     */
    select?: ConstantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConstantsCountOutputType without action
   */
  export type ConstantsCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetsWhereInput
  }

  /**
   * ConstantsCountOutputType without action
   */
  export type ConstantsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }

  /**
   * ConstantsCountOutputType without action
   */
  export type ConstantsCountOutputTypeCountLoggingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoggingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: string | null
    name: string | null
    phone_number: string | null
    region: string | null
    role: string | null
    email: string | null
    password: string | null
    mfa_enabled: boolean | null
    created_by: string | null
    created_date: Date | null
    modified_by: string | null
    modified_date: Date | null
    last_login: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: string | null
    name: string | null
    phone_number: string | null
    region: string | null
    role: string | null
    email: string | null
    password: string | null
    mfa_enabled: boolean | null
    created_by: string | null
    created_date: Date | null
    modified_by: string | null
    modified_date: Date | null
    last_login: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    name: number
    phone_number: number
    region: number
    role: number
    email: number
    password: number
    mfa_enabled: number
    created_by: number
    created_date: number
    modified_by: number
    modified_date: number
    last_login: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    user_id?: true
    name?: true
    phone_number?: true
    region?: true
    role?: true
    email?: true
    password?: true
    mfa_enabled?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
    last_login?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    name?: true
    phone_number?: true
    region?: true
    role?: true
    email?: true
    password?: true
    mfa_enabled?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
    last_login?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    name?: true
    phone_number?: true
    region?: true
    role?: true
    email?: true
    password?: true
    mfa_enabled?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
    last_login?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: string
    name: string
    phone_number: string | null
    region: string
    role: string
    email: string
    password: string
    mfa_enabled: boolean
    created_by: string | null
    created_date: Date
    modified_by: string | null
    modified_date: Date | null
    last_login: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    phone_number?: boolean
    region?: boolean
    role?: boolean
    email?: boolean
    password?: boolean
    mfa_enabled?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
    last_login?: boolean
    employee?: boolean | Users$employeeArgs<ExtArgs>
    userlogs?: boolean | Users$userlogsArgs<ExtArgs>
    roles?: boolean | ConstantsDefaultArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    phone_number?: boolean
    region?: boolean
    role?: boolean
    email?: boolean
    password?: boolean
    mfa_enabled?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
    last_login?: boolean
    roles?: boolean | ConstantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    phone_number?: boolean
    region?: boolean
    role?: boolean
    email?: boolean
    password?: boolean
    mfa_enabled?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
    last_login?: boolean
    roles?: boolean | ConstantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    user_id?: boolean
    name?: boolean
    phone_number?: boolean
    region?: boolean
    role?: boolean
    email?: boolean
    password?: boolean
    mfa_enabled?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
    last_login?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "name" | "phone_number" | "region" | "role" | "email" | "password" | "mfa_enabled" | "created_by" | "created_date" | "modified_by" | "modified_date" | "last_login", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | Users$employeeArgs<ExtArgs>
    userlogs?: boolean | Users$userlogsArgs<ExtArgs>
    roles?: boolean | ConstantsDefaultArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | ConstantsDefaultArgs<ExtArgs>
  }
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | ConstantsDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      employee: Prisma.$EmployeesPayload<ExtArgs> | null
      userlogs: Prisma.$LoggingPayload<ExtArgs>[]
      roles: Prisma.$ConstantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      name: string
      phone_number: string | null
      region: string
      role: string
      email: string
      password: string
      mfa_enabled: boolean
      created_by: string | null
      created_date: Date
      modified_by: string | null
      modified_date: Date | null
      last_login: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends Users$employeeArgs<ExtArgs> = {}>(args?: Subset<T, Users$employeeArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userlogs<T extends Users$userlogsArgs<ExtArgs> = {}>(args?: Subset<T, Users$userlogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends ConstantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConstantsDefaultArgs<ExtArgs>>): Prisma__ConstantsClient<$Result.GetResult<Prisma.$ConstantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly user_id: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly phone_number: FieldRef<"Users", 'String'>
    readonly region: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly mfa_enabled: FieldRef<"Users", 'Boolean'>
    readonly created_by: FieldRef<"Users", 'String'>
    readonly created_date: FieldRef<"Users", 'DateTime'>
    readonly modified_by: FieldRef<"Users", 'String'>
    readonly modified_date: FieldRef<"Users", 'DateTime'>
    readonly last_login: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.employee
   */
  export type Users$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    where?: EmployeesWhereInput
  }

  /**
   * Users.userlogs
   */
  export type Users$userlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoggingInclude<ExtArgs> | null
    where?: LoggingWhereInput
    orderBy?: LoggingOrderByWithRelationInput | LoggingOrderByWithRelationInput[]
    cursor?: LoggingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoggingScalarFieldEnum | LoggingScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Employees
   */

  export type AggregateEmployees = {
    _count: EmployeesCountAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  export type EmployeesMinAggregateOutputType = {
    user_id: string | null
    company_id: string | null
  }

  export type EmployeesMaxAggregateOutputType = {
    user_id: string | null
    company_id: string | null
  }

  export type EmployeesCountAggregateOutputType = {
    user_id: number
    company_id: number
    _all: number
  }


  export type EmployeesMinAggregateInputType = {
    user_id?: true
    company_id?: true
  }

  export type EmployeesMaxAggregateInputType = {
    user_id?: true
    company_id?: true
  }

  export type EmployeesCountAggregateInputType = {
    user_id?: true
    company_id?: true
    _all?: true
  }

  export type EmployeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to aggregate.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeesMaxAggregateInputType
  }

  export type GetEmployeesAggregateType<T extends EmployeesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployees[P]>
      : GetScalarType<T[P], AggregateEmployees[P]>
  }




  export type EmployeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeesWhereInput
    orderBy?: EmployeesOrderByWithAggregationInput | EmployeesOrderByWithAggregationInput[]
    by: EmployeesScalarFieldEnum[] | EmployeesScalarFieldEnum
    having?: EmployeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeesCountAggregateInputType | true
    _min?: EmployeesMinAggregateInputType
    _max?: EmployeesMaxAggregateInputType
  }

  export type EmployeesGroupByOutputType = {
    user_id: string
    company_id: string
    _count: EmployeesCountAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  type GetEmployeesGroupByPayload<T extends EmployeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
        }
      >
    >


  export type EmployeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    company_id?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type EmployeesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    company_id?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type EmployeesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    company_id?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type EmployeesSelectScalar = {
    user_id?: boolean
    company_id?: boolean
  }

  export type EmployeesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "company_id", ExtArgs["result"]["employees"]>
  export type EmployeesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }
  export type EmployeesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }
  export type EmployeesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }

  export type $EmployeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employees"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      company: Prisma.$CompaniesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      company_id: string
    }, ExtArgs["result"]["employees"]>
    composites: {}
  }

  type EmployeesGetPayload<S extends boolean | null | undefined | EmployeesDefaultArgs> = $Result.GetResult<Prisma.$EmployeesPayload, S>

  type EmployeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeesCountAggregateInputType | true
    }

  export interface EmployeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employees'], meta: { name: 'Employees' } }
    /**
     * Find zero or one Employees that matches the filter.
     * @param {EmployeesFindUniqueArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeesFindUniqueArgs>(args: SelectSubset<T, EmployeesFindUniqueArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employees that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeesFindUniqueOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeesFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindFirstArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeesFindFirstArgs>(args?: SelectSubset<T, EmployeesFindFirstArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindFirstOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeesFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employees.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employees.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const employeesWithUser_idOnly = await prisma.employees.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends EmployeesFindManyArgs>(args?: SelectSubset<T, EmployeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employees.
     * @param {EmployeesCreateArgs} args - Arguments to create a Employees.
     * @example
     * // Create one Employees
     * const Employees = await prisma.employees.create({
     *   data: {
     *     // ... data to create a Employees
     *   }
     * })
     * 
     */
    create<T extends EmployeesCreateArgs>(args: SelectSubset<T, EmployeesCreateArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeesCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeesCreateManyArgs>(args?: SelectSubset<T, EmployeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeesCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `user_id`
     * const employeesWithUser_idOnly = await prisma.employees.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeesCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employees.
     * @param {EmployeesDeleteArgs} args - Arguments to delete one Employees.
     * @example
     * // Delete one Employees
     * const Employees = await prisma.employees.delete({
     *   where: {
     *     // ... filter to delete one Employees
     *   }
     * })
     * 
     */
    delete<T extends EmployeesDeleteArgs>(args: SelectSubset<T, EmployeesDeleteArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employees.
     * @param {EmployeesUpdateArgs} args - Arguments to update one Employees.
     * @example
     * // Update one Employees
     * const employees = await prisma.employees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeesUpdateArgs>(args: SelectSubset<T, EmployeesUpdateArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeesDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeesDeleteManyArgs>(args?: SelectSubset<T, EmployeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeesUpdateManyArgs>(args: SelectSubset<T, EmployeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeesUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `user_id`
     * const employeesWithUser_idOnly = await prisma.employees.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeesUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employees.
     * @param {EmployeesUpsertArgs} args - Arguments to update or create a Employees.
     * @example
     * // Update or create a Employees
     * const employees = await prisma.employees.upsert({
     *   create: {
     *     // ... data to create a Employees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employees we want to update
     *   }
     * })
     */
    upsert<T extends EmployeesUpsertArgs>(args: SelectSubset<T, EmployeesUpsertArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employees.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeesCountArgs>(
      args?: Subset<T, EmployeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeesAggregateArgs>(args: Subset<T, EmployeesAggregateArgs>): Prisma.PrismaPromise<GetEmployeesAggregateType<T>>

    /**
     * Group by Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeesGroupByArgs['orderBy'] }
        : { orderBy?: EmployeesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employees model
   */
  readonly fields: EmployeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends CompaniesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompaniesDefaultArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employees model
   */
  interface EmployeesFieldRefs {
    readonly user_id: FieldRef<"Employees", 'String'>
    readonly company_id: FieldRef<"Employees", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employees findUnique
   */
  export type EmployeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees findUniqueOrThrow
   */
  export type EmployeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees findFirst
   */
  export type EmployeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * Employees findFirstOrThrow
   */
  export type EmployeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * Employees findMany
   */
  export type EmployeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * Employees create
   */
  export type EmployeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * The data needed to create a Employees.
     */
    data: XOR<EmployeesCreateInput, EmployeesUncheckedCreateInput>
  }

  /**
   * Employees createMany
   */
  export type EmployeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeesCreateManyInput | EmployeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employees createManyAndReturn
   */
  export type EmployeesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeesCreateManyInput | EmployeesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employees update
   */
  export type EmployeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * The data needed to update a Employees.
     */
    data: XOR<EmployeesUpdateInput, EmployeesUncheckedUpdateInput>
    /**
     * Choose, which Employees to update.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees updateMany
   */
  export type EmployeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeesUpdateManyMutationInput, EmployeesUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeesWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employees updateManyAndReturn
   */
  export type EmployeesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeesUpdateManyMutationInput, EmployeesUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeesWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employees upsert
   */
  export type EmployeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * The filter to search for the Employees to update in case it exists.
     */
    where: EmployeesWhereUniqueInput
    /**
     * In case the Employees found by the `where` argument doesn't exist, create a new Employees with this data.
     */
    create: XOR<EmployeesCreateInput, EmployeesUncheckedCreateInput>
    /**
     * In case the Employees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeesUpdateInput, EmployeesUncheckedUpdateInput>
  }

  /**
   * Employees delete
   */
  export type EmployeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter which Employees to delete.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees deleteMany
   */
  export type EmployeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeesWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employees without action
   */
  export type EmployeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
  }


  /**
   * Model Companies
   */

  export type AggregateCompanies = {
    _count: CompaniesCountAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  export type CompaniesMinAggregateOutputType = {
    company_id: string | null
    company_name: string | null
    region: string | null
    created_by: string | null
    created_date: Date | null
    modified_by: string | null
    modified_date: Date | null
  }

  export type CompaniesMaxAggregateOutputType = {
    company_id: string | null
    company_name: string | null
    region: string | null
    created_by: string | null
    created_date: Date | null
    modified_by: string | null
    modified_date: Date | null
  }

  export type CompaniesCountAggregateOutputType = {
    company_id: number
    company_name: number
    region: number
    created_by: number
    created_date: number
    modified_by: number
    modified_date: number
    _all: number
  }


  export type CompaniesMinAggregateInputType = {
    company_id?: true
    company_name?: true
    region?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
  }

  export type CompaniesMaxAggregateInputType = {
    company_id?: true
    company_name?: true
    region?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
  }

  export type CompaniesCountAggregateInputType = {
    company_id?: true
    company_name?: true
    region?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
    _all?: true
  }

  export type CompaniesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to aggregate.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompaniesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompaniesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompaniesMaxAggregateInputType
  }

  export type GetCompaniesAggregateType<T extends CompaniesAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanies[P]>
      : GetScalarType<T[P], AggregateCompanies[P]>
  }




  export type CompaniesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompaniesWhereInput
    orderBy?: CompaniesOrderByWithAggregationInput | CompaniesOrderByWithAggregationInput[]
    by: CompaniesScalarFieldEnum[] | CompaniesScalarFieldEnum
    having?: CompaniesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompaniesCountAggregateInputType | true
    _min?: CompaniesMinAggregateInputType
    _max?: CompaniesMaxAggregateInputType
  }

  export type CompaniesGroupByOutputType = {
    company_id: string
    company_name: string
    region: string
    created_by: string | null
    created_date: Date
    modified_by: string | null
    modified_date: Date
    _count: CompaniesCountAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  type GetCompaniesGroupByPayload<T extends CompaniesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompaniesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompaniesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
            : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
        }
      >
    >


  export type CompaniesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    company_name?: boolean
    region?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
    admins?: boolean | Companies$adminsArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companies"]>

  export type CompaniesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    company_name?: boolean
    region?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
  }, ExtArgs["result"]["companies"]>

  export type CompaniesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    company_name?: boolean
    region?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
  }, ExtArgs["result"]["companies"]>

  export type CompaniesSelectScalar = {
    company_id?: boolean
    company_name?: boolean
    region?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
  }

  export type CompaniesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"company_id" | "company_name" | "region" | "created_by" | "created_date" | "modified_by" | "modified_date", ExtArgs["result"]["companies"]>
  export type CompaniesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | Companies$adminsArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompaniesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompaniesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompaniesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Companies"
    objects: {
      admins: Prisma.$EmployeesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      company_id: string
      company_name: string
      region: string
      created_by: string | null
      created_date: Date
      modified_by: string | null
      modified_date: Date
    }, ExtArgs["result"]["companies"]>
    composites: {}
  }

  type CompaniesGetPayload<S extends boolean | null | undefined | CompaniesDefaultArgs> = $Result.GetResult<Prisma.$CompaniesPayload, S>

  type CompaniesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompaniesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompaniesCountAggregateInputType | true
    }

  export interface CompaniesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Companies'], meta: { name: 'Companies' } }
    /**
     * Find zero or one Companies that matches the filter.
     * @param {CompaniesFindUniqueArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompaniesFindUniqueArgs>(args: SelectSubset<T, CompaniesFindUniqueArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Companies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompaniesFindUniqueOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompaniesFindUniqueOrThrowArgs>(args: SelectSubset<T, CompaniesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesFindFirstArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompaniesFindFirstArgs>(args?: SelectSubset<T, CompaniesFindFirstArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesFindFirstOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompaniesFindFirstOrThrowArgs>(args?: SelectSubset<T, CompaniesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.companies.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.companies.findMany({ take: 10 })
     * 
     * // Only select the `company_id`
     * const companiesWithCompany_idOnly = await prisma.companies.findMany({ select: { company_id: true } })
     * 
     */
    findMany<T extends CompaniesFindManyArgs>(args?: SelectSubset<T, CompaniesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Companies.
     * @param {CompaniesCreateArgs} args - Arguments to create a Companies.
     * @example
     * // Create one Companies
     * const Companies = await prisma.companies.create({
     *   data: {
     *     // ... data to create a Companies
     *   }
     * })
     * 
     */
    create<T extends CompaniesCreateArgs>(args: SelectSubset<T, CompaniesCreateArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompaniesCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companies = await prisma.companies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompaniesCreateManyArgs>(args?: SelectSubset<T, CompaniesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompaniesCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companies = await prisma.companies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `company_id`
     * const companiesWithCompany_idOnly = await prisma.companies.createManyAndReturn({
     *   select: { company_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompaniesCreateManyAndReturnArgs>(args?: SelectSubset<T, CompaniesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Companies.
     * @param {CompaniesDeleteArgs} args - Arguments to delete one Companies.
     * @example
     * // Delete one Companies
     * const Companies = await prisma.companies.delete({
     *   where: {
     *     // ... filter to delete one Companies
     *   }
     * })
     * 
     */
    delete<T extends CompaniesDeleteArgs>(args: SelectSubset<T, CompaniesDeleteArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Companies.
     * @param {CompaniesUpdateArgs} args - Arguments to update one Companies.
     * @example
     * // Update one Companies
     * const companies = await prisma.companies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompaniesUpdateArgs>(args: SelectSubset<T, CompaniesUpdateArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompaniesDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.companies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompaniesDeleteManyArgs>(args?: SelectSubset<T, CompaniesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompaniesUpdateManyArgs>(args: SelectSubset<T, CompaniesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompaniesUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `company_id`
     * const companiesWithCompany_idOnly = await prisma.companies.updateManyAndReturn({
     *   select: { company_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompaniesUpdateManyAndReturnArgs>(args: SelectSubset<T, CompaniesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Companies.
     * @param {CompaniesUpsertArgs} args - Arguments to update or create a Companies.
     * @example
     * // Update or create a Companies
     * const companies = await prisma.companies.upsert({
     *   create: {
     *     // ... data to create a Companies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companies we want to update
     *   }
     * })
     */
    upsert<T extends CompaniesUpsertArgs>(args: SelectSubset<T, CompaniesUpsertArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.companies.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompaniesCountArgs>(
      args?: Subset<T, CompaniesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompaniesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompaniesAggregateArgs>(args: Subset<T, CompaniesAggregateArgs>): Prisma.PrismaPromise<GetCompaniesAggregateType<T>>

    /**
     * Group by Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompaniesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompaniesGroupByArgs['orderBy'] }
        : { orderBy?: CompaniesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompaniesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompaniesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Companies model
   */
  readonly fields: CompaniesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Companies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompaniesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admins<T extends Companies$adminsArgs<ExtArgs> = {}>(args?: Subset<T, Companies$adminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Companies model
   */
  interface CompaniesFieldRefs {
    readonly company_id: FieldRef<"Companies", 'String'>
    readonly company_name: FieldRef<"Companies", 'String'>
    readonly region: FieldRef<"Companies", 'String'>
    readonly created_by: FieldRef<"Companies", 'String'>
    readonly created_date: FieldRef<"Companies", 'DateTime'>
    readonly modified_by: FieldRef<"Companies", 'String'>
    readonly modified_date: FieldRef<"Companies", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Companies findUnique
   */
  export type CompaniesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where: CompaniesWhereUniqueInput
  }

  /**
   * Companies findUniqueOrThrow
   */
  export type CompaniesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where: CompaniesWhereUniqueInput
  }

  /**
   * Companies findFirst
   */
  export type CompaniesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * Companies findFirstOrThrow
   */
  export type CompaniesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * Companies findMany
   */
  export type CompaniesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * Companies create
   */
  export type CompaniesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * The data needed to create a Companies.
     */
    data: XOR<CompaniesCreateInput, CompaniesUncheckedCreateInput>
  }

  /**
   * Companies createMany
   */
  export type CompaniesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompaniesCreateManyInput | CompaniesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Companies createManyAndReturn
   */
  export type CompaniesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompaniesCreateManyInput | CompaniesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Companies update
   */
  export type CompaniesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * The data needed to update a Companies.
     */
    data: XOR<CompaniesUpdateInput, CompaniesUncheckedUpdateInput>
    /**
     * Choose, which Companies to update.
     */
    where: CompaniesWhereUniqueInput
  }

  /**
   * Companies updateMany
   */
  export type CompaniesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompaniesUpdateManyMutationInput, CompaniesUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompaniesWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Companies updateManyAndReturn
   */
  export type CompaniesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompaniesUpdateManyMutationInput, CompaniesUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompaniesWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Companies upsert
   */
  export type CompaniesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * The filter to search for the Companies to update in case it exists.
     */
    where: CompaniesWhereUniqueInput
    /**
     * In case the Companies found by the `where` argument doesn't exist, create a new Companies with this data.
     */
    create: XOR<CompaniesCreateInput, CompaniesUncheckedCreateInput>
    /**
     * In case the Companies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompaniesUpdateInput, CompaniesUncheckedUpdateInput>
  }

  /**
   * Companies delete
   */
  export type CompaniesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter which Companies to delete.
     */
    where: CompaniesWhereUniqueInput
  }

  /**
   * Companies deleteMany
   */
  export type CompaniesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompaniesWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Companies.admins
   */
  export type Companies$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    where?: EmployeesWhereInput
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    cursor?: EmployeesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * Companies without action
   */
  export type CompaniesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
  }


  /**
   * Model Assets
   */

  export type AggregateAssets = {
    _count: AssetsCountAggregateOutputType | null
    _avg: AssetsAvgAggregateOutputType | null
    _sum: AssetsSumAggregateOutputType | null
    _min: AssetsMinAggregateOutputType | null
    _max: AssetsMaxAggregateOutputType | null
  }

  export type AssetsAvgAggregateOutputType = {
    quantity: number | null
    unit_value: number | null
    total_value: number | null
    income_generated: number | null
  }

  export type AssetsSumAggregateOutputType = {
    quantity: number | null
    unit_value: number | null
    total_value: number | null
    income_generated: number | null
  }

  export type AssetsMinAggregateOutputType = {
    asset_id: string | null
    asset_type_id: string | null
    description: string | null
    region: string | null
    quantity: number | null
    unit_of_measurement: string | null
    unit_value: number | null
    total_value: number | null
    income_generated: number | null
    valuation_method: string | null
    valuation_date: Date | null
    source_platform: string | null
    created_by: string | null
    created_date: Date | null
    modified_by: string | null
    modified_date: Date | null
  }

  export type AssetsMaxAggregateOutputType = {
    asset_id: string | null
    asset_type_id: string | null
    description: string | null
    region: string | null
    quantity: number | null
    unit_of_measurement: string | null
    unit_value: number | null
    total_value: number | null
    income_generated: number | null
    valuation_method: string | null
    valuation_date: Date | null
    source_platform: string | null
    created_by: string | null
    created_date: Date | null
    modified_by: string | null
    modified_date: Date | null
  }

  export type AssetsCountAggregateOutputType = {
    asset_id: number
    asset_type_id: number
    description: number
    region: number
    quantity: number
    unit_of_measurement: number
    unit_value: number
    total_value: number
    income_generated: number
    valuation_method: number
    valuation_date: number
    source_platform: number
    created_by: number
    created_date: number
    modified_by: number
    modified_date: number
    _all: number
  }


  export type AssetsAvgAggregateInputType = {
    quantity?: true
    unit_value?: true
    total_value?: true
    income_generated?: true
  }

  export type AssetsSumAggregateInputType = {
    quantity?: true
    unit_value?: true
    total_value?: true
    income_generated?: true
  }

  export type AssetsMinAggregateInputType = {
    asset_id?: true
    asset_type_id?: true
    description?: true
    region?: true
    quantity?: true
    unit_of_measurement?: true
    unit_value?: true
    total_value?: true
    income_generated?: true
    valuation_method?: true
    valuation_date?: true
    source_platform?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
  }

  export type AssetsMaxAggregateInputType = {
    asset_id?: true
    asset_type_id?: true
    description?: true
    region?: true
    quantity?: true
    unit_of_measurement?: true
    unit_value?: true
    total_value?: true
    income_generated?: true
    valuation_method?: true
    valuation_date?: true
    source_platform?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
  }

  export type AssetsCountAggregateInputType = {
    asset_id?: true
    asset_type_id?: true
    description?: true
    region?: true
    quantity?: true
    unit_of_measurement?: true
    unit_value?: true
    total_value?: true
    income_generated?: true
    valuation_method?: true
    valuation_date?: true
    source_platform?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
    _all?: true
  }

  export type AssetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to aggregate.
     */
    where?: AssetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetsOrderByWithRelationInput | AssetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetsMaxAggregateInputType
  }

  export type GetAssetsAggregateType<T extends AssetsAggregateArgs> = {
        [P in keyof T & keyof AggregateAssets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssets[P]>
      : GetScalarType<T[P], AggregateAssets[P]>
  }




  export type AssetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetsWhereInput
    orderBy?: AssetsOrderByWithAggregationInput | AssetsOrderByWithAggregationInput[]
    by: AssetsScalarFieldEnum[] | AssetsScalarFieldEnum
    having?: AssetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetsCountAggregateInputType | true
    _avg?: AssetsAvgAggregateInputType
    _sum?: AssetsSumAggregateInputType
    _min?: AssetsMinAggregateInputType
    _max?: AssetsMaxAggregateInputType
  }

  export type AssetsGroupByOutputType = {
    asset_id: string
    asset_type_id: string
    description: string | null
    region: string | null
    quantity: number | null
    unit_of_measurement: string | null
    unit_value: number | null
    total_value: number | null
    income_generated: number | null
    valuation_method: string
    valuation_date: Date
    source_platform: string | null
    created_by: string | null
    created_date: Date
    modified_by: string | null
    modified_date: Date
    _count: AssetsCountAggregateOutputType | null
    _avg: AssetsAvgAggregateOutputType | null
    _sum: AssetsSumAggregateOutputType | null
    _min: AssetsMinAggregateOutputType | null
    _max: AssetsMaxAggregateOutputType | null
  }

  type GetAssetsGroupByPayload<T extends AssetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetsGroupByOutputType[P]>
            : GetScalarType<T[P], AssetsGroupByOutputType[P]>
        }
      >
    >


  export type AssetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    asset_id?: boolean
    asset_type_id?: boolean
    description?: boolean
    region?: boolean
    quantity?: boolean
    unit_of_measurement?: boolean
    unit_value?: boolean
    total_value?: boolean
    income_generated?: boolean
    valuation_method?: boolean
    valuation_date?: boolean
    source_platform?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
    assetType?: boolean | ConstantsDefaultArgs<ExtArgs>
    owners?: boolean | Assets$ownersArgs<ExtArgs>
    Views?: boolean | Assets$ViewsArgs<ExtArgs>
    Bookmarks?: boolean | Assets$BookmarksArgs<ExtArgs>
    _count?: boolean | AssetsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assets"]>

  export type AssetsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    asset_id?: boolean
    asset_type_id?: boolean
    description?: boolean
    region?: boolean
    quantity?: boolean
    unit_of_measurement?: boolean
    unit_value?: boolean
    total_value?: boolean
    income_generated?: boolean
    valuation_method?: boolean
    valuation_date?: boolean
    source_platform?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
    assetType?: boolean | ConstantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assets"]>

  export type AssetsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    asset_id?: boolean
    asset_type_id?: boolean
    description?: boolean
    region?: boolean
    quantity?: boolean
    unit_of_measurement?: boolean
    unit_value?: boolean
    total_value?: boolean
    income_generated?: boolean
    valuation_method?: boolean
    valuation_date?: boolean
    source_platform?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
    assetType?: boolean | ConstantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assets"]>

  export type AssetsSelectScalar = {
    asset_id?: boolean
    asset_type_id?: boolean
    description?: boolean
    region?: boolean
    quantity?: boolean
    unit_of_measurement?: boolean
    unit_value?: boolean
    total_value?: boolean
    income_generated?: boolean
    valuation_method?: boolean
    valuation_date?: boolean
    source_platform?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
  }

  export type AssetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"asset_id" | "asset_type_id" | "description" | "region" | "quantity" | "unit_of_measurement" | "unit_value" | "total_value" | "income_generated" | "valuation_method" | "valuation_date" | "source_platform" | "created_by" | "created_date" | "modified_by" | "modified_date", ExtArgs["result"]["assets"]>
  export type AssetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assetType?: boolean | ConstantsDefaultArgs<ExtArgs>
    owners?: boolean | Assets$ownersArgs<ExtArgs>
    Views?: boolean | Assets$ViewsArgs<ExtArgs>
    Bookmarks?: boolean | Assets$BookmarksArgs<ExtArgs>
    _count?: boolean | AssetsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssetsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assetType?: boolean | ConstantsDefaultArgs<ExtArgs>
  }
  export type AssetsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assetType?: boolean | ConstantsDefaultArgs<ExtArgs>
  }

  export type $AssetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assets"
    objects: {
      assetType: Prisma.$ConstantsPayload<ExtArgs>
      owners: Prisma.$CandidateAssetOwnershipPayload<ExtArgs>[]
      Views: Prisma.$ViewsPayload<ExtArgs>[]
      Bookmarks: Prisma.$BookmarksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      asset_id: string
      asset_type_id: string
      description: string | null
      region: string | null
      quantity: number | null
      unit_of_measurement: string | null
      unit_value: number | null
      total_value: number | null
      income_generated: number | null
      valuation_method: string
      valuation_date: Date
      source_platform: string | null
      created_by: string | null
      created_date: Date
      modified_by: string | null
      modified_date: Date
    }, ExtArgs["result"]["assets"]>
    composites: {}
  }

  type AssetsGetPayload<S extends boolean | null | undefined | AssetsDefaultArgs> = $Result.GetResult<Prisma.$AssetsPayload, S>

  type AssetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetsCountAggregateInputType | true
    }

  export interface AssetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assets'], meta: { name: 'Assets' } }
    /**
     * Find zero or one Assets that matches the filter.
     * @param {AssetsFindUniqueArgs} args - Arguments to find a Assets
     * @example
     * // Get one Assets
     * const assets = await prisma.assets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetsFindUniqueArgs>(args: SelectSubset<T, AssetsFindUniqueArgs<ExtArgs>>): Prisma__AssetsClient<$Result.GetResult<Prisma.$AssetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetsFindUniqueOrThrowArgs} args - Arguments to find a Assets
     * @example
     * // Get one Assets
     * const assets = await prisma.assets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetsFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetsClient<$Result.GetResult<Prisma.$AssetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetsFindFirstArgs} args - Arguments to find a Assets
     * @example
     * // Get one Assets
     * const assets = await prisma.assets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetsFindFirstArgs>(args?: SelectSubset<T, AssetsFindFirstArgs<ExtArgs>>): Prisma__AssetsClient<$Result.GetResult<Prisma.$AssetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetsFindFirstOrThrowArgs} args - Arguments to find a Assets
     * @example
     * // Get one Assets
     * const assets = await prisma.assets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetsFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetsClient<$Result.GetResult<Prisma.$AssetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.assets.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.assets.findMany({ take: 10 })
     * 
     * // Only select the `asset_id`
     * const assetsWithAsset_idOnly = await prisma.assets.findMany({ select: { asset_id: true } })
     * 
     */
    findMany<T extends AssetsFindManyArgs>(args?: SelectSubset<T, AssetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assets.
     * @param {AssetsCreateArgs} args - Arguments to create a Assets.
     * @example
     * // Create one Assets
     * const Assets = await prisma.assets.create({
     *   data: {
     *     // ... data to create a Assets
     *   }
     * })
     * 
     */
    create<T extends AssetsCreateArgs>(args: SelectSubset<T, AssetsCreateArgs<ExtArgs>>): Prisma__AssetsClient<$Result.GetResult<Prisma.$AssetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assets.
     * @param {AssetsCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const assets = await prisma.assets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetsCreateManyArgs>(args?: SelectSubset<T, AssetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assets and returns the data saved in the database.
     * @param {AssetsCreateManyAndReturnArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const assets = await prisma.assets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assets and only return the `asset_id`
     * const assetsWithAsset_idOnly = await prisma.assets.createManyAndReturn({
     *   select: { asset_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetsCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assets.
     * @param {AssetsDeleteArgs} args - Arguments to delete one Assets.
     * @example
     * // Delete one Assets
     * const Assets = await prisma.assets.delete({
     *   where: {
     *     // ... filter to delete one Assets
     *   }
     * })
     * 
     */
    delete<T extends AssetsDeleteArgs>(args: SelectSubset<T, AssetsDeleteArgs<ExtArgs>>): Prisma__AssetsClient<$Result.GetResult<Prisma.$AssetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assets.
     * @param {AssetsUpdateArgs} args - Arguments to update one Assets.
     * @example
     * // Update one Assets
     * const assets = await prisma.assets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetsUpdateArgs>(args: SelectSubset<T, AssetsUpdateArgs<ExtArgs>>): Prisma__AssetsClient<$Result.GetResult<Prisma.$AssetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assets.
     * @param {AssetsDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.assets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetsDeleteManyArgs>(args?: SelectSubset<T, AssetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const assets = await prisma.assets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetsUpdateManyArgs>(args: SelectSubset<T, AssetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets and returns the data updated in the database.
     * @param {AssetsUpdateManyAndReturnArgs} args - Arguments to update many Assets.
     * @example
     * // Update many Assets
     * const assets = await prisma.assets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assets and only return the `asset_id`
     * const assetsWithAsset_idOnly = await prisma.assets.updateManyAndReturn({
     *   select: { asset_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssetsUpdateManyAndReturnArgs>(args: SelectSubset<T, AssetsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assets.
     * @param {AssetsUpsertArgs} args - Arguments to update or create a Assets.
     * @example
     * // Update or create a Assets
     * const assets = await prisma.assets.upsert({
     *   create: {
     *     // ... data to create a Assets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assets we want to update
     *   }
     * })
     */
    upsert<T extends AssetsUpsertArgs>(args: SelectSubset<T, AssetsUpsertArgs<ExtArgs>>): Prisma__AssetsClient<$Result.GetResult<Prisma.$AssetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetsCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.assets.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetsCountArgs>(
      args?: Subset<T, AssetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetsAggregateArgs>(args: Subset<T, AssetsAggregateArgs>): Prisma.PrismaPromise<GetAssetsAggregateType<T>>

    /**
     * Group by Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetsGroupByArgs['orderBy'] }
        : { orderBy?: AssetsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assets model
   */
  readonly fields: AssetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assetType<T extends ConstantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConstantsDefaultArgs<ExtArgs>>): Prisma__ConstantsClient<$Result.GetResult<Prisma.$ConstantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owners<T extends Assets$ownersArgs<ExtArgs> = {}>(args?: Subset<T, Assets$ownersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateAssetOwnershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Views<T extends Assets$ViewsArgs<ExtArgs> = {}>(args?: Subset<T, Assets$ViewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Bookmarks<T extends Assets$BookmarksArgs<ExtArgs> = {}>(args?: Subset<T, Assets$BookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assets model
   */
  interface AssetsFieldRefs {
    readonly asset_id: FieldRef<"Assets", 'String'>
    readonly asset_type_id: FieldRef<"Assets", 'String'>
    readonly description: FieldRef<"Assets", 'String'>
    readonly region: FieldRef<"Assets", 'String'>
    readonly quantity: FieldRef<"Assets", 'Float'>
    readonly unit_of_measurement: FieldRef<"Assets", 'String'>
    readonly unit_value: FieldRef<"Assets", 'Float'>
    readonly total_value: FieldRef<"Assets", 'Float'>
    readonly income_generated: FieldRef<"Assets", 'Float'>
    readonly valuation_method: FieldRef<"Assets", 'String'>
    readonly valuation_date: FieldRef<"Assets", 'DateTime'>
    readonly source_platform: FieldRef<"Assets", 'String'>
    readonly created_by: FieldRef<"Assets", 'String'>
    readonly created_date: FieldRef<"Assets", 'DateTime'>
    readonly modified_by: FieldRef<"Assets", 'String'>
    readonly modified_date: FieldRef<"Assets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assets findUnique
   */
  export type AssetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assets
     */
    select?: AssetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assets
     */
    omit?: AssetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetsInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where: AssetsWhereUniqueInput
  }

  /**
   * Assets findUniqueOrThrow
   */
  export type AssetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assets
     */
    select?: AssetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assets
     */
    omit?: AssetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetsInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where: AssetsWhereUniqueInput
  }

  /**
   * Assets findFirst
   */
  export type AssetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assets
     */
    select?: AssetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assets
     */
    omit?: AssetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetsInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetsOrderByWithRelationInput | AssetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetsScalarFieldEnum | AssetsScalarFieldEnum[]
  }

  /**
   * Assets findFirstOrThrow
   */
  export type AssetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assets
     */
    select?: AssetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assets
     */
    omit?: AssetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetsInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetsOrderByWithRelationInput | AssetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetsScalarFieldEnum | AssetsScalarFieldEnum[]
  }

  /**
   * Assets findMany
   */
  export type AssetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assets
     */
    select?: AssetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assets
     */
    omit?: AssetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetsInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetsOrderByWithRelationInput | AssetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    distinct?: AssetsScalarFieldEnum | AssetsScalarFieldEnum[]
  }

  /**
   * Assets create
   */
  export type AssetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assets
     */
    select?: AssetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assets
     */
    omit?: AssetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetsInclude<ExtArgs> | null
    /**
     * The data needed to create a Assets.
     */
    data: XOR<AssetsCreateInput, AssetsUncheckedCreateInput>
  }

  /**
   * Assets createMany
   */
  export type AssetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetsCreateManyInput | AssetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assets createManyAndReturn
   */
  export type AssetsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assets
     */
    select?: AssetsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assets
     */
    omit?: AssetsOmit<ExtArgs> | null
    /**
     * The data used to create many Assets.
     */
    data: AssetsCreateManyInput | AssetsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assets update
   */
  export type AssetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assets
     */
    select?: AssetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assets
     */
    omit?: AssetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetsInclude<ExtArgs> | null
    /**
     * The data needed to update a Assets.
     */
    data: XOR<AssetsUpdateInput, AssetsUncheckedUpdateInput>
    /**
     * Choose, which Assets to update.
     */
    where: AssetsWhereUniqueInput
  }

  /**
   * Assets updateMany
   */
  export type AssetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetsUpdateManyMutationInput, AssetsUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetsWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
  }

  /**
   * Assets updateManyAndReturn
   */
  export type AssetsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assets
     */
    select?: AssetsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assets
     */
    omit?: AssetsOmit<ExtArgs> | null
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetsUpdateManyMutationInput, AssetsUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetsWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assets upsert
   */
  export type AssetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assets
     */
    select?: AssetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assets
     */
    omit?: AssetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetsInclude<ExtArgs> | null
    /**
     * The filter to search for the Assets to update in case it exists.
     */
    where: AssetsWhereUniqueInput
    /**
     * In case the Assets found by the `where` argument doesn't exist, create a new Assets with this data.
     */
    create: XOR<AssetsCreateInput, AssetsUncheckedCreateInput>
    /**
     * In case the Assets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetsUpdateInput, AssetsUncheckedUpdateInput>
  }

  /**
   * Assets delete
   */
  export type AssetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assets
     */
    select?: AssetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assets
     */
    omit?: AssetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetsInclude<ExtArgs> | null
    /**
     * Filter which Assets to delete.
     */
    where: AssetsWhereUniqueInput
  }

  /**
   * Assets deleteMany
   */
  export type AssetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetsWhereInput
    /**
     * Limit how many Assets to delete.
     */
    limit?: number
  }

  /**
   * Assets.owners
   */
  export type Assets$ownersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAssetOwnership
     */
    select?: CandidateAssetOwnershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAssetOwnership
     */
    omit?: CandidateAssetOwnershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateAssetOwnershipInclude<ExtArgs> | null
    where?: CandidateAssetOwnershipWhereInput
    orderBy?: CandidateAssetOwnershipOrderByWithRelationInput | CandidateAssetOwnershipOrderByWithRelationInput[]
    cursor?: CandidateAssetOwnershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateAssetOwnershipScalarFieldEnum | CandidateAssetOwnershipScalarFieldEnum[]
  }

  /**
   * Assets.Views
   */
  export type Assets$ViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    where?: ViewsWhereInput
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    cursor?: ViewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Assets.Bookmarks
   */
  export type Assets$BookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    where?: BookmarksWhereInput
    orderBy?: BookmarksOrderByWithRelationInput | BookmarksOrderByWithRelationInput[]
    cursor?: BookmarksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarksScalarFieldEnum | BookmarksScalarFieldEnum[]
  }

  /**
   * Assets without action
   */
  export type AssetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assets
     */
    select?: AssetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assets
     */
    omit?: AssetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetsInclude<ExtArgs> | null
  }


  /**
   * Model CandidateAssetOwnership
   */

  export type AggregateCandidateAssetOwnership = {
    _count: CandidateAssetOwnershipCountAggregateOutputType | null
    _avg: CandidateAssetOwnershipAvgAggregateOutputType | null
    _sum: CandidateAssetOwnershipSumAggregateOutputType | null
    _min: CandidateAssetOwnershipMinAggregateOutputType | null
    _max: CandidateAssetOwnershipMaxAggregateOutputType | null
  }

  export type CandidateAssetOwnershipAvgAggregateOutputType = {
    ownership_percentage: number | null
  }

  export type CandidateAssetOwnershipSumAggregateOutputType = {
    ownership_percentage: number | null
  }

  export type CandidateAssetOwnershipMinAggregateOutputType = {
    id: string | null
    asset_id: string | null
    candidate_id: string | null
    ownership_percentage: number | null
  }

  export type CandidateAssetOwnershipMaxAggregateOutputType = {
    id: string | null
    asset_id: string | null
    candidate_id: string | null
    ownership_percentage: number | null
  }

  export type CandidateAssetOwnershipCountAggregateOutputType = {
    id: number
    asset_id: number
    candidate_id: number
    ownership_percentage: number
    _all: number
  }


  export type CandidateAssetOwnershipAvgAggregateInputType = {
    ownership_percentage?: true
  }

  export type CandidateAssetOwnershipSumAggregateInputType = {
    ownership_percentage?: true
  }

  export type CandidateAssetOwnershipMinAggregateInputType = {
    id?: true
    asset_id?: true
    candidate_id?: true
    ownership_percentage?: true
  }

  export type CandidateAssetOwnershipMaxAggregateInputType = {
    id?: true
    asset_id?: true
    candidate_id?: true
    ownership_percentage?: true
  }

  export type CandidateAssetOwnershipCountAggregateInputType = {
    id?: true
    asset_id?: true
    candidate_id?: true
    ownership_percentage?: true
    _all?: true
  }

  export type CandidateAssetOwnershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateAssetOwnership to aggregate.
     */
    where?: CandidateAssetOwnershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateAssetOwnerships to fetch.
     */
    orderBy?: CandidateAssetOwnershipOrderByWithRelationInput | CandidateAssetOwnershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateAssetOwnershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateAssetOwnerships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateAssetOwnerships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CandidateAssetOwnerships
    **/
    _count?: true | CandidateAssetOwnershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidateAssetOwnershipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidateAssetOwnershipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateAssetOwnershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateAssetOwnershipMaxAggregateInputType
  }

  export type GetCandidateAssetOwnershipAggregateType<T extends CandidateAssetOwnershipAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidateAssetOwnership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidateAssetOwnership[P]>
      : GetScalarType<T[P], AggregateCandidateAssetOwnership[P]>
  }




  export type CandidateAssetOwnershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateAssetOwnershipWhereInput
    orderBy?: CandidateAssetOwnershipOrderByWithAggregationInput | CandidateAssetOwnershipOrderByWithAggregationInput[]
    by: CandidateAssetOwnershipScalarFieldEnum[] | CandidateAssetOwnershipScalarFieldEnum
    having?: CandidateAssetOwnershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateAssetOwnershipCountAggregateInputType | true
    _avg?: CandidateAssetOwnershipAvgAggregateInputType
    _sum?: CandidateAssetOwnershipSumAggregateInputType
    _min?: CandidateAssetOwnershipMinAggregateInputType
    _max?: CandidateAssetOwnershipMaxAggregateInputType
  }

  export type CandidateAssetOwnershipGroupByOutputType = {
    id: string
    asset_id: string
    candidate_id: string
    ownership_percentage: number
    _count: CandidateAssetOwnershipCountAggregateOutputType | null
    _avg: CandidateAssetOwnershipAvgAggregateOutputType | null
    _sum: CandidateAssetOwnershipSumAggregateOutputType | null
    _min: CandidateAssetOwnershipMinAggregateOutputType | null
    _max: CandidateAssetOwnershipMaxAggregateOutputType | null
  }

  type GetCandidateAssetOwnershipGroupByPayload<T extends CandidateAssetOwnershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateAssetOwnershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateAssetOwnershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateAssetOwnershipGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateAssetOwnershipGroupByOutputType[P]>
        }
      >
    >


  export type CandidateAssetOwnershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset_id?: boolean
    candidate_id?: boolean
    ownership_percentage?: boolean
    asset?: boolean | AssetsDefaultArgs<ExtArgs>
    candidate?: boolean | CandidatesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateAssetOwnership"]>

  export type CandidateAssetOwnershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset_id?: boolean
    candidate_id?: boolean
    ownership_percentage?: boolean
    asset?: boolean | AssetsDefaultArgs<ExtArgs>
    candidate?: boolean | CandidatesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateAssetOwnership"]>

  export type CandidateAssetOwnershipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset_id?: boolean
    candidate_id?: boolean
    ownership_percentage?: boolean
    asset?: boolean | AssetsDefaultArgs<ExtArgs>
    candidate?: boolean | CandidatesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateAssetOwnership"]>

  export type CandidateAssetOwnershipSelectScalar = {
    id?: boolean
    asset_id?: boolean
    candidate_id?: boolean
    ownership_percentage?: boolean
  }

  export type CandidateAssetOwnershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "asset_id" | "candidate_id" | "ownership_percentage", ExtArgs["result"]["candidateAssetOwnership"]>
  export type CandidateAssetOwnershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetsDefaultArgs<ExtArgs>
    candidate?: boolean | CandidatesDefaultArgs<ExtArgs>
  }
  export type CandidateAssetOwnershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetsDefaultArgs<ExtArgs>
    candidate?: boolean | CandidatesDefaultArgs<ExtArgs>
  }
  export type CandidateAssetOwnershipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetsDefaultArgs<ExtArgs>
    candidate?: boolean | CandidatesDefaultArgs<ExtArgs>
  }

  export type $CandidateAssetOwnershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CandidateAssetOwnership"
    objects: {
      asset: Prisma.$AssetsPayload<ExtArgs>
      candidate: Prisma.$CandidatesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      asset_id: string
      candidate_id: string
      ownership_percentage: number
    }, ExtArgs["result"]["candidateAssetOwnership"]>
    composites: {}
  }

  type CandidateAssetOwnershipGetPayload<S extends boolean | null | undefined | CandidateAssetOwnershipDefaultArgs> = $Result.GetResult<Prisma.$CandidateAssetOwnershipPayload, S>

  type CandidateAssetOwnershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateAssetOwnershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateAssetOwnershipCountAggregateInputType | true
    }

  export interface CandidateAssetOwnershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CandidateAssetOwnership'], meta: { name: 'CandidateAssetOwnership' } }
    /**
     * Find zero or one CandidateAssetOwnership that matches the filter.
     * @param {CandidateAssetOwnershipFindUniqueArgs} args - Arguments to find a CandidateAssetOwnership
     * @example
     * // Get one CandidateAssetOwnership
     * const candidateAssetOwnership = await prisma.candidateAssetOwnership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateAssetOwnershipFindUniqueArgs>(args: SelectSubset<T, CandidateAssetOwnershipFindUniqueArgs<ExtArgs>>): Prisma__CandidateAssetOwnershipClient<$Result.GetResult<Prisma.$CandidateAssetOwnershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CandidateAssetOwnership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateAssetOwnershipFindUniqueOrThrowArgs} args - Arguments to find a CandidateAssetOwnership
     * @example
     * // Get one CandidateAssetOwnership
     * const candidateAssetOwnership = await prisma.candidateAssetOwnership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateAssetOwnershipFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateAssetOwnershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateAssetOwnershipClient<$Result.GetResult<Prisma.$CandidateAssetOwnershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateAssetOwnership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAssetOwnershipFindFirstArgs} args - Arguments to find a CandidateAssetOwnership
     * @example
     * // Get one CandidateAssetOwnership
     * const candidateAssetOwnership = await prisma.candidateAssetOwnership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateAssetOwnershipFindFirstArgs>(args?: SelectSubset<T, CandidateAssetOwnershipFindFirstArgs<ExtArgs>>): Prisma__CandidateAssetOwnershipClient<$Result.GetResult<Prisma.$CandidateAssetOwnershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateAssetOwnership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAssetOwnershipFindFirstOrThrowArgs} args - Arguments to find a CandidateAssetOwnership
     * @example
     * // Get one CandidateAssetOwnership
     * const candidateAssetOwnership = await prisma.candidateAssetOwnership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateAssetOwnershipFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateAssetOwnershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateAssetOwnershipClient<$Result.GetResult<Prisma.$CandidateAssetOwnershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CandidateAssetOwnerships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAssetOwnershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CandidateAssetOwnerships
     * const candidateAssetOwnerships = await prisma.candidateAssetOwnership.findMany()
     * 
     * // Get first 10 CandidateAssetOwnerships
     * const candidateAssetOwnerships = await prisma.candidateAssetOwnership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidateAssetOwnershipWithIdOnly = await prisma.candidateAssetOwnership.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidateAssetOwnershipFindManyArgs>(args?: SelectSubset<T, CandidateAssetOwnershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateAssetOwnershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CandidateAssetOwnership.
     * @param {CandidateAssetOwnershipCreateArgs} args - Arguments to create a CandidateAssetOwnership.
     * @example
     * // Create one CandidateAssetOwnership
     * const CandidateAssetOwnership = await prisma.candidateAssetOwnership.create({
     *   data: {
     *     // ... data to create a CandidateAssetOwnership
     *   }
     * })
     * 
     */
    create<T extends CandidateAssetOwnershipCreateArgs>(args: SelectSubset<T, CandidateAssetOwnershipCreateArgs<ExtArgs>>): Prisma__CandidateAssetOwnershipClient<$Result.GetResult<Prisma.$CandidateAssetOwnershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CandidateAssetOwnerships.
     * @param {CandidateAssetOwnershipCreateManyArgs} args - Arguments to create many CandidateAssetOwnerships.
     * @example
     * // Create many CandidateAssetOwnerships
     * const candidateAssetOwnership = await prisma.candidateAssetOwnership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateAssetOwnershipCreateManyArgs>(args?: SelectSubset<T, CandidateAssetOwnershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CandidateAssetOwnerships and returns the data saved in the database.
     * @param {CandidateAssetOwnershipCreateManyAndReturnArgs} args - Arguments to create many CandidateAssetOwnerships.
     * @example
     * // Create many CandidateAssetOwnerships
     * const candidateAssetOwnership = await prisma.candidateAssetOwnership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CandidateAssetOwnerships and only return the `id`
     * const candidateAssetOwnershipWithIdOnly = await prisma.candidateAssetOwnership.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateAssetOwnershipCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateAssetOwnershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateAssetOwnershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CandidateAssetOwnership.
     * @param {CandidateAssetOwnershipDeleteArgs} args - Arguments to delete one CandidateAssetOwnership.
     * @example
     * // Delete one CandidateAssetOwnership
     * const CandidateAssetOwnership = await prisma.candidateAssetOwnership.delete({
     *   where: {
     *     // ... filter to delete one CandidateAssetOwnership
     *   }
     * })
     * 
     */
    delete<T extends CandidateAssetOwnershipDeleteArgs>(args: SelectSubset<T, CandidateAssetOwnershipDeleteArgs<ExtArgs>>): Prisma__CandidateAssetOwnershipClient<$Result.GetResult<Prisma.$CandidateAssetOwnershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CandidateAssetOwnership.
     * @param {CandidateAssetOwnershipUpdateArgs} args - Arguments to update one CandidateAssetOwnership.
     * @example
     * // Update one CandidateAssetOwnership
     * const candidateAssetOwnership = await prisma.candidateAssetOwnership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateAssetOwnershipUpdateArgs>(args: SelectSubset<T, CandidateAssetOwnershipUpdateArgs<ExtArgs>>): Prisma__CandidateAssetOwnershipClient<$Result.GetResult<Prisma.$CandidateAssetOwnershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CandidateAssetOwnerships.
     * @param {CandidateAssetOwnershipDeleteManyArgs} args - Arguments to filter CandidateAssetOwnerships to delete.
     * @example
     * // Delete a few CandidateAssetOwnerships
     * const { count } = await prisma.candidateAssetOwnership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateAssetOwnershipDeleteManyArgs>(args?: SelectSubset<T, CandidateAssetOwnershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateAssetOwnerships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAssetOwnershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CandidateAssetOwnerships
     * const candidateAssetOwnership = await prisma.candidateAssetOwnership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateAssetOwnershipUpdateManyArgs>(args: SelectSubset<T, CandidateAssetOwnershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateAssetOwnerships and returns the data updated in the database.
     * @param {CandidateAssetOwnershipUpdateManyAndReturnArgs} args - Arguments to update many CandidateAssetOwnerships.
     * @example
     * // Update many CandidateAssetOwnerships
     * const candidateAssetOwnership = await prisma.candidateAssetOwnership.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CandidateAssetOwnerships and only return the `id`
     * const candidateAssetOwnershipWithIdOnly = await prisma.candidateAssetOwnership.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidateAssetOwnershipUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateAssetOwnershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateAssetOwnershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CandidateAssetOwnership.
     * @param {CandidateAssetOwnershipUpsertArgs} args - Arguments to update or create a CandidateAssetOwnership.
     * @example
     * // Update or create a CandidateAssetOwnership
     * const candidateAssetOwnership = await prisma.candidateAssetOwnership.upsert({
     *   create: {
     *     // ... data to create a CandidateAssetOwnership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CandidateAssetOwnership we want to update
     *   }
     * })
     */
    upsert<T extends CandidateAssetOwnershipUpsertArgs>(args: SelectSubset<T, CandidateAssetOwnershipUpsertArgs<ExtArgs>>): Prisma__CandidateAssetOwnershipClient<$Result.GetResult<Prisma.$CandidateAssetOwnershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CandidateAssetOwnerships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAssetOwnershipCountArgs} args - Arguments to filter CandidateAssetOwnerships to count.
     * @example
     * // Count the number of CandidateAssetOwnerships
     * const count = await prisma.candidateAssetOwnership.count({
     *   where: {
     *     // ... the filter for the CandidateAssetOwnerships we want to count
     *   }
     * })
    **/
    count<T extends CandidateAssetOwnershipCountArgs>(
      args?: Subset<T, CandidateAssetOwnershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateAssetOwnershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CandidateAssetOwnership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAssetOwnershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidateAssetOwnershipAggregateArgs>(args: Subset<T, CandidateAssetOwnershipAggregateArgs>): Prisma.PrismaPromise<GetCandidateAssetOwnershipAggregateType<T>>

    /**
     * Group by CandidateAssetOwnership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAssetOwnershipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidateAssetOwnershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateAssetOwnershipGroupByArgs['orderBy'] }
        : { orderBy?: CandidateAssetOwnershipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidateAssetOwnershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateAssetOwnershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CandidateAssetOwnership model
   */
  readonly fields: CandidateAssetOwnershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CandidateAssetOwnership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateAssetOwnershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends AssetsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetsDefaultArgs<ExtArgs>>): Prisma__AssetsClient<$Result.GetResult<Prisma.$AssetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidate<T extends CandidatesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidatesDefaultArgs<ExtArgs>>): Prisma__CandidatesClient<$Result.GetResult<Prisma.$CandidatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CandidateAssetOwnership model
   */
  interface CandidateAssetOwnershipFieldRefs {
    readonly id: FieldRef<"CandidateAssetOwnership", 'String'>
    readonly asset_id: FieldRef<"CandidateAssetOwnership", 'String'>
    readonly candidate_id: FieldRef<"CandidateAssetOwnership", 'String'>
    readonly ownership_percentage: FieldRef<"CandidateAssetOwnership", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * CandidateAssetOwnership findUnique
   */
  export type CandidateAssetOwnershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAssetOwnership
     */
    select?: CandidateAssetOwnershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAssetOwnership
     */
    omit?: CandidateAssetOwnershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateAssetOwnershipInclude<ExtArgs> | null
    /**
     * Filter, which CandidateAssetOwnership to fetch.
     */
    where: CandidateAssetOwnershipWhereUniqueInput
  }

  /**
   * CandidateAssetOwnership findUniqueOrThrow
   */
  export type CandidateAssetOwnershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAssetOwnership
     */
    select?: CandidateAssetOwnershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAssetOwnership
     */
    omit?: CandidateAssetOwnershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateAssetOwnershipInclude<ExtArgs> | null
    /**
     * Filter, which CandidateAssetOwnership to fetch.
     */
    where: CandidateAssetOwnershipWhereUniqueInput
  }

  /**
   * CandidateAssetOwnership findFirst
   */
  export type CandidateAssetOwnershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAssetOwnership
     */
    select?: CandidateAssetOwnershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAssetOwnership
     */
    omit?: CandidateAssetOwnershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateAssetOwnershipInclude<ExtArgs> | null
    /**
     * Filter, which CandidateAssetOwnership to fetch.
     */
    where?: CandidateAssetOwnershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateAssetOwnerships to fetch.
     */
    orderBy?: CandidateAssetOwnershipOrderByWithRelationInput | CandidateAssetOwnershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateAssetOwnerships.
     */
    cursor?: CandidateAssetOwnershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateAssetOwnerships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateAssetOwnerships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateAssetOwnerships.
     */
    distinct?: CandidateAssetOwnershipScalarFieldEnum | CandidateAssetOwnershipScalarFieldEnum[]
  }

  /**
   * CandidateAssetOwnership findFirstOrThrow
   */
  export type CandidateAssetOwnershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAssetOwnership
     */
    select?: CandidateAssetOwnershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAssetOwnership
     */
    omit?: CandidateAssetOwnershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateAssetOwnershipInclude<ExtArgs> | null
    /**
     * Filter, which CandidateAssetOwnership to fetch.
     */
    where?: CandidateAssetOwnershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateAssetOwnerships to fetch.
     */
    orderBy?: CandidateAssetOwnershipOrderByWithRelationInput | CandidateAssetOwnershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateAssetOwnerships.
     */
    cursor?: CandidateAssetOwnershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateAssetOwnerships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateAssetOwnerships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateAssetOwnerships.
     */
    distinct?: CandidateAssetOwnershipScalarFieldEnum | CandidateAssetOwnershipScalarFieldEnum[]
  }

  /**
   * CandidateAssetOwnership findMany
   */
  export type CandidateAssetOwnershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAssetOwnership
     */
    select?: CandidateAssetOwnershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAssetOwnership
     */
    omit?: CandidateAssetOwnershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateAssetOwnershipInclude<ExtArgs> | null
    /**
     * Filter, which CandidateAssetOwnerships to fetch.
     */
    where?: CandidateAssetOwnershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateAssetOwnerships to fetch.
     */
    orderBy?: CandidateAssetOwnershipOrderByWithRelationInput | CandidateAssetOwnershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CandidateAssetOwnerships.
     */
    cursor?: CandidateAssetOwnershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateAssetOwnerships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateAssetOwnerships.
     */
    skip?: number
    distinct?: CandidateAssetOwnershipScalarFieldEnum | CandidateAssetOwnershipScalarFieldEnum[]
  }

  /**
   * CandidateAssetOwnership create
   */
  export type CandidateAssetOwnershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAssetOwnership
     */
    select?: CandidateAssetOwnershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAssetOwnership
     */
    omit?: CandidateAssetOwnershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateAssetOwnershipInclude<ExtArgs> | null
    /**
     * The data needed to create a CandidateAssetOwnership.
     */
    data: XOR<CandidateAssetOwnershipCreateInput, CandidateAssetOwnershipUncheckedCreateInput>
  }

  /**
   * CandidateAssetOwnership createMany
   */
  export type CandidateAssetOwnershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CandidateAssetOwnerships.
     */
    data: CandidateAssetOwnershipCreateManyInput | CandidateAssetOwnershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CandidateAssetOwnership createManyAndReturn
   */
  export type CandidateAssetOwnershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAssetOwnership
     */
    select?: CandidateAssetOwnershipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAssetOwnership
     */
    omit?: CandidateAssetOwnershipOmit<ExtArgs> | null
    /**
     * The data used to create many CandidateAssetOwnerships.
     */
    data: CandidateAssetOwnershipCreateManyInput | CandidateAssetOwnershipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateAssetOwnershipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateAssetOwnership update
   */
  export type CandidateAssetOwnershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAssetOwnership
     */
    select?: CandidateAssetOwnershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAssetOwnership
     */
    omit?: CandidateAssetOwnershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateAssetOwnershipInclude<ExtArgs> | null
    /**
     * The data needed to update a CandidateAssetOwnership.
     */
    data: XOR<CandidateAssetOwnershipUpdateInput, CandidateAssetOwnershipUncheckedUpdateInput>
    /**
     * Choose, which CandidateAssetOwnership to update.
     */
    where: CandidateAssetOwnershipWhereUniqueInput
  }

  /**
   * CandidateAssetOwnership updateMany
   */
  export type CandidateAssetOwnershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CandidateAssetOwnerships.
     */
    data: XOR<CandidateAssetOwnershipUpdateManyMutationInput, CandidateAssetOwnershipUncheckedUpdateManyInput>
    /**
     * Filter which CandidateAssetOwnerships to update
     */
    where?: CandidateAssetOwnershipWhereInput
    /**
     * Limit how many CandidateAssetOwnerships to update.
     */
    limit?: number
  }

  /**
   * CandidateAssetOwnership updateManyAndReturn
   */
  export type CandidateAssetOwnershipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAssetOwnership
     */
    select?: CandidateAssetOwnershipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAssetOwnership
     */
    omit?: CandidateAssetOwnershipOmit<ExtArgs> | null
    /**
     * The data used to update CandidateAssetOwnerships.
     */
    data: XOR<CandidateAssetOwnershipUpdateManyMutationInput, CandidateAssetOwnershipUncheckedUpdateManyInput>
    /**
     * Filter which CandidateAssetOwnerships to update
     */
    where?: CandidateAssetOwnershipWhereInput
    /**
     * Limit how many CandidateAssetOwnerships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateAssetOwnershipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateAssetOwnership upsert
   */
  export type CandidateAssetOwnershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAssetOwnership
     */
    select?: CandidateAssetOwnershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAssetOwnership
     */
    omit?: CandidateAssetOwnershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateAssetOwnershipInclude<ExtArgs> | null
    /**
     * The filter to search for the CandidateAssetOwnership to update in case it exists.
     */
    where: CandidateAssetOwnershipWhereUniqueInput
    /**
     * In case the CandidateAssetOwnership found by the `where` argument doesn't exist, create a new CandidateAssetOwnership with this data.
     */
    create: XOR<CandidateAssetOwnershipCreateInput, CandidateAssetOwnershipUncheckedCreateInput>
    /**
     * In case the CandidateAssetOwnership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateAssetOwnershipUpdateInput, CandidateAssetOwnershipUncheckedUpdateInput>
  }

  /**
   * CandidateAssetOwnership delete
   */
  export type CandidateAssetOwnershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAssetOwnership
     */
    select?: CandidateAssetOwnershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAssetOwnership
     */
    omit?: CandidateAssetOwnershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateAssetOwnershipInclude<ExtArgs> | null
    /**
     * Filter which CandidateAssetOwnership to delete.
     */
    where: CandidateAssetOwnershipWhereUniqueInput
  }

  /**
   * CandidateAssetOwnership deleteMany
   */
  export type CandidateAssetOwnershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateAssetOwnerships to delete
     */
    where?: CandidateAssetOwnershipWhereInput
    /**
     * Limit how many CandidateAssetOwnerships to delete.
     */
    limit?: number
  }

  /**
   * CandidateAssetOwnership without action
   */
  export type CandidateAssetOwnershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAssetOwnership
     */
    select?: CandidateAssetOwnershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAssetOwnership
     */
    omit?: CandidateAssetOwnershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateAssetOwnershipInclude<ExtArgs> | null
  }


  /**
   * Model Candidates
   */

  export type AggregateCandidates = {
    _count: CandidatesCountAggregateOutputType | null
    _min: CandidatesMinAggregateOutputType | null
    _max: CandidatesMaxAggregateOutputType | null
  }

  export type CandidatesMinAggregateOutputType = {
    candidate_id: string | null
    name: string | null
    region: string | null
    phone_number: string | null
    email: string | null
    address: string | null
    dob: Date | null
    country_name: string | null
    created_by: string | null
    created_date: Date | null
    modified_by: string | null
    modified_date: Date | null
  }

  export type CandidatesMaxAggregateOutputType = {
    candidate_id: string | null
    name: string | null
    region: string | null
    phone_number: string | null
    email: string | null
    address: string | null
    dob: Date | null
    country_name: string | null
    created_by: string | null
    created_date: Date | null
    modified_by: string | null
    modified_date: Date | null
  }

  export type CandidatesCountAggregateOutputType = {
    candidate_id: number
    name: number
    region: number
    phone_number: number
    email: number
    address: number
    dob: number
    country_name: number
    created_by: number
    created_date: number
    modified_by: number
    modified_date: number
    _all: number
  }


  export type CandidatesMinAggregateInputType = {
    candidate_id?: true
    name?: true
    region?: true
    phone_number?: true
    email?: true
    address?: true
    dob?: true
    country_name?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
  }

  export type CandidatesMaxAggregateInputType = {
    candidate_id?: true
    name?: true
    region?: true
    phone_number?: true
    email?: true
    address?: true
    dob?: true
    country_name?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
  }

  export type CandidatesCountAggregateInputType = {
    candidate_id?: true
    name?: true
    region?: true
    phone_number?: true
    email?: true
    address?: true
    dob?: true
    country_name?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
    _all?: true
  }

  export type CandidatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidates to aggregate.
     */
    where?: CandidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidatesOrderByWithRelationInput | CandidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Candidates
    **/
    _count?: true | CandidatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidatesMaxAggregateInputType
  }

  export type GetCandidatesAggregateType<T extends CandidatesAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidates[P]>
      : GetScalarType<T[P], AggregateCandidates[P]>
  }




  export type CandidatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidatesWhereInput
    orderBy?: CandidatesOrderByWithAggregationInput | CandidatesOrderByWithAggregationInput[]
    by: CandidatesScalarFieldEnum[] | CandidatesScalarFieldEnum
    having?: CandidatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidatesCountAggregateInputType | true
    _min?: CandidatesMinAggregateInputType
    _max?: CandidatesMaxAggregateInputType
  }

  export type CandidatesGroupByOutputType = {
    candidate_id: string
    name: string
    region: string
    phone_number: string
    email: string
    address: string
    dob: Date
    country_name: string
    created_by: string | null
    created_date: Date
    modified_by: string | null
    modified_date: Date
    _count: CandidatesCountAggregateOutputType | null
    _min: CandidatesMinAggregateOutputType | null
    _max: CandidatesMaxAggregateOutputType | null
  }

  type GetCandidatesGroupByPayload<T extends CandidatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidatesGroupByOutputType[P]>
            : GetScalarType<T[P], CandidatesGroupByOutputType[P]>
        }
      >
    >


  export type CandidatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidate_id?: boolean
    name?: boolean
    region?: boolean
    phone_number?: boolean
    email?: boolean
    address?: boolean
    dob?: boolean
    country_name?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
    assets?: boolean | Candidates$assetsArgs<ExtArgs>
    _count?: boolean | CandidatesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidates"]>

  export type CandidatesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidate_id?: boolean
    name?: boolean
    region?: boolean
    phone_number?: boolean
    email?: boolean
    address?: boolean
    dob?: boolean
    country_name?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
  }, ExtArgs["result"]["candidates"]>

  export type CandidatesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidate_id?: boolean
    name?: boolean
    region?: boolean
    phone_number?: boolean
    email?: boolean
    address?: boolean
    dob?: boolean
    country_name?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
  }, ExtArgs["result"]["candidates"]>

  export type CandidatesSelectScalar = {
    candidate_id?: boolean
    name?: boolean
    region?: boolean
    phone_number?: boolean
    email?: boolean
    address?: boolean
    dob?: boolean
    country_name?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
  }

  export type CandidatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"candidate_id" | "name" | "region" | "phone_number" | "email" | "address" | "dob" | "country_name" | "created_by" | "created_date" | "modified_by" | "modified_date", ExtArgs["result"]["candidates"]>
  export type CandidatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | Candidates$assetsArgs<ExtArgs>
    _count?: boolean | CandidatesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CandidatesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CandidatesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CandidatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Candidates"
    objects: {
      assets: Prisma.$CandidateAssetOwnershipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      candidate_id: string
      name: string
      region: string
      phone_number: string
      email: string
      address: string
      dob: Date
      country_name: string
      created_by: string | null
      created_date: Date
      modified_by: string | null
      modified_date: Date
    }, ExtArgs["result"]["candidates"]>
    composites: {}
  }

  type CandidatesGetPayload<S extends boolean | null | undefined | CandidatesDefaultArgs> = $Result.GetResult<Prisma.$CandidatesPayload, S>

  type CandidatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidatesCountAggregateInputType | true
    }

  export interface CandidatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Candidates'], meta: { name: 'Candidates' } }
    /**
     * Find zero or one Candidates that matches the filter.
     * @param {CandidatesFindUniqueArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidatesFindUniqueArgs>(args: SelectSubset<T, CandidatesFindUniqueArgs<ExtArgs>>): Prisma__CandidatesClient<$Result.GetResult<Prisma.$CandidatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidatesFindUniqueOrThrowArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidatesFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidatesClient<$Result.GetResult<Prisma.$CandidatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatesFindFirstArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidatesFindFirstArgs>(args?: SelectSubset<T, CandidatesFindFirstArgs<ExtArgs>>): Prisma__CandidatesClient<$Result.GetResult<Prisma.$CandidatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatesFindFirstOrThrowArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidatesFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidatesClient<$Result.GetResult<Prisma.$CandidatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidates
     * const candidates = await prisma.candidates.findMany()
     * 
     * // Get first 10 Candidates
     * const candidates = await prisma.candidates.findMany({ take: 10 })
     * 
     * // Only select the `candidate_id`
     * const candidatesWithCandidate_idOnly = await prisma.candidates.findMany({ select: { candidate_id: true } })
     * 
     */
    findMany<T extends CandidatesFindManyArgs>(args?: SelectSubset<T, CandidatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidates.
     * @param {CandidatesCreateArgs} args - Arguments to create a Candidates.
     * @example
     * // Create one Candidates
     * const Candidates = await prisma.candidates.create({
     *   data: {
     *     // ... data to create a Candidates
     *   }
     * })
     * 
     */
    create<T extends CandidatesCreateArgs>(args: SelectSubset<T, CandidatesCreateArgs<ExtArgs>>): Prisma__CandidatesClient<$Result.GetResult<Prisma.$CandidatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidates.
     * @param {CandidatesCreateManyArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidates = await prisma.candidates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidatesCreateManyArgs>(args?: SelectSubset<T, CandidatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidates and returns the data saved in the database.
     * @param {CandidatesCreateManyAndReturnArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidates = await prisma.candidates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidates and only return the `candidate_id`
     * const candidatesWithCandidate_idOnly = await prisma.candidates.createManyAndReturn({
     *   select: { candidate_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidatesCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidates.
     * @param {CandidatesDeleteArgs} args - Arguments to delete one Candidates.
     * @example
     * // Delete one Candidates
     * const Candidates = await prisma.candidates.delete({
     *   where: {
     *     // ... filter to delete one Candidates
     *   }
     * })
     * 
     */
    delete<T extends CandidatesDeleteArgs>(args: SelectSubset<T, CandidatesDeleteArgs<ExtArgs>>): Prisma__CandidatesClient<$Result.GetResult<Prisma.$CandidatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidates.
     * @param {CandidatesUpdateArgs} args - Arguments to update one Candidates.
     * @example
     * // Update one Candidates
     * const candidates = await prisma.candidates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidatesUpdateArgs>(args: SelectSubset<T, CandidatesUpdateArgs<ExtArgs>>): Prisma__CandidatesClient<$Result.GetResult<Prisma.$CandidatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidates.
     * @param {CandidatesDeleteManyArgs} args - Arguments to filter Candidates to delete.
     * @example
     * // Delete a few Candidates
     * const { count } = await prisma.candidates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidatesDeleteManyArgs>(args?: SelectSubset<T, CandidatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidates
     * const candidates = await prisma.candidates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidatesUpdateManyArgs>(args: SelectSubset<T, CandidatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates and returns the data updated in the database.
     * @param {CandidatesUpdateManyAndReturnArgs} args - Arguments to update many Candidates.
     * @example
     * // Update many Candidates
     * const candidates = await prisma.candidates.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidates and only return the `candidate_id`
     * const candidatesWithCandidate_idOnly = await prisma.candidates.updateManyAndReturn({
     *   select: { candidate_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidatesUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidatesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidates.
     * @param {CandidatesUpsertArgs} args - Arguments to update or create a Candidates.
     * @example
     * // Update or create a Candidates
     * const candidates = await prisma.candidates.upsert({
     *   create: {
     *     // ... data to create a Candidates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidates we want to update
     *   }
     * })
     */
    upsert<T extends CandidatesUpsertArgs>(args: SelectSubset<T, CandidatesUpsertArgs<ExtArgs>>): Prisma__CandidatesClient<$Result.GetResult<Prisma.$CandidatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatesCountArgs} args - Arguments to filter Candidates to count.
     * @example
     * // Count the number of Candidates
     * const count = await prisma.candidates.count({
     *   where: {
     *     // ... the filter for the Candidates we want to count
     *   }
     * })
    **/
    count<T extends CandidatesCountArgs>(
      args?: Subset<T, CandidatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidatesAggregateArgs>(args: Subset<T, CandidatesAggregateArgs>): Prisma.PrismaPromise<GetCandidatesAggregateType<T>>

    /**
     * Group by Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidatesGroupByArgs['orderBy'] }
        : { orderBy?: CandidatesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Candidates model
   */
  readonly fields: CandidatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Candidates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assets<T extends Candidates$assetsArgs<ExtArgs> = {}>(args?: Subset<T, Candidates$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateAssetOwnershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Candidates model
   */
  interface CandidatesFieldRefs {
    readonly candidate_id: FieldRef<"Candidates", 'String'>
    readonly name: FieldRef<"Candidates", 'String'>
    readonly region: FieldRef<"Candidates", 'String'>
    readonly phone_number: FieldRef<"Candidates", 'String'>
    readonly email: FieldRef<"Candidates", 'String'>
    readonly address: FieldRef<"Candidates", 'String'>
    readonly dob: FieldRef<"Candidates", 'DateTime'>
    readonly country_name: FieldRef<"Candidates", 'String'>
    readonly created_by: FieldRef<"Candidates", 'String'>
    readonly created_date: FieldRef<"Candidates", 'DateTime'>
    readonly modified_by: FieldRef<"Candidates", 'String'>
    readonly modified_date: FieldRef<"Candidates", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Candidates findUnique
   */
  export type CandidatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidates
     */
    select?: CandidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidates
     */
    omit?: CandidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatesInclude<ExtArgs> | null
    /**
     * Filter, which Candidates to fetch.
     */
    where: CandidatesWhereUniqueInput
  }

  /**
   * Candidates findUniqueOrThrow
   */
  export type CandidatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidates
     */
    select?: CandidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidates
     */
    omit?: CandidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatesInclude<ExtArgs> | null
    /**
     * Filter, which Candidates to fetch.
     */
    where: CandidatesWhereUniqueInput
  }

  /**
   * Candidates findFirst
   */
  export type CandidatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidates
     */
    select?: CandidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidates
     */
    omit?: CandidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatesInclude<ExtArgs> | null
    /**
     * Filter, which Candidates to fetch.
     */
    where?: CandidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidatesOrderByWithRelationInput | CandidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidatesScalarFieldEnum | CandidatesScalarFieldEnum[]
  }

  /**
   * Candidates findFirstOrThrow
   */
  export type CandidatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidates
     */
    select?: CandidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidates
     */
    omit?: CandidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatesInclude<ExtArgs> | null
    /**
     * Filter, which Candidates to fetch.
     */
    where?: CandidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidatesOrderByWithRelationInput | CandidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidatesScalarFieldEnum | CandidatesScalarFieldEnum[]
  }

  /**
   * Candidates findMany
   */
  export type CandidatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidates
     */
    select?: CandidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidates
     */
    omit?: CandidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatesInclude<ExtArgs> | null
    /**
     * Filter, which Candidates to fetch.
     */
    where?: CandidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidatesOrderByWithRelationInput | CandidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Candidates.
     */
    cursor?: CandidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    distinct?: CandidatesScalarFieldEnum | CandidatesScalarFieldEnum[]
  }

  /**
   * Candidates create
   */
  export type CandidatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidates
     */
    select?: CandidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidates
     */
    omit?: CandidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatesInclude<ExtArgs> | null
    /**
     * The data needed to create a Candidates.
     */
    data: XOR<CandidatesCreateInput, CandidatesUncheckedCreateInput>
  }

  /**
   * Candidates createMany
   */
  export type CandidatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Candidates.
     */
    data: CandidatesCreateManyInput | CandidatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Candidates createManyAndReturn
   */
  export type CandidatesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidates
     */
    select?: CandidatesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidates
     */
    omit?: CandidatesOmit<ExtArgs> | null
    /**
     * The data used to create many Candidates.
     */
    data: CandidatesCreateManyInput | CandidatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Candidates update
   */
  export type CandidatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidates
     */
    select?: CandidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidates
     */
    omit?: CandidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatesInclude<ExtArgs> | null
    /**
     * The data needed to update a Candidates.
     */
    data: XOR<CandidatesUpdateInput, CandidatesUncheckedUpdateInput>
    /**
     * Choose, which Candidates to update.
     */
    where: CandidatesWhereUniqueInput
  }

  /**
   * Candidates updateMany
   */
  export type CandidatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidatesUpdateManyMutationInput, CandidatesUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidatesWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
  }

  /**
   * Candidates updateManyAndReturn
   */
  export type CandidatesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidates
     */
    select?: CandidatesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidates
     */
    omit?: CandidatesOmit<ExtArgs> | null
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidatesUpdateManyMutationInput, CandidatesUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidatesWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
  }

  /**
   * Candidates upsert
   */
  export type CandidatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidates
     */
    select?: CandidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidates
     */
    omit?: CandidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatesInclude<ExtArgs> | null
    /**
     * The filter to search for the Candidates to update in case it exists.
     */
    where: CandidatesWhereUniqueInput
    /**
     * In case the Candidates found by the `where` argument doesn't exist, create a new Candidates with this data.
     */
    create: XOR<CandidatesCreateInput, CandidatesUncheckedCreateInput>
    /**
     * In case the Candidates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidatesUpdateInput, CandidatesUncheckedUpdateInput>
  }

  /**
   * Candidates delete
   */
  export type CandidatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidates
     */
    select?: CandidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidates
     */
    omit?: CandidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatesInclude<ExtArgs> | null
    /**
     * Filter which Candidates to delete.
     */
    where: CandidatesWhereUniqueInput
  }

  /**
   * Candidates deleteMany
   */
  export type CandidatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidates to delete
     */
    where?: CandidatesWhereInput
    /**
     * Limit how many Candidates to delete.
     */
    limit?: number
  }

  /**
   * Candidates.assets
   */
  export type Candidates$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateAssetOwnership
     */
    select?: CandidateAssetOwnershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateAssetOwnership
     */
    omit?: CandidateAssetOwnershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateAssetOwnershipInclude<ExtArgs> | null
    where?: CandidateAssetOwnershipWhereInput
    orderBy?: CandidateAssetOwnershipOrderByWithRelationInput | CandidateAssetOwnershipOrderByWithRelationInput[]
    cursor?: CandidateAssetOwnershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateAssetOwnershipScalarFieldEnum | CandidateAssetOwnershipScalarFieldEnum[]
  }

  /**
   * Candidates without action
   */
  export type CandidatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidates
     */
    select?: CandidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidates
     */
    omit?: CandidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatesInclude<ExtArgs> | null
  }


  /**
   * Model Logging
   */

  export type AggregateLogging = {
    _count: LoggingCountAggregateOutputType | null
    _min: LoggingMinAggregateOutputType | null
    _max: LoggingMaxAggregateOutputType | null
  }

  export type LoggingMinAggregateOutputType = {
    user_activity_id: string | null
    user_id: string | null
    action_type: string | null
    activity_time: Date | null
    created_by: string | null
    created_date: Date | null
    modified_by: string | null
    modified_date: Date | null
  }

  export type LoggingMaxAggregateOutputType = {
    user_activity_id: string | null
    user_id: string | null
    action_type: string | null
    activity_time: Date | null
    created_by: string | null
    created_date: Date | null
    modified_by: string | null
    modified_date: Date | null
  }

  export type LoggingCountAggregateOutputType = {
    user_activity_id: number
    user_id: number
    action_type: number
    activity_time: number
    created_by: number
    created_date: number
    modified_by: number
    modified_date: number
    _all: number
  }


  export type LoggingMinAggregateInputType = {
    user_activity_id?: true
    user_id?: true
    action_type?: true
    activity_time?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
  }

  export type LoggingMaxAggregateInputType = {
    user_activity_id?: true
    user_id?: true
    action_type?: true
    activity_time?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
  }

  export type LoggingCountAggregateInputType = {
    user_activity_id?: true
    user_id?: true
    action_type?: true
    activity_time?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
    _all?: true
  }

  export type LoggingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logging to aggregate.
     */
    where?: LoggingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loggings to fetch.
     */
    orderBy?: LoggingOrderByWithRelationInput | LoggingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoggingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loggings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loggings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Loggings
    **/
    _count?: true | LoggingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoggingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoggingMaxAggregateInputType
  }

  export type GetLoggingAggregateType<T extends LoggingAggregateArgs> = {
        [P in keyof T & keyof AggregateLogging]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogging[P]>
      : GetScalarType<T[P], AggregateLogging[P]>
  }




  export type LoggingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoggingWhereInput
    orderBy?: LoggingOrderByWithAggregationInput | LoggingOrderByWithAggregationInput[]
    by: LoggingScalarFieldEnum[] | LoggingScalarFieldEnum
    having?: LoggingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoggingCountAggregateInputType | true
    _min?: LoggingMinAggregateInputType
    _max?: LoggingMaxAggregateInputType
  }

  export type LoggingGroupByOutputType = {
    user_activity_id: string
    user_id: string
    action_type: string
    activity_time: Date
    created_by: string | null
    created_date: Date
    modified_by: string | null
    modified_date: Date
    _count: LoggingCountAggregateOutputType | null
    _min: LoggingMinAggregateOutputType | null
    _max: LoggingMaxAggregateOutputType | null
  }

  type GetLoggingGroupByPayload<T extends LoggingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoggingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoggingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoggingGroupByOutputType[P]>
            : GetScalarType<T[P], LoggingGroupByOutputType[P]>
        }
      >
    >


  export type LoggingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_activity_id?: boolean
    user_id?: boolean
    action_type?: boolean
    activity_time?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
    action_name?: boolean | ConstantsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logging"]>

  export type LoggingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_activity_id?: boolean
    user_id?: boolean
    action_type?: boolean
    activity_time?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
    action_name?: boolean | ConstantsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logging"]>

  export type LoggingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_activity_id?: boolean
    user_id?: boolean
    action_type?: boolean
    activity_time?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
    action_name?: boolean | ConstantsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logging"]>

  export type LoggingSelectScalar = {
    user_activity_id?: boolean
    user_id?: boolean
    action_type?: boolean
    activity_time?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
  }

  export type LoggingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_activity_id" | "user_id" | "action_type" | "activity_time" | "created_by" | "created_date" | "modified_by" | "modified_date", ExtArgs["result"]["logging"]>
  export type LoggingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action_name?: boolean | ConstantsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type LoggingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action_name?: boolean | ConstantsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type LoggingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action_name?: boolean | ConstantsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $LoggingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Logging"
    objects: {
      action_name: Prisma.$ConstantsPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_activity_id: string
      user_id: string
      action_type: string
      activity_time: Date
      created_by: string | null
      created_date: Date
      modified_by: string | null
      modified_date: Date
    }, ExtArgs["result"]["logging"]>
    composites: {}
  }

  type LoggingGetPayload<S extends boolean | null | undefined | LoggingDefaultArgs> = $Result.GetResult<Prisma.$LoggingPayload, S>

  type LoggingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoggingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoggingCountAggregateInputType | true
    }

  export interface LoggingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Logging'], meta: { name: 'Logging' } }
    /**
     * Find zero or one Logging that matches the filter.
     * @param {LoggingFindUniqueArgs} args - Arguments to find a Logging
     * @example
     * // Get one Logging
     * const logging = await prisma.logging.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoggingFindUniqueArgs>(args: SelectSubset<T, LoggingFindUniqueArgs<ExtArgs>>): Prisma__LoggingClient<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logging that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoggingFindUniqueOrThrowArgs} args - Arguments to find a Logging
     * @example
     * // Get one Logging
     * const logging = await prisma.logging.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoggingFindUniqueOrThrowArgs>(args: SelectSubset<T, LoggingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoggingClient<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logging that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggingFindFirstArgs} args - Arguments to find a Logging
     * @example
     * // Get one Logging
     * const logging = await prisma.logging.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoggingFindFirstArgs>(args?: SelectSubset<T, LoggingFindFirstArgs<ExtArgs>>): Prisma__LoggingClient<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logging that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggingFindFirstOrThrowArgs} args - Arguments to find a Logging
     * @example
     * // Get one Logging
     * const logging = await prisma.logging.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoggingFindFirstOrThrowArgs>(args?: SelectSubset<T, LoggingFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoggingClient<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loggings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loggings
     * const loggings = await prisma.logging.findMany()
     * 
     * // Get first 10 Loggings
     * const loggings = await prisma.logging.findMany({ take: 10 })
     * 
     * // Only select the `user_activity_id`
     * const loggingWithUser_activity_idOnly = await prisma.logging.findMany({ select: { user_activity_id: true } })
     * 
     */
    findMany<T extends LoggingFindManyArgs>(args?: SelectSubset<T, LoggingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logging.
     * @param {LoggingCreateArgs} args - Arguments to create a Logging.
     * @example
     * // Create one Logging
     * const Logging = await prisma.logging.create({
     *   data: {
     *     // ... data to create a Logging
     *   }
     * })
     * 
     */
    create<T extends LoggingCreateArgs>(args: SelectSubset<T, LoggingCreateArgs<ExtArgs>>): Prisma__LoggingClient<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loggings.
     * @param {LoggingCreateManyArgs} args - Arguments to create many Loggings.
     * @example
     * // Create many Loggings
     * const logging = await prisma.logging.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoggingCreateManyArgs>(args?: SelectSubset<T, LoggingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Loggings and returns the data saved in the database.
     * @param {LoggingCreateManyAndReturnArgs} args - Arguments to create many Loggings.
     * @example
     * // Create many Loggings
     * const logging = await prisma.logging.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Loggings and only return the `user_activity_id`
     * const loggingWithUser_activity_idOnly = await prisma.logging.createManyAndReturn({
     *   select: { user_activity_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoggingCreateManyAndReturnArgs>(args?: SelectSubset<T, LoggingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Logging.
     * @param {LoggingDeleteArgs} args - Arguments to delete one Logging.
     * @example
     * // Delete one Logging
     * const Logging = await prisma.logging.delete({
     *   where: {
     *     // ... filter to delete one Logging
     *   }
     * })
     * 
     */
    delete<T extends LoggingDeleteArgs>(args: SelectSubset<T, LoggingDeleteArgs<ExtArgs>>): Prisma__LoggingClient<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logging.
     * @param {LoggingUpdateArgs} args - Arguments to update one Logging.
     * @example
     * // Update one Logging
     * const logging = await prisma.logging.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoggingUpdateArgs>(args: SelectSubset<T, LoggingUpdateArgs<ExtArgs>>): Prisma__LoggingClient<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loggings.
     * @param {LoggingDeleteManyArgs} args - Arguments to filter Loggings to delete.
     * @example
     * // Delete a few Loggings
     * const { count } = await prisma.logging.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoggingDeleteManyArgs>(args?: SelectSubset<T, LoggingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loggings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loggings
     * const logging = await prisma.logging.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoggingUpdateManyArgs>(args: SelectSubset<T, LoggingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loggings and returns the data updated in the database.
     * @param {LoggingUpdateManyAndReturnArgs} args - Arguments to update many Loggings.
     * @example
     * // Update many Loggings
     * const logging = await prisma.logging.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Loggings and only return the `user_activity_id`
     * const loggingWithUser_activity_idOnly = await prisma.logging.updateManyAndReturn({
     *   select: { user_activity_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoggingUpdateManyAndReturnArgs>(args: SelectSubset<T, LoggingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Logging.
     * @param {LoggingUpsertArgs} args - Arguments to update or create a Logging.
     * @example
     * // Update or create a Logging
     * const logging = await prisma.logging.upsert({
     *   create: {
     *     // ... data to create a Logging
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logging we want to update
     *   }
     * })
     */
    upsert<T extends LoggingUpsertArgs>(args: SelectSubset<T, LoggingUpsertArgs<ExtArgs>>): Prisma__LoggingClient<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loggings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggingCountArgs} args - Arguments to filter Loggings to count.
     * @example
     * // Count the number of Loggings
     * const count = await prisma.logging.count({
     *   where: {
     *     // ... the filter for the Loggings we want to count
     *   }
     * })
    **/
    count<T extends LoggingCountArgs>(
      args?: Subset<T, LoggingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoggingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logging.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoggingAggregateArgs>(args: Subset<T, LoggingAggregateArgs>): Prisma.PrismaPromise<GetLoggingAggregateType<T>>

    /**
     * Group by Logging.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoggingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoggingGroupByArgs['orderBy'] }
        : { orderBy?: LoggingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoggingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoggingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Logging model
   */
  readonly fields: LoggingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Logging.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoggingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    action_name<T extends ConstantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConstantsDefaultArgs<ExtArgs>>): Prisma__ConstantsClient<$Result.GetResult<Prisma.$ConstantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Logging model
   */
  interface LoggingFieldRefs {
    readonly user_activity_id: FieldRef<"Logging", 'String'>
    readonly user_id: FieldRef<"Logging", 'String'>
    readonly action_type: FieldRef<"Logging", 'String'>
    readonly activity_time: FieldRef<"Logging", 'DateTime'>
    readonly created_by: FieldRef<"Logging", 'String'>
    readonly created_date: FieldRef<"Logging", 'DateTime'>
    readonly modified_by: FieldRef<"Logging", 'String'>
    readonly modified_date: FieldRef<"Logging", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Logging findUnique
   */
  export type LoggingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoggingInclude<ExtArgs> | null
    /**
     * Filter, which Logging to fetch.
     */
    where: LoggingWhereUniqueInput
  }

  /**
   * Logging findUniqueOrThrow
   */
  export type LoggingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoggingInclude<ExtArgs> | null
    /**
     * Filter, which Logging to fetch.
     */
    where: LoggingWhereUniqueInput
  }

  /**
   * Logging findFirst
   */
  export type LoggingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoggingInclude<ExtArgs> | null
    /**
     * Filter, which Logging to fetch.
     */
    where?: LoggingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loggings to fetch.
     */
    orderBy?: LoggingOrderByWithRelationInput | LoggingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loggings.
     */
    cursor?: LoggingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loggings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loggings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loggings.
     */
    distinct?: LoggingScalarFieldEnum | LoggingScalarFieldEnum[]
  }

  /**
   * Logging findFirstOrThrow
   */
  export type LoggingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoggingInclude<ExtArgs> | null
    /**
     * Filter, which Logging to fetch.
     */
    where?: LoggingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loggings to fetch.
     */
    orderBy?: LoggingOrderByWithRelationInput | LoggingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loggings.
     */
    cursor?: LoggingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loggings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loggings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loggings.
     */
    distinct?: LoggingScalarFieldEnum | LoggingScalarFieldEnum[]
  }

  /**
   * Logging findMany
   */
  export type LoggingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoggingInclude<ExtArgs> | null
    /**
     * Filter, which Loggings to fetch.
     */
    where?: LoggingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loggings to fetch.
     */
    orderBy?: LoggingOrderByWithRelationInput | LoggingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Loggings.
     */
    cursor?: LoggingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loggings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loggings.
     */
    skip?: number
    distinct?: LoggingScalarFieldEnum | LoggingScalarFieldEnum[]
  }

  /**
   * Logging create
   */
  export type LoggingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoggingInclude<ExtArgs> | null
    /**
     * The data needed to create a Logging.
     */
    data: XOR<LoggingCreateInput, LoggingUncheckedCreateInput>
  }

  /**
   * Logging createMany
   */
  export type LoggingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Loggings.
     */
    data: LoggingCreateManyInput | LoggingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Logging createManyAndReturn
   */
  export type LoggingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * The data used to create many Loggings.
     */
    data: LoggingCreateManyInput | LoggingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoggingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Logging update
   */
  export type LoggingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoggingInclude<ExtArgs> | null
    /**
     * The data needed to update a Logging.
     */
    data: XOR<LoggingUpdateInput, LoggingUncheckedUpdateInput>
    /**
     * Choose, which Logging to update.
     */
    where: LoggingWhereUniqueInput
  }

  /**
   * Logging updateMany
   */
  export type LoggingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Loggings.
     */
    data: XOR<LoggingUpdateManyMutationInput, LoggingUncheckedUpdateManyInput>
    /**
     * Filter which Loggings to update
     */
    where?: LoggingWhereInput
    /**
     * Limit how many Loggings to update.
     */
    limit?: number
  }

  /**
   * Logging updateManyAndReturn
   */
  export type LoggingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * The data used to update Loggings.
     */
    data: XOR<LoggingUpdateManyMutationInput, LoggingUncheckedUpdateManyInput>
    /**
     * Filter which Loggings to update
     */
    where?: LoggingWhereInput
    /**
     * Limit how many Loggings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoggingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Logging upsert
   */
  export type LoggingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoggingInclude<ExtArgs> | null
    /**
     * The filter to search for the Logging to update in case it exists.
     */
    where: LoggingWhereUniqueInput
    /**
     * In case the Logging found by the `where` argument doesn't exist, create a new Logging with this data.
     */
    create: XOR<LoggingCreateInput, LoggingUncheckedCreateInput>
    /**
     * In case the Logging was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoggingUpdateInput, LoggingUncheckedUpdateInput>
  }

  /**
   * Logging delete
   */
  export type LoggingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoggingInclude<ExtArgs> | null
    /**
     * Filter which Logging to delete.
     */
    where: LoggingWhereUniqueInput
  }

  /**
   * Logging deleteMany
   */
  export type LoggingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Loggings to delete
     */
    where?: LoggingWhereInput
    /**
     * Limit how many Loggings to delete.
     */
    limit?: number
  }

  /**
   * Logging without action
   */
  export type LoggingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoggingInclude<ExtArgs> | null
  }


  /**
   * Model Views
   */

  export type AggregateViews = {
    _count: ViewsCountAggregateOutputType | null
    _min: ViewsMinAggregateOutputType | null
    _max: ViewsMaxAggregateOutputType | null
  }

  export type ViewsMinAggregateOutputType = {
    view_id: string | null
    property_id: string | null
    viewed_by_whom: string | null
    viewed_at: Date | null
  }

  export type ViewsMaxAggregateOutputType = {
    view_id: string | null
    property_id: string | null
    viewed_by_whom: string | null
    viewed_at: Date | null
  }

  export type ViewsCountAggregateOutputType = {
    view_id: number
    property_id: number
    viewed_by_whom: number
    viewed_at: number
    _all: number
  }


  export type ViewsMinAggregateInputType = {
    view_id?: true
    property_id?: true
    viewed_by_whom?: true
    viewed_at?: true
  }

  export type ViewsMaxAggregateInputType = {
    view_id?: true
    property_id?: true
    viewed_by_whom?: true
    viewed_at?: true
  }

  export type ViewsCountAggregateInputType = {
    view_id?: true
    property_id?: true
    viewed_by_whom?: true
    viewed_at?: true
    _all?: true
  }

  export type ViewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Views to aggregate.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Views
    **/
    _count?: true | ViewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewsMaxAggregateInputType
  }

  export type GetViewsAggregateType<T extends ViewsAggregateArgs> = {
        [P in keyof T & keyof AggregateViews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViews[P]>
      : GetScalarType<T[P], AggregateViews[P]>
  }




  export type ViewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewsWhereInput
    orderBy?: ViewsOrderByWithAggregationInput | ViewsOrderByWithAggregationInput[]
    by: ViewsScalarFieldEnum[] | ViewsScalarFieldEnum
    having?: ViewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewsCountAggregateInputType | true
    _min?: ViewsMinAggregateInputType
    _max?: ViewsMaxAggregateInputType
  }

  export type ViewsGroupByOutputType = {
    view_id: string
    property_id: string
    viewed_by_whom: string
    viewed_at: Date
    _count: ViewsCountAggregateOutputType | null
    _min: ViewsMinAggregateOutputType | null
    _max: ViewsMaxAggregateOutputType | null
  }

  type GetViewsGroupByPayload<T extends ViewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewsGroupByOutputType[P]>
            : GetScalarType<T[P], ViewsGroupByOutputType[P]>
        }
      >
    >


  export type ViewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    view_id?: boolean
    property_id?: boolean
    viewed_by_whom?: boolean
    viewed_at?: boolean
    property?: boolean | AssetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["views"]>

  export type ViewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    view_id?: boolean
    property_id?: boolean
    viewed_by_whom?: boolean
    viewed_at?: boolean
    property?: boolean | AssetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["views"]>

  export type ViewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    view_id?: boolean
    property_id?: boolean
    viewed_by_whom?: boolean
    viewed_at?: boolean
    property?: boolean | AssetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["views"]>

  export type ViewsSelectScalar = {
    view_id?: boolean
    property_id?: boolean
    viewed_by_whom?: boolean
    viewed_at?: boolean
  }

  export type ViewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"view_id" | "property_id" | "viewed_by_whom" | "viewed_at", ExtArgs["result"]["views"]>
  export type ViewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | AssetsDefaultArgs<ExtArgs>
  }
  export type ViewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | AssetsDefaultArgs<ExtArgs>
  }
  export type ViewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | AssetsDefaultArgs<ExtArgs>
  }

  export type $ViewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Views"
    objects: {
      property: Prisma.$AssetsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      view_id: string
      property_id: string
      viewed_by_whom: string
      viewed_at: Date
    }, ExtArgs["result"]["views"]>
    composites: {}
  }

  type ViewsGetPayload<S extends boolean | null | undefined | ViewsDefaultArgs> = $Result.GetResult<Prisma.$ViewsPayload, S>

  type ViewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewsCountAggregateInputType | true
    }

  export interface ViewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Views'], meta: { name: 'Views' } }
    /**
     * Find zero or one Views that matches the filter.
     * @param {ViewsFindUniqueArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewsFindUniqueArgs>(args: SelectSubset<T, ViewsFindUniqueArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Views that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewsFindUniqueOrThrowArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsFindFirstArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewsFindFirstArgs>(args?: SelectSubset<T, ViewsFindFirstArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Views that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsFindFirstOrThrowArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Views
     * const views = await prisma.views.findMany()
     * 
     * // Get first 10 Views
     * const views = await prisma.views.findMany({ take: 10 })
     * 
     * // Only select the `view_id`
     * const viewsWithView_idOnly = await prisma.views.findMany({ select: { view_id: true } })
     * 
     */
    findMany<T extends ViewsFindManyArgs>(args?: SelectSubset<T, ViewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Views.
     * @param {ViewsCreateArgs} args - Arguments to create a Views.
     * @example
     * // Create one Views
     * const Views = await prisma.views.create({
     *   data: {
     *     // ... data to create a Views
     *   }
     * })
     * 
     */
    create<T extends ViewsCreateArgs>(args: SelectSubset<T, ViewsCreateArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Views.
     * @param {ViewsCreateManyArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const views = await prisma.views.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewsCreateManyArgs>(args?: SelectSubset<T, ViewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Views and returns the data saved in the database.
     * @param {ViewsCreateManyAndReturnArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const views = await prisma.views.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Views and only return the `view_id`
     * const viewsWithView_idOnly = await prisma.views.createManyAndReturn({
     *   select: { view_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewsCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Views.
     * @param {ViewsDeleteArgs} args - Arguments to delete one Views.
     * @example
     * // Delete one Views
     * const Views = await prisma.views.delete({
     *   where: {
     *     // ... filter to delete one Views
     *   }
     * })
     * 
     */
    delete<T extends ViewsDeleteArgs>(args: SelectSubset<T, ViewsDeleteArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Views.
     * @param {ViewsUpdateArgs} args - Arguments to update one Views.
     * @example
     * // Update one Views
     * const views = await prisma.views.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewsUpdateArgs>(args: SelectSubset<T, ViewsUpdateArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Views.
     * @param {ViewsDeleteManyArgs} args - Arguments to filter Views to delete.
     * @example
     * // Delete a few Views
     * const { count } = await prisma.views.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewsDeleteManyArgs>(args?: SelectSubset<T, ViewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Views
     * const views = await prisma.views.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewsUpdateManyArgs>(args: SelectSubset<T, ViewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views and returns the data updated in the database.
     * @param {ViewsUpdateManyAndReturnArgs} args - Arguments to update many Views.
     * @example
     * // Update many Views
     * const views = await prisma.views.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Views and only return the `view_id`
     * const viewsWithView_idOnly = await prisma.views.updateManyAndReturn({
     *   select: { view_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ViewsUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Views.
     * @param {ViewsUpsertArgs} args - Arguments to update or create a Views.
     * @example
     * // Update or create a Views
     * const views = await prisma.views.upsert({
     *   create: {
     *     // ... data to create a Views
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Views we want to update
     *   }
     * })
     */
    upsert<T extends ViewsUpsertArgs>(args: SelectSubset<T, ViewsUpsertArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsCountArgs} args - Arguments to filter Views to count.
     * @example
     * // Count the number of Views
     * const count = await prisma.views.count({
     *   where: {
     *     // ... the filter for the Views we want to count
     *   }
     * })
    **/
    count<T extends ViewsCountArgs>(
      args?: Subset<T, ViewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewsAggregateArgs>(args: Subset<T, ViewsAggregateArgs>): Prisma.PrismaPromise<GetViewsAggregateType<T>>

    /**
     * Group by Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewsGroupByArgs['orderBy'] }
        : { orderBy?: ViewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Views model
   */
  readonly fields: ViewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Views.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends AssetsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetsDefaultArgs<ExtArgs>>): Prisma__AssetsClient<$Result.GetResult<Prisma.$AssetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Views model
   */
  interface ViewsFieldRefs {
    readonly view_id: FieldRef<"Views", 'String'>
    readonly property_id: FieldRef<"Views", 'String'>
    readonly viewed_by_whom: FieldRef<"Views", 'String'>
    readonly viewed_at: FieldRef<"Views", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Views findUnique
   */
  export type ViewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views findUniqueOrThrow
   */
  export type ViewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views findFirst
   */
  export type ViewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Views findFirstOrThrow
   */
  export type ViewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Views findMany
   */
  export type ViewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Views.
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Views create
   */
  export type ViewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Views.
     */
    data: XOR<ViewsCreateInput, ViewsUncheckedCreateInput>
  }

  /**
   * Views createMany
   */
  export type ViewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Views.
     */
    data: ViewsCreateManyInput | ViewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Views createManyAndReturn
   */
  export type ViewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * The data used to create many Views.
     */
    data: ViewsCreateManyInput | ViewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Views update
   */
  export type ViewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Views.
     */
    data: XOR<ViewsUpdateInput, ViewsUncheckedUpdateInput>
    /**
     * Choose, which Views to update.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views updateMany
   */
  export type ViewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Views.
     */
    data: XOR<ViewsUpdateManyMutationInput, ViewsUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewsWhereInput
    /**
     * Limit how many Views to update.
     */
    limit?: number
  }

  /**
   * Views updateManyAndReturn
   */
  export type ViewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * The data used to update Views.
     */
    data: XOR<ViewsUpdateManyMutationInput, ViewsUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewsWhereInput
    /**
     * Limit how many Views to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Views upsert
   */
  export type ViewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Views to update in case it exists.
     */
    where: ViewsWhereUniqueInput
    /**
     * In case the Views found by the `where` argument doesn't exist, create a new Views with this data.
     */
    create: XOR<ViewsCreateInput, ViewsUncheckedCreateInput>
    /**
     * In case the Views was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewsUpdateInput, ViewsUncheckedUpdateInput>
  }

  /**
   * Views delete
   */
  export type ViewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter which Views to delete.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views deleteMany
   */
  export type ViewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Views to delete
     */
    where?: ViewsWhereInput
    /**
     * Limit how many Views to delete.
     */
    limit?: number
  }

  /**
   * Views without action
   */
  export type ViewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
  }


  /**
   * Model Bookmarks
   */

  export type AggregateBookmarks = {
    _count: BookmarksCountAggregateOutputType | null
    _min: BookmarksMinAggregateOutputType | null
    _max: BookmarksMaxAggregateOutputType | null
  }

  export type BookmarksMinAggregateOutputType = {
    bookmark_id: string | null
    property_id: string | null
    bookmarked_by_whom: string | null
    bookmarked_at: Date | null
  }

  export type BookmarksMaxAggregateOutputType = {
    bookmark_id: string | null
    property_id: string | null
    bookmarked_by_whom: string | null
    bookmarked_at: Date | null
  }

  export type BookmarksCountAggregateOutputType = {
    bookmark_id: number
    property_id: number
    bookmarked_by_whom: number
    bookmarked_at: number
    _all: number
  }


  export type BookmarksMinAggregateInputType = {
    bookmark_id?: true
    property_id?: true
    bookmarked_by_whom?: true
    bookmarked_at?: true
  }

  export type BookmarksMaxAggregateInputType = {
    bookmark_id?: true
    property_id?: true
    bookmarked_by_whom?: true
    bookmarked_at?: true
  }

  export type BookmarksCountAggregateInputType = {
    bookmark_id?: true
    property_id?: true
    bookmarked_by_whom?: true
    bookmarked_at?: true
    _all?: true
  }

  export type BookmarksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmarks to aggregate.
     */
    where?: BookmarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarksOrderByWithRelationInput | BookmarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookmarks
    **/
    _count?: true | BookmarksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarksMaxAggregateInputType
  }

  export type GetBookmarksAggregateType<T extends BookmarksAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmarks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmarks[P]>
      : GetScalarType<T[P], AggregateBookmarks[P]>
  }




  export type BookmarksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarksWhereInput
    orderBy?: BookmarksOrderByWithAggregationInput | BookmarksOrderByWithAggregationInput[]
    by: BookmarksScalarFieldEnum[] | BookmarksScalarFieldEnum
    having?: BookmarksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarksCountAggregateInputType | true
    _min?: BookmarksMinAggregateInputType
    _max?: BookmarksMaxAggregateInputType
  }

  export type BookmarksGroupByOutputType = {
    bookmark_id: string
    property_id: string
    bookmarked_by_whom: string
    bookmarked_at: Date
    _count: BookmarksCountAggregateOutputType | null
    _min: BookmarksMinAggregateOutputType | null
    _max: BookmarksMaxAggregateOutputType | null
  }

  type GetBookmarksGroupByPayload<T extends BookmarksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarksGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarksGroupByOutputType[P]>
        }
      >
    >


  export type BookmarksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookmark_id?: boolean
    property_id?: boolean
    bookmarked_by_whom?: boolean
    bookmarked_at?: boolean
    Properties?: boolean | AssetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarks"]>

  export type BookmarksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookmark_id?: boolean
    property_id?: boolean
    bookmarked_by_whom?: boolean
    bookmarked_at?: boolean
    Properties?: boolean | AssetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarks"]>

  export type BookmarksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookmark_id?: boolean
    property_id?: boolean
    bookmarked_by_whom?: boolean
    bookmarked_at?: boolean
    Properties?: boolean | AssetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarks"]>

  export type BookmarksSelectScalar = {
    bookmark_id?: boolean
    property_id?: boolean
    bookmarked_by_whom?: boolean
    bookmarked_at?: boolean
  }

  export type BookmarksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bookmark_id" | "property_id" | "bookmarked_by_whom" | "bookmarked_at", ExtArgs["result"]["bookmarks"]>
  export type BookmarksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Properties?: boolean | AssetsDefaultArgs<ExtArgs>
  }
  export type BookmarksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Properties?: boolean | AssetsDefaultArgs<ExtArgs>
  }
  export type BookmarksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Properties?: boolean | AssetsDefaultArgs<ExtArgs>
  }

  export type $BookmarksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookmarks"
    objects: {
      Properties: Prisma.$AssetsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      bookmark_id: string
      property_id: string
      bookmarked_by_whom: string
      bookmarked_at: Date
    }, ExtArgs["result"]["bookmarks"]>
    composites: {}
  }

  type BookmarksGetPayload<S extends boolean | null | undefined | BookmarksDefaultArgs> = $Result.GetResult<Prisma.$BookmarksPayload, S>

  type BookmarksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookmarksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookmarksCountAggregateInputType | true
    }

  export interface BookmarksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookmarks'], meta: { name: 'Bookmarks' } }
    /**
     * Find zero or one Bookmarks that matches the filter.
     * @param {BookmarksFindUniqueArgs} args - Arguments to find a Bookmarks
     * @example
     * // Get one Bookmarks
     * const bookmarks = await prisma.bookmarks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookmarksFindUniqueArgs>(args: SelectSubset<T, BookmarksFindUniqueArgs<ExtArgs>>): Prisma__BookmarksClient<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookmarks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookmarksFindUniqueOrThrowArgs} args - Arguments to find a Bookmarks
     * @example
     * // Get one Bookmarks
     * const bookmarks = await prisma.bookmarks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookmarksFindUniqueOrThrowArgs>(args: SelectSubset<T, BookmarksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookmarksClient<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksFindFirstArgs} args - Arguments to find a Bookmarks
     * @example
     * // Get one Bookmarks
     * const bookmarks = await prisma.bookmarks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookmarksFindFirstArgs>(args?: SelectSubset<T, BookmarksFindFirstArgs<ExtArgs>>): Prisma__BookmarksClient<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookmarks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksFindFirstOrThrowArgs} args - Arguments to find a Bookmarks
     * @example
     * // Get one Bookmarks
     * const bookmarks = await prisma.bookmarks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookmarksFindFirstOrThrowArgs>(args?: SelectSubset<T, BookmarksFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookmarksClient<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookmarks
     * const bookmarks = await prisma.bookmarks.findMany()
     * 
     * // Get first 10 Bookmarks
     * const bookmarks = await prisma.bookmarks.findMany({ take: 10 })
     * 
     * // Only select the `bookmark_id`
     * const bookmarksWithBookmark_idOnly = await prisma.bookmarks.findMany({ select: { bookmark_id: true } })
     * 
     */
    findMany<T extends BookmarksFindManyArgs>(args?: SelectSubset<T, BookmarksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookmarks.
     * @param {BookmarksCreateArgs} args - Arguments to create a Bookmarks.
     * @example
     * // Create one Bookmarks
     * const Bookmarks = await prisma.bookmarks.create({
     *   data: {
     *     // ... data to create a Bookmarks
     *   }
     * })
     * 
     */
    create<T extends BookmarksCreateArgs>(args: SelectSubset<T, BookmarksCreateArgs<ExtArgs>>): Prisma__BookmarksClient<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookmarks.
     * @param {BookmarksCreateManyArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmarks = await prisma.bookmarks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookmarksCreateManyArgs>(args?: SelectSubset<T, BookmarksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookmarks and returns the data saved in the database.
     * @param {BookmarksCreateManyAndReturnArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmarks = await prisma.bookmarks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookmarks and only return the `bookmark_id`
     * const bookmarksWithBookmark_idOnly = await prisma.bookmarks.createManyAndReturn({
     *   select: { bookmark_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookmarksCreateManyAndReturnArgs>(args?: SelectSubset<T, BookmarksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookmarks.
     * @param {BookmarksDeleteArgs} args - Arguments to delete one Bookmarks.
     * @example
     * // Delete one Bookmarks
     * const Bookmarks = await prisma.bookmarks.delete({
     *   where: {
     *     // ... filter to delete one Bookmarks
     *   }
     * })
     * 
     */
    delete<T extends BookmarksDeleteArgs>(args: SelectSubset<T, BookmarksDeleteArgs<ExtArgs>>): Prisma__BookmarksClient<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookmarks.
     * @param {BookmarksUpdateArgs} args - Arguments to update one Bookmarks.
     * @example
     * // Update one Bookmarks
     * const bookmarks = await prisma.bookmarks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookmarksUpdateArgs>(args: SelectSubset<T, BookmarksUpdateArgs<ExtArgs>>): Prisma__BookmarksClient<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookmarks.
     * @param {BookmarksDeleteManyArgs} args - Arguments to filter Bookmarks to delete.
     * @example
     * // Delete a few Bookmarks
     * const { count } = await prisma.bookmarks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookmarksDeleteManyArgs>(args?: SelectSubset<T, BookmarksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookmarks
     * const bookmarks = await prisma.bookmarks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookmarksUpdateManyArgs>(args: SelectSubset<T, BookmarksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks and returns the data updated in the database.
     * @param {BookmarksUpdateManyAndReturnArgs} args - Arguments to update many Bookmarks.
     * @example
     * // Update many Bookmarks
     * const bookmarks = await prisma.bookmarks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookmarks and only return the `bookmark_id`
     * const bookmarksWithBookmark_idOnly = await prisma.bookmarks.updateManyAndReturn({
     *   select: { bookmark_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookmarksUpdateManyAndReturnArgs>(args: SelectSubset<T, BookmarksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookmarks.
     * @param {BookmarksUpsertArgs} args - Arguments to update or create a Bookmarks.
     * @example
     * // Update or create a Bookmarks
     * const bookmarks = await prisma.bookmarks.upsert({
     *   create: {
     *     // ... data to create a Bookmarks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookmarks we want to update
     *   }
     * })
     */
    upsert<T extends BookmarksUpsertArgs>(args: SelectSubset<T, BookmarksUpsertArgs<ExtArgs>>): Prisma__BookmarksClient<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksCountArgs} args - Arguments to filter Bookmarks to count.
     * @example
     * // Count the number of Bookmarks
     * const count = await prisma.bookmarks.count({
     *   where: {
     *     // ... the filter for the Bookmarks we want to count
     *   }
     * })
    **/
    count<T extends BookmarksCountArgs>(
      args?: Subset<T, BookmarksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookmarksAggregateArgs>(args: Subset<T, BookmarksAggregateArgs>): Prisma.PrismaPromise<GetBookmarksAggregateType<T>>

    /**
     * Group by Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookmarksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmarksGroupByArgs['orderBy'] }
        : { orderBy?: BookmarksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookmarksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookmarks model
   */
  readonly fields: BookmarksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookmarks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookmarksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Properties<T extends AssetsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetsDefaultArgs<ExtArgs>>): Prisma__AssetsClient<$Result.GetResult<Prisma.$AssetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bookmarks model
   */
  interface BookmarksFieldRefs {
    readonly bookmark_id: FieldRef<"Bookmarks", 'String'>
    readonly property_id: FieldRef<"Bookmarks", 'String'>
    readonly bookmarked_by_whom: FieldRef<"Bookmarks", 'String'>
    readonly bookmarked_at: FieldRef<"Bookmarks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bookmarks findUnique
   */
  export type BookmarksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where: BookmarksWhereUniqueInput
  }

  /**
   * Bookmarks findUniqueOrThrow
   */
  export type BookmarksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where: BookmarksWhereUniqueInput
  }

  /**
   * Bookmarks findFirst
   */
  export type BookmarksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where?: BookmarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarksOrderByWithRelationInput | BookmarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarksScalarFieldEnum | BookmarksScalarFieldEnum[]
  }

  /**
   * Bookmarks findFirstOrThrow
   */
  export type BookmarksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where?: BookmarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarksOrderByWithRelationInput | BookmarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarksScalarFieldEnum | BookmarksScalarFieldEnum[]
  }

  /**
   * Bookmarks findMany
   */
  export type BookmarksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where?: BookmarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarksOrderByWithRelationInput | BookmarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookmarks.
     */
    cursor?: BookmarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    distinct?: BookmarksScalarFieldEnum | BookmarksScalarFieldEnum[]
  }

  /**
   * Bookmarks create
   */
  export type BookmarksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookmarks.
     */
    data: XOR<BookmarksCreateInput, BookmarksUncheckedCreateInput>
  }

  /**
   * Bookmarks createMany
   */
  export type BookmarksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarksCreateManyInput | BookmarksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bookmarks createManyAndReturn
   */
  export type BookmarksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarksCreateManyInput | BookmarksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookmarks update
   */
  export type BookmarksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookmarks.
     */
    data: XOR<BookmarksUpdateInput, BookmarksUncheckedUpdateInput>
    /**
     * Choose, which Bookmarks to update.
     */
    where: BookmarksWhereUniqueInput
  }

  /**
   * Bookmarks updateMany
   */
  export type BookmarksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarksUpdateManyMutationInput, BookmarksUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarksWhereInput
    /**
     * Limit how many Bookmarks to update.
     */
    limit?: number
  }

  /**
   * Bookmarks updateManyAndReturn
   */
  export type BookmarksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarksUpdateManyMutationInput, BookmarksUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarksWhereInput
    /**
     * Limit how many Bookmarks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookmarks upsert
   */
  export type BookmarksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookmarks to update in case it exists.
     */
    where: BookmarksWhereUniqueInput
    /**
     * In case the Bookmarks found by the `where` argument doesn't exist, create a new Bookmarks with this data.
     */
    create: XOR<BookmarksCreateInput, BookmarksUncheckedCreateInput>
    /**
     * In case the Bookmarks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmarksUpdateInput, BookmarksUncheckedUpdateInput>
  }

  /**
   * Bookmarks delete
   */
  export type BookmarksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    /**
     * Filter which Bookmarks to delete.
     */
    where: BookmarksWhereUniqueInput
  }

  /**
   * Bookmarks deleteMany
   */
  export type BookmarksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmarks to delete
     */
    where?: BookmarksWhereInput
    /**
     * Limit how many Bookmarks to delete.
     */
    limit?: number
  }

  /**
   * Bookmarks without action
   */
  export type BookmarksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
  }


  /**
   * Model Constants
   */

  export type AggregateConstants = {
    _count: ConstantsCountAggregateOutputType | null
    _min: ConstantsMinAggregateOutputType | null
    _max: ConstantsMaxAggregateOutputType | null
  }

  export type ConstantsMinAggregateOutputType = {
    const_id: string | null
    code: string | null
    description: string | null
  }

  export type ConstantsMaxAggregateOutputType = {
    const_id: string | null
    code: string | null
    description: string | null
  }

  export type ConstantsCountAggregateOutputType = {
    const_id: number
    code: number
    description: number
    _all: number
  }


  export type ConstantsMinAggregateInputType = {
    const_id?: true
    code?: true
    description?: true
  }

  export type ConstantsMaxAggregateInputType = {
    const_id?: true
    code?: true
    description?: true
  }

  export type ConstantsCountAggregateInputType = {
    const_id?: true
    code?: true
    description?: true
    _all?: true
  }

  export type ConstantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Constants to aggregate.
     */
    where?: ConstantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constants to fetch.
     */
    orderBy?: ConstantsOrderByWithRelationInput | ConstantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConstantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Constants
    **/
    _count?: true | ConstantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConstantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConstantsMaxAggregateInputType
  }

  export type GetConstantsAggregateType<T extends ConstantsAggregateArgs> = {
        [P in keyof T & keyof AggregateConstants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConstants[P]>
      : GetScalarType<T[P], AggregateConstants[P]>
  }




  export type ConstantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConstantsWhereInput
    orderBy?: ConstantsOrderByWithAggregationInput | ConstantsOrderByWithAggregationInput[]
    by: ConstantsScalarFieldEnum[] | ConstantsScalarFieldEnum
    having?: ConstantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConstantsCountAggregateInputType | true
    _min?: ConstantsMinAggregateInputType
    _max?: ConstantsMaxAggregateInputType
  }

  export type ConstantsGroupByOutputType = {
    const_id: string
    code: string
    description: string | null
    _count: ConstantsCountAggregateOutputType | null
    _min: ConstantsMinAggregateOutputType | null
    _max: ConstantsMaxAggregateOutputType | null
  }

  type GetConstantsGroupByPayload<T extends ConstantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConstantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConstantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConstantsGroupByOutputType[P]>
            : GetScalarType<T[P], ConstantsGroupByOutputType[P]>
        }
      >
    >


  export type ConstantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    const_id?: boolean
    code?: boolean
    description?: boolean
    assets?: boolean | Constants$assetsArgs<ExtArgs>
    Users?: boolean | Constants$UsersArgs<ExtArgs>
    Logging?: boolean | Constants$LoggingArgs<ExtArgs>
    _count?: boolean | ConstantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["constants"]>

  export type ConstantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    const_id?: boolean
    code?: boolean
    description?: boolean
  }, ExtArgs["result"]["constants"]>

  export type ConstantsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    const_id?: boolean
    code?: boolean
    description?: boolean
  }, ExtArgs["result"]["constants"]>

  export type ConstantsSelectScalar = {
    const_id?: boolean
    code?: boolean
    description?: boolean
  }

  export type ConstantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"const_id" | "code" | "description", ExtArgs["result"]["constants"]>
  export type ConstantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | Constants$assetsArgs<ExtArgs>
    Users?: boolean | Constants$UsersArgs<ExtArgs>
    Logging?: boolean | Constants$LoggingArgs<ExtArgs>
    _count?: boolean | ConstantsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConstantsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConstantsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConstantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Constants"
    objects: {
      assets: Prisma.$AssetsPayload<ExtArgs>[]
      Users: Prisma.$UsersPayload<ExtArgs>[]
      Logging: Prisma.$LoggingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      const_id: string
      code: string
      description: string | null
    }, ExtArgs["result"]["constants"]>
    composites: {}
  }

  type ConstantsGetPayload<S extends boolean | null | undefined | ConstantsDefaultArgs> = $Result.GetResult<Prisma.$ConstantsPayload, S>

  type ConstantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConstantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConstantsCountAggregateInputType | true
    }

  export interface ConstantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Constants'], meta: { name: 'Constants' } }
    /**
     * Find zero or one Constants that matches the filter.
     * @param {ConstantsFindUniqueArgs} args - Arguments to find a Constants
     * @example
     * // Get one Constants
     * const constants = await prisma.constants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConstantsFindUniqueArgs>(args: SelectSubset<T, ConstantsFindUniqueArgs<ExtArgs>>): Prisma__ConstantsClient<$Result.GetResult<Prisma.$ConstantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Constants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConstantsFindUniqueOrThrowArgs} args - Arguments to find a Constants
     * @example
     * // Get one Constants
     * const constants = await prisma.constants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConstantsFindUniqueOrThrowArgs>(args: SelectSubset<T, ConstantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConstantsClient<$Result.GetResult<Prisma.$ConstantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Constants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstantsFindFirstArgs} args - Arguments to find a Constants
     * @example
     * // Get one Constants
     * const constants = await prisma.constants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConstantsFindFirstArgs>(args?: SelectSubset<T, ConstantsFindFirstArgs<ExtArgs>>): Prisma__ConstantsClient<$Result.GetResult<Prisma.$ConstantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Constants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstantsFindFirstOrThrowArgs} args - Arguments to find a Constants
     * @example
     * // Get one Constants
     * const constants = await prisma.constants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConstantsFindFirstOrThrowArgs>(args?: SelectSubset<T, ConstantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConstantsClient<$Result.GetResult<Prisma.$ConstantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Constants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Constants
     * const constants = await prisma.constants.findMany()
     * 
     * // Get first 10 Constants
     * const constants = await prisma.constants.findMany({ take: 10 })
     * 
     * // Only select the `const_id`
     * const constantsWithConst_idOnly = await prisma.constants.findMany({ select: { const_id: true } })
     * 
     */
    findMany<T extends ConstantsFindManyArgs>(args?: SelectSubset<T, ConstantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Constants.
     * @param {ConstantsCreateArgs} args - Arguments to create a Constants.
     * @example
     * // Create one Constants
     * const Constants = await prisma.constants.create({
     *   data: {
     *     // ... data to create a Constants
     *   }
     * })
     * 
     */
    create<T extends ConstantsCreateArgs>(args: SelectSubset<T, ConstantsCreateArgs<ExtArgs>>): Prisma__ConstantsClient<$Result.GetResult<Prisma.$ConstantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Constants.
     * @param {ConstantsCreateManyArgs} args - Arguments to create many Constants.
     * @example
     * // Create many Constants
     * const constants = await prisma.constants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConstantsCreateManyArgs>(args?: SelectSubset<T, ConstantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Constants and returns the data saved in the database.
     * @param {ConstantsCreateManyAndReturnArgs} args - Arguments to create many Constants.
     * @example
     * // Create many Constants
     * const constants = await prisma.constants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Constants and only return the `const_id`
     * const constantsWithConst_idOnly = await prisma.constants.createManyAndReturn({
     *   select: { const_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConstantsCreateManyAndReturnArgs>(args?: SelectSubset<T, ConstantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Constants.
     * @param {ConstantsDeleteArgs} args - Arguments to delete one Constants.
     * @example
     * // Delete one Constants
     * const Constants = await prisma.constants.delete({
     *   where: {
     *     // ... filter to delete one Constants
     *   }
     * })
     * 
     */
    delete<T extends ConstantsDeleteArgs>(args: SelectSubset<T, ConstantsDeleteArgs<ExtArgs>>): Prisma__ConstantsClient<$Result.GetResult<Prisma.$ConstantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Constants.
     * @param {ConstantsUpdateArgs} args - Arguments to update one Constants.
     * @example
     * // Update one Constants
     * const constants = await prisma.constants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConstantsUpdateArgs>(args: SelectSubset<T, ConstantsUpdateArgs<ExtArgs>>): Prisma__ConstantsClient<$Result.GetResult<Prisma.$ConstantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Constants.
     * @param {ConstantsDeleteManyArgs} args - Arguments to filter Constants to delete.
     * @example
     * // Delete a few Constants
     * const { count } = await prisma.constants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConstantsDeleteManyArgs>(args?: SelectSubset<T, ConstantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Constants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Constants
     * const constants = await prisma.constants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConstantsUpdateManyArgs>(args: SelectSubset<T, ConstantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Constants and returns the data updated in the database.
     * @param {ConstantsUpdateManyAndReturnArgs} args - Arguments to update many Constants.
     * @example
     * // Update many Constants
     * const constants = await prisma.constants.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Constants and only return the `const_id`
     * const constantsWithConst_idOnly = await prisma.constants.updateManyAndReturn({
     *   select: { const_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConstantsUpdateManyAndReturnArgs>(args: SelectSubset<T, ConstantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Constants.
     * @param {ConstantsUpsertArgs} args - Arguments to update or create a Constants.
     * @example
     * // Update or create a Constants
     * const constants = await prisma.constants.upsert({
     *   create: {
     *     // ... data to create a Constants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Constants we want to update
     *   }
     * })
     */
    upsert<T extends ConstantsUpsertArgs>(args: SelectSubset<T, ConstantsUpsertArgs<ExtArgs>>): Prisma__ConstantsClient<$Result.GetResult<Prisma.$ConstantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Constants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstantsCountArgs} args - Arguments to filter Constants to count.
     * @example
     * // Count the number of Constants
     * const count = await prisma.constants.count({
     *   where: {
     *     // ... the filter for the Constants we want to count
     *   }
     * })
    **/
    count<T extends ConstantsCountArgs>(
      args?: Subset<T, ConstantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConstantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Constants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConstantsAggregateArgs>(args: Subset<T, ConstantsAggregateArgs>): Prisma.PrismaPromise<GetConstantsAggregateType<T>>

    /**
     * Group by Constants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConstantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConstantsGroupByArgs['orderBy'] }
        : { orderBy?: ConstantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConstantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConstantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Constants model
   */
  readonly fields: ConstantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Constants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConstantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assets<T extends Constants$assetsArgs<ExtArgs> = {}>(args?: Subset<T, Constants$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Users<T extends Constants$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Constants$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Logging<T extends Constants$LoggingArgs<ExtArgs> = {}>(args?: Subset<T, Constants$LoggingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Constants model
   */
  interface ConstantsFieldRefs {
    readonly const_id: FieldRef<"Constants", 'String'>
    readonly code: FieldRef<"Constants", 'String'>
    readonly description: FieldRef<"Constants", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Constants findUnique
   */
  export type ConstantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constants
     */
    select?: ConstantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constants
     */
    omit?: ConstantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstantsInclude<ExtArgs> | null
    /**
     * Filter, which Constants to fetch.
     */
    where: ConstantsWhereUniqueInput
  }

  /**
   * Constants findUniqueOrThrow
   */
  export type ConstantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constants
     */
    select?: ConstantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constants
     */
    omit?: ConstantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstantsInclude<ExtArgs> | null
    /**
     * Filter, which Constants to fetch.
     */
    where: ConstantsWhereUniqueInput
  }

  /**
   * Constants findFirst
   */
  export type ConstantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constants
     */
    select?: ConstantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constants
     */
    omit?: ConstantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstantsInclude<ExtArgs> | null
    /**
     * Filter, which Constants to fetch.
     */
    where?: ConstantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constants to fetch.
     */
    orderBy?: ConstantsOrderByWithRelationInput | ConstantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Constants.
     */
    cursor?: ConstantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Constants.
     */
    distinct?: ConstantsScalarFieldEnum | ConstantsScalarFieldEnum[]
  }

  /**
   * Constants findFirstOrThrow
   */
  export type ConstantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constants
     */
    select?: ConstantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constants
     */
    omit?: ConstantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstantsInclude<ExtArgs> | null
    /**
     * Filter, which Constants to fetch.
     */
    where?: ConstantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constants to fetch.
     */
    orderBy?: ConstantsOrderByWithRelationInput | ConstantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Constants.
     */
    cursor?: ConstantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Constants.
     */
    distinct?: ConstantsScalarFieldEnum | ConstantsScalarFieldEnum[]
  }

  /**
   * Constants findMany
   */
  export type ConstantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constants
     */
    select?: ConstantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constants
     */
    omit?: ConstantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstantsInclude<ExtArgs> | null
    /**
     * Filter, which Constants to fetch.
     */
    where?: ConstantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constants to fetch.
     */
    orderBy?: ConstantsOrderByWithRelationInput | ConstantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Constants.
     */
    cursor?: ConstantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constants.
     */
    skip?: number
    distinct?: ConstantsScalarFieldEnum | ConstantsScalarFieldEnum[]
  }

  /**
   * Constants create
   */
  export type ConstantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constants
     */
    select?: ConstantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constants
     */
    omit?: ConstantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstantsInclude<ExtArgs> | null
    /**
     * The data needed to create a Constants.
     */
    data: XOR<ConstantsCreateInput, ConstantsUncheckedCreateInput>
  }

  /**
   * Constants createMany
   */
  export type ConstantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Constants.
     */
    data: ConstantsCreateManyInput | ConstantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Constants createManyAndReturn
   */
  export type ConstantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constants
     */
    select?: ConstantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Constants
     */
    omit?: ConstantsOmit<ExtArgs> | null
    /**
     * The data used to create many Constants.
     */
    data: ConstantsCreateManyInput | ConstantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Constants update
   */
  export type ConstantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constants
     */
    select?: ConstantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constants
     */
    omit?: ConstantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstantsInclude<ExtArgs> | null
    /**
     * The data needed to update a Constants.
     */
    data: XOR<ConstantsUpdateInput, ConstantsUncheckedUpdateInput>
    /**
     * Choose, which Constants to update.
     */
    where: ConstantsWhereUniqueInput
  }

  /**
   * Constants updateMany
   */
  export type ConstantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Constants.
     */
    data: XOR<ConstantsUpdateManyMutationInput, ConstantsUncheckedUpdateManyInput>
    /**
     * Filter which Constants to update
     */
    where?: ConstantsWhereInput
    /**
     * Limit how many Constants to update.
     */
    limit?: number
  }

  /**
   * Constants updateManyAndReturn
   */
  export type ConstantsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constants
     */
    select?: ConstantsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Constants
     */
    omit?: ConstantsOmit<ExtArgs> | null
    /**
     * The data used to update Constants.
     */
    data: XOR<ConstantsUpdateManyMutationInput, ConstantsUncheckedUpdateManyInput>
    /**
     * Filter which Constants to update
     */
    where?: ConstantsWhereInput
    /**
     * Limit how many Constants to update.
     */
    limit?: number
  }

  /**
   * Constants upsert
   */
  export type ConstantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constants
     */
    select?: ConstantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constants
     */
    omit?: ConstantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstantsInclude<ExtArgs> | null
    /**
     * The filter to search for the Constants to update in case it exists.
     */
    where: ConstantsWhereUniqueInput
    /**
     * In case the Constants found by the `where` argument doesn't exist, create a new Constants with this data.
     */
    create: XOR<ConstantsCreateInput, ConstantsUncheckedCreateInput>
    /**
     * In case the Constants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConstantsUpdateInput, ConstantsUncheckedUpdateInput>
  }

  /**
   * Constants delete
   */
  export type ConstantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constants
     */
    select?: ConstantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constants
     */
    omit?: ConstantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstantsInclude<ExtArgs> | null
    /**
     * Filter which Constants to delete.
     */
    where: ConstantsWhereUniqueInput
  }

  /**
   * Constants deleteMany
   */
  export type ConstantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Constants to delete
     */
    where?: ConstantsWhereInput
    /**
     * Limit how many Constants to delete.
     */
    limit?: number
  }

  /**
   * Constants.assets
   */
  export type Constants$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assets
     */
    select?: AssetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assets
     */
    omit?: AssetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetsInclude<ExtArgs> | null
    where?: AssetsWhereInput
    orderBy?: AssetsOrderByWithRelationInput | AssetsOrderByWithRelationInput[]
    cursor?: AssetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetsScalarFieldEnum | AssetsScalarFieldEnum[]
  }

  /**
   * Constants.Users
   */
  export type Constants$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Constants.Logging
   */
  export type Constants$LoggingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoggingInclude<ExtArgs> | null
    where?: LoggingWhereInput
    orderBy?: LoggingOrderByWithRelationInput | LoggingOrderByWithRelationInput[]
    cursor?: LoggingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoggingScalarFieldEnum | LoggingScalarFieldEnum[]
  }

  /**
   * Constants without action
   */
  export type ConstantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constants
     */
    select?: ConstantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constants
     */
    omit?: ConstantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstantsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    phone_number: 'phone_number',
    region: 'region',
    role: 'role',
    email: 'email',
    password: 'password',
    mfa_enabled: 'mfa_enabled',
    created_by: 'created_by',
    created_date: 'created_date',
    modified_by: 'modified_by',
    modified_date: 'modified_date',
    last_login: 'last_login'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const EmployeesScalarFieldEnum: {
    user_id: 'user_id',
    company_id: 'company_id'
  };

  export type EmployeesScalarFieldEnum = (typeof EmployeesScalarFieldEnum)[keyof typeof EmployeesScalarFieldEnum]


  export const CompaniesScalarFieldEnum: {
    company_id: 'company_id',
    company_name: 'company_name',
    region: 'region',
    created_by: 'created_by',
    created_date: 'created_date',
    modified_by: 'modified_by',
    modified_date: 'modified_date'
  };

  export type CompaniesScalarFieldEnum = (typeof CompaniesScalarFieldEnum)[keyof typeof CompaniesScalarFieldEnum]


  export const AssetsScalarFieldEnum: {
    asset_id: 'asset_id',
    asset_type_id: 'asset_type_id',
    description: 'description',
    region: 'region',
    quantity: 'quantity',
    unit_of_measurement: 'unit_of_measurement',
    unit_value: 'unit_value',
    total_value: 'total_value',
    income_generated: 'income_generated',
    valuation_method: 'valuation_method',
    valuation_date: 'valuation_date',
    source_platform: 'source_platform',
    created_by: 'created_by',
    created_date: 'created_date',
    modified_by: 'modified_by',
    modified_date: 'modified_date'
  };

  export type AssetsScalarFieldEnum = (typeof AssetsScalarFieldEnum)[keyof typeof AssetsScalarFieldEnum]


  export const CandidateAssetOwnershipScalarFieldEnum: {
    id: 'id',
    asset_id: 'asset_id',
    candidate_id: 'candidate_id',
    ownership_percentage: 'ownership_percentage'
  };

  export type CandidateAssetOwnershipScalarFieldEnum = (typeof CandidateAssetOwnershipScalarFieldEnum)[keyof typeof CandidateAssetOwnershipScalarFieldEnum]


  export const CandidatesScalarFieldEnum: {
    candidate_id: 'candidate_id',
    name: 'name',
    region: 'region',
    phone_number: 'phone_number',
    email: 'email',
    address: 'address',
    dob: 'dob',
    country_name: 'country_name',
    created_by: 'created_by',
    created_date: 'created_date',
    modified_by: 'modified_by',
    modified_date: 'modified_date'
  };

  export type CandidatesScalarFieldEnum = (typeof CandidatesScalarFieldEnum)[keyof typeof CandidatesScalarFieldEnum]


  export const LoggingScalarFieldEnum: {
    user_activity_id: 'user_activity_id',
    user_id: 'user_id',
    action_type: 'action_type',
    activity_time: 'activity_time',
    created_by: 'created_by',
    created_date: 'created_date',
    modified_by: 'modified_by',
    modified_date: 'modified_date'
  };

  export type LoggingScalarFieldEnum = (typeof LoggingScalarFieldEnum)[keyof typeof LoggingScalarFieldEnum]


  export const ViewsScalarFieldEnum: {
    view_id: 'view_id',
    property_id: 'property_id',
    viewed_by_whom: 'viewed_by_whom',
    viewed_at: 'viewed_at'
  };

  export type ViewsScalarFieldEnum = (typeof ViewsScalarFieldEnum)[keyof typeof ViewsScalarFieldEnum]


  export const BookmarksScalarFieldEnum: {
    bookmark_id: 'bookmark_id',
    property_id: 'property_id',
    bookmarked_by_whom: 'bookmarked_by_whom',
    bookmarked_at: 'bookmarked_at'
  };

  export type BookmarksScalarFieldEnum = (typeof BookmarksScalarFieldEnum)[keyof typeof BookmarksScalarFieldEnum]


  export const ConstantsScalarFieldEnum: {
    const_id: 'const_id',
    code: 'code',
    description: 'description'
  };

  export type ConstantsScalarFieldEnum = (typeof ConstantsScalarFieldEnum)[keyof typeof ConstantsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_id?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    phone_number?: StringNullableFilter<"Users"> | string | null
    region?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    mfa_enabled?: BoolFilter<"Users"> | boolean
    created_by?: StringNullableFilter<"Users"> | string | null
    created_date?: DateTimeFilter<"Users"> | Date | string
    modified_by?: StringNullableFilter<"Users"> | string | null
    modified_date?: DateTimeNullableFilter<"Users"> | Date | string | null
    last_login?: DateTimeNullableFilter<"Users"> | Date | string | null
    employee?: XOR<EmployeesNullableScalarRelationFilter, EmployeesWhereInput> | null
    userlogs?: LoggingListRelationFilter
    roles?: XOR<ConstantsScalarRelationFilter, ConstantsWhereInput>
  }

  export type UsersOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    region?: SortOrder
    role?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mfa_enabled?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrder
    modified_by?: SortOrderInput | SortOrder
    modified_date?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    employee?: EmployeesOrderByWithRelationInput
    userlogs?: LoggingOrderByRelationAggregateInput
    roles?: ConstantsOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    phone_number?: StringNullableFilter<"Users"> | string | null
    region?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    mfa_enabled?: BoolFilter<"Users"> | boolean
    created_by?: StringNullableFilter<"Users"> | string | null
    created_date?: DateTimeFilter<"Users"> | Date | string
    modified_by?: StringNullableFilter<"Users"> | string | null
    modified_date?: DateTimeNullableFilter<"Users"> | Date | string | null
    last_login?: DateTimeNullableFilter<"Users"> | Date | string | null
    employee?: XOR<EmployeesNullableScalarRelationFilter, EmployeesWhereInput> | null
    userlogs?: LoggingListRelationFilter
    roles?: XOR<ConstantsScalarRelationFilter, ConstantsWhereInput>
  }, "user_id" | "email">

  export type UsersOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    region?: SortOrder
    role?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mfa_enabled?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrder
    modified_by?: SortOrderInput | SortOrder
    modified_date?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    phone_number?: StringNullableWithAggregatesFilter<"Users"> | string | null
    region?: StringWithAggregatesFilter<"Users"> | string
    role?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    mfa_enabled?: BoolWithAggregatesFilter<"Users"> | boolean
    created_by?: StringNullableWithAggregatesFilter<"Users"> | string | null
    created_date?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    modified_by?: StringNullableWithAggregatesFilter<"Users"> | string | null
    modified_date?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    last_login?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
  }

  export type EmployeesWhereInput = {
    AND?: EmployeesWhereInput | EmployeesWhereInput[]
    OR?: EmployeesWhereInput[]
    NOT?: EmployeesWhereInput | EmployeesWhereInput[]
    user_id?: StringFilter<"Employees"> | string
    company_id?: StringFilter<"Employees"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    company?: XOR<CompaniesScalarRelationFilter, CompaniesWhereInput>
  }

  export type EmployeesOrderByWithRelationInput = {
    user_id?: SortOrder
    company_id?: SortOrder
    user?: UsersOrderByWithRelationInput
    company?: CompaniesOrderByWithRelationInput
  }

  export type EmployeesWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: EmployeesWhereInput | EmployeesWhereInput[]
    OR?: EmployeesWhereInput[]
    NOT?: EmployeesWhereInput | EmployeesWhereInput[]
    company_id?: StringFilter<"Employees"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    company?: XOR<CompaniesScalarRelationFilter, CompaniesWhereInput>
  }, "user_id">

  export type EmployeesOrderByWithAggregationInput = {
    user_id?: SortOrder
    company_id?: SortOrder
    _count?: EmployeesCountOrderByAggregateInput
    _max?: EmployeesMaxOrderByAggregateInput
    _min?: EmployeesMinOrderByAggregateInput
  }

  export type EmployeesScalarWhereWithAggregatesInput = {
    AND?: EmployeesScalarWhereWithAggregatesInput | EmployeesScalarWhereWithAggregatesInput[]
    OR?: EmployeesScalarWhereWithAggregatesInput[]
    NOT?: EmployeesScalarWhereWithAggregatesInput | EmployeesScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"Employees"> | string
    company_id?: StringWithAggregatesFilter<"Employees"> | string
  }

  export type CompaniesWhereInput = {
    AND?: CompaniesWhereInput | CompaniesWhereInput[]
    OR?: CompaniesWhereInput[]
    NOT?: CompaniesWhereInput | CompaniesWhereInput[]
    company_id?: StringFilter<"Companies"> | string
    company_name?: StringFilter<"Companies"> | string
    region?: StringFilter<"Companies"> | string
    created_by?: StringNullableFilter<"Companies"> | string | null
    created_date?: DateTimeFilter<"Companies"> | Date | string
    modified_by?: StringNullableFilter<"Companies"> | string | null
    modified_date?: DateTimeFilter<"Companies"> | Date | string
    admins?: EmployeesListRelationFilter
  }

  export type CompaniesOrderByWithRelationInput = {
    company_id?: SortOrder
    company_name?: SortOrder
    region?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrder
    modified_by?: SortOrderInput | SortOrder
    modified_date?: SortOrder
    admins?: EmployeesOrderByRelationAggregateInput
  }

  export type CompaniesWhereUniqueInput = Prisma.AtLeast<{
    company_id?: string
    AND?: CompaniesWhereInput | CompaniesWhereInput[]
    OR?: CompaniesWhereInput[]
    NOT?: CompaniesWhereInput | CompaniesWhereInput[]
    company_name?: StringFilter<"Companies"> | string
    region?: StringFilter<"Companies"> | string
    created_by?: StringNullableFilter<"Companies"> | string | null
    created_date?: DateTimeFilter<"Companies"> | Date | string
    modified_by?: StringNullableFilter<"Companies"> | string | null
    modified_date?: DateTimeFilter<"Companies"> | Date | string
    admins?: EmployeesListRelationFilter
  }, "company_id">

  export type CompaniesOrderByWithAggregationInput = {
    company_id?: SortOrder
    company_name?: SortOrder
    region?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrder
    modified_by?: SortOrderInput | SortOrder
    modified_date?: SortOrder
    _count?: CompaniesCountOrderByAggregateInput
    _max?: CompaniesMaxOrderByAggregateInput
    _min?: CompaniesMinOrderByAggregateInput
  }

  export type CompaniesScalarWhereWithAggregatesInput = {
    AND?: CompaniesScalarWhereWithAggregatesInput | CompaniesScalarWhereWithAggregatesInput[]
    OR?: CompaniesScalarWhereWithAggregatesInput[]
    NOT?: CompaniesScalarWhereWithAggregatesInput | CompaniesScalarWhereWithAggregatesInput[]
    company_id?: StringWithAggregatesFilter<"Companies"> | string
    company_name?: StringWithAggregatesFilter<"Companies"> | string
    region?: StringWithAggregatesFilter<"Companies"> | string
    created_by?: StringNullableWithAggregatesFilter<"Companies"> | string | null
    created_date?: DateTimeWithAggregatesFilter<"Companies"> | Date | string
    modified_by?: StringNullableWithAggregatesFilter<"Companies"> | string | null
    modified_date?: DateTimeWithAggregatesFilter<"Companies"> | Date | string
  }

  export type AssetsWhereInput = {
    AND?: AssetsWhereInput | AssetsWhereInput[]
    OR?: AssetsWhereInput[]
    NOT?: AssetsWhereInput | AssetsWhereInput[]
    asset_id?: StringFilter<"Assets"> | string
    asset_type_id?: StringFilter<"Assets"> | string
    description?: StringNullableFilter<"Assets"> | string | null
    region?: StringNullableFilter<"Assets"> | string | null
    quantity?: FloatNullableFilter<"Assets"> | number | null
    unit_of_measurement?: StringNullableFilter<"Assets"> | string | null
    unit_value?: FloatNullableFilter<"Assets"> | number | null
    total_value?: FloatNullableFilter<"Assets"> | number | null
    income_generated?: FloatNullableFilter<"Assets"> | number | null
    valuation_method?: StringFilter<"Assets"> | string
    valuation_date?: DateTimeFilter<"Assets"> | Date | string
    source_platform?: StringNullableFilter<"Assets"> | string | null
    created_by?: StringNullableFilter<"Assets"> | string | null
    created_date?: DateTimeFilter<"Assets"> | Date | string
    modified_by?: StringNullableFilter<"Assets"> | string | null
    modified_date?: DateTimeFilter<"Assets"> | Date | string
    assetType?: XOR<ConstantsScalarRelationFilter, ConstantsWhereInput>
    owners?: CandidateAssetOwnershipListRelationFilter
    Views?: ViewsListRelationFilter
    Bookmarks?: BookmarksListRelationFilter
  }

  export type AssetsOrderByWithRelationInput = {
    asset_id?: SortOrder
    asset_type_id?: SortOrder
    description?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    unit_of_measurement?: SortOrderInput | SortOrder
    unit_value?: SortOrderInput | SortOrder
    total_value?: SortOrderInput | SortOrder
    income_generated?: SortOrderInput | SortOrder
    valuation_method?: SortOrder
    valuation_date?: SortOrder
    source_platform?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrder
    modified_by?: SortOrderInput | SortOrder
    modified_date?: SortOrder
    assetType?: ConstantsOrderByWithRelationInput
    owners?: CandidateAssetOwnershipOrderByRelationAggregateInput
    Views?: ViewsOrderByRelationAggregateInput
    Bookmarks?: BookmarksOrderByRelationAggregateInput
  }

  export type AssetsWhereUniqueInput = Prisma.AtLeast<{
    asset_id?: string
    AND?: AssetsWhereInput | AssetsWhereInput[]
    OR?: AssetsWhereInput[]
    NOT?: AssetsWhereInput | AssetsWhereInput[]
    asset_type_id?: StringFilter<"Assets"> | string
    description?: StringNullableFilter<"Assets"> | string | null
    region?: StringNullableFilter<"Assets"> | string | null
    quantity?: FloatNullableFilter<"Assets"> | number | null
    unit_of_measurement?: StringNullableFilter<"Assets"> | string | null
    unit_value?: FloatNullableFilter<"Assets"> | number | null
    total_value?: FloatNullableFilter<"Assets"> | number | null
    income_generated?: FloatNullableFilter<"Assets"> | number | null
    valuation_method?: StringFilter<"Assets"> | string
    valuation_date?: DateTimeFilter<"Assets"> | Date | string
    source_platform?: StringNullableFilter<"Assets"> | string | null
    created_by?: StringNullableFilter<"Assets"> | string | null
    created_date?: DateTimeFilter<"Assets"> | Date | string
    modified_by?: StringNullableFilter<"Assets"> | string | null
    modified_date?: DateTimeFilter<"Assets"> | Date | string
    assetType?: XOR<ConstantsScalarRelationFilter, ConstantsWhereInput>
    owners?: CandidateAssetOwnershipListRelationFilter
    Views?: ViewsListRelationFilter
    Bookmarks?: BookmarksListRelationFilter
  }, "asset_id">

  export type AssetsOrderByWithAggregationInput = {
    asset_id?: SortOrder
    asset_type_id?: SortOrder
    description?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    unit_of_measurement?: SortOrderInput | SortOrder
    unit_value?: SortOrderInput | SortOrder
    total_value?: SortOrderInput | SortOrder
    income_generated?: SortOrderInput | SortOrder
    valuation_method?: SortOrder
    valuation_date?: SortOrder
    source_platform?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrder
    modified_by?: SortOrderInput | SortOrder
    modified_date?: SortOrder
    _count?: AssetsCountOrderByAggregateInput
    _avg?: AssetsAvgOrderByAggregateInput
    _max?: AssetsMaxOrderByAggregateInput
    _min?: AssetsMinOrderByAggregateInput
    _sum?: AssetsSumOrderByAggregateInput
  }

  export type AssetsScalarWhereWithAggregatesInput = {
    AND?: AssetsScalarWhereWithAggregatesInput | AssetsScalarWhereWithAggregatesInput[]
    OR?: AssetsScalarWhereWithAggregatesInput[]
    NOT?: AssetsScalarWhereWithAggregatesInput | AssetsScalarWhereWithAggregatesInput[]
    asset_id?: StringWithAggregatesFilter<"Assets"> | string
    asset_type_id?: StringWithAggregatesFilter<"Assets"> | string
    description?: StringNullableWithAggregatesFilter<"Assets"> | string | null
    region?: StringNullableWithAggregatesFilter<"Assets"> | string | null
    quantity?: FloatNullableWithAggregatesFilter<"Assets"> | number | null
    unit_of_measurement?: StringNullableWithAggregatesFilter<"Assets"> | string | null
    unit_value?: FloatNullableWithAggregatesFilter<"Assets"> | number | null
    total_value?: FloatNullableWithAggregatesFilter<"Assets"> | number | null
    income_generated?: FloatNullableWithAggregatesFilter<"Assets"> | number | null
    valuation_method?: StringWithAggregatesFilter<"Assets"> | string
    valuation_date?: DateTimeWithAggregatesFilter<"Assets"> | Date | string
    source_platform?: StringNullableWithAggregatesFilter<"Assets"> | string | null
    created_by?: StringNullableWithAggregatesFilter<"Assets"> | string | null
    created_date?: DateTimeWithAggregatesFilter<"Assets"> | Date | string
    modified_by?: StringNullableWithAggregatesFilter<"Assets"> | string | null
    modified_date?: DateTimeWithAggregatesFilter<"Assets"> | Date | string
  }

  export type CandidateAssetOwnershipWhereInput = {
    AND?: CandidateAssetOwnershipWhereInput | CandidateAssetOwnershipWhereInput[]
    OR?: CandidateAssetOwnershipWhereInput[]
    NOT?: CandidateAssetOwnershipWhereInput | CandidateAssetOwnershipWhereInput[]
    id?: StringFilter<"CandidateAssetOwnership"> | string
    asset_id?: StringFilter<"CandidateAssetOwnership"> | string
    candidate_id?: StringFilter<"CandidateAssetOwnership"> | string
    ownership_percentage?: FloatFilter<"CandidateAssetOwnership"> | number
    asset?: XOR<AssetsScalarRelationFilter, AssetsWhereInput>
    candidate?: XOR<CandidatesScalarRelationFilter, CandidatesWhereInput>
  }

  export type CandidateAssetOwnershipOrderByWithRelationInput = {
    id?: SortOrder
    asset_id?: SortOrder
    candidate_id?: SortOrder
    ownership_percentage?: SortOrder
    asset?: AssetsOrderByWithRelationInput
    candidate?: CandidatesOrderByWithRelationInput
  }

  export type CandidateAssetOwnershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CandidateAssetOwnershipWhereInput | CandidateAssetOwnershipWhereInput[]
    OR?: CandidateAssetOwnershipWhereInput[]
    NOT?: CandidateAssetOwnershipWhereInput | CandidateAssetOwnershipWhereInput[]
    asset_id?: StringFilter<"CandidateAssetOwnership"> | string
    candidate_id?: StringFilter<"CandidateAssetOwnership"> | string
    ownership_percentage?: FloatFilter<"CandidateAssetOwnership"> | number
    asset?: XOR<AssetsScalarRelationFilter, AssetsWhereInput>
    candidate?: XOR<CandidatesScalarRelationFilter, CandidatesWhereInput>
  }, "id">

  export type CandidateAssetOwnershipOrderByWithAggregationInput = {
    id?: SortOrder
    asset_id?: SortOrder
    candidate_id?: SortOrder
    ownership_percentage?: SortOrder
    _count?: CandidateAssetOwnershipCountOrderByAggregateInput
    _avg?: CandidateAssetOwnershipAvgOrderByAggregateInput
    _max?: CandidateAssetOwnershipMaxOrderByAggregateInput
    _min?: CandidateAssetOwnershipMinOrderByAggregateInput
    _sum?: CandidateAssetOwnershipSumOrderByAggregateInput
  }

  export type CandidateAssetOwnershipScalarWhereWithAggregatesInput = {
    AND?: CandidateAssetOwnershipScalarWhereWithAggregatesInput | CandidateAssetOwnershipScalarWhereWithAggregatesInput[]
    OR?: CandidateAssetOwnershipScalarWhereWithAggregatesInput[]
    NOT?: CandidateAssetOwnershipScalarWhereWithAggregatesInput | CandidateAssetOwnershipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CandidateAssetOwnership"> | string
    asset_id?: StringWithAggregatesFilter<"CandidateAssetOwnership"> | string
    candidate_id?: StringWithAggregatesFilter<"CandidateAssetOwnership"> | string
    ownership_percentage?: FloatWithAggregatesFilter<"CandidateAssetOwnership"> | number
  }

  export type CandidatesWhereInput = {
    AND?: CandidatesWhereInput | CandidatesWhereInput[]
    OR?: CandidatesWhereInput[]
    NOT?: CandidatesWhereInput | CandidatesWhereInput[]
    candidate_id?: StringFilter<"Candidates"> | string
    name?: StringFilter<"Candidates"> | string
    region?: StringFilter<"Candidates"> | string
    phone_number?: StringFilter<"Candidates"> | string
    email?: StringFilter<"Candidates"> | string
    address?: StringFilter<"Candidates"> | string
    dob?: DateTimeFilter<"Candidates"> | Date | string
    country_name?: StringFilter<"Candidates"> | string
    created_by?: StringNullableFilter<"Candidates"> | string | null
    created_date?: DateTimeFilter<"Candidates"> | Date | string
    modified_by?: StringNullableFilter<"Candidates"> | string | null
    modified_date?: DateTimeFilter<"Candidates"> | Date | string
    assets?: CandidateAssetOwnershipListRelationFilter
  }

  export type CandidatesOrderByWithRelationInput = {
    candidate_id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    address?: SortOrder
    dob?: SortOrder
    country_name?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrder
    modified_by?: SortOrderInput | SortOrder
    modified_date?: SortOrder
    assets?: CandidateAssetOwnershipOrderByRelationAggregateInput
  }

  export type CandidatesWhereUniqueInput = Prisma.AtLeast<{
    candidate_id?: string
    AND?: CandidatesWhereInput | CandidatesWhereInput[]
    OR?: CandidatesWhereInput[]
    NOT?: CandidatesWhereInput | CandidatesWhereInput[]
    name?: StringFilter<"Candidates"> | string
    region?: StringFilter<"Candidates"> | string
    phone_number?: StringFilter<"Candidates"> | string
    email?: StringFilter<"Candidates"> | string
    address?: StringFilter<"Candidates"> | string
    dob?: DateTimeFilter<"Candidates"> | Date | string
    country_name?: StringFilter<"Candidates"> | string
    created_by?: StringNullableFilter<"Candidates"> | string | null
    created_date?: DateTimeFilter<"Candidates"> | Date | string
    modified_by?: StringNullableFilter<"Candidates"> | string | null
    modified_date?: DateTimeFilter<"Candidates"> | Date | string
    assets?: CandidateAssetOwnershipListRelationFilter
  }, "candidate_id">

  export type CandidatesOrderByWithAggregationInput = {
    candidate_id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    address?: SortOrder
    dob?: SortOrder
    country_name?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrder
    modified_by?: SortOrderInput | SortOrder
    modified_date?: SortOrder
    _count?: CandidatesCountOrderByAggregateInput
    _max?: CandidatesMaxOrderByAggregateInput
    _min?: CandidatesMinOrderByAggregateInput
  }

  export type CandidatesScalarWhereWithAggregatesInput = {
    AND?: CandidatesScalarWhereWithAggregatesInput | CandidatesScalarWhereWithAggregatesInput[]
    OR?: CandidatesScalarWhereWithAggregatesInput[]
    NOT?: CandidatesScalarWhereWithAggregatesInput | CandidatesScalarWhereWithAggregatesInput[]
    candidate_id?: StringWithAggregatesFilter<"Candidates"> | string
    name?: StringWithAggregatesFilter<"Candidates"> | string
    region?: StringWithAggregatesFilter<"Candidates"> | string
    phone_number?: StringWithAggregatesFilter<"Candidates"> | string
    email?: StringWithAggregatesFilter<"Candidates"> | string
    address?: StringWithAggregatesFilter<"Candidates"> | string
    dob?: DateTimeWithAggregatesFilter<"Candidates"> | Date | string
    country_name?: StringWithAggregatesFilter<"Candidates"> | string
    created_by?: StringNullableWithAggregatesFilter<"Candidates"> | string | null
    created_date?: DateTimeWithAggregatesFilter<"Candidates"> | Date | string
    modified_by?: StringNullableWithAggregatesFilter<"Candidates"> | string | null
    modified_date?: DateTimeWithAggregatesFilter<"Candidates"> | Date | string
  }

  export type LoggingWhereInput = {
    AND?: LoggingWhereInput | LoggingWhereInput[]
    OR?: LoggingWhereInput[]
    NOT?: LoggingWhereInput | LoggingWhereInput[]
    user_activity_id?: StringFilter<"Logging"> | string
    user_id?: StringFilter<"Logging"> | string
    action_type?: StringFilter<"Logging"> | string
    activity_time?: DateTimeFilter<"Logging"> | Date | string
    created_by?: StringNullableFilter<"Logging"> | string | null
    created_date?: DateTimeFilter<"Logging"> | Date | string
    modified_by?: StringNullableFilter<"Logging"> | string | null
    modified_date?: DateTimeFilter<"Logging"> | Date | string
    action_name?: XOR<ConstantsScalarRelationFilter, ConstantsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type LoggingOrderByWithRelationInput = {
    user_activity_id?: SortOrder
    user_id?: SortOrder
    action_type?: SortOrder
    activity_time?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrder
    modified_by?: SortOrderInput | SortOrder
    modified_date?: SortOrder
    action_name?: ConstantsOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type LoggingWhereUniqueInput = Prisma.AtLeast<{
    user_activity_id?: string
    AND?: LoggingWhereInput | LoggingWhereInput[]
    OR?: LoggingWhereInput[]
    NOT?: LoggingWhereInput | LoggingWhereInput[]
    user_id?: StringFilter<"Logging"> | string
    action_type?: StringFilter<"Logging"> | string
    activity_time?: DateTimeFilter<"Logging"> | Date | string
    created_by?: StringNullableFilter<"Logging"> | string | null
    created_date?: DateTimeFilter<"Logging"> | Date | string
    modified_by?: StringNullableFilter<"Logging"> | string | null
    modified_date?: DateTimeFilter<"Logging"> | Date | string
    action_name?: XOR<ConstantsScalarRelationFilter, ConstantsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "user_activity_id">

  export type LoggingOrderByWithAggregationInput = {
    user_activity_id?: SortOrder
    user_id?: SortOrder
    action_type?: SortOrder
    activity_time?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrder
    modified_by?: SortOrderInput | SortOrder
    modified_date?: SortOrder
    _count?: LoggingCountOrderByAggregateInput
    _max?: LoggingMaxOrderByAggregateInput
    _min?: LoggingMinOrderByAggregateInput
  }

  export type LoggingScalarWhereWithAggregatesInput = {
    AND?: LoggingScalarWhereWithAggregatesInput | LoggingScalarWhereWithAggregatesInput[]
    OR?: LoggingScalarWhereWithAggregatesInput[]
    NOT?: LoggingScalarWhereWithAggregatesInput | LoggingScalarWhereWithAggregatesInput[]
    user_activity_id?: StringWithAggregatesFilter<"Logging"> | string
    user_id?: StringWithAggregatesFilter<"Logging"> | string
    action_type?: StringWithAggregatesFilter<"Logging"> | string
    activity_time?: DateTimeWithAggregatesFilter<"Logging"> | Date | string
    created_by?: StringNullableWithAggregatesFilter<"Logging"> | string | null
    created_date?: DateTimeWithAggregatesFilter<"Logging"> | Date | string
    modified_by?: StringNullableWithAggregatesFilter<"Logging"> | string | null
    modified_date?: DateTimeWithAggregatesFilter<"Logging"> | Date | string
  }

  export type ViewsWhereInput = {
    AND?: ViewsWhereInput | ViewsWhereInput[]
    OR?: ViewsWhereInput[]
    NOT?: ViewsWhereInput | ViewsWhereInput[]
    view_id?: StringFilter<"Views"> | string
    property_id?: StringFilter<"Views"> | string
    viewed_by_whom?: StringFilter<"Views"> | string
    viewed_at?: DateTimeFilter<"Views"> | Date | string
    property?: XOR<AssetsScalarRelationFilter, AssetsWhereInput>
  }

  export type ViewsOrderByWithRelationInput = {
    view_id?: SortOrder
    property_id?: SortOrder
    viewed_by_whom?: SortOrder
    viewed_at?: SortOrder
    property?: AssetsOrderByWithRelationInput
  }

  export type ViewsWhereUniqueInput = Prisma.AtLeast<{
    view_id?: string
    AND?: ViewsWhereInput | ViewsWhereInput[]
    OR?: ViewsWhereInput[]
    NOT?: ViewsWhereInput | ViewsWhereInput[]
    property_id?: StringFilter<"Views"> | string
    viewed_by_whom?: StringFilter<"Views"> | string
    viewed_at?: DateTimeFilter<"Views"> | Date | string
    property?: XOR<AssetsScalarRelationFilter, AssetsWhereInput>
  }, "view_id">

  export type ViewsOrderByWithAggregationInput = {
    view_id?: SortOrder
    property_id?: SortOrder
    viewed_by_whom?: SortOrder
    viewed_at?: SortOrder
    _count?: ViewsCountOrderByAggregateInput
    _max?: ViewsMaxOrderByAggregateInput
    _min?: ViewsMinOrderByAggregateInput
  }

  export type ViewsScalarWhereWithAggregatesInput = {
    AND?: ViewsScalarWhereWithAggregatesInput | ViewsScalarWhereWithAggregatesInput[]
    OR?: ViewsScalarWhereWithAggregatesInput[]
    NOT?: ViewsScalarWhereWithAggregatesInput | ViewsScalarWhereWithAggregatesInput[]
    view_id?: StringWithAggregatesFilter<"Views"> | string
    property_id?: StringWithAggregatesFilter<"Views"> | string
    viewed_by_whom?: StringWithAggregatesFilter<"Views"> | string
    viewed_at?: DateTimeWithAggregatesFilter<"Views"> | Date | string
  }

  export type BookmarksWhereInput = {
    AND?: BookmarksWhereInput | BookmarksWhereInput[]
    OR?: BookmarksWhereInput[]
    NOT?: BookmarksWhereInput | BookmarksWhereInput[]
    bookmark_id?: StringFilter<"Bookmarks"> | string
    property_id?: StringFilter<"Bookmarks"> | string
    bookmarked_by_whom?: StringFilter<"Bookmarks"> | string
    bookmarked_at?: DateTimeFilter<"Bookmarks"> | Date | string
    Properties?: XOR<AssetsScalarRelationFilter, AssetsWhereInput>
  }

  export type BookmarksOrderByWithRelationInput = {
    bookmark_id?: SortOrder
    property_id?: SortOrder
    bookmarked_by_whom?: SortOrder
    bookmarked_at?: SortOrder
    Properties?: AssetsOrderByWithRelationInput
  }

  export type BookmarksWhereUniqueInput = Prisma.AtLeast<{
    bookmark_id?: string
    AND?: BookmarksWhereInput | BookmarksWhereInput[]
    OR?: BookmarksWhereInput[]
    NOT?: BookmarksWhereInput | BookmarksWhereInput[]
    property_id?: StringFilter<"Bookmarks"> | string
    bookmarked_by_whom?: StringFilter<"Bookmarks"> | string
    bookmarked_at?: DateTimeFilter<"Bookmarks"> | Date | string
    Properties?: XOR<AssetsScalarRelationFilter, AssetsWhereInput>
  }, "bookmark_id">

  export type BookmarksOrderByWithAggregationInput = {
    bookmark_id?: SortOrder
    property_id?: SortOrder
    bookmarked_by_whom?: SortOrder
    bookmarked_at?: SortOrder
    _count?: BookmarksCountOrderByAggregateInput
    _max?: BookmarksMaxOrderByAggregateInput
    _min?: BookmarksMinOrderByAggregateInput
  }

  export type BookmarksScalarWhereWithAggregatesInput = {
    AND?: BookmarksScalarWhereWithAggregatesInput | BookmarksScalarWhereWithAggregatesInput[]
    OR?: BookmarksScalarWhereWithAggregatesInput[]
    NOT?: BookmarksScalarWhereWithAggregatesInput | BookmarksScalarWhereWithAggregatesInput[]
    bookmark_id?: StringWithAggregatesFilter<"Bookmarks"> | string
    property_id?: StringWithAggregatesFilter<"Bookmarks"> | string
    bookmarked_by_whom?: StringWithAggregatesFilter<"Bookmarks"> | string
    bookmarked_at?: DateTimeWithAggregatesFilter<"Bookmarks"> | Date | string
  }

  export type ConstantsWhereInput = {
    AND?: ConstantsWhereInput | ConstantsWhereInput[]
    OR?: ConstantsWhereInput[]
    NOT?: ConstantsWhereInput | ConstantsWhereInput[]
    const_id?: StringFilter<"Constants"> | string
    code?: StringFilter<"Constants"> | string
    description?: StringNullableFilter<"Constants"> | string | null
    assets?: AssetsListRelationFilter
    Users?: UsersListRelationFilter
    Logging?: LoggingListRelationFilter
  }

  export type ConstantsOrderByWithRelationInput = {
    const_id?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    assets?: AssetsOrderByRelationAggregateInput
    Users?: UsersOrderByRelationAggregateInput
    Logging?: LoggingOrderByRelationAggregateInput
  }

  export type ConstantsWhereUniqueInput = Prisma.AtLeast<{
    const_id?: string
    code?: string
    AND?: ConstantsWhereInput | ConstantsWhereInput[]
    OR?: ConstantsWhereInput[]
    NOT?: ConstantsWhereInput | ConstantsWhereInput[]
    description?: StringNullableFilter<"Constants"> | string | null
    assets?: AssetsListRelationFilter
    Users?: UsersListRelationFilter
    Logging?: LoggingListRelationFilter
  }, "const_id" | "code">

  export type ConstantsOrderByWithAggregationInput = {
    const_id?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: ConstantsCountOrderByAggregateInput
    _max?: ConstantsMaxOrderByAggregateInput
    _min?: ConstantsMinOrderByAggregateInput
  }

  export type ConstantsScalarWhereWithAggregatesInput = {
    AND?: ConstantsScalarWhereWithAggregatesInput | ConstantsScalarWhereWithAggregatesInput[]
    OR?: ConstantsScalarWhereWithAggregatesInput[]
    NOT?: ConstantsScalarWhereWithAggregatesInput | ConstantsScalarWhereWithAggregatesInput[]
    const_id?: StringWithAggregatesFilter<"Constants"> | string
    code?: StringWithAggregatesFilter<"Constants"> | string
    description?: StringNullableWithAggregatesFilter<"Constants"> | string | null
  }

  export type UsersCreateInput = {
    user_id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    password: string
    mfa_enabled: boolean
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    last_login?: Date | string | null
    employee?: EmployeesCreateNestedOneWithoutUserInput
    userlogs?: LoggingCreateNestedManyWithoutUserInput
    roles: ConstantsCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    user_id?: string
    name: string
    phone_number?: string | null
    region: string
    role: string
    email: string
    password: string
    mfa_enabled: boolean
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    last_login?: Date | string | null
    employee?: EmployeesUncheckedCreateNestedOneWithoutUserInput
    userlogs?: LoggingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee?: EmployeesUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUpdateManyWithoutUserNestedInput
    roles?: ConstantsUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee?: EmployeesUncheckedUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    user_id?: string
    name: string
    phone_number?: string | null
    region: string
    role: string
    email: string
    password: string
    mfa_enabled: boolean
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    last_login?: Date | string | null
  }

  export type UsersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeesCreateInput = {
    user: UsersCreateNestedOneWithoutEmployeeInput
    company: CompaniesCreateNestedOneWithoutAdminsInput
  }

  export type EmployeesUncheckedCreateInput = {
    user_id: string
    company_id: string
  }

  export type EmployeesUpdateInput = {
    user?: UsersUpdateOneRequiredWithoutEmployeeNestedInput
    company?: CompaniesUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type EmployeesUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeesCreateManyInput = {
    user_id: string
    company_id: string
  }

  export type EmployeesUpdateManyMutationInput = {

  }

  export type EmployeesUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type CompaniesCreateInput = {
    company_id?: string
    company_name: string
    region: string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    admins?: EmployeesCreateNestedManyWithoutCompanyInput
  }

  export type CompaniesUncheckedCreateInput = {
    company_id?: string
    company_name: string
    region: string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    admins?: EmployeesUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompaniesUpdateInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: EmployeesUpdateManyWithoutCompanyNestedInput
  }

  export type CompaniesUncheckedUpdateInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: EmployeesUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompaniesCreateManyInput = {
    company_id?: string
    company_name: string
    region: string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type CompaniesUpdateManyMutationInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompaniesUncheckedUpdateManyInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetsCreateInput = {
    asset_id?: string
    description?: string | null
    region?: string | null
    quantity?: number | null
    unit_of_measurement?: string | null
    unit_value?: number | null
    total_value?: number | null
    income_generated?: number | null
    valuation_method: string
    valuation_date: Date | string
    source_platform?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    assetType: ConstantsCreateNestedOneWithoutAssetsInput
    owners?: CandidateAssetOwnershipCreateNestedManyWithoutAssetInput
    Views?: ViewsCreateNestedManyWithoutPropertyInput
    Bookmarks?: BookmarksCreateNestedManyWithoutPropertiesInput
  }

  export type AssetsUncheckedCreateInput = {
    asset_id?: string
    asset_type_id: string
    description?: string | null
    region?: string | null
    quantity?: number | null
    unit_of_measurement?: string | null
    unit_value?: number | null
    total_value?: number | null
    income_generated?: number | null
    valuation_method: string
    valuation_date: Date | string
    source_platform?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    owners?: CandidateAssetOwnershipUncheckedCreateNestedManyWithoutAssetInput
    Views?: ViewsUncheckedCreateNestedManyWithoutPropertyInput
    Bookmarks?: BookmarksUncheckedCreateNestedManyWithoutPropertiesInput
  }

  export type AssetsUpdateInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_of_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    unit_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    income_generated?: NullableFloatFieldUpdateOperationsInput | number | null
    valuation_method?: StringFieldUpdateOperationsInput | string
    valuation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source_platform?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assetType?: ConstantsUpdateOneRequiredWithoutAssetsNestedInput
    owners?: CandidateAssetOwnershipUpdateManyWithoutAssetNestedInput
    Views?: ViewsUpdateManyWithoutPropertyNestedInput
    Bookmarks?: BookmarksUpdateManyWithoutPropertiesNestedInput
  }

  export type AssetsUncheckedUpdateInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    asset_type_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_of_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    unit_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    income_generated?: NullableFloatFieldUpdateOperationsInput | number | null
    valuation_method?: StringFieldUpdateOperationsInput | string
    valuation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source_platform?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: CandidateAssetOwnershipUncheckedUpdateManyWithoutAssetNestedInput
    Views?: ViewsUncheckedUpdateManyWithoutPropertyNestedInput
    Bookmarks?: BookmarksUncheckedUpdateManyWithoutPropertiesNestedInput
  }

  export type AssetsCreateManyInput = {
    asset_id?: string
    asset_type_id: string
    description?: string | null
    region?: string | null
    quantity?: number | null
    unit_of_measurement?: string | null
    unit_value?: number | null
    total_value?: number | null
    income_generated?: number | null
    valuation_method: string
    valuation_date: Date | string
    source_platform?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type AssetsUpdateManyMutationInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_of_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    unit_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    income_generated?: NullableFloatFieldUpdateOperationsInput | number | null
    valuation_method?: StringFieldUpdateOperationsInput | string
    valuation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source_platform?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetsUncheckedUpdateManyInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    asset_type_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_of_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    unit_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    income_generated?: NullableFloatFieldUpdateOperationsInput | number | null
    valuation_method?: StringFieldUpdateOperationsInput | string
    valuation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source_platform?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateAssetOwnershipCreateInput = {
    id?: string
    ownership_percentage: number
    asset: AssetsCreateNestedOneWithoutOwnersInput
    candidate: CandidatesCreateNestedOneWithoutAssetsInput
  }

  export type CandidateAssetOwnershipUncheckedCreateInput = {
    id?: string
    asset_id: string
    candidate_id: string
    ownership_percentage: number
  }

  export type CandidateAssetOwnershipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownership_percentage?: FloatFieldUpdateOperationsInput | number
    asset?: AssetsUpdateOneRequiredWithoutOwnersNestedInput
    candidate?: CandidatesUpdateOneRequiredWithoutAssetsNestedInput
  }

  export type CandidateAssetOwnershipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_id?: StringFieldUpdateOperationsInput | string
    candidate_id?: StringFieldUpdateOperationsInput | string
    ownership_percentage?: FloatFieldUpdateOperationsInput | number
  }

  export type CandidateAssetOwnershipCreateManyInput = {
    id?: string
    asset_id: string
    candidate_id: string
    ownership_percentage: number
  }

  export type CandidateAssetOwnershipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownership_percentage?: FloatFieldUpdateOperationsInput | number
  }

  export type CandidateAssetOwnershipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_id?: StringFieldUpdateOperationsInput | string
    candidate_id?: StringFieldUpdateOperationsInput | string
    ownership_percentage?: FloatFieldUpdateOperationsInput | number
  }

  export type CandidatesCreateInput = {
    candidate_id?: string
    name: string
    region: string
    phone_number: string
    email: string
    address: string
    dob: Date | string
    country_name: string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    assets?: CandidateAssetOwnershipCreateNestedManyWithoutCandidateInput
  }

  export type CandidatesUncheckedCreateInput = {
    candidate_id?: string
    name: string
    region: string
    phone_number: string
    email: string
    address: string
    dob: Date | string
    country_name: string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    assets?: CandidateAssetOwnershipUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidatesUpdateInput = {
    candidate_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country_name?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: CandidateAssetOwnershipUpdateManyWithoutCandidateNestedInput
  }

  export type CandidatesUncheckedUpdateInput = {
    candidate_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country_name?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: CandidateAssetOwnershipUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidatesCreateManyInput = {
    candidate_id?: string
    name: string
    region: string
    phone_number: string
    email: string
    address: string
    dob: Date | string
    country_name: string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type CandidatesUpdateManyMutationInput = {
    candidate_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country_name?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatesUncheckedUpdateManyInput = {
    candidate_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country_name?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoggingCreateInput = {
    user_activity_id?: string
    activity_time?: Date | string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    action_name: ConstantsCreateNestedOneWithoutLoggingInput
    user: UsersCreateNestedOneWithoutUserlogsInput
  }

  export type LoggingUncheckedCreateInput = {
    user_activity_id?: string
    user_id: string
    action_type: string
    activity_time?: Date | string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type LoggingUpdateInput = {
    user_activity_id?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    action_name?: ConstantsUpdateOneRequiredWithoutLoggingNestedInput
    user?: UsersUpdateOneRequiredWithoutUserlogsNestedInput
  }

  export type LoggingUncheckedUpdateInput = {
    user_activity_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    action_type?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoggingCreateManyInput = {
    user_activity_id?: string
    user_id: string
    action_type: string
    activity_time?: Date | string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type LoggingUpdateManyMutationInput = {
    user_activity_id?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoggingUncheckedUpdateManyInput = {
    user_activity_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    action_type?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewsCreateInput = {
    view_id?: string
    viewed_by_whom: string
    viewed_at?: Date | string
    property: AssetsCreateNestedOneWithoutViewsInput
  }

  export type ViewsUncheckedCreateInput = {
    view_id?: string
    property_id: string
    viewed_by_whom: string
    viewed_at?: Date | string
  }

  export type ViewsUpdateInput = {
    view_id?: StringFieldUpdateOperationsInput | string
    viewed_by_whom?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: AssetsUpdateOneRequiredWithoutViewsNestedInput
  }

  export type ViewsUncheckedUpdateInput = {
    view_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    viewed_by_whom?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewsCreateManyInput = {
    view_id?: string
    property_id: string
    viewed_by_whom: string
    viewed_at?: Date | string
  }

  export type ViewsUpdateManyMutationInput = {
    view_id?: StringFieldUpdateOperationsInput | string
    viewed_by_whom?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewsUncheckedUpdateManyInput = {
    view_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    viewed_by_whom?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarksCreateInput = {
    bookmark_id?: string
    bookmarked_by_whom: string
    bookmarked_at?: Date | string
    Properties: AssetsCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarksUncheckedCreateInput = {
    bookmark_id?: string
    property_id: string
    bookmarked_by_whom: string
    bookmarked_at?: Date | string
  }

  export type BookmarksUpdateInput = {
    bookmark_id?: StringFieldUpdateOperationsInput | string
    bookmarked_by_whom?: StringFieldUpdateOperationsInput | string
    bookmarked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Properties?: AssetsUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarksUncheckedUpdateInput = {
    bookmark_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    bookmarked_by_whom?: StringFieldUpdateOperationsInput | string
    bookmarked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarksCreateManyInput = {
    bookmark_id?: string
    property_id: string
    bookmarked_by_whom: string
    bookmarked_at?: Date | string
  }

  export type BookmarksUpdateManyMutationInput = {
    bookmark_id?: StringFieldUpdateOperationsInput | string
    bookmarked_by_whom?: StringFieldUpdateOperationsInput | string
    bookmarked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarksUncheckedUpdateManyInput = {
    bookmark_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    bookmarked_by_whom?: StringFieldUpdateOperationsInput | string
    bookmarked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConstantsCreateInput = {
    const_id?: string
    code: string
    description?: string | null
    assets?: AssetsCreateNestedManyWithoutAssetTypeInput
    Users?: UsersCreateNestedManyWithoutRolesInput
    Logging?: LoggingCreateNestedManyWithoutAction_nameInput
  }

  export type ConstantsUncheckedCreateInput = {
    const_id?: string
    code: string
    description?: string | null
    assets?: AssetsUncheckedCreateNestedManyWithoutAssetTypeInput
    Users?: UsersUncheckedCreateNestedManyWithoutRolesInput
    Logging?: LoggingUncheckedCreateNestedManyWithoutAction_nameInput
  }

  export type ConstantsUpdateInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetsUpdateManyWithoutAssetTypeNestedInput
    Users?: UsersUpdateManyWithoutRolesNestedInput
    Logging?: LoggingUpdateManyWithoutAction_nameNestedInput
  }

  export type ConstantsUncheckedUpdateInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetsUncheckedUpdateManyWithoutAssetTypeNestedInput
    Users?: UsersUncheckedUpdateManyWithoutRolesNestedInput
    Logging?: LoggingUncheckedUpdateManyWithoutAction_nameNestedInput
  }

  export type ConstantsCreateManyInput = {
    const_id?: string
    code: string
    description?: string | null
  }

  export type ConstantsUpdateManyMutationInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConstantsUncheckedUpdateManyInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EmployeesNullableScalarRelationFilter = {
    is?: EmployeesWhereInput | null
    isNot?: EmployeesWhereInput | null
  }

  export type LoggingListRelationFilter = {
    every?: LoggingWhereInput
    some?: LoggingWhereInput
    none?: LoggingWhereInput
  }

  export type ConstantsScalarRelationFilter = {
    is?: ConstantsWhereInput
    isNot?: ConstantsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LoggingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    region?: SortOrder
    role?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mfa_enabled?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
    last_login?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    region?: SortOrder
    role?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mfa_enabled?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
    last_login?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    region?: SortOrder
    role?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mfa_enabled?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
    last_login?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type CompaniesScalarRelationFilter = {
    is?: CompaniesWhereInput
    isNot?: CompaniesWhereInput
  }

  export type EmployeesCountOrderByAggregateInput = {
    user_id?: SortOrder
    company_id?: SortOrder
  }

  export type EmployeesMaxOrderByAggregateInput = {
    user_id?: SortOrder
    company_id?: SortOrder
  }

  export type EmployeesMinOrderByAggregateInput = {
    user_id?: SortOrder
    company_id?: SortOrder
  }

  export type EmployeesListRelationFilter = {
    every?: EmployeesWhereInput
    some?: EmployeesWhereInput
    none?: EmployeesWhereInput
  }

  export type EmployeesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompaniesCountOrderByAggregateInput = {
    company_id?: SortOrder
    company_name?: SortOrder
    region?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
  }

  export type CompaniesMaxOrderByAggregateInput = {
    company_id?: SortOrder
    company_name?: SortOrder
    region?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
  }

  export type CompaniesMinOrderByAggregateInput = {
    company_id?: SortOrder
    company_name?: SortOrder
    region?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CandidateAssetOwnershipListRelationFilter = {
    every?: CandidateAssetOwnershipWhereInput
    some?: CandidateAssetOwnershipWhereInput
    none?: CandidateAssetOwnershipWhereInput
  }

  export type ViewsListRelationFilter = {
    every?: ViewsWhereInput
    some?: ViewsWhereInput
    none?: ViewsWhereInput
  }

  export type BookmarksListRelationFilter = {
    every?: BookmarksWhereInput
    some?: BookmarksWhereInput
    none?: BookmarksWhereInput
  }

  export type CandidateAssetOwnershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookmarksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetsCountOrderByAggregateInput = {
    asset_id?: SortOrder
    asset_type_id?: SortOrder
    description?: SortOrder
    region?: SortOrder
    quantity?: SortOrder
    unit_of_measurement?: SortOrder
    unit_value?: SortOrder
    total_value?: SortOrder
    income_generated?: SortOrder
    valuation_method?: SortOrder
    valuation_date?: SortOrder
    source_platform?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
  }

  export type AssetsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unit_value?: SortOrder
    total_value?: SortOrder
    income_generated?: SortOrder
  }

  export type AssetsMaxOrderByAggregateInput = {
    asset_id?: SortOrder
    asset_type_id?: SortOrder
    description?: SortOrder
    region?: SortOrder
    quantity?: SortOrder
    unit_of_measurement?: SortOrder
    unit_value?: SortOrder
    total_value?: SortOrder
    income_generated?: SortOrder
    valuation_method?: SortOrder
    valuation_date?: SortOrder
    source_platform?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
  }

  export type AssetsMinOrderByAggregateInput = {
    asset_id?: SortOrder
    asset_type_id?: SortOrder
    description?: SortOrder
    region?: SortOrder
    quantity?: SortOrder
    unit_of_measurement?: SortOrder
    unit_value?: SortOrder
    total_value?: SortOrder
    income_generated?: SortOrder
    valuation_method?: SortOrder
    valuation_date?: SortOrder
    source_platform?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
  }

  export type AssetsSumOrderByAggregateInput = {
    quantity?: SortOrder
    unit_value?: SortOrder
    total_value?: SortOrder
    income_generated?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AssetsScalarRelationFilter = {
    is?: AssetsWhereInput
    isNot?: AssetsWhereInput
  }

  export type CandidatesScalarRelationFilter = {
    is?: CandidatesWhereInput
    isNot?: CandidatesWhereInput
  }

  export type CandidateAssetOwnershipCountOrderByAggregateInput = {
    id?: SortOrder
    asset_id?: SortOrder
    candidate_id?: SortOrder
    ownership_percentage?: SortOrder
  }

  export type CandidateAssetOwnershipAvgOrderByAggregateInput = {
    ownership_percentage?: SortOrder
  }

  export type CandidateAssetOwnershipMaxOrderByAggregateInput = {
    id?: SortOrder
    asset_id?: SortOrder
    candidate_id?: SortOrder
    ownership_percentage?: SortOrder
  }

  export type CandidateAssetOwnershipMinOrderByAggregateInput = {
    id?: SortOrder
    asset_id?: SortOrder
    candidate_id?: SortOrder
    ownership_percentage?: SortOrder
  }

  export type CandidateAssetOwnershipSumOrderByAggregateInput = {
    ownership_percentage?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CandidatesCountOrderByAggregateInput = {
    candidate_id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    address?: SortOrder
    dob?: SortOrder
    country_name?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
  }

  export type CandidatesMaxOrderByAggregateInput = {
    candidate_id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    address?: SortOrder
    dob?: SortOrder
    country_name?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
  }

  export type CandidatesMinOrderByAggregateInput = {
    candidate_id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    address?: SortOrder
    dob?: SortOrder
    country_name?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
  }

  export type LoggingCountOrderByAggregateInput = {
    user_activity_id?: SortOrder
    user_id?: SortOrder
    action_type?: SortOrder
    activity_time?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
  }

  export type LoggingMaxOrderByAggregateInput = {
    user_activity_id?: SortOrder
    user_id?: SortOrder
    action_type?: SortOrder
    activity_time?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
  }

  export type LoggingMinOrderByAggregateInput = {
    user_activity_id?: SortOrder
    user_id?: SortOrder
    action_type?: SortOrder
    activity_time?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
  }

  export type ViewsCountOrderByAggregateInput = {
    view_id?: SortOrder
    property_id?: SortOrder
    viewed_by_whom?: SortOrder
    viewed_at?: SortOrder
  }

  export type ViewsMaxOrderByAggregateInput = {
    view_id?: SortOrder
    property_id?: SortOrder
    viewed_by_whom?: SortOrder
    viewed_at?: SortOrder
  }

  export type ViewsMinOrderByAggregateInput = {
    view_id?: SortOrder
    property_id?: SortOrder
    viewed_by_whom?: SortOrder
    viewed_at?: SortOrder
  }

  export type BookmarksCountOrderByAggregateInput = {
    bookmark_id?: SortOrder
    property_id?: SortOrder
    bookmarked_by_whom?: SortOrder
    bookmarked_at?: SortOrder
  }

  export type BookmarksMaxOrderByAggregateInput = {
    bookmark_id?: SortOrder
    property_id?: SortOrder
    bookmarked_by_whom?: SortOrder
    bookmarked_at?: SortOrder
  }

  export type BookmarksMinOrderByAggregateInput = {
    bookmark_id?: SortOrder
    property_id?: SortOrder
    bookmarked_by_whom?: SortOrder
    bookmarked_at?: SortOrder
  }

  export type AssetsListRelationFilter = {
    every?: AssetsWhereInput
    some?: AssetsWhereInput
    none?: AssetsWhereInput
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type AssetsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConstantsCountOrderByAggregateInput = {
    const_id?: SortOrder
    code?: SortOrder
    description?: SortOrder
  }

  export type ConstantsMaxOrderByAggregateInput = {
    const_id?: SortOrder
    code?: SortOrder
    description?: SortOrder
  }

  export type ConstantsMinOrderByAggregateInput = {
    const_id?: SortOrder
    code?: SortOrder
    description?: SortOrder
  }

  export type EmployeesCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeesCreateWithoutUserInput, EmployeesUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutUserInput
    connect?: EmployeesWhereUniqueInput
  }

  export type LoggingCreateNestedManyWithoutUserInput = {
    create?: XOR<LoggingCreateWithoutUserInput, LoggingUncheckedCreateWithoutUserInput> | LoggingCreateWithoutUserInput[] | LoggingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoggingCreateOrConnectWithoutUserInput | LoggingCreateOrConnectWithoutUserInput[]
    createMany?: LoggingCreateManyUserInputEnvelope
    connect?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
  }

  export type ConstantsCreateNestedOneWithoutUsersInput = {
    create?: XOR<ConstantsCreateWithoutUsersInput, ConstantsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ConstantsCreateOrConnectWithoutUsersInput
    connect?: ConstantsWhereUniqueInput
  }

  export type EmployeesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeesCreateWithoutUserInput, EmployeesUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutUserInput
    connect?: EmployeesWhereUniqueInput
  }

  export type LoggingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LoggingCreateWithoutUserInput, LoggingUncheckedCreateWithoutUserInput> | LoggingCreateWithoutUserInput[] | LoggingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoggingCreateOrConnectWithoutUserInput | LoggingCreateOrConnectWithoutUserInput[]
    createMany?: LoggingCreateManyUserInputEnvelope
    connect?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EmployeesUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeesCreateWithoutUserInput, EmployeesUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutUserInput
    upsert?: EmployeesUpsertWithoutUserInput
    disconnect?: EmployeesWhereInput | boolean
    delete?: EmployeesWhereInput | boolean
    connect?: EmployeesWhereUniqueInput
    update?: XOR<XOR<EmployeesUpdateToOneWithWhereWithoutUserInput, EmployeesUpdateWithoutUserInput>, EmployeesUncheckedUpdateWithoutUserInput>
  }

  export type LoggingUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoggingCreateWithoutUserInput, LoggingUncheckedCreateWithoutUserInput> | LoggingCreateWithoutUserInput[] | LoggingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoggingCreateOrConnectWithoutUserInput | LoggingCreateOrConnectWithoutUserInput[]
    upsert?: LoggingUpsertWithWhereUniqueWithoutUserInput | LoggingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoggingCreateManyUserInputEnvelope
    set?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    disconnect?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    delete?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    connect?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    update?: LoggingUpdateWithWhereUniqueWithoutUserInput | LoggingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoggingUpdateManyWithWhereWithoutUserInput | LoggingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoggingScalarWhereInput | LoggingScalarWhereInput[]
  }

  export type ConstantsUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ConstantsCreateWithoutUsersInput, ConstantsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ConstantsCreateOrConnectWithoutUsersInput
    upsert?: ConstantsUpsertWithoutUsersInput
    connect?: ConstantsWhereUniqueInput
    update?: XOR<XOR<ConstantsUpdateToOneWithWhereWithoutUsersInput, ConstantsUpdateWithoutUsersInput>, ConstantsUncheckedUpdateWithoutUsersInput>
  }

  export type EmployeesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeesCreateWithoutUserInput, EmployeesUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutUserInput
    upsert?: EmployeesUpsertWithoutUserInput
    disconnect?: EmployeesWhereInput | boolean
    delete?: EmployeesWhereInput | boolean
    connect?: EmployeesWhereUniqueInput
    update?: XOR<XOR<EmployeesUpdateToOneWithWhereWithoutUserInput, EmployeesUpdateWithoutUserInput>, EmployeesUncheckedUpdateWithoutUserInput>
  }

  export type LoggingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoggingCreateWithoutUserInput, LoggingUncheckedCreateWithoutUserInput> | LoggingCreateWithoutUserInput[] | LoggingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoggingCreateOrConnectWithoutUserInput | LoggingCreateOrConnectWithoutUserInput[]
    upsert?: LoggingUpsertWithWhereUniqueWithoutUserInput | LoggingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoggingCreateManyUserInputEnvelope
    set?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    disconnect?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    delete?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    connect?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    update?: LoggingUpdateWithWhereUniqueWithoutUserInput | LoggingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoggingUpdateManyWithWhereWithoutUserInput | LoggingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoggingScalarWhereInput | LoggingScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<UsersCreateWithoutEmployeeInput, UsersUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEmployeeInput
    connect?: UsersWhereUniqueInput
  }

  export type CompaniesCreateNestedOneWithoutAdminsInput = {
    create?: XOR<CompaniesCreateWithoutAdminsInput, CompaniesUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutAdminsInput
    connect?: CompaniesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<UsersCreateWithoutEmployeeInput, UsersUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEmployeeInput
    upsert?: UsersUpsertWithoutEmployeeInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutEmployeeInput, UsersUpdateWithoutEmployeeInput>, UsersUncheckedUpdateWithoutEmployeeInput>
  }

  export type CompaniesUpdateOneRequiredWithoutAdminsNestedInput = {
    create?: XOR<CompaniesCreateWithoutAdminsInput, CompaniesUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutAdminsInput
    upsert?: CompaniesUpsertWithoutAdminsInput
    connect?: CompaniesWhereUniqueInput
    update?: XOR<XOR<CompaniesUpdateToOneWithWhereWithoutAdminsInput, CompaniesUpdateWithoutAdminsInput>, CompaniesUncheckedUpdateWithoutAdminsInput>
  }

  export type EmployeesCreateNestedManyWithoutCompanyInput = {
    create?: XOR<EmployeesCreateWithoutCompanyInput, EmployeesUncheckedCreateWithoutCompanyInput> | EmployeesCreateWithoutCompanyInput[] | EmployeesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeesCreateOrConnectWithoutCompanyInput | EmployeesCreateOrConnectWithoutCompanyInput[]
    createMany?: EmployeesCreateManyCompanyInputEnvelope
    connect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
  }

  export type EmployeesUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<EmployeesCreateWithoutCompanyInput, EmployeesUncheckedCreateWithoutCompanyInput> | EmployeesCreateWithoutCompanyInput[] | EmployeesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeesCreateOrConnectWithoutCompanyInput | EmployeesCreateOrConnectWithoutCompanyInput[]
    createMany?: EmployeesCreateManyCompanyInputEnvelope
    connect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
  }

  export type EmployeesUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<EmployeesCreateWithoutCompanyInput, EmployeesUncheckedCreateWithoutCompanyInput> | EmployeesCreateWithoutCompanyInput[] | EmployeesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeesCreateOrConnectWithoutCompanyInput | EmployeesCreateOrConnectWithoutCompanyInput[]
    upsert?: EmployeesUpsertWithWhereUniqueWithoutCompanyInput | EmployeesUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: EmployeesCreateManyCompanyInputEnvelope
    set?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    disconnect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    delete?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    connect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    update?: EmployeesUpdateWithWhereUniqueWithoutCompanyInput | EmployeesUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: EmployeesUpdateManyWithWhereWithoutCompanyInput | EmployeesUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: EmployeesScalarWhereInput | EmployeesScalarWhereInput[]
  }

  export type EmployeesUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<EmployeesCreateWithoutCompanyInput, EmployeesUncheckedCreateWithoutCompanyInput> | EmployeesCreateWithoutCompanyInput[] | EmployeesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeesCreateOrConnectWithoutCompanyInput | EmployeesCreateOrConnectWithoutCompanyInput[]
    upsert?: EmployeesUpsertWithWhereUniqueWithoutCompanyInput | EmployeesUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: EmployeesCreateManyCompanyInputEnvelope
    set?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    disconnect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    delete?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    connect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    update?: EmployeesUpdateWithWhereUniqueWithoutCompanyInput | EmployeesUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: EmployeesUpdateManyWithWhereWithoutCompanyInput | EmployeesUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: EmployeesScalarWhereInput | EmployeesScalarWhereInput[]
  }

  export type ConstantsCreateNestedOneWithoutAssetsInput = {
    create?: XOR<ConstantsCreateWithoutAssetsInput, ConstantsUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: ConstantsCreateOrConnectWithoutAssetsInput
    connect?: ConstantsWhereUniqueInput
  }

  export type CandidateAssetOwnershipCreateNestedManyWithoutAssetInput = {
    create?: XOR<CandidateAssetOwnershipCreateWithoutAssetInput, CandidateAssetOwnershipUncheckedCreateWithoutAssetInput> | CandidateAssetOwnershipCreateWithoutAssetInput[] | CandidateAssetOwnershipUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: CandidateAssetOwnershipCreateOrConnectWithoutAssetInput | CandidateAssetOwnershipCreateOrConnectWithoutAssetInput[]
    createMany?: CandidateAssetOwnershipCreateManyAssetInputEnvelope
    connect?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
  }

  export type ViewsCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ViewsCreateWithoutPropertyInput, ViewsUncheckedCreateWithoutPropertyInput> | ViewsCreateWithoutPropertyInput[] | ViewsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutPropertyInput | ViewsCreateOrConnectWithoutPropertyInput[]
    createMany?: ViewsCreateManyPropertyInputEnvelope
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
  }

  export type BookmarksCreateNestedManyWithoutPropertiesInput = {
    create?: XOR<BookmarksCreateWithoutPropertiesInput, BookmarksUncheckedCreateWithoutPropertiesInput> | BookmarksCreateWithoutPropertiesInput[] | BookmarksUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: BookmarksCreateOrConnectWithoutPropertiesInput | BookmarksCreateOrConnectWithoutPropertiesInput[]
    createMany?: BookmarksCreateManyPropertiesInputEnvelope
    connect?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
  }

  export type CandidateAssetOwnershipUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<CandidateAssetOwnershipCreateWithoutAssetInput, CandidateAssetOwnershipUncheckedCreateWithoutAssetInput> | CandidateAssetOwnershipCreateWithoutAssetInput[] | CandidateAssetOwnershipUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: CandidateAssetOwnershipCreateOrConnectWithoutAssetInput | CandidateAssetOwnershipCreateOrConnectWithoutAssetInput[]
    createMany?: CandidateAssetOwnershipCreateManyAssetInputEnvelope
    connect?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
  }

  export type ViewsUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ViewsCreateWithoutPropertyInput, ViewsUncheckedCreateWithoutPropertyInput> | ViewsCreateWithoutPropertyInput[] | ViewsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutPropertyInput | ViewsCreateOrConnectWithoutPropertyInput[]
    createMany?: ViewsCreateManyPropertyInputEnvelope
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
  }

  export type BookmarksUncheckedCreateNestedManyWithoutPropertiesInput = {
    create?: XOR<BookmarksCreateWithoutPropertiesInput, BookmarksUncheckedCreateWithoutPropertiesInput> | BookmarksCreateWithoutPropertiesInput[] | BookmarksUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: BookmarksCreateOrConnectWithoutPropertiesInput | BookmarksCreateOrConnectWithoutPropertiesInput[]
    createMany?: BookmarksCreateManyPropertiesInputEnvelope
    connect?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ConstantsUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<ConstantsCreateWithoutAssetsInput, ConstantsUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: ConstantsCreateOrConnectWithoutAssetsInput
    upsert?: ConstantsUpsertWithoutAssetsInput
    connect?: ConstantsWhereUniqueInput
    update?: XOR<XOR<ConstantsUpdateToOneWithWhereWithoutAssetsInput, ConstantsUpdateWithoutAssetsInput>, ConstantsUncheckedUpdateWithoutAssetsInput>
  }

  export type CandidateAssetOwnershipUpdateManyWithoutAssetNestedInput = {
    create?: XOR<CandidateAssetOwnershipCreateWithoutAssetInput, CandidateAssetOwnershipUncheckedCreateWithoutAssetInput> | CandidateAssetOwnershipCreateWithoutAssetInput[] | CandidateAssetOwnershipUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: CandidateAssetOwnershipCreateOrConnectWithoutAssetInput | CandidateAssetOwnershipCreateOrConnectWithoutAssetInput[]
    upsert?: CandidateAssetOwnershipUpsertWithWhereUniqueWithoutAssetInput | CandidateAssetOwnershipUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: CandidateAssetOwnershipCreateManyAssetInputEnvelope
    set?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
    disconnect?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
    delete?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
    connect?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
    update?: CandidateAssetOwnershipUpdateWithWhereUniqueWithoutAssetInput | CandidateAssetOwnershipUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: CandidateAssetOwnershipUpdateManyWithWhereWithoutAssetInput | CandidateAssetOwnershipUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: CandidateAssetOwnershipScalarWhereInput | CandidateAssetOwnershipScalarWhereInput[]
  }

  export type ViewsUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ViewsCreateWithoutPropertyInput, ViewsUncheckedCreateWithoutPropertyInput> | ViewsCreateWithoutPropertyInput[] | ViewsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutPropertyInput | ViewsCreateOrConnectWithoutPropertyInput[]
    upsert?: ViewsUpsertWithWhereUniqueWithoutPropertyInput | ViewsUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ViewsCreateManyPropertyInputEnvelope
    set?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    disconnect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    delete?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    update?: ViewsUpdateWithWhereUniqueWithoutPropertyInput | ViewsUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ViewsUpdateManyWithWhereWithoutPropertyInput | ViewsUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
  }

  export type BookmarksUpdateManyWithoutPropertiesNestedInput = {
    create?: XOR<BookmarksCreateWithoutPropertiesInput, BookmarksUncheckedCreateWithoutPropertiesInput> | BookmarksCreateWithoutPropertiesInput[] | BookmarksUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: BookmarksCreateOrConnectWithoutPropertiesInput | BookmarksCreateOrConnectWithoutPropertiesInput[]
    upsert?: BookmarksUpsertWithWhereUniqueWithoutPropertiesInput | BookmarksUpsertWithWhereUniqueWithoutPropertiesInput[]
    createMany?: BookmarksCreateManyPropertiesInputEnvelope
    set?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
    disconnect?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
    delete?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
    connect?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
    update?: BookmarksUpdateWithWhereUniqueWithoutPropertiesInput | BookmarksUpdateWithWhereUniqueWithoutPropertiesInput[]
    updateMany?: BookmarksUpdateManyWithWhereWithoutPropertiesInput | BookmarksUpdateManyWithWhereWithoutPropertiesInput[]
    deleteMany?: BookmarksScalarWhereInput | BookmarksScalarWhereInput[]
  }

  export type CandidateAssetOwnershipUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<CandidateAssetOwnershipCreateWithoutAssetInput, CandidateAssetOwnershipUncheckedCreateWithoutAssetInput> | CandidateAssetOwnershipCreateWithoutAssetInput[] | CandidateAssetOwnershipUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: CandidateAssetOwnershipCreateOrConnectWithoutAssetInput | CandidateAssetOwnershipCreateOrConnectWithoutAssetInput[]
    upsert?: CandidateAssetOwnershipUpsertWithWhereUniqueWithoutAssetInput | CandidateAssetOwnershipUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: CandidateAssetOwnershipCreateManyAssetInputEnvelope
    set?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
    disconnect?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
    delete?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
    connect?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
    update?: CandidateAssetOwnershipUpdateWithWhereUniqueWithoutAssetInput | CandidateAssetOwnershipUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: CandidateAssetOwnershipUpdateManyWithWhereWithoutAssetInput | CandidateAssetOwnershipUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: CandidateAssetOwnershipScalarWhereInput | CandidateAssetOwnershipScalarWhereInput[]
  }

  export type ViewsUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ViewsCreateWithoutPropertyInput, ViewsUncheckedCreateWithoutPropertyInput> | ViewsCreateWithoutPropertyInput[] | ViewsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutPropertyInput | ViewsCreateOrConnectWithoutPropertyInput[]
    upsert?: ViewsUpsertWithWhereUniqueWithoutPropertyInput | ViewsUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ViewsCreateManyPropertyInputEnvelope
    set?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    disconnect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    delete?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    update?: ViewsUpdateWithWhereUniqueWithoutPropertyInput | ViewsUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ViewsUpdateManyWithWhereWithoutPropertyInput | ViewsUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
  }

  export type BookmarksUncheckedUpdateManyWithoutPropertiesNestedInput = {
    create?: XOR<BookmarksCreateWithoutPropertiesInput, BookmarksUncheckedCreateWithoutPropertiesInput> | BookmarksCreateWithoutPropertiesInput[] | BookmarksUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: BookmarksCreateOrConnectWithoutPropertiesInput | BookmarksCreateOrConnectWithoutPropertiesInput[]
    upsert?: BookmarksUpsertWithWhereUniqueWithoutPropertiesInput | BookmarksUpsertWithWhereUniqueWithoutPropertiesInput[]
    createMany?: BookmarksCreateManyPropertiesInputEnvelope
    set?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
    disconnect?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
    delete?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
    connect?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
    update?: BookmarksUpdateWithWhereUniqueWithoutPropertiesInput | BookmarksUpdateWithWhereUniqueWithoutPropertiesInput[]
    updateMany?: BookmarksUpdateManyWithWhereWithoutPropertiesInput | BookmarksUpdateManyWithWhereWithoutPropertiesInput[]
    deleteMany?: BookmarksScalarWhereInput | BookmarksScalarWhereInput[]
  }

  export type AssetsCreateNestedOneWithoutOwnersInput = {
    create?: XOR<AssetsCreateWithoutOwnersInput, AssetsUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: AssetsCreateOrConnectWithoutOwnersInput
    connect?: AssetsWhereUniqueInput
  }

  export type CandidatesCreateNestedOneWithoutAssetsInput = {
    create?: XOR<CandidatesCreateWithoutAssetsInput, CandidatesUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: CandidatesCreateOrConnectWithoutAssetsInput
    connect?: CandidatesWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssetsUpdateOneRequiredWithoutOwnersNestedInput = {
    create?: XOR<AssetsCreateWithoutOwnersInput, AssetsUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: AssetsCreateOrConnectWithoutOwnersInput
    upsert?: AssetsUpsertWithoutOwnersInput
    connect?: AssetsWhereUniqueInput
    update?: XOR<XOR<AssetsUpdateToOneWithWhereWithoutOwnersInput, AssetsUpdateWithoutOwnersInput>, AssetsUncheckedUpdateWithoutOwnersInput>
  }

  export type CandidatesUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<CandidatesCreateWithoutAssetsInput, CandidatesUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: CandidatesCreateOrConnectWithoutAssetsInput
    upsert?: CandidatesUpsertWithoutAssetsInput
    connect?: CandidatesWhereUniqueInput
    update?: XOR<XOR<CandidatesUpdateToOneWithWhereWithoutAssetsInput, CandidatesUpdateWithoutAssetsInput>, CandidatesUncheckedUpdateWithoutAssetsInput>
  }

  export type CandidateAssetOwnershipCreateNestedManyWithoutCandidateInput = {
    create?: XOR<CandidateAssetOwnershipCreateWithoutCandidateInput, CandidateAssetOwnershipUncheckedCreateWithoutCandidateInput> | CandidateAssetOwnershipCreateWithoutCandidateInput[] | CandidateAssetOwnershipUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CandidateAssetOwnershipCreateOrConnectWithoutCandidateInput | CandidateAssetOwnershipCreateOrConnectWithoutCandidateInput[]
    createMany?: CandidateAssetOwnershipCreateManyCandidateInputEnvelope
    connect?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
  }

  export type CandidateAssetOwnershipUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<CandidateAssetOwnershipCreateWithoutCandidateInput, CandidateAssetOwnershipUncheckedCreateWithoutCandidateInput> | CandidateAssetOwnershipCreateWithoutCandidateInput[] | CandidateAssetOwnershipUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CandidateAssetOwnershipCreateOrConnectWithoutCandidateInput | CandidateAssetOwnershipCreateOrConnectWithoutCandidateInput[]
    createMany?: CandidateAssetOwnershipCreateManyCandidateInputEnvelope
    connect?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
  }

  export type CandidateAssetOwnershipUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<CandidateAssetOwnershipCreateWithoutCandidateInput, CandidateAssetOwnershipUncheckedCreateWithoutCandidateInput> | CandidateAssetOwnershipCreateWithoutCandidateInput[] | CandidateAssetOwnershipUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CandidateAssetOwnershipCreateOrConnectWithoutCandidateInput | CandidateAssetOwnershipCreateOrConnectWithoutCandidateInput[]
    upsert?: CandidateAssetOwnershipUpsertWithWhereUniqueWithoutCandidateInput | CandidateAssetOwnershipUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: CandidateAssetOwnershipCreateManyCandidateInputEnvelope
    set?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
    disconnect?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
    delete?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
    connect?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
    update?: CandidateAssetOwnershipUpdateWithWhereUniqueWithoutCandidateInput | CandidateAssetOwnershipUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: CandidateAssetOwnershipUpdateManyWithWhereWithoutCandidateInput | CandidateAssetOwnershipUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: CandidateAssetOwnershipScalarWhereInput | CandidateAssetOwnershipScalarWhereInput[]
  }

  export type CandidateAssetOwnershipUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<CandidateAssetOwnershipCreateWithoutCandidateInput, CandidateAssetOwnershipUncheckedCreateWithoutCandidateInput> | CandidateAssetOwnershipCreateWithoutCandidateInput[] | CandidateAssetOwnershipUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CandidateAssetOwnershipCreateOrConnectWithoutCandidateInput | CandidateAssetOwnershipCreateOrConnectWithoutCandidateInput[]
    upsert?: CandidateAssetOwnershipUpsertWithWhereUniqueWithoutCandidateInput | CandidateAssetOwnershipUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: CandidateAssetOwnershipCreateManyCandidateInputEnvelope
    set?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
    disconnect?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
    delete?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
    connect?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
    update?: CandidateAssetOwnershipUpdateWithWhereUniqueWithoutCandidateInput | CandidateAssetOwnershipUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: CandidateAssetOwnershipUpdateManyWithWhereWithoutCandidateInput | CandidateAssetOwnershipUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: CandidateAssetOwnershipScalarWhereInput | CandidateAssetOwnershipScalarWhereInput[]
  }

  export type ConstantsCreateNestedOneWithoutLoggingInput = {
    create?: XOR<ConstantsCreateWithoutLoggingInput, ConstantsUncheckedCreateWithoutLoggingInput>
    connectOrCreate?: ConstantsCreateOrConnectWithoutLoggingInput
    connect?: ConstantsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutUserlogsInput = {
    create?: XOR<UsersCreateWithoutUserlogsInput, UsersUncheckedCreateWithoutUserlogsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserlogsInput
    connect?: UsersWhereUniqueInput
  }

  export type ConstantsUpdateOneRequiredWithoutLoggingNestedInput = {
    create?: XOR<ConstantsCreateWithoutLoggingInput, ConstantsUncheckedCreateWithoutLoggingInput>
    connectOrCreate?: ConstantsCreateOrConnectWithoutLoggingInput
    upsert?: ConstantsUpsertWithoutLoggingInput
    connect?: ConstantsWhereUniqueInput
    update?: XOR<XOR<ConstantsUpdateToOneWithWhereWithoutLoggingInput, ConstantsUpdateWithoutLoggingInput>, ConstantsUncheckedUpdateWithoutLoggingInput>
  }

  export type UsersUpdateOneRequiredWithoutUserlogsNestedInput = {
    create?: XOR<UsersCreateWithoutUserlogsInput, UsersUncheckedCreateWithoutUserlogsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserlogsInput
    upsert?: UsersUpsertWithoutUserlogsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUserlogsInput, UsersUpdateWithoutUserlogsInput>, UsersUncheckedUpdateWithoutUserlogsInput>
  }

  export type AssetsCreateNestedOneWithoutViewsInput = {
    create?: XOR<AssetsCreateWithoutViewsInput, AssetsUncheckedCreateWithoutViewsInput>
    connectOrCreate?: AssetsCreateOrConnectWithoutViewsInput
    connect?: AssetsWhereUniqueInput
  }

  export type AssetsUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<AssetsCreateWithoutViewsInput, AssetsUncheckedCreateWithoutViewsInput>
    connectOrCreate?: AssetsCreateOrConnectWithoutViewsInput
    upsert?: AssetsUpsertWithoutViewsInput
    connect?: AssetsWhereUniqueInput
    update?: XOR<XOR<AssetsUpdateToOneWithWhereWithoutViewsInput, AssetsUpdateWithoutViewsInput>, AssetsUncheckedUpdateWithoutViewsInput>
  }

  export type AssetsCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<AssetsCreateWithoutBookmarksInput, AssetsUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: AssetsCreateOrConnectWithoutBookmarksInput
    connect?: AssetsWhereUniqueInput
  }

  export type AssetsUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<AssetsCreateWithoutBookmarksInput, AssetsUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: AssetsCreateOrConnectWithoutBookmarksInput
    upsert?: AssetsUpsertWithoutBookmarksInput
    connect?: AssetsWhereUniqueInput
    update?: XOR<XOR<AssetsUpdateToOneWithWhereWithoutBookmarksInput, AssetsUpdateWithoutBookmarksInput>, AssetsUncheckedUpdateWithoutBookmarksInput>
  }

  export type AssetsCreateNestedManyWithoutAssetTypeInput = {
    create?: XOR<AssetsCreateWithoutAssetTypeInput, AssetsUncheckedCreateWithoutAssetTypeInput> | AssetsCreateWithoutAssetTypeInput[] | AssetsUncheckedCreateWithoutAssetTypeInput[]
    connectOrCreate?: AssetsCreateOrConnectWithoutAssetTypeInput | AssetsCreateOrConnectWithoutAssetTypeInput[]
    createMany?: AssetsCreateManyAssetTypeInputEnvelope
    connect?: AssetsWhereUniqueInput | AssetsWhereUniqueInput[]
  }

  export type UsersCreateNestedManyWithoutRolesInput = {
    create?: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput> | UsersCreateWithoutRolesInput[] | UsersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRolesInput | UsersCreateOrConnectWithoutRolesInput[]
    createMany?: UsersCreateManyRolesInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type LoggingCreateNestedManyWithoutAction_nameInput = {
    create?: XOR<LoggingCreateWithoutAction_nameInput, LoggingUncheckedCreateWithoutAction_nameInput> | LoggingCreateWithoutAction_nameInput[] | LoggingUncheckedCreateWithoutAction_nameInput[]
    connectOrCreate?: LoggingCreateOrConnectWithoutAction_nameInput | LoggingCreateOrConnectWithoutAction_nameInput[]
    createMany?: LoggingCreateManyAction_nameInputEnvelope
    connect?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
  }

  export type AssetsUncheckedCreateNestedManyWithoutAssetTypeInput = {
    create?: XOR<AssetsCreateWithoutAssetTypeInput, AssetsUncheckedCreateWithoutAssetTypeInput> | AssetsCreateWithoutAssetTypeInput[] | AssetsUncheckedCreateWithoutAssetTypeInput[]
    connectOrCreate?: AssetsCreateOrConnectWithoutAssetTypeInput | AssetsCreateOrConnectWithoutAssetTypeInput[]
    createMany?: AssetsCreateManyAssetTypeInputEnvelope
    connect?: AssetsWhereUniqueInput | AssetsWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput> | UsersCreateWithoutRolesInput[] | UsersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRolesInput | UsersCreateOrConnectWithoutRolesInput[]
    createMany?: UsersCreateManyRolesInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type LoggingUncheckedCreateNestedManyWithoutAction_nameInput = {
    create?: XOR<LoggingCreateWithoutAction_nameInput, LoggingUncheckedCreateWithoutAction_nameInput> | LoggingCreateWithoutAction_nameInput[] | LoggingUncheckedCreateWithoutAction_nameInput[]
    connectOrCreate?: LoggingCreateOrConnectWithoutAction_nameInput | LoggingCreateOrConnectWithoutAction_nameInput[]
    createMany?: LoggingCreateManyAction_nameInputEnvelope
    connect?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
  }

  export type AssetsUpdateManyWithoutAssetTypeNestedInput = {
    create?: XOR<AssetsCreateWithoutAssetTypeInput, AssetsUncheckedCreateWithoutAssetTypeInput> | AssetsCreateWithoutAssetTypeInput[] | AssetsUncheckedCreateWithoutAssetTypeInput[]
    connectOrCreate?: AssetsCreateOrConnectWithoutAssetTypeInput | AssetsCreateOrConnectWithoutAssetTypeInput[]
    upsert?: AssetsUpsertWithWhereUniqueWithoutAssetTypeInput | AssetsUpsertWithWhereUniqueWithoutAssetTypeInput[]
    createMany?: AssetsCreateManyAssetTypeInputEnvelope
    set?: AssetsWhereUniqueInput | AssetsWhereUniqueInput[]
    disconnect?: AssetsWhereUniqueInput | AssetsWhereUniqueInput[]
    delete?: AssetsWhereUniqueInput | AssetsWhereUniqueInput[]
    connect?: AssetsWhereUniqueInput | AssetsWhereUniqueInput[]
    update?: AssetsUpdateWithWhereUniqueWithoutAssetTypeInput | AssetsUpdateWithWhereUniqueWithoutAssetTypeInput[]
    updateMany?: AssetsUpdateManyWithWhereWithoutAssetTypeInput | AssetsUpdateManyWithWhereWithoutAssetTypeInput[]
    deleteMany?: AssetsScalarWhereInput | AssetsScalarWhereInput[]
  }

  export type UsersUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput> | UsersCreateWithoutRolesInput[] | UsersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRolesInput | UsersCreateOrConnectWithoutRolesInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRolesInput | UsersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: UsersCreateManyRolesInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRolesInput | UsersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRolesInput | UsersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type LoggingUpdateManyWithoutAction_nameNestedInput = {
    create?: XOR<LoggingCreateWithoutAction_nameInput, LoggingUncheckedCreateWithoutAction_nameInput> | LoggingCreateWithoutAction_nameInput[] | LoggingUncheckedCreateWithoutAction_nameInput[]
    connectOrCreate?: LoggingCreateOrConnectWithoutAction_nameInput | LoggingCreateOrConnectWithoutAction_nameInput[]
    upsert?: LoggingUpsertWithWhereUniqueWithoutAction_nameInput | LoggingUpsertWithWhereUniqueWithoutAction_nameInput[]
    createMany?: LoggingCreateManyAction_nameInputEnvelope
    set?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    disconnect?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    delete?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    connect?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    update?: LoggingUpdateWithWhereUniqueWithoutAction_nameInput | LoggingUpdateWithWhereUniqueWithoutAction_nameInput[]
    updateMany?: LoggingUpdateManyWithWhereWithoutAction_nameInput | LoggingUpdateManyWithWhereWithoutAction_nameInput[]
    deleteMany?: LoggingScalarWhereInput | LoggingScalarWhereInput[]
  }

  export type AssetsUncheckedUpdateManyWithoutAssetTypeNestedInput = {
    create?: XOR<AssetsCreateWithoutAssetTypeInput, AssetsUncheckedCreateWithoutAssetTypeInput> | AssetsCreateWithoutAssetTypeInput[] | AssetsUncheckedCreateWithoutAssetTypeInput[]
    connectOrCreate?: AssetsCreateOrConnectWithoutAssetTypeInput | AssetsCreateOrConnectWithoutAssetTypeInput[]
    upsert?: AssetsUpsertWithWhereUniqueWithoutAssetTypeInput | AssetsUpsertWithWhereUniqueWithoutAssetTypeInput[]
    createMany?: AssetsCreateManyAssetTypeInputEnvelope
    set?: AssetsWhereUniqueInput | AssetsWhereUniqueInput[]
    disconnect?: AssetsWhereUniqueInput | AssetsWhereUniqueInput[]
    delete?: AssetsWhereUniqueInput | AssetsWhereUniqueInput[]
    connect?: AssetsWhereUniqueInput | AssetsWhereUniqueInput[]
    update?: AssetsUpdateWithWhereUniqueWithoutAssetTypeInput | AssetsUpdateWithWhereUniqueWithoutAssetTypeInput[]
    updateMany?: AssetsUpdateManyWithWhereWithoutAssetTypeInput | AssetsUpdateManyWithWhereWithoutAssetTypeInput[]
    deleteMany?: AssetsScalarWhereInput | AssetsScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput> | UsersCreateWithoutRolesInput[] | UsersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRolesInput | UsersCreateOrConnectWithoutRolesInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRolesInput | UsersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: UsersCreateManyRolesInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRolesInput | UsersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRolesInput | UsersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type LoggingUncheckedUpdateManyWithoutAction_nameNestedInput = {
    create?: XOR<LoggingCreateWithoutAction_nameInput, LoggingUncheckedCreateWithoutAction_nameInput> | LoggingCreateWithoutAction_nameInput[] | LoggingUncheckedCreateWithoutAction_nameInput[]
    connectOrCreate?: LoggingCreateOrConnectWithoutAction_nameInput | LoggingCreateOrConnectWithoutAction_nameInput[]
    upsert?: LoggingUpsertWithWhereUniqueWithoutAction_nameInput | LoggingUpsertWithWhereUniqueWithoutAction_nameInput[]
    createMany?: LoggingCreateManyAction_nameInputEnvelope
    set?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    disconnect?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    delete?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    connect?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    update?: LoggingUpdateWithWhereUniqueWithoutAction_nameInput | LoggingUpdateWithWhereUniqueWithoutAction_nameInput[]
    updateMany?: LoggingUpdateManyWithWhereWithoutAction_nameInput | LoggingUpdateManyWithWhereWithoutAction_nameInput[]
    deleteMany?: LoggingScalarWhereInput | LoggingScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EmployeesCreateWithoutUserInput = {
    company: CompaniesCreateNestedOneWithoutAdminsInput
  }

  export type EmployeesUncheckedCreateWithoutUserInput = {
    company_id: string
  }

  export type EmployeesCreateOrConnectWithoutUserInput = {
    where: EmployeesWhereUniqueInput
    create: XOR<EmployeesCreateWithoutUserInput, EmployeesUncheckedCreateWithoutUserInput>
  }

  export type LoggingCreateWithoutUserInput = {
    user_activity_id?: string
    activity_time?: Date | string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    action_name: ConstantsCreateNestedOneWithoutLoggingInput
  }

  export type LoggingUncheckedCreateWithoutUserInput = {
    user_activity_id?: string
    action_type: string
    activity_time?: Date | string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type LoggingCreateOrConnectWithoutUserInput = {
    where: LoggingWhereUniqueInput
    create: XOR<LoggingCreateWithoutUserInput, LoggingUncheckedCreateWithoutUserInput>
  }

  export type LoggingCreateManyUserInputEnvelope = {
    data: LoggingCreateManyUserInput | LoggingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConstantsCreateWithoutUsersInput = {
    const_id?: string
    code: string
    description?: string | null
    assets?: AssetsCreateNestedManyWithoutAssetTypeInput
    Logging?: LoggingCreateNestedManyWithoutAction_nameInput
  }

  export type ConstantsUncheckedCreateWithoutUsersInput = {
    const_id?: string
    code: string
    description?: string | null
    assets?: AssetsUncheckedCreateNestedManyWithoutAssetTypeInput
    Logging?: LoggingUncheckedCreateNestedManyWithoutAction_nameInput
  }

  export type ConstantsCreateOrConnectWithoutUsersInput = {
    where: ConstantsWhereUniqueInput
    create: XOR<ConstantsCreateWithoutUsersInput, ConstantsUncheckedCreateWithoutUsersInput>
  }

  export type EmployeesUpsertWithoutUserInput = {
    update: XOR<EmployeesUpdateWithoutUserInput, EmployeesUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeesCreateWithoutUserInput, EmployeesUncheckedCreateWithoutUserInput>
    where?: EmployeesWhereInput
  }

  export type EmployeesUpdateToOneWithWhereWithoutUserInput = {
    where?: EmployeesWhereInput
    data: XOR<EmployeesUpdateWithoutUserInput, EmployeesUncheckedUpdateWithoutUserInput>
  }

  export type EmployeesUpdateWithoutUserInput = {
    company?: CompaniesUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type EmployeesUncheckedUpdateWithoutUserInput = {
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type LoggingUpsertWithWhereUniqueWithoutUserInput = {
    where: LoggingWhereUniqueInput
    update: XOR<LoggingUpdateWithoutUserInput, LoggingUncheckedUpdateWithoutUserInput>
    create: XOR<LoggingCreateWithoutUserInput, LoggingUncheckedCreateWithoutUserInput>
  }

  export type LoggingUpdateWithWhereUniqueWithoutUserInput = {
    where: LoggingWhereUniqueInput
    data: XOR<LoggingUpdateWithoutUserInput, LoggingUncheckedUpdateWithoutUserInput>
  }

  export type LoggingUpdateManyWithWhereWithoutUserInput = {
    where: LoggingScalarWhereInput
    data: XOR<LoggingUpdateManyMutationInput, LoggingUncheckedUpdateManyWithoutUserInput>
  }

  export type LoggingScalarWhereInput = {
    AND?: LoggingScalarWhereInput | LoggingScalarWhereInput[]
    OR?: LoggingScalarWhereInput[]
    NOT?: LoggingScalarWhereInput | LoggingScalarWhereInput[]
    user_activity_id?: StringFilter<"Logging"> | string
    user_id?: StringFilter<"Logging"> | string
    action_type?: StringFilter<"Logging"> | string
    activity_time?: DateTimeFilter<"Logging"> | Date | string
    created_by?: StringNullableFilter<"Logging"> | string | null
    created_date?: DateTimeFilter<"Logging"> | Date | string
    modified_by?: StringNullableFilter<"Logging"> | string | null
    modified_date?: DateTimeFilter<"Logging"> | Date | string
  }

  export type ConstantsUpsertWithoutUsersInput = {
    update: XOR<ConstantsUpdateWithoutUsersInput, ConstantsUncheckedUpdateWithoutUsersInput>
    create: XOR<ConstantsCreateWithoutUsersInput, ConstantsUncheckedCreateWithoutUsersInput>
    where?: ConstantsWhereInput
  }

  export type ConstantsUpdateToOneWithWhereWithoutUsersInput = {
    where?: ConstantsWhereInput
    data: XOR<ConstantsUpdateWithoutUsersInput, ConstantsUncheckedUpdateWithoutUsersInput>
  }

  export type ConstantsUpdateWithoutUsersInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetsUpdateManyWithoutAssetTypeNestedInput
    Logging?: LoggingUpdateManyWithoutAction_nameNestedInput
  }

  export type ConstantsUncheckedUpdateWithoutUsersInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetsUncheckedUpdateManyWithoutAssetTypeNestedInput
    Logging?: LoggingUncheckedUpdateManyWithoutAction_nameNestedInput
  }

  export type UsersCreateWithoutEmployeeInput = {
    user_id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    password: string
    mfa_enabled: boolean
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    last_login?: Date | string | null
    userlogs?: LoggingCreateNestedManyWithoutUserInput
    roles: ConstantsCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutEmployeeInput = {
    user_id?: string
    name: string
    phone_number?: string | null
    region: string
    role: string
    email: string
    password: string
    mfa_enabled: boolean
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    last_login?: Date | string | null
    userlogs?: LoggingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutEmployeeInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutEmployeeInput, UsersUncheckedCreateWithoutEmployeeInput>
  }

  export type CompaniesCreateWithoutAdminsInput = {
    company_id?: string
    company_name: string
    region: string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type CompaniesUncheckedCreateWithoutAdminsInput = {
    company_id?: string
    company_name: string
    region: string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type CompaniesCreateOrConnectWithoutAdminsInput = {
    where: CompaniesWhereUniqueInput
    create: XOR<CompaniesCreateWithoutAdminsInput, CompaniesUncheckedCreateWithoutAdminsInput>
  }

  export type UsersUpsertWithoutEmployeeInput = {
    update: XOR<UsersUpdateWithoutEmployeeInput, UsersUncheckedUpdateWithoutEmployeeInput>
    create: XOR<UsersCreateWithoutEmployeeInput, UsersUncheckedCreateWithoutEmployeeInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutEmployeeInput, UsersUncheckedUpdateWithoutEmployeeInput>
  }

  export type UsersUpdateWithoutEmployeeInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userlogs?: LoggingUpdateManyWithoutUserNestedInput
    roles?: ConstantsUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutEmployeeInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userlogs?: LoggingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CompaniesUpsertWithoutAdminsInput = {
    update: XOR<CompaniesUpdateWithoutAdminsInput, CompaniesUncheckedUpdateWithoutAdminsInput>
    create: XOR<CompaniesCreateWithoutAdminsInput, CompaniesUncheckedCreateWithoutAdminsInput>
    where?: CompaniesWhereInput
  }

  export type CompaniesUpdateToOneWithWhereWithoutAdminsInput = {
    where?: CompaniesWhereInput
    data: XOR<CompaniesUpdateWithoutAdminsInput, CompaniesUncheckedUpdateWithoutAdminsInput>
  }

  export type CompaniesUpdateWithoutAdminsInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompaniesUncheckedUpdateWithoutAdminsInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeesCreateWithoutCompanyInput = {
    user: UsersCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeesUncheckedCreateWithoutCompanyInput = {
    user_id: string
  }

  export type EmployeesCreateOrConnectWithoutCompanyInput = {
    where: EmployeesWhereUniqueInput
    create: XOR<EmployeesCreateWithoutCompanyInput, EmployeesUncheckedCreateWithoutCompanyInput>
  }

  export type EmployeesCreateManyCompanyInputEnvelope = {
    data: EmployeesCreateManyCompanyInput | EmployeesCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type EmployeesUpsertWithWhereUniqueWithoutCompanyInput = {
    where: EmployeesWhereUniqueInput
    update: XOR<EmployeesUpdateWithoutCompanyInput, EmployeesUncheckedUpdateWithoutCompanyInput>
    create: XOR<EmployeesCreateWithoutCompanyInput, EmployeesUncheckedCreateWithoutCompanyInput>
  }

  export type EmployeesUpdateWithWhereUniqueWithoutCompanyInput = {
    where: EmployeesWhereUniqueInput
    data: XOR<EmployeesUpdateWithoutCompanyInput, EmployeesUncheckedUpdateWithoutCompanyInput>
  }

  export type EmployeesUpdateManyWithWhereWithoutCompanyInput = {
    where: EmployeesScalarWhereInput
    data: XOR<EmployeesUpdateManyMutationInput, EmployeesUncheckedUpdateManyWithoutCompanyInput>
  }

  export type EmployeesScalarWhereInput = {
    AND?: EmployeesScalarWhereInput | EmployeesScalarWhereInput[]
    OR?: EmployeesScalarWhereInput[]
    NOT?: EmployeesScalarWhereInput | EmployeesScalarWhereInput[]
    user_id?: StringFilter<"Employees"> | string
    company_id?: StringFilter<"Employees"> | string
  }

  export type ConstantsCreateWithoutAssetsInput = {
    const_id?: string
    code: string
    description?: string | null
    Users?: UsersCreateNestedManyWithoutRolesInput
    Logging?: LoggingCreateNestedManyWithoutAction_nameInput
  }

  export type ConstantsUncheckedCreateWithoutAssetsInput = {
    const_id?: string
    code: string
    description?: string | null
    Users?: UsersUncheckedCreateNestedManyWithoutRolesInput
    Logging?: LoggingUncheckedCreateNestedManyWithoutAction_nameInput
  }

  export type ConstantsCreateOrConnectWithoutAssetsInput = {
    where: ConstantsWhereUniqueInput
    create: XOR<ConstantsCreateWithoutAssetsInput, ConstantsUncheckedCreateWithoutAssetsInput>
  }

  export type CandidateAssetOwnershipCreateWithoutAssetInput = {
    id?: string
    ownership_percentage: number
    candidate: CandidatesCreateNestedOneWithoutAssetsInput
  }

  export type CandidateAssetOwnershipUncheckedCreateWithoutAssetInput = {
    id?: string
    candidate_id: string
    ownership_percentage: number
  }

  export type CandidateAssetOwnershipCreateOrConnectWithoutAssetInput = {
    where: CandidateAssetOwnershipWhereUniqueInput
    create: XOR<CandidateAssetOwnershipCreateWithoutAssetInput, CandidateAssetOwnershipUncheckedCreateWithoutAssetInput>
  }

  export type CandidateAssetOwnershipCreateManyAssetInputEnvelope = {
    data: CandidateAssetOwnershipCreateManyAssetInput | CandidateAssetOwnershipCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type ViewsCreateWithoutPropertyInput = {
    view_id?: string
    viewed_by_whom: string
    viewed_at?: Date | string
  }

  export type ViewsUncheckedCreateWithoutPropertyInput = {
    view_id?: string
    viewed_by_whom: string
    viewed_at?: Date | string
  }

  export type ViewsCreateOrConnectWithoutPropertyInput = {
    where: ViewsWhereUniqueInput
    create: XOR<ViewsCreateWithoutPropertyInput, ViewsUncheckedCreateWithoutPropertyInput>
  }

  export type ViewsCreateManyPropertyInputEnvelope = {
    data: ViewsCreateManyPropertyInput | ViewsCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type BookmarksCreateWithoutPropertiesInput = {
    bookmark_id?: string
    bookmarked_by_whom: string
    bookmarked_at?: Date | string
  }

  export type BookmarksUncheckedCreateWithoutPropertiesInput = {
    bookmark_id?: string
    bookmarked_by_whom: string
    bookmarked_at?: Date | string
  }

  export type BookmarksCreateOrConnectWithoutPropertiesInput = {
    where: BookmarksWhereUniqueInput
    create: XOR<BookmarksCreateWithoutPropertiesInput, BookmarksUncheckedCreateWithoutPropertiesInput>
  }

  export type BookmarksCreateManyPropertiesInputEnvelope = {
    data: BookmarksCreateManyPropertiesInput | BookmarksCreateManyPropertiesInput[]
    skipDuplicates?: boolean
  }

  export type ConstantsUpsertWithoutAssetsInput = {
    update: XOR<ConstantsUpdateWithoutAssetsInput, ConstantsUncheckedUpdateWithoutAssetsInput>
    create: XOR<ConstantsCreateWithoutAssetsInput, ConstantsUncheckedCreateWithoutAssetsInput>
    where?: ConstantsWhereInput
  }

  export type ConstantsUpdateToOneWithWhereWithoutAssetsInput = {
    where?: ConstantsWhereInput
    data: XOR<ConstantsUpdateWithoutAssetsInput, ConstantsUncheckedUpdateWithoutAssetsInput>
  }

  export type ConstantsUpdateWithoutAssetsInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Users?: UsersUpdateManyWithoutRolesNestedInput
    Logging?: LoggingUpdateManyWithoutAction_nameNestedInput
  }

  export type ConstantsUncheckedUpdateWithoutAssetsInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Users?: UsersUncheckedUpdateManyWithoutRolesNestedInput
    Logging?: LoggingUncheckedUpdateManyWithoutAction_nameNestedInput
  }

  export type CandidateAssetOwnershipUpsertWithWhereUniqueWithoutAssetInput = {
    where: CandidateAssetOwnershipWhereUniqueInput
    update: XOR<CandidateAssetOwnershipUpdateWithoutAssetInput, CandidateAssetOwnershipUncheckedUpdateWithoutAssetInput>
    create: XOR<CandidateAssetOwnershipCreateWithoutAssetInput, CandidateAssetOwnershipUncheckedCreateWithoutAssetInput>
  }

  export type CandidateAssetOwnershipUpdateWithWhereUniqueWithoutAssetInput = {
    where: CandidateAssetOwnershipWhereUniqueInput
    data: XOR<CandidateAssetOwnershipUpdateWithoutAssetInput, CandidateAssetOwnershipUncheckedUpdateWithoutAssetInput>
  }

  export type CandidateAssetOwnershipUpdateManyWithWhereWithoutAssetInput = {
    where: CandidateAssetOwnershipScalarWhereInput
    data: XOR<CandidateAssetOwnershipUpdateManyMutationInput, CandidateAssetOwnershipUncheckedUpdateManyWithoutAssetInput>
  }

  export type CandidateAssetOwnershipScalarWhereInput = {
    AND?: CandidateAssetOwnershipScalarWhereInput | CandidateAssetOwnershipScalarWhereInput[]
    OR?: CandidateAssetOwnershipScalarWhereInput[]
    NOT?: CandidateAssetOwnershipScalarWhereInput | CandidateAssetOwnershipScalarWhereInput[]
    id?: StringFilter<"CandidateAssetOwnership"> | string
    asset_id?: StringFilter<"CandidateAssetOwnership"> | string
    candidate_id?: StringFilter<"CandidateAssetOwnership"> | string
    ownership_percentage?: FloatFilter<"CandidateAssetOwnership"> | number
  }

  export type ViewsUpsertWithWhereUniqueWithoutPropertyInput = {
    where: ViewsWhereUniqueInput
    update: XOR<ViewsUpdateWithoutPropertyInput, ViewsUncheckedUpdateWithoutPropertyInput>
    create: XOR<ViewsCreateWithoutPropertyInput, ViewsUncheckedCreateWithoutPropertyInput>
  }

  export type ViewsUpdateWithWhereUniqueWithoutPropertyInput = {
    where: ViewsWhereUniqueInput
    data: XOR<ViewsUpdateWithoutPropertyInput, ViewsUncheckedUpdateWithoutPropertyInput>
  }

  export type ViewsUpdateManyWithWhereWithoutPropertyInput = {
    where: ViewsScalarWhereInput
    data: XOR<ViewsUpdateManyMutationInput, ViewsUncheckedUpdateManyWithoutPropertyInput>
  }

  export type ViewsScalarWhereInput = {
    AND?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
    OR?: ViewsScalarWhereInput[]
    NOT?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
    view_id?: StringFilter<"Views"> | string
    property_id?: StringFilter<"Views"> | string
    viewed_by_whom?: StringFilter<"Views"> | string
    viewed_at?: DateTimeFilter<"Views"> | Date | string
  }

  export type BookmarksUpsertWithWhereUniqueWithoutPropertiesInput = {
    where: BookmarksWhereUniqueInput
    update: XOR<BookmarksUpdateWithoutPropertiesInput, BookmarksUncheckedUpdateWithoutPropertiesInput>
    create: XOR<BookmarksCreateWithoutPropertiesInput, BookmarksUncheckedCreateWithoutPropertiesInput>
  }

  export type BookmarksUpdateWithWhereUniqueWithoutPropertiesInput = {
    where: BookmarksWhereUniqueInput
    data: XOR<BookmarksUpdateWithoutPropertiesInput, BookmarksUncheckedUpdateWithoutPropertiesInput>
  }

  export type BookmarksUpdateManyWithWhereWithoutPropertiesInput = {
    where: BookmarksScalarWhereInput
    data: XOR<BookmarksUpdateManyMutationInput, BookmarksUncheckedUpdateManyWithoutPropertiesInput>
  }

  export type BookmarksScalarWhereInput = {
    AND?: BookmarksScalarWhereInput | BookmarksScalarWhereInput[]
    OR?: BookmarksScalarWhereInput[]
    NOT?: BookmarksScalarWhereInput | BookmarksScalarWhereInput[]
    bookmark_id?: StringFilter<"Bookmarks"> | string
    property_id?: StringFilter<"Bookmarks"> | string
    bookmarked_by_whom?: StringFilter<"Bookmarks"> | string
    bookmarked_at?: DateTimeFilter<"Bookmarks"> | Date | string
  }

  export type AssetsCreateWithoutOwnersInput = {
    asset_id?: string
    description?: string | null
    region?: string | null
    quantity?: number | null
    unit_of_measurement?: string | null
    unit_value?: number | null
    total_value?: number | null
    income_generated?: number | null
    valuation_method: string
    valuation_date: Date | string
    source_platform?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    assetType: ConstantsCreateNestedOneWithoutAssetsInput
    Views?: ViewsCreateNestedManyWithoutPropertyInput
    Bookmarks?: BookmarksCreateNestedManyWithoutPropertiesInput
  }

  export type AssetsUncheckedCreateWithoutOwnersInput = {
    asset_id?: string
    asset_type_id: string
    description?: string | null
    region?: string | null
    quantity?: number | null
    unit_of_measurement?: string | null
    unit_value?: number | null
    total_value?: number | null
    income_generated?: number | null
    valuation_method: string
    valuation_date: Date | string
    source_platform?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    Views?: ViewsUncheckedCreateNestedManyWithoutPropertyInput
    Bookmarks?: BookmarksUncheckedCreateNestedManyWithoutPropertiesInput
  }

  export type AssetsCreateOrConnectWithoutOwnersInput = {
    where: AssetsWhereUniqueInput
    create: XOR<AssetsCreateWithoutOwnersInput, AssetsUncheckedCreateWithoutOwnersInput>
  }

  export type CandidatesCreateWithoutAssetsInput = {
    candidate_id?: string
    name: string
    region: string
    phone_number: string
    email: string
    address: string
    dob: Date | string
    country_name: string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type CandidatesUncheckedCreateWithoutAssetsInput = {
    candidate_id?: string
    name: string
    region: string
    phone_number: string
    email: string
    address: string
    dob: Date | string
    country_name: string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type CandidatesCreateOrConnectWithoutAssetsInput = {
    where: CandidatesWhereUniqueInput
    create: XOR<CandidatesCreateWithoutAssetsInput, CandidatesUncheckedCreateWithoutAssetsInput>
  }

  export type AssetsUpsertWithoutOwnersInput = {
    update: XOR<AssetsUpdateWithoutOwnersInput, AssetsUncheckedUpdateWithoutOwnersInput>
    create: XOR<AssetsCreateWithoutOwnersInput, AssetsUncheckedCreateWithoutOwnersInput>
    where?: AssetsWhereInput
  }

  export type AssetsUpdateToOneWithWhereWithoutOwnersInput = {
    where?: AssetsWhereInput
    data: XOR<AssetsUpdateWithoutOwnersInput, AssetsUncheckedUpdateWithoutOwnersInput>
  }

  export type AssetsUpdateWithoutOwnersInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_of_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    unit_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    income_generated?: NullableFloatFieldUpdateOperationsInput | number | null
    valuation_method?: StringFieldUpdateOperationsInput | string
    valuation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source_platform?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assetType?: ConstantsUpdateOneRequiredWithoutAssetsNestedInput
    Views?: ViewsUpdateManyWithoutPropertyNestedInput
    Bookmarks?: BookmarksUpdateManyWithoutPropertiesNestedInput
  }

  export type AssetsUncheckedUpdateWithoutOwnersInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    asset_type_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_of_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    unit_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    income_generated?: NullableFloatFieldUpdateOperationsInput | number | null
    valuation_method?: StringFieldUpdateOperationsInput | string
    valuation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source_platform?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Views?: ViewsUncheckedUpdateManyWithoutPropertyNestedInput
    Bookmarks?: BookmarksUncheckedUpdateManyWithoutPropertiesNestedInput
  }

  export type CandidatesUpsertWithoutAssetsInput = {
    update: XOR<CandidatesUpdateWithoutAssetsInput, CandidatesUncheckedUpdateWithoutAssetsInput>
    create: XOR<CandidatesCreateWithoutAssetsInput, CandidatesUncheckedCreateWithoutAssetsInput>
    where?: CandidatesWhereInput
  }

  export type CandidatesUpdateToOneWithWhereWithoutAssetsInput = {
    where?: CandidatesWhereInput
    data: XOR<CandidatesUpdateWithoutAssetsInput, CandidatesUncheckedUpdateWithoutAssetsInput>
  }

  export type CandidatesUpdateWithoutAssetsInput = {
    candidate_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country_name?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatesUncheckedUpdateWithoutAssetsInput = {
    candidate_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country_name?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateAssetOwnershipCreateWithoutCandidateInput = {
    id?: string
    ownership_percentage: number
    asset: AssetsCreateNestedOneWithoutOwnersInput
  }

  export type CandidateAssetOwnershipUncheckedCreateWithoutCandidateInput = {
    id?: string
    asset_id: string
    ownership_percentage: number
  }

  export type CandidateAssetOwnershipCreateOrConnectWithoutCandidateInput = {
    where: CandidateAssetOwnershipWhereUniqueInput
    create: XOR<CandidateAssetOwnershipCreateWithoutCandidateInput, CandidateAssetOwnershipUncheckedCreateWithoutCandidateInput>
  }

  export type CandidateAssetOwnershipCreateManyCandidateInputEnvelope = {
    data: CandidateAssetOwnershipCreateManyCandidateInput | CandidateAssetOwnershipCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type CandidateAssetOwnershipUpsertWithWhereUniqueWithoutCandidateInput = {
    where: CandidateAssetOwnershipWhereUniqueInput
    update: XOR<CandidateAssetOwnershipUpdateWithoutCandidateInput, CandidateAssetOwnershipUncheckedUpdateWithoutCandidateInput>
    create: XOR<CandidateAssetOwnershipCreateWithoutCandidateInput, CandidateAssetOwnershipUncheckedCreateWithoutCandidateInput>
  }

  export type CandidateAssetOwnershipUpdateWithWhereUniqueWithoutCandidateInput = {
    where: CandidateAssetOwnershipWhereUniqueInput
    data: XOR<CandidateAssetOwnershipUpdateWithoutCandidateInput, CandidateAssetOwnershipUncheckedUpdateWithoutCandidateInput>
  }

  export type CandidateAssetOwnershipUpdateManyWithWhereWithoutCandidateInput = {
    where: CandidateAssetOwnershipScalarWhereInput
    data: XOR<CandidateAssetOwnershipUpdateManyMutationInput, CandidateAssetOwnershipUncheckedUpdateManyWithoutCandidateInput>
  }

  export type ConstantsCreateWithoutLoggingInput = {
    const_id?: string
    code: string
    description?: string | null
    assets?: AssetsCreateNestedManyWithoutAssetTypeInput
    Users?: UsersCreateNestedManyWithoutRolesInput
  }

  export type ConstantsUncheckedCreateWithoutLoggingInput = {
    const_id?: string
    code: string
    description?: string | null
    assets?: AssetsUncheckedCreateNestedManyWithoutAssetTypeInput
    Users?: UsersUncheckedCreateNestedManyWithoutRolesInput
  }

  export type ConstantsCreateOrConnectWithoutLoggingInput = {
    where: ConstantsWhereUniqueInput
    create: XOR<ConstantsCreateWithoutLoggingInput, ConstantsUncheckedCreateWithoutLoggingInput>
  }

  export type UsersCreateWithoutUserlogsInput = {
    user_id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    password: string
    mfa_enabled: boolean
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    last_login?: Date | string | null
    employee?: EmployeesCreateNestedOneWithoutUserInput
    roles: ConstantsCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutUserlogsInput = {
    user_id?: string
    name: string
    phone_number?: string | null
    region: string
    role: string
    email: string
    password: string
    mfa_enabled: boolean
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    last_login?: Date | string | null
    employee?: EmployeesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutUserlogsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUserlogsInput, UsersUncheckedCreateWithoutUserlogsInput>
  }

  export type ConstantsUpsertWithoutLoggingInput = {
    update: XOR<ConstantsUpdateWithoutLoggingInput, ConstantsUncheckedUpdateWithoutLoggingInput>
    create: XOR<ConstantsCreateWithoutLoggingInput, ConstantsUncheckedCreateWithoutLoggingInput>
    where?: ConstantsWhereInput
  }

  export type ConstantsUpdateToOneWithWhereWithoutLoggingInput = {
    where?: ConstantsWhereInput
    data: XOR<ConstantsUpdateWithoutLoggingInput, ConstantsUncheckedUpdateWithoutLoggingInput>
  }

  export type ConstantsUpdateWithoutLoggingInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetsUpdateManyWithoutAssetTypeNestedInput
    Users?: UsersUpdateManyWithoutRolesNestedInput
  }

  export type ConstantsUncheckedUpdateWithoutLoggingInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetsUncheckedUpdateManyWithoutAssetTypeNestedInput
    Users?: UsersUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type UsersUpsertWithoutUserlogsInput = {
    update: XOR<UsersUpdateWithoutUserlogsInput, UsersUncheckedUpdateWithoutUserlogsInput>
    create: XOR<UsersCreateWithoutUserlogsInput, UsersUncheckedCreateWithoutUserlogsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUserlogsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUserlogsInput, UsersUncheckedUpdateWithoutUserlogsInput>
  }

  export type UsersUpdateWithoutUserlogsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee?: EmployeesUpdateOneWithoutUserNestedInput
    roles?: ConstantsUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutUserlogsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee?: EmployeesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AssetsCreateWithoutViewsInput = {
    asset_id?: string
    description?: string | null
    region?: string | null
    quantity?: number | null
    unit_of_measurement?: string | null
    unit_value?: number | null
    total_value?: number | null
    income_generated?: number | null
    valuation_method: string
    valuation_date: Date | string
    source_platform?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    assetType: ConstantsCreateNestedOneWithoutAssetsInput
    owners?: CandidateAssetOwnershipCreateNestedManyWithoutAssetInput
    Bookmarks?: BookmarksCreateNestedManyWithoutPropertiesInput
  }

  export type AssetsUncheckedCreateWithoutViewsInput = {
    asset_id?: string
    asset_type_id: string
    description?: string | null
    region?: string | null
    quantity?: number | null
    unit_of_measurement?: string | null
    unit_value?: number | null
    total_value?: number | null
    income_generated?: number | null
    valuation_method: string
    valuation_date: Date | string
    source_platform?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    owners?: CandidateAssetOwnershipUncheckedCreateNestedManyWithoutAssetInput
    Bookmarks?: BookmarksUncheckedCreateNestedManyWithoutPropertiesInput
  }

  export type AssetsCreateOrConnectWithoutViewsInput = {
    where: AssetsWhereUniqueInput
    create: XOR<AssetsCreateWithoutViewsInput, AssetsUncheckedCreateWithoutViewsInput>
  }

  export type AssetsUpsertWithoutViewsInput = {
    update: XOR<AssetsUpdateWithoutViewsInput, AssetsUncheckedUpdateWithoutViewsInput>
    create: XOR<AssetsCreateWithoutViewsInput, AssetsUncheckedCreateWithoutViewsInput>
    where?: AssetsWhereInput
  }

  export type AssetsUpdateToOneWithWhereWithoutViewsInput = {
    where?: AssetsWhereInput
    data: XOR<AssetsUpdateWithoutViewsInput, AssetsUncheckedUpdateWithoutViewsInput>
  }

  export type AssetsUpdateWithoutViewsInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_of_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    unit_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    income_generated?: NullableFloatFieldUpdateOperationsInput | number | null
    valuation_method?: StringFieldUpdateOperationsInput | string
    valuation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source_platform?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assetType?: ConstantsUpdateOneRequiredWithoutAssetsNestedInput
    owners?: CandidateAssetOwnershipUpdateManyWithoutAssetNestedInput
    Bookmarks?: BookmarksUpdateManyWithoutPropertiesNestedInput
  }

  export type AssetsUncheckedUpdateWithoutViewsInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    asset_type_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_of_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    unit_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    income_generated?: NullableFloatFieldUpdateOperationsInput | number | null
    valuation_method?: StringFieldUpdateOperationsInput | string
    valuation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source_platform?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: CandidateAssetOwnershipUncheckedUpdateManyWithoutAssetNestedInput
    Bookmarks?: BookmarksUncheckedUpdateManyWithoutPropertiesNestedInput
  }

  export type AssetsCreateWithoutBookmarksInput = {
    asset_id?: string
    description?: string | null
    region?: string | null
    quantity?: number | null
    unit_of_measurement?: string | null
    unit_value?: number | null
    total_value?: number | null
    income_generated?: number | null
    valuation_method: string
    valuation_date: Date | string
    source_platform?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    assetType: ConstantsCreateNestedOneWithoutAssetsInput
    owners?: CandidateAssetOwnershipCreateNestedManyWithoutAssetInput
    Views?: ViewsCreateNestedManyWithoutPropertyInput
  }

  export type AssetsUncheckedCreateWithoutBookmarksInput = {
    asset_id?: string
    asset_type_id: string
    description?: string | null
    region?: string | null
    quantity?: number | null
    unit_of_measurement?: string | null
    unit_value?: number | null
    total_value?: number | null
    income_generated?: number | null
    valuation_method: string
    valuation_date: Date | string
    source_platform?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    owners?: CandidateAssetOwnershipUncheckedCreateNestedManyWithoutAssetInput
    Views?: ViewsUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type AssetsCreateOrConnectWithoutBookmarksInput = {
    where: AssetsWhereUniqueInput
    create: XOR<AssetsCreateWithoutBookmarksInput, AssetsUncheckedCreateWithoutBookmarksInput>
  }

  export type AssetsUpsertWithoutBookmarksInput = {
    update: XOR<AssetsUpdateWithoutBookmarksInput, AssetsUncheckedUpdateWithoutBookmarksInput>
    create: XOR<AssetsCreateWithoutBookmarksInput, AssetsUncheckedCreateWithoutBookmarksInput>
    where?: AssetsWhereInput
  }

  export type AssetsUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: AssetsWhereInput
    data: XOR<AssetsUpdateWithoutBookmarksInput, AssetsUncheckedUpdateWithoutBookmarksInput>
  }

  export type AssetsUpdateWithoutBookmarksInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_of_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    unit_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    income_generated?: NullableFloatFieldUpdateOperationsInput | number | null
    valuation_method?: StringFieldUpdateOperationsInput | string
    valuation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source_platform?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assetType?: ConstantsUpdateOneRequiredWithoutAssetsNestedInput
    owners?: CandidateAssetOwnershipUpdateManyWithoutAssetNestedInput
    Views?: ViewsUpdateManyWithoutPropertyNestedInput
  }

  export type AssetsUncheckedUpdateWithoutBookmarksInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    asset_type_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_of_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    unit_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    income_generated?: NullableFloatFieldUpdateOperationsInput | number | null
    valuation_method?: StringFieldUpdateOperationsInput | string
    valuation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source_platform?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: CandidateAssetOwnershipUncheckedUpdateManyWithoutAssetNestedInput
    Views?: ViewsUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type AssetsCreateWithoutAssetTypeInput = {
    asset_id?: string
    description?: string | null
    region?: string | null
    quantity?: number | null
    unit_of_measurement?: string | null
    unit_value?: number | null
    total_value?: number | null
    income_generated?: number | null
    valuation_method: string
    valuation_date: Date | string
    source_platform?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    owners?: CandidateAssetOwnershipCreateNestedManyWithoutAssetInput
    Views?: ViewsCreateNestedManyWithoutPropertyInput
    Bookmarks?: BookmarksCreateNestedManyWithoutPropertiesInput
  }

  export type AssetsUncheckedCreateWithoutAssetTypeInput = {
    asset_id?: string
    description?: string | null
    region?: string | null
    quantity?: number | null
    unit_of_measurement?: string | null
    unit_value?: number | null
    total_value?: number | null
    income_generated?: number | null
    valuation_method: string
    valuation_date: Date | string
    source_platform?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    owners?: CandidateAssetOwnershipUncheckedCreateNestedManyWithoutAssetInput
    Views?: ViewsUncheckedCreateNestedManyWithoutPropertyInput
    Bookmarks?: BookmarksUncheckedCreateNestedManyWithoutPropertiesInput
  }

  export type AssetsCreateOrConnectWithoutAssetTypeInput = {
    where: AssetsWhereUniqueInput
    create: XOR<AssetsCreateWithoutAssetTypeInput, AssetsUncheckedCreateWithoutAssetTypeInput>
  }

  export type AssetsCreateManyAssetTypeInputEnvelope = {
    data: AssetsCreateManyAssetTypeInput | AssetsCreateManyAssetTypeInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutRolesInput = {
    user_id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    password: string
    mfa_enabled: boolean
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    last_login?: Date | string | null
    employee?: EmployeesCreateNestedOneWithoutUserInput
    userlogs?: LoggingCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutRolesInput = {
    user_id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    password: string
    mfa_enabled: boolean
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    last_login?: Date | string | null
    employee?: EmployeesUncheckedCreateNestedOneWithoutUserInput
    userlogs?: LoggingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutRolesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput>
  }

  export type UsersCreateManyRolesInputEnvelope = {
    data: UsersCreateManyRolesInput | UsersCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type LoggingCreateWithoutAction_nameInput = {
    user_activity_id?: string
    activity_time?: Date | string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    user: UsersCreateNestedOneWithoutUserlogsInput
  }

  export type LoggingUncheckedCreateWithoutAction_nameInput = {
    user_activity_id?: string
    user_id: string
    activity_time?: Date | string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type LoggingCreateOrConnectWithoutAction_nameInput = {
    where: LoggingWhereUniqueInput
    create: XOR<LoggingCreateWithoutAction_nameInput, LoggingUncheckedCreateWithoutAction_nameInput>
  }

  export type LoggingCreateManyAction_nameInputEnvelope = {
    data: LoggingCreateManyAction_nameInput | LoggingCreateManyAction_nameInput[]
    skipDuplicates?: boolean
  }

  export type AssetsUpsertWithWhereUniqueWithoutAssetTypeInput = {
    where: AssetsWhereUniqueInput
    update: XOR<AssetsUpdateWithoutAssetTypeInput, AssetsUncheckedUpdateWithoutAssetTypeInput>
    create: XOR<AssetsCreateWithoutAssetTypeInput, AssetsUncheckedCreateWithoutAssetTypeInput>
  }

  export type AssetsUpdateWithWhereUniqueWithoutAssetTypeInput = {
    where: AssetsWhereUniqueInput
    data: XOR<AssetsUpdateWithoutAssetTypeInput, AssetsUncheckedUpdateWithoutAssetTypeInput>
  }

  export type AssetsUpdateManyWithWhereWithoutAssetTypeInput = {
    where: AssetsScalarWhereInput
    data: XOR<AssetsUpdateManyMutationInput, AssetsUncheckedUpdateManyWithoutAssetTypeInput>
  }

  export type AssetsScalarWhereInput = {
    AND?: AssetsScalarWhereInput | AssetsScalarWhereInput[]
    OR?: AssetsScalarWhereInput[]
    NOT?: AssetsScalarWhereInput | AssetsScalarWhereInput[]
    asset_id?: StringFilter<"Assets"> | string
    asset_type_id?: StringFilter<"Assets"> | string
    description?: StringNullableFilter<"Assets"> | string | null
    region?: StringNullableFilter<"Assets"> | string | null
    quantity?: FloatNullableFilter<"Assets"> | number | null
    unit_of_measurement?: StringNullableFilter<"Assets"> | string | null
    unit_value?: FloatNullableFilter<"Assets"> | number | null
    total_value?: FloatNullableFilter<"Assets"> | number | null
    income_generated?: FloatNullableFilter<"Assets"> | number | null
    valuation_method?: StringFilter<"Assets"> | string
    valuation_date?: DateTimeFilter<"Assets"> | Date | string
    source_platform?: StringNullableFilter<"Assets"> | string | null
    created_by?: StringNullableFilter<"Assets"> | string | null
    created_date?: DateTimeFilter<"Assets"> | Date | string
    modified_by?: StringNullableFilter<"Assets"> | string | null
    modified_date?: DateTimeFilter<"Assets"> | Date | string
  }

  export type UsersUpsertWithWhereUniqueWithoutRolesInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutRolesInput, UsersUncheckedUpdateWithoutRolesInput>
    create: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutRolesInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutRolesInput, UsersUncheckedUpdateWithoutRolesInput>
  }

  export type UsersUpdateManyWithWhereWithoutRolesInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutRolesInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    user_id?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    phone_number?: StringNullableFilter<"Users"> | string | null
    region?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    mfa_enabled?: BoolFilter<"Users"> | boolean
    created_by?: StringNullableFilter<"Users"> | string | null
    created_date?: DateTimeFilter<"Users"> | Date | string
    modified_by?: StringNullableFilter<"Users"> | string | null
    modified_date?: DateTimeNullableFilter<"Users"> | Date | string | null
    last_login?: DateTimeNullableFilter<"Users"> | Date | string | null
  }

  export type LoggingUpsertWithWhereUniqueWithoutAction_nameInput = {
    where: LoggingWhereUniqueInput
    update: XOR<LoggingUpdateWithoutAction_nameInput, LoggingUncheckedUpdateWithoutAction_nameInput>
    create: XOR<LoggingCreateWithoutAction_nameInput, LoggingUncheckedCreateWithoutAction_nameInput>
  }

  export type LoggingUpdateWithWhereUniqueWithoutAction_nameInput = {
    where: LoggingWhereUniqueInput
    data: XOR<LoggingUpdateWithoutAction_nameInput, LoggingUncheckedUpdateWithoutAction_nameInput>
  }

  export type LoggingUpdateManyWithWhereWithoutAction_nameInput = {
    where: LoggingScalarWhereInput
    data: XOR<LoggingUpdateManyMutationInput, LoggingUncheckedUpdateManyWithoutAction_nameInput>
  }

  export type LoggingCreateManyUserInput = {
    user_activity_id?: string
    action_type: string
    activity_time?: Date | string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type LoggingUpdateWithoutUserInput = {
    user_activity_id?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    action_name?: ConstantsUpdateOneRequiredWithoutLoggingNestedInput
  }

  export type LoggingUncheckedUpdateWithoutUserInput = {
    user_activity_id?: StringFieldUpdateOperationsInput | string
    action_type?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoggingUncheckedUpdateManyWithoutUserInput = {
    user_activity_id?: StringFieldUpdateOperationsInput | string
    action_type?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeesCreateManyCompanyInput = {
    user_id: string
  }

  export type EmployeesUpdateWithoutCompanyInput = {
    user?: UsersUpdateOneRequiredWithoutEmployeeNestedInput
  }

  export type EmployeesUncheckedUpdateWithoutCompanyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeesUncheckedUpdateManyWithoutCompanyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateAssetOwnershipCreateManyAssetInput = {
    id?: string
    candidate_id: string
    ownership_percentage: number
  }

  export type ViewsCreateManyPropertyInput = {
    view_id?: string
    viewed_by_whom: string
    viewed_at?: Date | string
  }

  export type BookmarksCreateManyPropertiesInput = {
    bookmark_id?: string
    bookmarked_by_whom: string
    bookmarked_at?: Date | string
  }

  export type CandidateAssetOwnershipUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownership_percentage?: FloatFieldUpdateOperationsInput | number
    candidate?: CandidatesUpdateOneRequiredWithoutAssetsNestedInput
  }

  export type CandidateAssetOwnershipUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidate_id?: StringFieldUpdateOperationsInput | string
    ownership_percentage?: FloatFieldUpdateOperationsInput | number
  }

  export type CandidateAssetOwnershipUncheckedUpdateManyWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidate_id?: StringFieldUpdateOperationsInput | string
    ownership_percentage?: FloatFieldUpdateOperationsInput | number
  }

  export type ViewsUpdateWithoutPropertyInput = {
    view_id?: StringFieldUpdateOperationsInput | string
    viewed_by_whom?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewsUncheckedUpdateWithoutPropertyInput = {
    view_id?: StringFieldUpdateOperationsInput | string
    viewed_by_whom?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewsUncheckedUpdateManyWithoutPropertyInput = {
    view_id?: StringFieldUpdateOperationsInput | string
    viewed_by_whom?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarksUpdateWithoutPropertiesInput = {
    bookmark_id?: StringFieldUpdateOperationsInput | string
    bookmarked_by_whom?: StringFieldUpdateOperationsInput | string
    bookmarked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarksUncheckedUpdateWithoutPropertiesInput = {
    bookmark_id?: StringFieldUpdateOperationsInput | string
    bookmarked_by_whom?: StringFieldUpdateOperationsInput | string
    bookmarked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarksUncheckedUpdateManyWithoutPropertiesInput = {
    bookmark_id?: StringFieldUpdateOperationsInput | string
    bookmarked_by_whom?: StringFieldUpdateOperationsInput | string
    bookmarked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateAssetOwnershipCreateManyCandidateInput = {
    id?: string
    asset_id: string
    ownership_percentage: number
  }

  export type CandidateAssetOwnershipUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownership_percentage?: FloatFieldUpdateOperationsInput | number
    asset?: AssetsUpdateOneRequiredWithoutOwnersNestedInput
  }

  export type CandidateAssetOwnershipUncheckedUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_id?: StringFieldUpdateOperationsInput | string
    ownership_percentage?: FloatFieldUpdateOperationsInput | number
  }

  export type CandidateAssetOwnershipUncheckedUpdateManyWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_id?: StringFieldUpdateOperationsInput | string
    ownership_percentage?: FloatFieldUpdateOperationsInput | number
  }

  export type AssetsCreateManyAssetTypeInput = {
    asset_id?: string
    description?: string | null
    region?: string | null
    quantity?: number | null
    unit_of_measurement?: string | null
    unit_value?: number | null
    total_value?: number | null
    income_generated?: number | null
    valuation_method: string
    valuation_date: Date | string
    source_platform?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type UsersCreateManyRolesInput = {
    user_id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    password: string
    mfa_enabled: boolean
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    last_login?: Date | string | null
  }

  export type LoggingCreateManyAction_nameInput = {
    user_activity_id?: string
    user_id: string
    activity_time?: Date | string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type AssetsUpdateWithoutAssetTypeInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_of_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    unit_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    income_generated?: NullableFloatFieldUpdateOperationsInput | number | null
    valuation_method?: StringFieldUpdateOperationsInput | string
    valuation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source_platform?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: CandidateAssetOwnershipUpdateManyWithoutAssetNestedInput
    Views?: ViewsUpdateManyWithoutPropertyNestedInput
    Bookmarks?: BookmarksUpdateManyWithoutPropertiesNestedInput
  }

  export type AssetsUncheckedUpdateWithoutAssetTypeInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_of_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    unit_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    income_generated?: NullableFloatFieldUpdateOperationsInput | number | null
    valuation_method?: StringFieldUpdateOperationsInput | string
    valuation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source_platform?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: CandidateAssetOwnershipUncheckedUpdateManyWithoutAssetNestedInput
    Views?: ViewsUncheckedUpdateManyWithoutPropertyNestedInput
    Bookmarks?: BookmarksUncheckedUpdateManyWithoutPropertiesNestedInput
  }

  export type AssetsUncheckedUpdateManyWithoutAssetTypeInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_of_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    unit_value?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    income_generated?: NullableFloatFieldUpdateOperationsInput | number | null
    valuation_method?: StringFieldUpdateOperationsInput | string
    valuation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source_platform?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUpdateWithoutRolesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee?: EmployeesUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutRolesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee?: EmployeesUncheckedUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutRolesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoggingUpdateWithoutAction_nameInput = {
    user_activity_id?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutUserlogsNestedInput
  }

  export type LoggingUncheckedUpdateWithoutAction_nameInput = {
    user_activity_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoggingUncheckedUpdateManyWithoutAction_nameInput = {
    user_activity_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}