
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model TwoFactor
 * 
 */
export type TwoFactor = $Result.DefaultSelection<Prisma.$TwoFactorPayload>
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
 * const users = await prisma.user.findMany()
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
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.twoFactor`: Exposes CRUD operations for the **TwoFactor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwoFactors
    * const twoFactors = await prisma.twoFactor.findMany()
    * ```
    */
  get twoFactor(): Prisma.TwoFactorDelegate<ExtArgs, ClientOptions>;

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
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    TwoFactor: 'TwoFactor',
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
      modelProps: "user" | "session" | "account" | "verification" | "twoFactor" | "employees" | "companies" | "assets" | "candidateAssetOwnership" | "candidates" | "logging" | "views" | "bookmarks" | "constants"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      TwoFactor: {
        payload: Prisma.$TwoFactorPayload<ExtArgs>
        fields: Prisma.TwoFactorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TwoFactorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TwoFactorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorPayload>
          }
          findFirst: {
            args: Prisma.TwoFactorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TwoFactorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorPayload>
          }
          findMany: {
            args: Prisma.TwoFactorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorPayload>[]
          }
          create: {
            args: Prisma.TwoFactorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorPayload>
          }
          createMany: {
            args: Prisma.TwoFactorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TwoFactorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorPayload>[]
          }
          delete: {
            args: Prisma.TwoFactorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorPayload>
          }
          update: {
            args: Prisma.TwoFactorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorPayload>
          }
          deleteMany: {
            args: Prisma.TwoFactorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TwoFactorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TwoFactorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorPayload>[]
          }
          upsert: {
            args: Prisma.TwoFactorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorPayload>
          }
          aggregate: {
            args: Prisma.TwoFactorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTwoFactor>
          }
          groupBy: {
            args: Prisma.TwoFactorGroupByArgs<ExtArgs>
            result: $Utils.Optional<TwoFactorGroupByOutputType>[]
          }
          count: {
            args: Prisma.TwoFactorCountArgs<ExtArgs>
            result: $Utils.Optional<TwoFactorCountAggregateOutputType> | number
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
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    twoFactor?: TwoFactorOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userlogs: number
    sessions: number
    accounts: number
    twofactors: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userlogs?: boolean | UserCountOutputTypeCountUserlogsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    twofactors?: boolean | UserCountOutputTypeCountTwofactorsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoggingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTwofactorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TwoFactorWhereInput
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
    where?: UserWhereInput
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
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone_number: string | null
    region: string | null
    email: string | null
    created_date: Date | null
    modified_date: Date | null
    last_login: Date | null
    emailVerified: boolean | null
    image: string | null
    role_id: string | null
    twoFactorEnabled: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone_number: string | null
    region: string | null
    email: string | null
    created_date: Date | null
    modified_date: Date | null
    last_login: Date | null
    emailVerified: boolean | null
    image: string | null
    role_id: string | null
    twoFactorEnabled: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    phone_number: number
    region: number
    email: number
    created_date: number
    modified_date: number
    last_login: number
    emailVerified: number
    image: number
    role_id: number
    twoFactorEnabled: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    phone_number?: true
    region?: true
    email?: true
    created_date?: true
    modified_date?: true
    last_login?: true
    emailVerified?: true
    image?: true
    role_id?: true
    twoFactorEnabled?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    phone_number?: true
    region?: true
    email?: true
    created_date?: true
    modified_date?: true
    last_login?: true
    emailVerified?: true
    image?: true
    role_id?: true
    twoFactorEnabled?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    phone_number?: true
    region?: true
    email?: true
    created_date?: true
    modified_date?: true
    last_login?: true
    emailVerified?: true
    image?: true
    role_id?: true
    twoFactorEnabled?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    phone_number: string | null
    region: string
    email: string
    created_date: Date
    modified_date: Date | null
    last_login: Date | null
    emailVerified: boolean
    image: string | null
    role_id: string
    twoFactorEnabled: boolean | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone_number?: boolean
    region?: boolean
    email?: boolean
    created_date?: boolean
    modified_date?: boolean
    last_login?: boolean
    emailVerified?: boolean
    image?: boolean
    role_id?: boolean
    twoFactorEnabled?: boolean
    employee?: boolean | User$employeeArgs<ExtArgs>
    userlogs?: boolean | User$userlogsArgs<ExtArgs>
    roles?: boolean | ConstantsDefaultArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    twofactors?: boolean | User$twofactorsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone_number?: boolean
    region?: boolean
    email?: boolean
    created_date?: boolean
    modified_date?: boolean
    last_login?: boolean
    emailVerified?: boolean
    image?: boolean
    role_id?: boolean
    twoFactorEnabled?: boolean
    roles?: boolean | ConstantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone_number?: boolean
    region?: boolean
    email?: boolean
    created_date?: boolean
    modified_date?: boolean
    last_login?: boolean
    emailVerified?: boolean
    image?: boolean
    role_id?: boolean
    twoFactorEnabled?: boolean
    roles?: boolean | ConstantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    phone_number?: boolean
    region?: boolean
    email?: boolean
    created_date?: boolean
    modified_date?: boolean
    last_login?: boolean
    emailVerified?: boolean
    image?: boolean
    role_id?: boolean
    twoFactorEnabled?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone_number" | "region" | "email" | "created_date" | "modified_date" | "last_login" | "emailVerified" | "image" | "role_id" | "twoFactorEnabled", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | User$employeeArgs<ExtArgs>
    userlogs?: boolean | User$userlogsArgs<ExtArgs>
    roles?: boolean | ConstantsDefaultArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    twofactors?: boolean | User$twofactorsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | ConstantsDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | ConstantsDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      employee: Prisma.$EmployeesPayload<ExtArgs> | null
      userlogs: Prisma.$LoggingPayload<ExtArgs>[]
      roles: Prisma.$ConstantsPayload<ExtArgs>
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      twofactors: Prisma.$TwoFactorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone_number: string | null
      region: string
      email: string
      created_date: Date
      modified_date: Date | null
      last_login: Date | null
      emailVerified: boolean
      image: string | null
      role_id: string
      twoFactorEnabled: boolean | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends User$employeeArgs<ExtArgs> = {}>(args?: Subset<T, User$employeeArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userlogs<T extends User$userlogsArgs<ExtArgs> = {}>(args?: Subset<T, User$userlogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends ConstantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConstantsDefaultArgs<ExtArgs>>): Prisma__ConstantsClient<$Result.GetResult<Prisma.$ConstantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    twofactors<T extends User$twofactorsArgs<ExtArgs> = {}>(args?: Subset<T, User$twofactorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwoFactorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly region: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly created_date: FieldRef<"User", 'DateTime'>
    readonly modified_date: FieldRef<"User", 'DateTime'>
    readonly last_login: FieldRef<"User", 'DateTime'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly role_id: FieldRef<"User", 'String'>
    readonly twoFactorEnabled: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.employee
   */
  export type User$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.userlogs
   */
  export type User$userlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.twofactors
   */
  export type User$twofactorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactor
     */
    select?: TwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactor
     */
    omit?: TwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorInclude<ExtArgs> | null
    where?: TwoFactorWhereInput
    orderBy?: TwoFactorOrderByWithRelationInput | TwoFactorOrderByWithRelationInput[]
    cursor?: TwoFactorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TwoFactorScalarFieldEnum | TwoFactorScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model TwoFactor
   */

  export type AggregateTwoFactor = {
    _count: TwoFactorCountAggregateOutputType | null
    _min: TwoFactorMinAggregateOutputType | null
    _max: TwoFactorMaxAggregateOutputType | null
  }

  export type TwoFactorMinAggregateOutputType = {
    id: string | null
    secret: string | null
    backupCodes: string | null
    userId: string | null
  }

  export type TwoFactorMaxAggregateOutputType = {
    id: string | null
    secret: string | null
    backupCodes: string | null
    userId: string | null
  }

  export type TwoFactorCountAggregateOutputType = {
    id: number
    secret: number
    backupCodes: number
    userId: number
    _all: number
  }


  export type TwoFactorMinAggregateInputType = {
    id?: true
    secret?: true
    backupCodes?: true
    userId?: true
  }

  export type TwoFactorMaxAggregateInputType = {
    id?: true
    secret?: true
    backupCodes?: true
    userId?: true
  }

  export type TwoFactorCountAggregateInputType = {
    id?: true
    secret?: true
    backupCodes?: true
    userId?: true
    _all?: true
  }

  export type TwoFactorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TwoFactor to aggregate.
     */
    where?: TwoFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactors to fetch.
     */
    orderBy?: TwoFactorOrderByWithRelationInput | TwoFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwoFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwoFactors
    **/
    _count?: true | TwoFactorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwoFactorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwoFactorMaxAggregateInputType
  }

  export type GetTwoFactorAggregateType<T extends TwoFactorAggregateArgs> = {
        [P in keyof T & keyof AggregateTwoFactor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwoFactor[P]>
      : GetScalarType<T[P], AggregateTwoFactor[P]>
  }




  export type TwoFactorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TwoFactorWhereInput
    orderBy?: TwoFactorOrderByWithAggregationInput | TwoFactorOrderByWithAggregationInput[]
    by: TwoFactorScalarFieldEnum[] | TwoFactorScalarFieldEnum
    having?: TwoFactorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwoFactorCountAggregateInputType | true
    _min?: TwoFactorMinAggregateInputType
    _max?: TwoFactorMaxAggregateInputType
  }

  export type TwoFactorGroupByOutputType = {
    id: string
    secret: string
    backupCodes: string
    userId: string
    _count: TwoFactorCountAggregateOutputType | null
    _min: TwoFactorMinAggregateOutputType | null
    _max: TwoFactorMaxAggregateOutputType | null
  }

  type GetTwoFactorGroupByPayload<T extends TwoFactorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TwoFactorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwoFactorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwoFactorGroupByOutputType[P]>
            : GetScalarType<T[P], TwoFactorGroupByOutputType[P]>
        }
      >
    >


  export type TwoFactorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    secret?: boolean
    backupCodes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["twoFactor"]>

  export type TwoFactorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    secret?: boolean
    backupCodes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["twoFactor"]>

  export type TwoFactorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    secret?: boolean
    backupCodes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["twoFactor"]>

  export type TwoFactorSelectScalar = {
    id?: boolean
    secret?: boolean
    backupCodes?: boolean
    userId?: boolean
  }

  export type TwoFactorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "secret" | "backupCodes" | "userId", ExtArgs["result"]["twoFactor"]>
  export type TwoFactorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TwoFactorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TwoFactorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TwoFactorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TwoFactor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      secret: string
      backupCodes: string
      userId: string
    }, ExtArgs["result"]["twoFactor"]>
    composites: {}
  }

  type TwoFactorGetPayload<S extends boolean | null | undefined | TwoFactorDefaultArgs> = $Result.GetResult<Prisma.$TwoFactorPayload, S>

  type TwoFactorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TwoFactorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TwoFactorCountAggregateInputType | true
    }

  export interface TwoFactorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TwoFactor'], meta: { name: 'TwoFactor' } }
    /**
     * Find zero or one TwoFactor that matches the filter.
     * @param {TwoFactorFindUniqueArgs} args - Arguments to find a TwoFactor
     * @example
     * // Get one TwoFactor
     * const twoFactor = await prisma.twoFactor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TwoFactorFindUniqueArgs>(args: SelectSubset<T, TwoFactorFindUniqueArgs<ExtArgs>>): Prisma__TwoFactorClient<$Result.GetResult<Prisma.$TwoFactorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TwoFactor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TwoFactorFindUniqueOrThrowArgs} args - Arguments to find a TwoFactor
     * @example
     * // Get one TwoFactor
     * const twoFactor = await prisma.twoFactor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TwoFactorFindUniqueOrThrowArgs>(args: SelectSubset<T, TwoFactorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TwoFactorClient<$Result.GetResult<Prisma.$TwoFactorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TwoFactor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorFindFirstArgs} args - Arguments to find a TwoFactor
     * @example
     * // Get one TwoFactor
     * const twoFactor = await prisma.twoFactor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TwoFactorFindFirstArgs>(args?: SelectSubset<T, TwoFactorFindFirstArgs<ExtArgs>>): Prisma__TwoFactorClient<$Result.GetResult<Prisma.$TwoFactorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TwoFactor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorFindFirstOrThrowArgs} args - Arguments to find a TwoFactor
     * @example
     * // Get one TwoFactor
     * const twoFactor = await prisma.twoFactor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TwoFactorFindFirstOrThrowArgs>(args?: SelectSubset<T, TwoFactorFindFirstOrThrowArgs<ExtArgs>>): Prisma__TwoFactorClient<$Result.GetResult<Prisma.$TwoFactorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TwoFactors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwoFactors
     * const twoFactors = await prisma.twoFactor.findMany()
     * 
     * // Get first 10 TwoFactors
     * const twoFactors = await prisma.twoFactor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const twoFactorWithIdOnly = await prisma.twoFactor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TwoFactorFindManyArgs>(args?: SelectSubset<T, TwoFactorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwoFactorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TwoFactor.
     * @param {TwoFactorCreateArgs} args - Arguments to create a TwoFactor.
     * @example
     * // Create one TwoFactor
     * const TwoFactor = await prisma.twoFactor.create({
     *   data: {
     *     // ... data to create a TwoFactor
     *   }
     * })
     * 
     */
    create<T extends TwoFactorCreateArgs>(args: SelectSubset<T, TwoFactorCreateArgs<ExtArgs>>): Prisma__TwoFactorClient<$Result.GetResult<Prisma.$TwoFactorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TwoFactors.
     * @param {TwoFactorCreateManyArgs} args - Arguments to create many TwoFactors.
     * @example
     * // Create many TwoFactors
     * const twoFactor = await prisma.twoFactor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TwoFactorCreateManyArgs>(args?: SelectSubset<T, TwoFactorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TwoFactors and returns the data saved in the database.
     * @param {TwoFactorCreateManyAndReturnArgs} args - Arguments to create many TwoFactors.
     * @example
     * // Create many TwoFactors
     * const twoFactor = await prisma.twoFactor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TwoFactors and only return the `id`
     * const twoFactorWithIdOnly = await prisma.twoFactor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TwoFactorCreateManyAndReturnArgs>(args?: SelectSubset<T, TwoFactorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwoFactorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TwoFactor.
     * @param {TwoFactorDeleteArgs} args - Arguments to delete one TwoFactor.
     * @example
     * // Delete one TwoFactor
     * const TwoFactor = await prisma.twoFactor.delete({
     *   where: {
     *     // ... filter to delete one TwoFactor
     *   }
     * })
     * 
     */
    delete<T extends TwoFactorDeleteArgs>(args: SelectSubset<T, TwoFactorDeleteArgs<ExtArgs>>): Prisma__TwoFactorClient<$Result.GetResult<Prisma.$TwoFactorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TwoFactor.
     * @param {TwoFactorUpdateArgs} args - Arguments to update one TwoFactor.
     * @example
     * // Update one TwoFactor
     * const twoFactor = await prisma.twoFactor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TwoFactorUpdateArgs>(args: SelectSubset<T, TwoFactorUpdateArgs<ExtArgs>>): Prisma__TwoFactorClient<$Result.GetResult<Prisma.$TwoFactorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TwoFactors.
     * @param {TwoFactorDeleteManyArgs} args - Arguments to filter TwoFactors to delete.
     * @example
     * // Delete a few TwoFactors
     * const { count } = await prisma.twoFactor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TwoFactorDeleteManyArgs>(args?: SelectSubset<T, TwoFactorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwoFactors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwoFactors
     * const twoFactor = await prisma.twoFactor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TwoFactorUpdateManyArgs>(args: SelectSubset<T, TwoFactorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwoFactors and returns the data updated in the database.
     * @param {TwoFactorUpdateManyAndReturnArgs} args - Arguments to update many TwoFactors.
     * @example
     * // Update many TwoFactors
     * const twoFactor = await prisma.twoFactor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TwoFactors and only return the `id`
     * const twoFactorWithIdOnly = await prisma.twoFactor.updateManyAndReturn({
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
    updateManyAndReturn<T extends TwoFactorUpdateManyAndReturnArgs>(args: SelectSubset<T, TwoFactorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwoFactorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TwoFactor.
     * @param {TwoFactorUpsertArgs} args - Arguments to update or create a TwoFactor.
     * @example
     * // Update or create a TwoFactor
     * const twoFactor = await prisma.twoFactor.upsert({
     *   create: {
     *     // ... data to create a TwoFactor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwoFactor we want to update
     *   }
     * })
     */
    upsert<T extends TwoFactorUpsertArgs>(args: SelectSubset<T, TwoFactorUpsertArgs<ExtArgs>>): Prisma__TwoFactorClient<$Result.GetResult<Prisma.$TwoFactorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TwoFactors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorCountArgs} args - Arguments to filter TwoFactors to count.
     * @example
     * // Count the number of TwoFactors
     * const count = await prisma.twoFactor.count({
     *   where: {
     *     // ... the filter for the TwoFactors we want to count
     *   }
     * })
    **/
    count<T extends TwoFactorCountArgs>(
      args?: Subset<T, TwoFactorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwoFactorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwoFactor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TwoFactorAggregateArgs>(args: Subset<T, TwoFactorAggregateArgs>): Prisma.PrismaPromise<GetTwoFactorAggregateType<T>>

    /**
     * Group by TwoFactor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorGroupByArgs} args - Group by arguments.
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
      T extends TwoFactorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwoFactorGroupByArgs['orderBy'] }
        : { orderBy?: TwoFactorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TwoFactorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwoFactorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TwoFactor model
   */
  readonly fields: TwoFactorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TwoFactor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TwoFactorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TwoFactor model
   */
  interface TwoFactorFieldRefs {
    readonly id: FieldRef<"TwoFactor", 'String'>
    readonly secret: FieldRef<"TwoFactor", 'String'>
    readonly backupCodes: FieldRef<"TwoFactor", 'String'>
    readonly userId: FieldRef<"TwoFactor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TwoFactor findUnique
   */
  export type TwoFactorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactor
     */
    select?: TwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactor
     */
    omit?: TwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactor to fetch.
     */
    where: TwoFactorWhereUniqueInput
  }

  /**
   * TwoFactor findUniqueOrThrow
   */
  export type TwoFactorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactor
     */
    select?: TwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactor
     */
    omit?: TwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactor to fetch.
     */
    where: TwoFactorWhereUniqueInput
  }

  /**
   * TwoFactor findFirst
   */
  export type TwoFactorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactor
     */
    select?: TwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactor
     */
    omit?: TwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactor to fetch.
     */
    where?: TwoFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactors to fetch.
     */
    orderBy?: TwoFactorOrderByWithRelationInput | TwoFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwoFactors.
     */
    cursor?: TwoFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwoFactors.
     */
    distinct?: TwoFactorScalarFieldEnum | TwoFactorScalarFieldEnum[]
  }

  /**
   * TwoFactor findFirstOrThrow
   */
  export type TwoFactorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactor
     */
    select?: TwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactor
     */
    omit?: TwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactor to fetch.
     */
    where?: TwoFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactors to fetch.
     */
    orderBy?: TwoFactorOrderByWithRelationInput | TwoFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwoFactors.
     */
    cursor?: TwoFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwoFactors.
     */
    distinct?: TwoFactorScalarFieldEnum | TwoFactorScalarFieldEnum[]
  }

  /**
   * TwoFactor findMany
   */
  export type TwoFactorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactor
     */
    select?: TwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactor
     */
    omit?: TwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactors to fetch.
     */
    where?: TwoFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactors to fetch.
     */
    orderBy?: TwoFactorOrderByWithRelationInput | TwoFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwoFactors.
     */
    cursor?: TwoFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactors.
     */
    skip?: number
    distinct?: TwoFactorScalarFieldEnum | TwoFactorScalarFieldEnum[]
  }

  /**
   * TwoFactor create
   */
  export type TwoFactorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactor
     */
    select?: TwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactor
     */
    omit?: TwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorInclude<ExtArgs> | null
    /**
     * The data needed to create a TwoFactor.
     */
    data: XOR<TwoFactorCreateInput, TwoFactorUncheckedCreateInput>
  }

  /**
   * TwoFactor createMany
   */
  export type TwoFactorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TwoFactors.
     */
    data: TwoFactorCreateManyInput | TwoFactorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TwoFactor createManyAndReturn
   */
  export type TwoFactorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactor
     */
    select?: TwoFactorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactor
     */
    omit?: TwoFactorOmit<ExtArgs> | null
    /**
     * The data used to create many TwoFactors.
     */
    data: TwoFactorCreateManyInput | TwoFactorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TwoFactor update
   */
  export type TwoFactorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactor
     */
    select?: TwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactor
     */
    omit?: TwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorInclude<ExtArgs> | null
    /**
     * The data needed to update a TwoFactor.
     */
    data: XOR<TwoFactorUpdateInput, TwoFactorUncheckedUpdateInput>
    /**
     * Choose, which TwoFactor to update.
     */
    where: TwoFactorWhereUniqueInput
  }

  /**
   * TwoFactor updateMany
   */
  export type TwoFactorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TwoFactors.
     */
    data: XOR<TwoFactorUpdateManyMutationInput, TwoFactorUncheckedUpdateManyInput>
    /**
     * Filter which TwoFactors to update
     */
    where?: TwoFactorWhereInput
    /**
     * Limit how many TwoFactors to update.
     */
    limit?: number
  }

  /**
   * TwoFactor updateManyAndReturn
   */
  export type TwoFactorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactor
     */
    select?: TwoFactorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactor
     */
    omit?: TwoFactorOmit<ExtArgs> | null
    /**
     * The data used to update TwoFactors.
     */
    data: XOR<TwoFactorUpdateManyMutationInput, TwoFactorUncheckedUpdateManyInput>
    /**
     * Filter which TwoFactors to update
     */
    where?: TwoFactorWhereInput
    /**
     * Limit how many TwoFactors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TwoFactor upsert
   */
  export type TwoFactorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactor
     */
    select?: TwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactor
     */
    omit?: TwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorInclude<ExtArgs> | null
    /**
     * The filter to search for the TwoFactor to update in case it exists.
     */
    where: TwoFactorWhereUniqueInput
    /**
     * In case the TwoFactor found by the `where` argument doesn't exist, create a new TwoFactor with this data.
     */
    create: XOR<TwoFactorCreateInput, TwoFactorUncheckedCreateInput>
    /**
     * In case the TwoFactor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwoFactorUpdateInput, TwoFactorUncheckedUpdateInput>
  }

  /**
   * TwoFactor delete
   */
  export type TwoFactorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactor
     */
    select?: TwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactor
     */
    omit?: TwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorInclude<ExtArgs> | null
    /**
     * Filter which TwoFactor to delete.
     */
    where: TwoFactorWhereUniqueInput
  }

  /**
   * TwoFactor deleteMany
   */
  export type TwoFactorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TwoFactors to delete
     */
    where?: TwoFactorWhereInput
    /**
     * Limit how many TwoFactors to delete.
     */
    limit?: number
  }

  /**
   * TwoFactor without action
   */
  export type TwoFactorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactor
     */
    select?: TwoFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactor
     */
    omit?: TwoFactorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorInclude<ExtArgs> | null
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
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type EmployeesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    company_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type EmployeesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    company_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type EmployeesSelectScalar = {
    user_id?: boolean
    company_id?: boolean
  }

  export type EmployeesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "company_id", ExtArgs["result"]["employees"]>
  export type EmployeesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }
  export type EmployeesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }
  export type EmployeesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }

  export type $EmployeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employees"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    isProperty: boolean | null
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
    isProperty: boolean | null
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
    isProperty: number
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
    isProperty?: true
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
    isProperty?: true
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
    isProperty?: true
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
    isProperty: boolean
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
    isProperty?: boolean
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
    isProperty?: boolean
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
    isProperty?: boolean
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
    isProperty?: boolean
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

  export type AssetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"asset_id" | "asset_type_id" | "description" | "region" | "isProperty" | "quantity" | "unit_of_measurement" | "unit_value" | "total_value" | "income_generated" | "valuation_method" | "valuation_date" | "source_platform" | "created_by" | "created_date" | "modified_by" | "modified_date", ExtArgs["result"]["assets"]>
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
      isProperty: boolean
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
    readonly isProperty: FieldRef<"Assets", 'Boolean'>
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
    user?: boolean | UserDefaultArgs<ExtArgs>
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
    user?: boolean | UserDefaultArgs<ExtArgs>
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
    user?: boolean | UserDefaultArgs<ExtArgs>
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
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LoggingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action_name?: boolean | ConstantsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LoggingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action_name?: boolean | ConstantsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LoggingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Logging"
    objects: {
      action_name: Prisma.$ConstantsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    const_name: string | null
    code: string | null
    description: string | null
  }

  export type ConstantsMaxAggregateOutputType = {
    const_id: string | null
    const_name: string | null
    code: string | null
    description: string | null
  }

  export type ConstantsCountAggregateOutputType = {
    const_id: number
    const_name: number
    code: number
    description: number
    _all: number
  }


  export type ConstantsMinAggregateInputType = {
    const_id?: true
    const_name?: true
    code?: true
    description?: true
  }

  export type ConstantsMaxAggregateInputType = {
    const_id?: true
    const_name?: true
    code?: true
    description?: true
  }

  export type ConstantsCountAggregateInputType = {
    const_id?: true
    const_name?: true
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
    const_name: string
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
    const_name?: boolean
    code?: boolean
    description?: boolean
    assets?: boolean | Constants$assetsArgs<ExtArgs>
    Users?: boolean | Constants$UsersArgs<ExtArgs>
    Logging?: boolean | Constants$LoggingArgs<ExtArgs>
    _count?: boolean | ConstantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["constants"]>

  export type ConstantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    const_id?: boolean
    const_name?: boolean
    code?: boolean
    description?: boolean
  }, ExtArgs["result"]["constants"]>

  export type ConstantsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    const_id?: boolean
    const_name?: boolean
    code?: boolean
    description?: boolean
  }, ExtArgs["result"]["constants"]>

  export type ConstantsSelectScalar = {
    const_id?: boolean
    const_name?: boolean
    code?: boolean
    description?: boolean
  }

  export type ConstantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"const_id" | "const_name" | "code" | "description", ExtArgs["result"]["constants"]>
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
      Users: Prisma.$UserPayload<ExtArgs>[]
      Logging: Prisma.$LoggingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      const_id: string
      const_name: string
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
    Users<T extends Constants$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Constants$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly const_name: FieldRef<"Constants", 'String'>
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
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone_number: 'phone_number',
    region: 'region',
    email: 'email',
    created_date: 'created_date',
    modified_date: 'modified_date',
    last_login: 'last_login',
    emailVerified: 'emailVerified',
    image: 'image',
    role_id: 'role_id',
    twoFactorEnabled: 'twoFactorEnabled'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const TwoFactorScalarFieldEnum: {
    id: 'id',
    secret: 'secret',
    backupCodes: 'backupCodes',
    userId: 'userId'
  };

  export type TwoFactorScalarFieldEnum = (typeof TwoFactorScalarFieldEnum)[keyof typeof TwoFactorScalarFieldEnum]


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
    isProperty: 'isProperty',
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
    const_name: 'const_name',
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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone_number?: StringNullableFilter<"User"> | string | null
    region?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    created_date?: DateTimeFilter<"User"> | Date | string
    modified_date?: DateTimeNullableFilter<"User"> | Date | string | null
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    role_id?: StringFilter<"User"> | string
    twoFactorEnabled?: BoolNullableFilter<"User"> | boolean | null
    employee?: XOR<EmployeesNullableScalarRelationFilter, EmployeesWhereInput> | null
    userlogs?: LoggingListRelationFilter
    roles?: XOR<ConstantsScalarRelationFilter, ConstantsWhereInput>
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    twofactors?: TwoFactorListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    region?: SortOrder
    email?: SortOrder
    created_date?: SortOrder
    modified_date?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    role_id?: SortOrder
    twoFactorEnabled?: SortOrderInput | SortOrder
    employee?: EmployeesOrderByWithRelationInput
    userlogs?: LoggingOrderByRelationAggregateInput
    roles?: ConstantsOrderByWithRelationInput
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    twofactors?: TwoFactorOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phone_number?: StringNullableFilter<"User"> | string | null
    region?: StringFilter<"User"> | string
    created_date?: DateTimeFilter<"User"> | Date | string
    modified_date?: DateTimeNullableFilter<"User"> | Date | string | null
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    role_id?: StringFilter<"User"> | string
    twoFactorEnabled?: BoolNullableFilter<"User"> | boolean | null
    employee?: XOR<EmployeesNullableScalarRelationFilter, EmployeesWhereInput> | null
    userlogs?: LoggingListRelationFilter
    roles?: XOR<ConstantsScalarRelationFilter, ConstantsWhereInput>
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    twofactors?: TwoFactorListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    region?: SortOrder
    email?: SortOrder
    created_date?: SortOrder
    modified_date?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    role_id?: SortOrder
    twoFactorEnabled?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    phone_number?: StringNullableWithAggregatesFilter<"User"> | string | null
    region?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    created_date?: DateTimeWithAggregatesFilter<"User"> | Date | string
    modified_date?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    last_login?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role_id?: StringWithAggregatesFilter<"User"> | string
    twoFactorEnabled?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type TwoFactorWhereInput = {
    AND?: TwoFactorWhereInput | TwoFactorWhereInput[]
    OR?: TwoFactorWhereInput[]
    NOT?: TwoFactorWhereInput | TwoFactorWhereInput[]
    id?: StringFilter<"TwoFactor"> | string
    secret?: StringFilter<"TwoFactor"> | string
    backupCodes?: StringFilter<"TwoFactor"> | string
    userId?: StringFilter<"TwoFactor"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TwoFactorOrderByWithRelationInput = {
    id?: SortOrder
    secret?: SortOrder
    backupCodes?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TwoFactorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TwoFactorWhereInput | TwoFactorWhereInput[]
    OR?: TwoFactorWhereInput[]
    NOT?: TwoFactorWhereInput | TwoFactorWhereInput[]
    secret?: StringFilter<"TwoFactor"> | string
    backupCodes?: StringFilter<"TwoFactor"> | string
    userId?: StringFilter<"TwoFactor"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TwoFactorOrderByWithAggregationInput = {
    id?: SortOrder
    secret?: SortOrder
    backupCodes?: SortOrder
    userId?: SortOrder
    _count?: TwoFactorCountOrderByAggregateInput
    _max?: TwoFactorMaxOrderByAggregateInput
    _min?: TwoFactorMinOrderByAggregateInput
  }

  export type TwoFactorScalarWhereWithAggregatesInput = {
    AND?: TwoFactorScalarWhereWithAggregatesInput | TwoFactorScalarWhereWithAggregatesInput[]
    OR?: TwoFactorScalarWhereWithAggregatesInput[]
    NOT?: TwoFactorScalarWhereWithAggregatesInput | TwoFactorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TwoFactor"> | string
    secret?: StringWithAggregatesFilter<"TwoFactor"> | string
    backupCodes?: StringWithAggregatesFilter<"TwoFactor"> | string
    userId?: StringWithAggregatesFilter<"TwoFactor"> | string
  }

  export type EmployeesWhereInput = {
    AND?: EmployeesWhereInput | EmployeesWhereInput[]
    OR?: EmployeesWhereInput[]
    NOT?: EmployeesWhereInput | EmployeesWhereInput[]
    user_id?: StringFilter<"Employees"> | string
    company_id?: StringFilter<"Employees"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    company?: XOR<CompaniesScalarRelationFilter, CompaniesWhereInput>
  }

  export type EmployeesOrderByWithRelationInput = {
    user_id?: SortOrder
    company_id?: SortOrder
    user?: UserOrderByWithRelationInput
    company?: CompaniesOrderByWithRelationInput
  }

  export type EmployeesWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: EmployeesWhereInput | EmployeesWhereInput[]
    OR?: EmployeesWhereInput[]
    NOT?: EmployeesWhereInput | EmployeesWhereInput[]
    company_id?: StringFilter<"Employees"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
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
    isProperty?: BoolFilter<"Assets"> | boolean
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
    isProperty?: SortOrder
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
    isProperty?: BoolFilter<"Assets"> | boolean
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
    isProperty?: SortOrder
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
    isProperty?: BoolWithAggregatesFilter<"Assets"> | boolean
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
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
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
    user?: UserOrderByWithRelationInput
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
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
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
    const_name?: StringFilter<"Constants"> | string
    code?: StringFilter<"Constants"> | string
    description?: StringNullableFilter<"Constants"> | string | null
    assets?: AssetsListRelationFilter
    Users?: UserListRelationFilter
    Logging?: LoggingListRelationFilter
  }

  export type ConstantsOrderByWithRelationInput = {
    const_id?: SortOrder
    const_name?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    assets?: AssetsOrderByRelationAggregateInput
    Users?: UserOrderByRelationAggregateInput
    Logging?: LoggingOrderByRelationAggregateInput
  }

  export type ConstantsWhereUniqueInput = Prisma.AtLeast<{
    const_id?: string
    const_name?: string
    AND?: ConstantsWhereInput | ConstantsWhereInput[]
    OR?: ConstantsWhereInput[]
    NOT?: ConstantsWhereInput | ConstantsWhereInput[]
    code?: StringFilter<"Constants"> | string
    description?: StringNullableFilter<"Constants"> | string | null
    assets?: AssetsListRelationFilter
    Users?: UserListRelationFilter
    Logging?: LoggingListRelationFilter
  }, "const_id" | "const_name">

  export type ConstantsOrderByWithAggregationInput = {
    const_id?: SortOrder
    const_name?: SortOrder
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
    const_name?: StringWithAggregatesFilter<"Constants"> | string
    code?: StringWithAggregatesFilter<"Constants"> | string
    description?: StringNullableWithAggregatesFilter<"Constants"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    created_date?: Date | string
    modified_date?: Date | string | null
    last_login?: Date | string | null
    emailVerified: boolean
    image?: string | null
    twoFactorEnabled?: boolean | null
    employee?: EmployeesCreateNestedOneWithoutUserInput
    userlogs?: LoggingCreateNestedManyWithoutUserInput
    roles: ConstantsCreateNestedOneWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    twofactors?: TwoFactorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    created_date?: Date | string
    modified_date?: Date | string | null
    last_login?: Date | string | null
    emailVerified: boolean
    image?: string | null
    role_id: string
    twoFactorEnabled?: boolean | null
    employee?: EmployeesUncheckedCreateNestedOneWithoutUserInput
    userlogs?: LoggingUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    twofactors?: TwoFactorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    employee?: EmployeesUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUpdateManyWithoutUserNestedInput
    roles?: ConstantsUpdateOneRequiredWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    twofactors?: TwoFactorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    employee?: EmployeesUncheckedUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    twofactors?: TwoFactorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    created_date?: Date | string
    modified_date?: Date | string | null
    last_login?: Date | string | null
    emailVerified: boolean
    image?: string | null
    role_id: string
    twoFactorEnabled?: boolean | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TwoFactorCreateInput = {
    id: string
    secret: string
    backupCodes: string
    user: UserCreateNestedOneWithoutTwofactorsInput
  }

  export type TwoFactorUncheckedCreateInput = {
    id: string
    secret: string
    backupCodes: string
    userId: string
  }

  export type TwoFactorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    backupCodes?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTwofactorsNestedInput
  }

  export type TwoFactorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    backupCodes?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TwoFactorCreateManyInput = {
    id: string
    secret: string
    backupCodes: string
    userId: string
  }

  export type TwoFactorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    backupCodes?: StringFieldUpdateOperationsInput | string
  }

  export type TwoFactorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    backupCodes?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeesCreateInput = {
    user: UserCreateNestedOneWithoutEmployeeInput
    company: CompaniesCreateNestedOneWithoutAdminsInput
  }

  export type EmployeesUncheckedCreateInput = {
    user_id: string
    company_id: string
  }

  export type EmployeesUpdateInput = {
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
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
    isProperty: boolean
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
    isProperty: boolean
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
    isProperty?: BoolFieldUpdateOperationsInput | boolean
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
    isProperty?: BoolFieldUpdateOperationsInput | boolean
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
    isProperty: boolean
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
    isProperty?: BoolFieldUpdateOperationsInput | boolean
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
    isProperty?: BoolFieldUpdateOperationsInput | boolean
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
    user: UserCreateNestedOneWithoutUserlogsInput
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
    user?: UserUpdateOneRequiredWithoutUserlogsNestedInput
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
    const_name: string
    code: string
    description?: string | null
    assets?: AssetsCreateNestedManyWithoutAssetTypeInput
    Users?: UserCreateNestedManyWithoutRolesInput
    Logging?: LoggingCreateNestedManyWithoutAction_nameInput
  }

  export type ConstantsUncheckedCreateInput = {
    const_id?: string
    const_name: string
    code: string
    description?: string | null
    assets?: AssetsUncheckedCreateNestedManyWithoutAssetTypeInput
    Users?: UserUncheckedCreateNestedManyWithoutRolesInput
    Logging?: LoggingUncheckedCreateNestedManyWithoutAction_nameInput
  }

  export type ConstantsUpdateInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    const_name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetsUpdateManyWithoutAssetTypeNestedInput
    Users?: UserUpdateManyWithoutRolesNestedInput
    Logging?: LoggingUpdateManyWithoutAction_nameNestedInput
  }

  export type ConstantsUncheckedUpdateInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    const_name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetsUncheckedUpdateManyWithoutAssetTypeNestedInput
    Users?: UserUncheckedUpdateManyWithoutRolesNestedInput
    Logging?: LoggingUncheckedUpdateManyWithoutAction_nameNestedInput
  }

  export type ConstantsCreateManyInput = {
    const_id?: string
    const_name: string
    code: string
    description?: string | null
  }

  export type ConstantsUpdateManyMutationInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    const_name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConstantsUncheckedUpdateManyInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    const_name?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type TwoFactorListRelationFilter = {
    every?: TwoFactorWhereInput
    some?: TwoFactorWhereInput
    none?: TwoFactorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LoggingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TwoFactorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    region?: SortOrder
    email?: SortOrder
    created_date?: SortOrder
    modified_date?: SortOrder
    last_login?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role_id?: SortOrder
    twoFactorEnabled?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    region?: SortOrder
    email?: SortOrder
    created_date?: SortOrder
    modified_date?: SortOrder
    last_login?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role_id?: SortOrder
    twoFactorEnabled?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    region?: SortOrder
    email?: SortOrder
    created_date?: SortOrder
    modified_date?: SortOrder
    last_login?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role_id?: SortOrder
    twoFactorEnabled?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwoFactorCountOrderByAggregateInput = {
    id?: SortOrder
    secret?: SortOrder
    backupCodes?: SortOrder
    userId?: SortOrder
  }

  export type TwoFactorMaxOrderByAggregateInput = {
    id?: SortOrder
    secret?: SortOrder
    backupCodes?: SortOrder
    userId?: SortOrder
  }

  export type TwoFactorMinOrderByAggregateInput = {
    id?: SortOrder
    secret?: SortOrder
    backupCodes?: SortOrder
    userId?: SortOrder
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
    isProperty?: SortOrder
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
    isProperty?: SortOrder
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
    isProperty?: SortOrder
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type AssetsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConstantsCountOrderByAggregateInput = {
    const_id?: SortOrder
    const_name?: SortOrder
    code?: SortOrder
    description?: SortOrder
  }

  export type ConstantsMaxOrderByAggregateInput = {
    const_id?: SortOrder
    const_name?: SortOrder
    code?: SortOrder
    description?: SortOrder
  }

  export type ConstantsMinOrderByAggregateInput = {
    const_id?: SortOrder
    const_name?: SortOrder
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

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type TwoFactorCreateNestedManyWithoutUserInput = {
    create?: XOR<TwoFactorCreateWithoutUserInput, TwoFactorUncheckedCreateWithoutUserInput> | TwoFactorCreateWithoutUserInput[] | TwoFactorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TwoFactorCreateOrConnectWithoutUserInput | TwoFactorCreateOrConnectWithoutUserInput[]
    createMany?: TwoFactorCreateManyUserInputEnvelope
    connect?: TwoFactorWhereUniqueInput | TwoFactorWhereUniqueInput[]
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

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type TwoFactorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TwoFactorCreateWithoutUserInput, TwoFactorUncheckedCreateWithoutUserInput> | TwoFactorCreateWithoutUserInput[] | TwoFactorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TwoFactorCreateOrConnectWithoutUserInput | TwoFactorCreateOrConnectWithoutUserInput[]
    createMany?: TwoFactorCreateManyUserInputEnvelope
    connect?: TwoFactorWhereUniqueInput | TwoFactorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
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

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type TwoFactorUpdateManyWithoutUserNestedInput = {
    create?: XOR<TwoFactorCreateWithoutUserInput, TwoFactorUncheckedCreateWithoutUserInput> | TwoFactorCreateWithoutUserInput[] | TwoFactorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TwoFactorCreateOrConnectWithoutUserInput | TwoFactorCreateOrConnectWithoutUserInput[]
    upsert?: TwoFactorUpsertWithWhereUniqueWithoutUserInput | TwoFactorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TwoFactorCreateManyUserInputEnvelope
    set?: TwoFactorWhereUniqueInput | TwoFactorWhereUniqueInput[]
    disconnect?: TwoFactorWhereUniqueInput | TwoFactorWhereUniqueInput[]
    delete?: TwoFactorWhereUniqueInput | TwoFactorWhereUniqueInput[]
    connect?: TwoFactorWhereUniqueInput | TwoFactorWhereUniqueInput[]
    update?: TwoFactorUpdateWithWhereUniqueWithoutUserInput | TwoFactorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TwoFactorUpdateManyWithWhereWithoutUserInput | TwoFactorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TwoFactorScalarWhereInput | TwoFactorScalarWhereInput[]
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

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type TwoFactorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TwoFactorCreateWithoutUserInput, TwoFactorUncheckedCreateWithoutUserInput> | TwoFactorCreateWithoutUserInput[] | TwoFactorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TwoFactorCreateOrConnectWithoutUserInput | TwoFactorCreateOrConnectWithoutUserInput[]
    upsert?: TwoFactorUpsertWithWhereUniqueWithoutUserInput | TwoFactorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TwoFactorCreateManyUserInputEnvelope
    set?: TwoFactorWhereUniqueInput | TwoFactorWhereUniqueInput[]
    disconnect?: TwoFactorWhereUniqueInput | TwoFactorWhereUniqueInput[]
    delete?: TwoFactorWhereUniqueInput | TwoFactorWhereUniqueInput[]
    connect?: TwoFactorWhereUniqueInput | TwoFactorWhereUniqueInput[]
    update?: TwoFactorUpdateWithWhereUniqueWithoutUserInput | TwoFactorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TwoFactorUpdateManyWithWhereWithoutUserInput | TwoFactorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TwoFactorScalarWhereInput | TwoFactorScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutTwofactorsInput = {
    create?: XOR<UserCreateWithoutTwofactorsInput, UserUncheckedCreateWithoutTwofactorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTwofactorsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTwofactorsNestedInput = {
    create?: XOR<UserCreateWithoutTwofactorsInput, UserUncheckedCreateWithoutTwofactorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTwofactorsInput
    upsert?: UserUpsertWithoutTwofactorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTwofactorsInput, UserUpdateWithoutTwofactorsInput>, UserUncheckedUpdateWithoutTwofactorsInput>
  }

  export type UserCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    connect?: UserWhereUniqueInput
  }

  export type CompaniesCreateNestedOneWithoutAdminsInput = {
    create?: XOR<CompaniesCreateWithoutAdminsInput, CompaniesUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutAdminsInput
    connect?: CompaniesWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    upsert?: UserUpsertWithoutEmployeeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeeInput, UserUpdateWithoutEmployeeInput>, UserUncheckedUpdateWithoutEmployeeInput>
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

  export type UserCreateNestedOneWithoutUserlogsInput = {
    create?: XOR<UserCreateWithoutUserlogsInput, UserUncheckedCreateWithoutUserlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserlogsInput
    connect?: UserWhereUniqueInput
  }

  export type ConstantsUpdateOneRequiredWithoutLoggingNestedInput = {
    create?: XOR<ConstantsCreateWithoutLoggingInput, ConstantsUncheckedCreateWithoutLoggingInput>
    connectOrCreate?: ConstantsCreateOrConnectWithoutLoggingInput
    upsert?: ConstantsUpsertWithoutLoggingInput
    connect?: ConstantsWhereUniqueInput
    update?: XOR<XOR<ConstantsUpdateToOneWithWhereWithoutLoggingInput, ConstantsUpdateWithoutLoggingInput>, ConstantsUncheckedUpdateWithoutLoggingInput>
  }

  export type UserUpdateOneRequiredWithoutUserlogsNestedInput = {
    create?: XOR<UserCreateWithoutUserlogsInput, UserUncheckedCreateWithoutUserlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserlogsInput
    upsert?: UserUpsertWithoutUserlogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserlogsInput, UserUpdateWithoutUserlogsInput>, UserUncheckedUpdateWithoutUserlogsInput>
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

  export type UserCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    createMany?: UserCreateManyRolesInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
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

  export type UserUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    createMany?: UserCreateManyRolesInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
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

  export type UserUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: UserCreateManyRolesInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
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

  export type UserUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: UserCreateManyRolesInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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
    const_name: string
    code: string
    description?: string | null
    assets?: AssetsCreateNestedManyWithoutAssetTypeInput
    Logging?: LoggingCreateNestedManyWithoutAction_nameInput
  }

  export type ConstantsUncheckedCreateWithoutUsersInput = {
    const_id?: string
    const_name: string
    code: string
    description?: string | null
    assets?: AssetsUncheckedCreateNestedManyWithoutAssetTypeInput
    Logging?: LoggingUncheckedCreateNestedManyWithoutAction_nameInput
  }

  export type ConstantsCreateOrConnectWithoutUsersInput = {
    where: ConstantsWhereUniqueInput
    create: XOR<ConstantsCreateWithoutUsersInput, ConstantsUncheckedCreateWithoutUsersInput>
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TwoFactorCreateWithoutUserInput = {
    id: string
    secret: string
    backupCodes: string
  }

  export type TwoFactorUncheckedCreateWithoutUserInput = {
    id: string
    secret: string
    backupCodes: string
  }

  export type TwoFactorCreateOrConnectWithoutUserInput = {
    where: TwoFactorWhereUniqueInput
    create: XOR<TwoFactorCreateWithoutUserInput, TwoFactorUncheckedCreateWithoutUserInput>
  }

  export type TwoFactorCreateManyUserInputEnvelope = {
    data: TwoFactorCreateManyUserInput | TwoFactorCreateManyUserInput[]
    skipDuplicates?: boolean
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
    const_name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetsUpdateManyWithoutAssetTypeNestedInput
    Logging?: LoggingUpdateManyWithoutAction_nameNestedInput
  }

  export type ConstantsUncheckedUpdateWithoutUsersInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    const_name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetsUncheckedUpdateManyWithoutAssetTypeNestedInput
    Logging?: LoggingUncheckedUpdateManyWithoutAction_nameNestedInput
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type TwoFactorUpsertWithWhereUniqueWithoutUserInput = {
    where: TwoFactorWhereUniqueInput
    update: XOR<TwoFactorUpdateWithoutUserInput, TwoFactorUncheckedUpdateWithoutUserInput>
    create: XOR<TwoFactorCreateWithoutUserInput, TwoFactorUncheckedCreateWithoutUserInput>
  }

  export type TwoFactorUpdateWithWhereUniqueWithoutUserInput = {
    where: TwoFactorWhereUniqueInput
    data: XOR<TwoFactorUpdateWithoutUserInput, TwoFactorUncheckedUpdateWithoutUserInput>
  }

  export type TwoFactorUpdateManyWithWhereWithoutUserInput = {
    where: TwoFactorScalarWhereInput
    data: XOR<TwoFactorUpdateManyMutationInput, TwoFactorUncheckedUpdateManyWithoutUserInput>
  }

  export type TwoFactorScalarWhereInput = {
    AND?: TwoFactorScalarWhereInput | TwoFactorScalarWhereInput[]
    OR?: TwoFactorScalarWhereInput[]
    NOT?: TwoFactorScalarWhereInput | TwoFactorScalarWhereInput[]
    id?: StringFilter<"TwoFactor"> | string
    secret?: StringFilter<"TwoFactor"> | string
    backupCodes?: StringFilter<"TwoFactor"> | string
    userId?: StringFilter<"TwoFactor"> | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    created_date?: Date | string
    modified_date?: Date | string | null
    last_login?: Date | string | null
    emailVerified: boolean
    image?: string | null
    twoFactorEnabled?: boolean | null
    employee?: EmployeesCreateNestedOneWithoutUserInput
    userlogs?: LoggingCreateNestedManyWithoutUserInput
    roles: ConstantsCreateNestedOneWithoutUsersInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    twofactors?: TwoFactorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    created_date?: Date | string
    modified_date?: Date | string | null
    last_login?: Date | string | null
    emailVerified: boolean
    image?: string | null
    role_id: string
    twoFactorEnabled?: boolean | null
    employee?: EmployeesUncheckedCreateNestedOneWithoutUserInput
    userlogs?: LoggingUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    twofactors?: TwoFactorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    employee?: EmployeesUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUpdateManyWithoutUserNestedInput
    roles?: ConstantsUpdateOneRequiredWithoutUsersNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    twofactors?: TwoFactorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    employee?: EmployeesUncheckedUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    twofactors?: TwoFactorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    created_date?: Date | string
    modified_date?: Date | string | null
    last_login?: Date | string | null
    emailVerified: boolean
    image?: string | null
    twoFactorEnabled?: boolean | null
    employee?: EmployeesCreateNestedOneWithoutUserInput
    userlogs?: LoggingCreateNestedManyWithoutUserInput
    roles: ConstantsCreateNestedOneWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    twofactors?: TwoFactorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    created_date?: Date | string
    modified_date?: Date | string | null
    last_login?: Date | string | null
    emailVerified: boolean
    image?: string | null
    role_id: string
    twoFactorEnabled?: boolean | null
    employee?: EmployeesUncheckedCreateNestedOneWithoutUserInput
    userlogs?: LoggingUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    twofactors?: TwoFactorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    employee?: EmployeesUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUpdateManyWithoutUserNestedInput
    roles?: ConstantsUpdateOneRequiredWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    twofactors?: TwoFactorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    employee?: EmployeesUncheckedUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    twofactors?: TwoFactorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTwofactorsInput = {
    id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    created_date?: Date | string
    modified_date?: Date | string | null
    last_login?: Date | string | null
    emailVerified: boolean
    image?: string | null
    twoFactorEnabled?: boolean | null
    employee?: EmployeesCreateNestedOneWithoutUserInput
    userlogs?: LoggingCreateNestedManyWithoutUserInput
    roles: ConstantsCreateNestedOneWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTwofactorsInput = {
    id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    created_date?: Date | string
    modified_date?: Date | string | null
    last_login?: Date | string | null
    emailVerified: boolean
    image?: string | null
    role_id: string
    twoFactorEnabled?: boolean | null
    employee?: EmployeesUncheckedCreateNestedOneWithoutUserInput
    userlogs?: LoggingUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTwofactorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTwofactorsInput, UserUncheckedCreateWithoutTwofactorsInput>
  }

  export type UserUpsertWithoutTwofactorsInput = {
    update: XOR<UserUpdateWithoutTwofactorsInput, UserUncheckedUpdateWithoutTwofactorsInput>
    create: XOR<UserCreateWithoutTwofactorsInput, UserUncheckedCreateWithoutTwofactorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTwofactorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTwofactorsInput, UserUncheckedUpdateWithoutTwofactorsInput>
  }

  export type UserUpdateWithoutTwofactorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    employee?: EmployeesUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUpdateManyWithoutUserNestedInput
    roles?: ConstantsUpdateOneRequiredWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTwofactorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    employee?: EmployeesUncheckedUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEmployeeInput = {
    id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    created_date?: Date | string
    modified_date?: Date | string | null
    last_login?: Date | string | null
    emailVerified: boolean
    image?: string | null
    twoFactorEnabled?: boolean | null
    userlogs?: LoggingCreateNestedManyWithoutUserInput
    roles: ConstantsCreateNestedOneWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    twofactors?: TwoFactorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmployeeInput = {
    id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    created_date?: Date | string
    modified_date?: Date | string | null
    last_login?: Date | string | null
    emailVerified: boolean
    image?: string | null
    role_id: string
    twoFactorEnabled?: boolean | null
    userlogs?: LoggingUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    twofactors?: TwoFactorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmployeeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
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

  export type UserUpsertWithoutEmployeeInput = {
    update: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type UserUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userlogs?: LoggingUpdateManyWithoutUserNestedInput
    roles?: ConstantsUpdateOneRequiredWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    twofactors?: TwoFactorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userlogs?: LoggingUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    twofactors?: TwoFactorUncheckedUpdateManyWithoutUserNestedInput
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
    user: UserCreateNestedOneWithoutEmployeeInput
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
    const_name: string
    code: string
    description?: string | null
    Users?: UserCreateNestedManyWithoutRolesInput
    Logging?: LoggingCreateNestedManyWithoutAction_nameInput
  }

  export type ConstantsUncheckedCreateWithoutAssetsInput = {
    const_id?: string
    const_name: string
    code: string
    description?: string | null
    Users?: UserUncheckedCreateNestedManyWithoutRolesInput
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
    const_name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Users?: UserUpdateManyWithoutRolesNestedInput
    Logging?: LoggingUpdateManyWithoutAction_nameNestedInput
  }

  export type ConstantsUncheckedUpdateWithoutAssetsInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    const_name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Users?: UserUncheckedUpdateManyWithoutRolesNestedInput
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
    isProperty: boolean
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
    isProperty: boolean
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
    isProperty?: BoolFieldUpdateOperationsInput | boolean
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
    isProperty?: BoolFieldUpdateOperationsInput | boolean
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
    const_name: string
    code: string
    description?: string | null
    assets?: AssetsCreateNestedManyWithoutAssetTypeInput
    Users?: UserCreateNestedManyWithoutRolesInput
  }

  export type ConstantsUncheckedCreateWithoutLoggingInput = {
    const_id?: string
    const_name: string
    code: string
    description?: string | null
    assets?: AssetsUncheckedCreateNestedManyWithoutAssetTypeInput
    Users?: UserUncheckedCreateNestedManyWithoutRolesInput
  }

  export type ConstantsCreateOrConnectWithoutLoggingInput = {
    where: ConstantsWhereUniqueInput
    create: XOR<ConstantsCreateWithoutLoggingInput, ConstantsUncheckedCreateWithoutLoggingInput>
  }

  export type UserCreateWithoutUserlogsInput = {
    id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    created_date?: Date | string
    modified_date?: Date | string | null
    last_login?: Date | string | null
    emailVerified: boolean
    image?: string | null
    twoFactorEnabled?: boolean | null
    employee?: EmployeesCreateNestedOneWithoutUserInput
    roles: ConstantsCreateNestedOneWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    twofactors?: TwoFactorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserlogsInput = {
    id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    created_date?: Date | string
    modified_date?: Date | string | null
    last_login?: Date | string | null
    emailVerified: boolean
    image?: string | null
    role_id: string
    twoFactorEnabled?: boolean | null
    employee?: EmployeesUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    twofactors?: TwoFactorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserlogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserlogsInput, UserUncheckedCreateWithoutUserlogsInput>
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
    const_name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetsUpdateManyWithoutAssetTypeNestedInput
    Users?: UserUpdateManyWithoutRolesNestedInput
  }

  export type ConstantsUncheckedUpdateWithoutLoggingInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    const_name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetsUncheckedUpdateManyWithoutAssetTypeNestedInput
    Users?: UserUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type UserUpsertWithoutUserlogsInput = {
    update: XOR<UserUpdateWithoutUserlogsInput, UserUncheckedUpdateWithoutUserlogsInput>
    create: XOR<UserCreateWithoutUserlogsInput, UserUncheckedCreateWithoutUserlogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserlogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserlogsInput, UserUncheckedUpdateWithoutUserlogsInput>
  }

  export type UserUpdateWithoutUserlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    employee?: EmployeesUpdateOneWithoutUserNestedInput
    roles?: ConstantsUpdateOneRequiredWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    twofactors?: TwoFactorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    employee?: EmployeesUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    twofactors?: TwoFactorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AssetsCreateWithoutViewsInput = {
    asset_id?: string
    description?: string | null
    region?: string | null
    isProperty: boolean
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
    isProperty: boolean
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
    isProperty?: BoolFieldUpdateOperationsInput | boolean
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
    isProperty?: BoolFieldUpdateOperationsInput | boolean
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
    isProperty: boolean
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
    isProperty: boolean
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
    isProperty?: BoolFieldUpdateOperationsInput | boolean
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
    isProperty?: BoolFieldUpdateOperationsInput | boolean
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
    isProperty: boolean
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
    isProperty: boolean
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

  export type UserCreateWithoutRolesInput = {
    id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    created_date?: Date | string
    modified_date?: Date | string | null
    last_login?: Date | string | null
    emailVerified: boolean
    image?: string | null
    twoFactorEnabled?: boolean | null
    employee?: EmployeesCreateNestedOneWithoutUserInput
    userlogs?: LoggingCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    twofactors?: TwoFactorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    created_date?: Date | string
    modified_date?: Date | string | null
    last_login?: Date | string | null
    emailVerified: boolean
    image?: string | null
    twoFactorEnabled?: boolean | null
    employee?: EmployeesUncheckedCreateNestedOneWithoutUserInput
    userlogs?: LoggingUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    twofactors?: TwoFactorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserCreateManyRolesInputEnvelope = {
    data: UserCreateManyRolesInput | UserCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type LoggingCreateWithoutAction_nameInput = {
    user_activity_id?: string
    activity_time?: Date | string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    user: UserCreateNestedOneWithoutUserlogsInput
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
    isProperty?: BoolFilter<"Assets"> | boolean
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

  export type UserUpsertWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateManyWithWhereWithoutRolesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRolesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone_number?: StringNullableFilter<"User"> | string | null
    region?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    created_date?: DateTimeFilter<"User"> | Date | string
    modified_date?: DateTimeNullableFilter<"User"> | Date | string | null
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    role_id?: StringFilter<"User"> | string
    twoFactorEnabled?: BoolNullableFilter<"User"> | boolean | null
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

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type TwoFactorCreateManyUserInput = {
    id: string
    secret: string
    backupCodes: string
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

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    backupCodes?: StringFieldUpdateOperationsInput | string
  }

  export type TwoFactorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    backupCodes?: StringFieldUpdateOperationsInput | string
  }

  export type TwoFactorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    backupCodes?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeesCreateManyCompanyInput = {
    user_id: string
  }

  export type EmployeesUpdateWithoutCompanyInput = {
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
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
    isProperty: boolean
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

  export type UserCreateManyRolesInput = {
    id?: string
    name: string
    phone_number?: string | null
    region: string
    email: string
    created_date?: Date | string
    modified_date?: Date | string | null
    last_login?: Date | string | null
    emailVerified: boolean
    image?: string | null
    twoFactorEnabled?: boolean | null
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
    isProperty?: BoolFieldUpdateOperationsInput | boolean
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
    isProperty?: BoolFieldUpdateOperationsInput | boolean
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
    isProperty?: BoolFieldUpdateOperationsInput | boolean
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

  export type UserUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    employee?: EmployeesUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    twofactors?: TwoFactorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    employee?: EmployeesUncheckedUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    twofactors?: TwoFactorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type LoggingUpdateWithoutAction_nameInput = {
    user_activity_id?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserlogsNestedInput
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