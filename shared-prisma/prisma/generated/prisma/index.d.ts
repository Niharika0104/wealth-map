
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model WebAuthnDevice
 * 
 */
export type WebAuthnDevice = $Result.DefaultSelection<Prisma.$WebAuthnDevicePayload>
/**
 * Model OneTimeCode
 * 
 */
export type OneTimeCode = $Result.DefaultSelection<Prisma.$OneTimeCodePayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Asset
 * 
 */
export type Asset = $Result.DefaultSelection<Prisma.$AssetPayload>
/**
 * Model CandidateAssetOwnership
 * 
 */
export type CandidateAssetOwnership = $Result.DefaultSelection<Prisma.$CandidateAssetOwnershipPayload>
/**
 * Model Candidate
 * 
 */
export type Candidate = $Result.DefaultSelection<Prisma.$CandidatePayload>
/**
 * Model Logging
 * 
 */
export type Logging = $Result.DefaultSelection<Prisma.$LoggingPayload>
/**
 * Model View
 * 
 */
export type View = $Result.DefaultSelection<Prisma.$ViewPayload>
/**
 * Model Bookmark
 * 
 */
export type Bookmark = $Result.DefaultSelection<Prisma.$BookmarkPayload>
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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webAuthnDevice`: Exposes CRUD operations for the **WebAuthnDevice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebAuthnDevices
    * const webAuthnDevices = await prisma.webAuthnDevice.findMany()
    * ```
    */
  get webAuthnDevice(): Prisma.WebAuthnDeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oneTimeCode`: Exposes CRUD operations for the **OneTimeCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OneTimeCodes
    * const oneTimeCodes = await prisma.oneTimeCode.findMany()
    * ```
    */
  get oneTimeCode(): Prisma.OneTimeCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.candidate`: Exposes CRUD operations for the **Candidate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidates
    * const candidates = await prisma.candidate.findMany()
    * ```
    */
  get candidate(): Prisma.CandidateDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.view`: Exposes CRUD operations for the **View** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Views
    * const views = await prisma.view.findMany()
    * ```
    */
  get view(): Prisma.ViewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookmark`: Exposes CRUD operations for the **Bookmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookmarks
    * const bookmarks = await prisma.bookmark.findMany()
    * ```
    */
  get bookmark(): Prisma.BookmarkDelegate<ExtArgs, ClientOptions>;

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
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    WebAuthnDevice: 'WebAuthnDevice',
    OneTimeCode: 'OneTimeCode',
    Employee: 'Employee',
    Company: 'Company',
    Asset: 'Asset',
    CandidateAssetOwnership: 'CandidateAssetOwnership',
    Candidate: 'Candidate',
    Logging: 'Logging',
    View: 'View',
    Bookmark: 'Bookmark',
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
      modelProps: "user" | "account" | "session" | "verificationToken" | "webAuthnDevice" | "oneTimeCode" | "employee" | "company" | "asset" | "candidateAssetOwnership" | "candidate" | "logging" | "view" | "bookmark" | "constants"
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
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      WebAuthnDevice: {
        payload: Prisma.$WebAuthnDevicePayload<ExtArgs>
        fields: Prisma.WebAuthnDeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebAuthnDeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebAuthnDevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebAuthnDeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebAuthnDevicePayload>
          }
          findFirst: {
            args: Prisma.WebAuthnDeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebAuthnDevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebAuthnDeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebAuthnDevicePayload>
          }
          findMany: {
            args: Prisma.WebAuthnDeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebAuthnDevicePayload>[]
          }
          create: {
            args: Prisma.WebAuthnDeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebAuthnDevicePayload>
          }
          createMany: {
            args: Prisma.WebAuthnDeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebAuthnDeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebAuthnDevicePayload>[]
          }
          delete: {
            args: Prisma.WebAuthnDeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebAuthnDevicePayload>
          }
          update: {
            args: Prisma.WebAuthnDeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebAuthnDevicePayload>
          }
          deleteMany: {
            args: Prisma.WebAuthnDeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebAuthnDeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebAuthnDeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebAuthnDevicePayload>[]
          }
          upsert: {
            args: Prisma.WebAuthnDeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebAuthnDevicePayload>
          }
          aggregate: {
            args: Prisma.WebAuthnDeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebAuthnDevice>
          }
          groupBy: {
            args: Prisma.WebAuthnDeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebAuthnDeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebAuthnDeviceCountArgs<ExtArgs>
            result: $Utils.Optional<WebAuthnDeviceCountAggregateOutputType> | number
          }
        }
      }
      OneTimeCode: {
        payload: Prisma.$OneTimeCodePayload<ExtArgs>
        fields: Prisma.OneTimeCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OneTimeCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneTimeCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OneTimeCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneTimeCodePayload>
          }
          findFirst: {
            args: Prisma.OneTimeCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneTimeCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OneTimeCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneTimeCodePayload>
          }
          findMany: {
            args: Prisma.OneTimeCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneTimeCodePayload>[]
          }
          create: {
            args: Prisma.OneTimeCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneTimeCodePayload>
          }
          createMany: {
            args: Prisma.OneTimeCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OneTimeCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneTimeCodePayload>[]
          }
          delete: {
            args: Prisma.OneTimeCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneTimeCodePayload>
          }
          update: {
            args: Prisma.OneTimeCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneTimeCodePayload>
          }
          deleteMany: {
            args: Prisma.OneTimeCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OneTimeCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OneTimeCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneTimeCodePayload>[]
          }
          upsert: {
            args: Prisma.OneTimeCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneTimeCodePayload>
          }
          aggregate: {
            args: Prisma.OneTimeCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOneTimeCode>
          }
          groupBy: {
            args: Prisma.OneTimeCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<OneTimeCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.OneTimeCodeCountArgs<ExtArgs>
            result: $Utils.Optional<OneTimeCodeCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Asset: {
        payload: Prisma.$AssetPayload<ExtArgs>
        fields: Prisma.AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findFirst: {
            args: Prisma.AssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findMany: {
            args: Prisma.AssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          create: {
            args: Prisma.AssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          createMany: {
            args: Prisma.AssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          delete: {
            args: Prisma.AssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          update: {
            args: Prisma.AssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          deleteMany: {
            args: Prisma.AssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          upsert: {
            args: Prisma.AssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.AssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetCountArgs<ExtArgs>
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
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
      Candidate: {
        payload: Prisma.$CandidatePayload<ExtArgs>
        fields: Prisma.CandidateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findFirst: {
            args: Prisma.CandidateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findMany: {
            args: Prisma.CandidateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          create: {
            args: Prisma.CandidateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          createMany: {
            args: Prisma.CandidateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          delete: {
            args: Prisma.CandidateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          update: {
            args: Prisma.CandidateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          deleteMany: {
            args: Prisma.CandidateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          upsert: {
            args: Prisma.CandidateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          aggregate: {
            args: Prisma.CandidateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidate>
          }
          groupBy: {
            args: Prisma.CandidateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateCountAggregateOutputType> | number
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
      View: {
        payload: Prisma.$ViewPayload<ExtArgs>
        fields: Prisma.ViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          findFirst: {
            args: Prisma.ViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          findMany: {
            args: Prisma.ViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>[]
          }
          create: {
            args: Prisma.ViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          createMany: {
            args: Prisma.ViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>[]
          }
          delete: {
            args: Prisma.ViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          update: {
            args: Prisma.ViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          deleteMany: {
            args: Prisma.ViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>[]
          }
          upsert: {
            args: Prisma.ViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          aggregate: {
            args: Prisma.ViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateView>
          }
          groupBy: {
            args: Prisma.ViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewCountArgs<ExtArgs>
            result: $Utils.Optional<ViewCountAggregateOutputType> | number
          }
        }
      }
      Bookmark: {
        payload: Prisma.$BookmarkPayload<ExtArgs>
        fields: Prisma.BookmarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookmarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookmarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findFirst: {
            args: Prisma.BookmarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookmarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findMany: {
            args: Prisma.BookmarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          create: {
            args: Prisma.BookmarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          createMany: {
            args: Prisma.BookmarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookmarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          delete: {
            args: Prisma.BookmarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          update: {
            args: Prisma.BookmarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          deleteMany: {
            args: Prisma.BookmarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookmarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookmarkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          upsert: {
            args: Prisma.BookmarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          aggregate: {
            args: Prisma.BookmarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookmark>
          }
          groupBy: {
            args: Prisma.BookmarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookmarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookmarkCountArgs<ExtArgs>
            result: $Utils.Optional<BookmarkCountAggregateOutputType> | number
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
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    webAuthnDevice?: WebAuthnDeviceOmit
    oneTimeCode?: OneTimeCodeOmit
    employee?: EmployeeOmit
    company?: CompanyOmit
    asset?: AssetOmit
    candidateAssetOwnership?: CandidateAssetOwnershipOmit
    candidate?: CandidateOmit
    logging?: LoggingOmit
    view?: ViewOmit
    bookmark?: BookmarkOmit
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
    accounts: number
    sessions: number
    web_authn_devices: number
    userlogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    web_authn_devices?: boolean | UserCountOutputTypeCountWeb_authn_devicesArgs
    userlogs?: boolean | UserCountOutputTypeCountUserlogsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
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
  export type UserCountOutputTypeCountWeb_authn_devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebAuthnDeviceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoggingWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    employees: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | CompanyCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type AssetCountOutputType
   */

  export type AssetCountOutputType = {
    ownerships: number
    views: number
    bookmarks: number
  }

  export type AssetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownerships?: boolean | AssetCountOutputTypeCountOwnershipsArgs
    views?: boolean | AssetCountOutputTypeCountViewsArgs
    bookmarks?: boolean | AssetCountOutputTypeCountBookmarksArgs
  }

  // Custom InputTypes
  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCountOutputType
     */
    select?: AssetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountOwnershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateAssetOwnershipWhereInput
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewWhereInput
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
  }


  /**
   * Count Type CandidateCountOutputType
   */

  export type CandidateCountOutputType = {
    asset_ownerships: number
  }

  export type CandidateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset_ownerships?: boolean | CandidateCountOutputTypeCountAsset_ownershipsArgs
  }

  // Custom InputTypes
  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCountOutputType
     */
    select?: CandidateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeCountAsset_ownershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: AssetWhereInput
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
    email: string | null
    email_verified: Date | null
    password: string | null
    image: string | null
    phone_number: string | null
    region: string | null
    role: string | null
    mfa_enabled: boolean | null
    mfa_method: string | null
    mfa_secret: string | null
    last_login: Date | null
    created_by: string | null
    created_date: Date | null
    modified_by: string | null
    modified_date: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    email_verified: Date | null
    password: string | null
    image: string | null
    phone_number: string | null
    region: string | null
    role: string | null
    mfa_enabled: boolean | null
    mfa_method: string | null
    mfa_secret: string | null
    last_login: Date | null
    created_by: string | null
    created_date: Date | null
    modified_by: string | null
    modified_date: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    email_verified: number
    password: number
    image: number
    phone_number: number
    region: number
    role: number
    mfa_enabled: number
    mfa_method: number
    mfa_secret: number
    last_login: number
    created_by: number
    created_date: number
    modified_by: number
    modified_date: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified?: true
    password?: true
    image?: true
    phone_number?: true
    region?: true
    role?: true
    mfa_enabled?: true
    mfa_method?: true
    mfa_secret?: true
    last_login?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified?: true
    password?: true
    image?: true
    phone_number?: true
    region?: true
    role?: true
    mfa_enabled?: true
    mfa_method?: true
    mfa_secret?: true
    last_login?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified?: true
    password?: true
    image?: true
    phone_number?: true
    region?: true
    role?: true
    mfa_enabled?: true
    mfa_method?: true
    mfa_secret?: true
    last_login?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
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
    email: string
    email_verified: Date | null
    password: string
    image: string | null
    phone_number: string | null
    region: string
    role: string
    mfa_enabled: boolean
    mfa_method: string | null
    mfa_secret: string | null
    last_login: Date | null
    created_by: string | null
    created_date: Date
    modified_by: string | null
    modified_date: Date | null
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
    email?: boolean
    email_verified?: boolean
    password?: boolean
    image?: boolean
    phone_number?: boolean
    region?: boolean
    role?: boolean
    mfa_enabled?: boolean
    mfa_method?: boolean
    mfa_secret?: boolean
    last_login?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    web_authn_devices?: boolean | User$web_authn_devicesArgs<ExtArgs>
    employee?: boolean | User$employeeArgs<ExtArgs>
    userlogs?: boolean | User$userlogsArgs<ExtArgs>
    role_definition?: boolean | ConstantsDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified?: boolean
    password?: boolean
    image?: boolean
    phone_number?: boolean
    region?: boolean
    role?: boolean
    mfa_enabled?: boolean
    mfa_method?: boolean
    mfa_secret?: boolean
    last_login?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
    role_definition?: boolean | ConstantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified?: boolean
    password?: boolean
    image?: boolean
    phone_number?: boolean
    region?: boolean
    role?: boolean
    mfa_enabled?: boolean
    mfa_method?: boolean
    mfa_secret?: boolean
    last_login?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
    role_definition?: boolean | ConstantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified?: boolean
    password?: boolean
    image?: boolean
    phone_number?: boolean
    region?: boolean
    role?: boolean
    mfa_enabled?: boolean
    mfa_method?: boolean
    mfa_secret?: boolean
    last_login?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "email_verified" | "password" | "image" | "phone_number" | "region" | "role" | "mfa_enabled" | "mfa_method" | "mfa_secret" | "last_login" | "created_by" | "created_date" | "modified_by" | "modified_date", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    web_authn_devices?: boolean | User$web_authn_devicesArgs<ExtArgs>
    employee?: boolean | User$employeeArgs<ExtArgs>
    userlogs?: boolean | User$userlogsArgs<ExtArgs>
    role_definition?: boolean | ConstantsDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role_definition?: boolean | ConstantsDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role_definition?: boolean | ConstantsDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      web_authn_devices: Prisma.$WebAuthnDevicePayload<ExtArgs>[]
      employee: Prisma.$EmployeePayload<ExtArgs> | null
      userlogs: Prisma.$LoggingPayload<ExtArgs>[]
      role_definition: Prisma.$ConstantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      email_verified: Date | null
      password: string
      image: string | null
      phone_number: string | null
      region: string
      role: string
      mfa_enabled: boolean
      mfa_method: string | null
      mfa_secret: string | null
      last_login: Date | null
      created_by: string | null
      created_date: Date
      modified_by: string | null
      modified_date: Date | null
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    web_authn_devices<T extends User$web_authn_devicesArgs<ExtArgs> = {}>(args?: Subset<T, User$web_authn_devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebAuthnDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employee<T extends User$employeeArgs<ExtArgs> = {}>(args?: Subset<T, User$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userlogs<T extends User$userlogsArgs<ExtArgs> = {}>(args?: Subset<T, User$userlogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    role_definition<T extends ConstantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConstantsDefaultArgs<ExtArgs>>): Prisma__ConstantsClient<$Result.GetResult<Prisma.$ConstantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly email: FieldRef<"User", 'String'>
    readonly email_verified: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly region: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly mfa_enabled: FieldRef<"User", 'Boolean'>
    readonly mfa_method: FieldRef<"User", 'String'>
    readonly mfa_secret: FieldRef<"User", 'String'>
    readonly last_login: FieldRef<"User", 'DateTime'>
    readonly created_by: FieldRef<"User", 'String'>
    readonly created_date: FieldRef<"User", 'DateTime'>
    readonly modified_by: FieldRef<"User", 'String'>
    readonly modified_date: FieldRef<"User", 'DateTime'>
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
   * User.web_authn_devices
   */
  export type User$web_authn_devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebAuthnDevice
     */
    select?: WebAuthnDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebAuthnDevice
     */
    omit?: WebAuthnDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebAuthnDeviceInclude<ExtArgs> | null
    where?: WebAuthnDeviceWhereInput
    orderBy?: WebAuthnDeviceOrderByWithRelationInput | WebAuthnDeviceOrderByWithRelationInput[]
    cursor?: WebAuthnDeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebAuthnDeviceScalarFieldEnum | WebAuthnDeviceScalarFieldEnum[]
  }

  /**
   * User.employee
   */
  export type User$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
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
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    type: string | null
    provider: string | null
    provider_account_id: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    type: string | null
    provider: string | null
    provider_account_id: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    user_id: number
    type: number
    provider: number
    provider_account_id: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    provider?: true
    provider_account_id?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    created_at?: true
    updated_at?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    provider?: true
    provider_account_id?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    created_at?: true
    updated_at?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    provider?: true
    provider_account_id?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    created_at?: true
    updated_at?: true
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
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
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
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    user_id: string
    type: string
    provider: string
    provider_account_id: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    created_at: Date
    updated_at: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
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
    user_id?: boolean
    type?: boolean
    provider?: boolean
    provider_account_id?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    type?: boolean
    provider?: boolean
    provider_account_id?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    type?: boolean
    provider?: boolean
    provider_account_id?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    user_id?: boolean
    type?: boolean
    provider?: boolean
    provider_account_id?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "type" | "provider" | "provider_account_id" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "created_at" | "updated_at", ExtArgs["result"]["account"]>
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
      user_id: string
      type: string
      provider: string
      provider_account_id: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      created_at: Date
      updated_at: Date
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
    readonly user_id: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly provider_account_id: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly created_at: FieldRef<"Account", 'DateTime'>
    readonly updated_at: FieldRef<"Account", 'DateTime'>
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
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    session_token: string | null
    user_id: string | null
    expires: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    session_token: string | null
    user_id: string | null
    expires: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    session_token: number
    user_id: number
    expires: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    session_token?: true
    user_id?: true
    expires?: true
    created_at?: true
    updated_at?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    session_token?: true
    user_id?: true
    expires?: true
    created_at?: true
    updated_at?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    session_token?: true
    user_id?: true
    expires?: true
    created_at?: true
    updated_at?: true
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
    session_token: string
    user_id: string
    expires: Date
    created_at: Date
    updated_at: Date
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
    session_token?: boolean
    user_id?: boolean
    expires?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_token?: boolean
    user_id?: boolean
    expires?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_token?: boolean
    user_id?: boolean
    expires?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    session_token?: boolean
    user_id?: boolean
    expires?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "session_token" | "user_id" | "expires" | "created_at" | "updated_at", ExtArgs["result"]["session"]>
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
      session_token: string
      user_id: string
      expires: Date
      created_at: Date
      updated_at: Date
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
    readonly session_token: FieldRef<"Session", 'String'>
    readonly user_id: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly created_at: FieldRef<"Session", 'DateTime'>
    readonly updated_at: FieldRef<"Session", 'DateTime'>
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
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model WebAuthnDevice
   */

  export type AggregateWebAuthnDevice = {
    _count: WebAuthnDeviceCountAggregateOutputType | null
    _avg: WebAuthnDeviceAvgAggregateOutputType | null
    _sum: WebAuthnDeviceSumAggregateOutputType | null
    _min: WebAuthnDeviceMinAggregateOutputType | null
    _max: WebAuthnDeviceMaxAggregateOutputType | null
  }

  export type WebAuthnDeviceAvgAggregateOutputType = {
    counter: number | null
  }

  export type WebAuthnDeviceSumAggregateOutputType = {
    counter: number | null
  }

  export type WebAuthnDeviceMinAggregateOutputType = {
    credential_id: string | null
    user_id: string | null
    public_key: string | null
    counter: number | null
    device_type: string | null
    backed_up: boolean | null
    transports: string | null
    friendly_name: string | null
    last_used: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WebAuthnDeviceMaxAggregateOutputType = {
    credential_id: string | null
    user_id: string | null
    public_key: string | null
    counter: number | null
    device_type: string | null
    backed_up: boolean | null
    transports: string | null
    friendly_name: string | null
    last_used: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WebAuthnDeviceCountAggregateOutputType = {
    credential_id: number
    user_id: number
    public_key: number
    counter: number
    device_type: number
    backed_up: number
    transports: number
    friendly_name: number
    last_used: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WebAuthnDeviceAvgAggregateInputType = {
    counter?: true
  }

  export type WebAuthnDeviceSumAggregateInputType = {
    counter?: true
  }

  export type WebAuthnDeviceMinAggregateInputType = {
    credential_id?: true
    user_id?: true
    public_key?: true
    counter?: true
    device_type?: true
    backed_up?: true
    transports?: true
    friendly_name?: true
    last_used?: true
    created_at?: true
    updated_at?: true
  }

  export type WebAuthnDeviceMaxAggregateInputType = {
    credential_id?: true
    user_id?: true
    public_key?: true
    counter?: true
    device_type?: true
    backed_up?: true
    transports?: true
    friendly_name?: true
    last_used?: true
    created_at?: true
    updated_at?: true
  }

  export type WebAuthnDeviceCountAggregateInputType = {
    credential_id?: true
    user_id?: true
    public_key?: true
    counter?: true
    device_type?: true
    backed_up?: true
    transports?: true
    friendly_name?: true
    last_used?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WebAuthnDeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebAuthnDevice to aggregate.
     */
    where?: WebAuthnDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebAuthnDevices to fetch.
     */
    orderBy?: WebAuthnDeviceOrderByWithRelationInput | WebAuthnDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebAuthnDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebAuthnDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebAuthnDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebAuthnDevices
    **/
    _count?: true | WebAuthnDeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebAuthnDeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebAuthnDeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebAuthnDeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebAuthnDeviceMaxAggregateInputType
  }

  export type GetWebAuthnDeviceAggregateType<T extends WebAuthnDeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateWebAuthnDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebAuthnDevice[P]>
      : GetScalarType<T[P], AggregateWebAuthnDevice[P]>
  }




  export type WebAuthnDeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebAuthnDeviceWhereInput
    orderBy?: WebAuthnDeviceOrderByWithAggregationInput | WebAuthnDeviceOrderByWithAggregationInput[]
    by: WebAuthnDeviceScalarFieldEnum[] | WebAuthnDeviceScalarFieldEnum
    having?: WebAuthnDeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebAuthnDeviceCountAggregateInputType | true
    _avg?: WebAuthnDeviceAvgAggregateInputType
    _sum?: WebAuthnDeviceSumAggregateInputType
    _min?: WebAuthnDeviceMinAggregateInputType
    _max?: WebAuthnDeviceMaxAggregateInputType
  }

  export type WebAuthnDeviceGroupByOutputType = {
    credential_id: string
    user_id: string
    public_key: string
    counter: number
    device_type: string
    backed_up: boolean
    transports: string | null
    friendly_name: string | null
    last_used: Date | null
    created_at: Date
    updated_at: Date
    _count: WebAuthnDeviceCountAggregateOutputType | null
    _avg: WebAuthnDeviceAvgAggregateOutputType | null
    _sum: WebAuthnDeviceSumAggregateOutputType | null
    _min: WebAuthnDeviceMinAggregateOutputType | null
    _max: WebAuthnDeviceMaxAggregateOutputType | null
  }

  type GetWebAuthnDeviceGroupByPayload<T extends WebAuthnDeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebAuthnDeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebAuthnDeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebAuthnDeviceGroupByOutputType[P]>
            : GetScalarType<T[P], WebAuthnDeviceGroupByOutputType[P]>
        }
      >
    >


  export type WebAuthnDeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    credential_id?: boolean
    user_id?: boolean
    public_key?: boolean
    counter?: boolean
    device_type?: boolean
    backed_up?: boolean
    transports?: boolean
    friendly_name?: boolean
    last_used?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webAuthnDevice"]>

  export type WebAuthnDeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    credential_id?: boolean
    user_id?: boolean
    public_key?: boolean
    counter?: boolean
    device_type?: boolean
    backed_up?: boolean
    transports?: boolean
    friendly_name?: boolean
    last_used?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webAuthnDevice"]>

  export type WebAuthnDeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    credential_id?: boolean
    user_id?: boolean
    public_key?: boolean
    counter?: boolean
    device_type?: boolean
    backed_up?: boolean
    transports?: boolean
    friendly_name?: boolean
    last_used?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webAuthnDevice"]>

  export type WebAuthnDeviceSelectScalar = {
    credential_id?: boolean
    user_id?: boolean
    public_key?: boolean
    counter?: boolean
    device_type?: boolean
    backed_up?: boolean
    transports?: boolean
    friendly_name?: boolean
    last_used?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type WebAuthnDeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"credential_id" | "user_id" | "public_key" | "counter" | "device_type" | "backed_up" | "transports" | "friendly_name" | "last_used" | "created_at" | "updated_at", ExtArgs["result"]["webAuthnDevice"]>
  export type WebAuthnDeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WebAuthnDeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WebAuthnDeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WebAuthnDevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebAuthnDevice"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      credential_id: string
      user_id: string
      public_key: string
      counter: number
      device_type: string
      backed_up: boolean
      transports: string | null
      friendly_name: string | null
      last_used: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["webAuthnDevice"]>
    composites: {}
  }

  type WebAuthnDeviceGetPayload<S extends boolean | null | undefined | WebAuthnDeviceDefaultArgs> = $Result.GetResult<Prisma.$WebAuthnDevicePayload, S>

  type WebAuthnDeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebAuthnDeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebAuthnDeviceCountAggregateInputType | true
    }

  export interface WebAuthnDeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebAuthnDevice'], meta: { name: 'WebAuthnDevice' } }
    /**
     * Find zero or one WebAuthnDevice that matches the filter.
     * @param {WebAuthnDeviceFindUniqueArgs} args - Arguments to find a WebAuthnDevice
     * @example
     * // Get one WebAuthnDevice
     * const webAuthnDevice = await prisma.webAuthnDevice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebAuthnDeviceFindUniqueArgs>(args: SelectSubset<T, WebAuthnDeviceFindUniqueArgs<ExtArgs>>): Prisma__WebAuthnDeviceClient<$Result.GetResult<Prisma.$WebAuthnDevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebAuthnDevice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebAuthnDeviceFindUniqueOrThrowArgs} args - Arguments to find a WebAuthnDevice
     * @example
     * // Get one WebAuthnDevice
     * const webAuthnDevice = await prisma.webAuthnDevice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebAuthnDeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, WebAuthnDeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebAuthnDeviceClient<$Result.GetResult<Prisma.$WebAuthnDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebAuthnDevice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebAuthnDeviceFindFirstArgs} args - Arguments to find a WebAuthnDevice
     * @example
     * // Get one WebAuthnDevice
     * const webAuthnDevice = await prisma.webAuthnDevice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebAuthnDeviceFindFirstArgs>(args?: SelectSubset<T, WebAuthnDeviceFindFirstArgs<ExtArgs>>): Prisma__WebAuthnDeviceClient<$Result.GetResult<Prisma.$WebAuthnDevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebAuthnDevice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebAuthnDeviceFindFirstOrThrowArgs} args - Arguments to find a WebAuthnDevice
     * @example
     * // Get one WebAuthnDevice
     * const webAuthnDevice = await prisma.webAuthnDevice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebAuthnDeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, WebAuthnDeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebAuthnDeviceClient<$Result.GetResult<Prisma.$WebAuthnDevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebAuthnDevices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebAuthnDeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebAuthnDevices
     * const webAuthnDevices = await prisma.webAuthnDevice.findMany()
     * 
     * // Get first 10 WebAuthnDevices
     * const webAuthnDevices = await prisma.webAuthnDevice.findMany({ take: 10 })
     * 
     * // Only select the `credential_id`
     * const webAuthnDeviceWithCredential_idOnly = await prisma.webAuthnDevice.findMany({ select: { credential_id: true } })
     * 
     */
    findMany<T extends WebAuthnDeviceFindManyArgs>(args?: SelectSubset<T, WebAuthnDeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebAuthnDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebAuthnDevice.
     * @param {WebAuthnDeviceCreateArgs} args - Arguments to create a WebAuthnDevice.
     * @example
     * // Create one WebAuthnDevice
     * const WebAuthnDevice = await prisma.webAuthnDevice.create({
     *   data: {
     *     // ... data to create a WebAuthnDevice
     *   }
     * })
     * 
     */
    create<T extends WebAuthnDeviceCreateArgs>(args: SelectSubset<T, WebAuthnDeviceCreateArgs<ExtArgs>>): Prisma__WebAuthnDeviceClient<$Result.GetResult<Prisma.$WebAuthnDevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebAuthnDevices.
     * @param {WebAuthnDeviceCreateManyArgs} args - Arguments to create many WebAuthnDevices.
     * @example
     * // Create many WebAuthnDevices
     * const webAuthnDevice = await prisma.webAuthnDevice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebAuthnDeviceCreateManyArgs>(args?: SelectSubset<T, WebAuthnDeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebAuthnDevices and returns the data saved in the database.
     * @param {WebAuthnDeviceCreateManyAndReturnArgs} args - Arguments to create many WebAuthnDevices.
     * @example
     * // Create many WebAuthnDevices
     * const webAuthnDevice = await prisma.webAuthnDevice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebAuthnDevices and only return the `credential_id`
     * const webAuthnDeviceWithCredential_idOnly = await prisma.webAuthnDevice.createManyAndReturn({
     *   select: { credential_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebAuthnDeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, WebAuthnDeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebAuthnDevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebAuthnDevice.
     * @param {WebAuthnDeviceDeleteArgs} args - Arguments to delete one WebAuthnDevice.
     * @example
     * // Delete one WebAuthnDevice
     * const WebAuthnDevice = await prisma.webAuthnDevice.delete({
     *   where: {
     *     // ... filter to delete one WebAuthnDevice
     *   }
     * })
     * 
     */
    delete<T extends WebAuthnDeviceDeleteArgs>(args: SelectSubset<T, WebAuthnDeviceDeleteArgs<ExtArgs>>): Prisma__WebAuthnDeviceClient<$Result.GetResult<Prisma.$WebAuthnDevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebAuthnDevice.
     * @param {WebAuthnDeviceUpdateArgs} args - Arguments to update one WebAuthnDevice.
     * @example
     * // Update one WebAuthnDevice
     * const webAuthnDevice = await prisma.webAuthnDevice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebAuthnDeviceUpdateArgs>(args: SelectSubset<T, WebAuthnDeviceUpdateArgs<ExtArgs>>): Prisma__WebAuthnDeviceClient<$Result.GetResult<Prisma.$WebAuthnDevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebAuthnDevices.
     * @param {WebAuthnDeviceDeleteManyArgs} args - Arguments to filter WebAuthnDevices to delete.
     * @example
     * // Delete a few WebAuthnDevices
     * const { count } = await prisma.webAuthnDevice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebAuthnDeviceDeleteManyArgs>(args?: SelectSubset<T, WebAuthnDeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebAuthnDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebAuthnDeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebAuthnDevices
     * const webAuthnDevice = await prisma.webAuthnDevice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebAuthnDeviceUpdateManyArgs>(args: SelectSubset<T, WebAuthnDeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebAuthnDevices and returns the data updated in the database.
     * @param {WebAuthnDeviceUpdateManyAndReturnArgs} args - Arguments to update many WebAuthnDevices.
     * @example
     * // Update many WebAuthnDevices
     * const webAuthnDevice = await prisma.webAuthnDevice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebAuthnDevices and only return the `credential_id`
     * const webAuthnDeviceWithCredential_idOnly = await prisma.webAuthnDevice.updateManyAndReturn({
     *   select: { credential_id: true },
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
    updateManyAndReturn<T extends WebAuthnDeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, WebAuthnDeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebAuthnDevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebAuthnDevice.
     * @param {WebAuthnDeviceUpsertArgs} args - Arguments to update or create a WebAuthnDevice.
     * @example
     * // Update or create a WebAuthnDevice
     * const webAuthnDevice = await prisma.webAuthnDevice.upsert({
     *   create: {
     *     // ... data to create a WebAuthnDevice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebAuthnDevice we want to update
     *   }
     * })
     */
    upsert<T extends WebAuthnDeviceUpsertArgs>(args: SelectSubset<T, WebAuthnDeviceUpsertArgs<ExtArgs>>): Prisma__WebAuthnDeviceClient<$Result.GetResult<Prisma.$WebAuthnDevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebAuthnDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebAuthnDeviceCountArgs} args - Arguments to filter WebAuthnDevices to count.
     * @example
     * // Count the number of WebAuthnDevices
     * const count = await prisma.webAuthnDevice.count({
     *   where: {
     *     // ... the filter for the WebAuthnDevices we want to count
     *   }
     * })
    **/
    count<T extends WebAuthnDeviceCountArgs>(
      args?: Subset<T, WebAuthnDeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebAuthnDeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebAuthnDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebAuthnDeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebAuthnDeviceAggregateArgs>(args: Subset<T, WebAuthnDeviceAggregateArgs>): Prisma.PrismaPromise<GetWebAuthnDeviceAggregateType<T>>

    /**
     * Group by WebAuthnDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebAuthnDeviceGroupByArgs} args - Group by arguments.
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
      T extends WebAuthnDeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebAuthnDeviceGroupByArgs['orderBy'] }
        : { orderBy?: WebAuthnDeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebAuthnDeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebAuthnDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebAuthnDevice model
   */
  readonly fields: WebAuthnDeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebAuthnDevice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebAuthnDeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the WebAuthnDevice model
   */
  interface WebAuthnDeviceFieldRefs {
    readonly credential_id: FieldRef<"WebAuthnDevice", 'String'>
    readonly user_id: FieldRef<"WebAuthnDevice", 'String'>
    readonly public_key: FieldRef<"WebAuthnDevice", 'String'>
    readonly counter: FieldRef<"WebAuthnDevice", 'Int'>
    readonly device_type: FieldRef<"WebAuthnDevice", 'String'>
    readonly backed_up: FieldRef<"WebAuthnDevice", 'Boolean'>
    readonly transports: FieldRef<"WebAuthnDevice", 'String'>
    readonly friendly_name: FieldRef<"WebAuthnDevice", 'String'>
    readonly last_used: FieldRef<"WebAuthnDevice", 'DateTime'>
    readonly created_at: FieldRef<"WebAuthnDevice", 'DateTime'>
    readonly updated_at: FieldRef<"WebAuthnDevice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebAuthnDevice findUnique
   */
  export type WebAuthnDeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebAuthnDevice
     */
    select?: WebAuthnDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebAuthnDevice
     */
    omit?: WebAuthnDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebAuthnDeviceInclude<ExtArgs> | null
    /**
     * Filter, which WebAuthnDevice to fetch.
     */
    where: WebAuthnDeviceWhereUniqueInput
  }

  /**
   * WebAuthnDevice findUniqueOrThrow
   */
  export type WebAuthnDeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebAuthnDevice
     */
    select?: WebAuthnDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebAuthnDevice
     */
    omit?: WebAuthnDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebAuthnDeviceInclude<ExtArgs> | null
    /**
     * Filter, which WebAuthnDevice to fetch.
     */
    where: WebAuthnDeviceWhereUniqueInput
  }

  /**
   * WebAuthnDevice findFirst
   */
  export type WebAuthnDeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebAuthnDevice
     */
    select?: WebAuthnDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebAuthnDevice
     */
    omit?: WebAuthnDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebAuthnDeviceInclude<ExtArgs> | null
    /**
     * Filter, which WebAuthnDevice to fetch.
     */
    where?: WebAuthnDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebAuthnDevices to fetch.
     */
    orderBy?: WebAuthnDeviceOrderByWithRelationInput | WebAuthnDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebAuthnDevices.
     */
    cursor?: WebAuthnDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebAuthnDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebAuthnDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebAuthnDevices.
     */
    distinct?: WebAuthnDeviceScalarFieldEnum | WebAuthnDeviceScalarFieldEnum[]
  }

  /**
   * WebAuthnDevice findFirstOrThrow
   */
  export type WebAuthnDeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebAuthnDevice
     */
    select?: WebAuthnDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebAuthnDevice
     */
    omit?: WebAuthnDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebAuthnDeviceInclude<ExtArgs> | null
    /**
     * Filter, which WebAuthnDevice to fetch.
     */
    where?: WebAuthnDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebAuthnDevices to fetch.
     */
    orderBy?: WebAuthnDeviceOrderByWithRelationInput | WebAuthnDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebAuthnDevices.
     */
    cursor?: WebAuthnDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebAuthnDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebAuthnDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebAuthnDevices.
     */
    distinct?: WebAuthnDeviceScalarFieldEnum | WebAuthnDeviceScalarFieldEnum[]
  }

  /**
   * WebAuthnDevice findMany
   */
  export type WebAuthnDeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebAuthnDevice
     */
    select?: WebAuthnDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebAuthnDevice
     */
    omit?: WebAuthnDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebAuthnDeviceInclude<ExtArgs> | null
    /**
     * Filter, which WebAuthnDevices to fetch.
     */
    where?: WebAuthnDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebAuthnDevices to fetch.
     */
    orderBy?: WebAuthnDeviceOrderByWithRelationInput | WebAuthnDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebAuthnDevices.
     */
    cursor?: WebAuthnDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebAuthnDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebAuthnDevices.
     */
    skip?: number
    distinct?: WebAuthnDeviceScalarFieldEnum | WebAuthnDeviceScalarFieldEnum[]
  }

  /**
   * WebAuthnDevice create
   */
  export type WebAuthnDeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebAuthnDevice
     */
    select?: WebAuthnDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebAuthnDevice
     */
    omit?: WebAuthnDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebAuthnDeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a WebAuthnDevice.
     */
    data: XOR<WebAuthnDeviceCreateInput, WebAuthnDeviceUncheckedCreateInput>
  }

  /**
   * WebAuthnDevice createMany
   */
  export type WebAuthnDeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebAuthnDevices.
     */
    data: WebAuthnDeviceCreateManyInput | WebAuthnDeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebAuthnDevice createManyAndReturn
   */
  export type WebAuthnDeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebAuthnDevice
     */
    select?: WebAuthnDeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebAuthnDevice
     */
    omit?: WebAuthnDeviceOmit<ExtArgs> | null
    /**
     * The data used to create many WebAuthnDevices.
     */
    data: WebAuthnDeviceCreateManyInput | WebAuthnDeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebAuthnDeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebAuthnDevice update
   */
  export type WebAuthnDeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebAuthnDevice
     */
    select?: WebAuthnDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebAuthnDevice
     */
    omit?: WebAuthnDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebAuthnDeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a WebAuthnDevice.
     */
    data: XOR<WebAuthnDeviceUpdateInput, WebAuthnDeviceUncheckedUpdateInput>
    /**
     * Choose, which WebAuthnDevice to update.
     */
    where: WebAuthnDeviceWhereUniqueInput
  }

  /**
   * WebAuthnDevice updateMany
   */
  export type WebAuthnDeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebAuthnDevices.
     */
    data: XOR<WebAuthnDeviceUpdateManyMutationInput, WebAuthnDeviceUncheckedUpdateManyInput>
    /**
     * Filter which WebAuthnDevices to update
     */
    where?: WebAuthnDeviceWhereInput
    /**
     * Limit how many WebAuthnDevices to update.
     */
    limit?: number
  }

  /**
   * WebAuthnDevice updateManyAndReturn
   */
  export type WebAuthnDeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebAuthnDevice
     */
    select?: WebAuthnDeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebAuthnDevice
     */
    omit?: WebAuthnDeviceOmit<ExtArgs> | null
    /**
     * The data used to update WebAuthnDevices.
     */
    data: XOR<WebAuthnDeviceUpdateManyMutationInput, WebAuthnDeviceUncheckedUpdateManyInput>
    /**
     * Filter which WebAuthnDevices to update
     */
    where?: WebAuthnDeviceWhereInput
    /**
     * Limit how many WebAuthnDevices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebAuthnDeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebAuthnDevice upsert
   */
  export type WebAuthnDeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebAuthnDevice
     */
    select?: WebAuthnDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebAuthnDevice
     */
    omit?: WebAuthnDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebAuthnDeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the WebAuthnDevice to update in case it exists.
     */
    where: WebAuthnDeviceWhereUniqueInput
    /**
     * In case the WebAuthnDevice found by the `where` argument doesn't exist, create a new WebAuthnDevice with this data.
     */
    create: XOR<WebAuthnDeviceCreateInput, WebAuthnDeviceUncheckedCreateInput>
    /**
     * In case the WebAuthnDevice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebAuthnDeviceUpdateInput, WebAuthnDeviceUncheckedUpdateInput>
  }

  /**
   * WebAuthnDevice delete
   */
  export type WebAuthnDeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebAuthnDevice
     */
    select?: WebAuthnDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebAuthnDevice
     */
    omit?: WebAuthnDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebAuthnDeviceInclude<ExtArgs> | null
    /**
     * Filter which WebAuthnDevice to delete.
     */
    where: WebAuthnDeviceWhereUniqueInput
  }

  /**
   * WebAuthnDevice deleteMany
   */
  export type WebAuthnDeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebAuthnDevices to delete
     */
    where?: WebAuthnDeviceWhereInput
    /**
     * Limit how many WebAuthnDevices to delete.
     */
    limit?: number
  }

  /**
   * WebAuthnDevice without action
   */
  export type WebAuthnDeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebAuthnDevice
     */
    select?: WebAuthnDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebAuthnDevice
     */
    omit?: WebAuthnDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebAuthnDeviceInclude<ExtArgs> | null
  }


  /**
   * Model OneTimeCode
   */

  export type AggregateOneTimeCode = {
    _count: OneTimeCodeCountAggregateOutputType | null
    _min: OneTimeCodeMinAggregateOutputType | null
    _max: OneTimeCodeMaxAggregateOutputType | null
  }

  export type OneTimeCodeMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    code: string | null
    type: string | null
    used: boolean | null
    expires: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OneTimeCodeMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    code: string | null
    type: string | null
    used: boolean | null
    expires: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OneTimeCodeCountAggregateOutputType = {
    id: number
    user_id: number
    code: number
    type: number
    used: number
    expires: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OneTimeCodeMinAggregateInputType = {
    id?: true
    user_id?: true
    code?: true
    type?: true
    used?: true
    expires?: true
    created_at?: true
    updated_at?: true
  }

  export type OneTimeCodeMaxAggregateInputType = {
    id?: true
    user_id?: true
    code?: true
    type?: true
    used?: true
    expires?: true
    created_at?: true
    updated_at?: true
  }

  export type OneTimeCodeCountAggregateInputType = {
    id?: true
    user_id?: true
    code?: true
    type?: true
    used?: true
    expires?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OneTimeCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OneTimeCode to aggregate.
     */
    where?: OneTimeCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OneTimeCodes to fetch.
     */
    orderBy?: OneTimeCodeOrderByWithRelationInput | OneTimeCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OneTimeCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OneTimeCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OneTimeCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OneTimeCodes
    **/
    _count?: true | OneTimeCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OneTimeCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OneTimeCodeMaxAggregateInputType
  }

  export type GetOneTimeCodeAggregateType<T extends OneTimeCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateOneTimeCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOneTimeCode[P]>
      : GetScalarType<T[P], AggregateOneTimeCode[P]>
  }




  export type OneTimeCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OneTimeCodeWhereInput
    orderBy?: OneTimeCodeOrderByWithAggregationInput | OneTimeCodeOrderByWithAggregationInput[]
    by: OneTimeCodeScalarFieldEnum[] | OneTimeCodeScalarFieldEnum
    having?: OneTimeCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OneTimeCodeCountAggregateInputType | true
    _min?: OneTimeCodeMinAggregateInputType
    _max?: OneTimeCodeMaxAggregateInputType
  }

  export type OneTimeCodeGroupByOutputType = {
    id: string
    user_id: string
    code: string
    type: string
    used: boolean
    expires: Date
    created_at: Date
    updated_at: Date
    _count: OneTimeCodeCountAggregateOutputType | null
    _min: OneTimeCodeMinAggregateOutputType | null
    _max: OneTimeCodeMaxAggregateOutputType | null
  }

  type GetOneTimeCodeGroupByPayload<T extends OneTimeCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OneTimeCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OneTimeCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OneTimeCodeGroupByOutputType[P]>
            : GetScalarType<T[P], OneTimeCodeGroupByOutputType[P]>
        }
      >
    >


  export type OneTimeCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    code?: boolean
    type?: boolean
    used?: boolean
    expires?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["oneTimeCode"]>

  export type OneTimeCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    code?: boolean
    type?: boolean
    used?: boolean
    expires?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["oneTimeCode"]>

  export type OneTimeCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    code?: boolean
    type?: boolean
    used?: boolean
    expires?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["oneTimeCode"]>

  export type OneTimeCodeSelectScalar = {
    id?: boolean
    user_id?: boolean
    code?: boolean
    type?: boolean
    used?: boolean
    expires?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OneTimeCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "code" | "type" | "used" | "expires" | "created_at" | "updated_at", ExtArgs["result"]["oneTimeCode"]>

  export type $OneTimeCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OneTimeCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      code: string
      type: string
      used: boolean
      expires: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["oneTimeCode"]>
    composites: {}
  }

  type OneTimeCodeGetPayload<S extends boolean | null | undefined | OneTimeCodeDefaultArgs> = $Result.GetResult<Prisma.$OneTimeCodePayload, S>

  type OneTimeCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OneTimeCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OneTimeCodeCountAggregateInputType | true
    }

  export interface OneTimeCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OneTimeCode'], meta: { name: 'OneTimeCode' } }
    /**
     * Find zero or one OneTimeCode that matches the filter.
     * @param {OneTimeCodeFindUniqueArgs} args - Arguments to find a OneTimeCode
     * @example
     * // Get one OneTimeCode
     * const oneTimeCode = await prisma.oneTimeCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OneTimeCodeFindUniqueArgs>(args: SelectSubset<T, OneTimeCodeFindUniqueArgs<ExtArgs>>): Prisma__OneTimeCodeClient<$Result.GetResult<Prisma.$OneTimeCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OneTimeCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OneTimeCodeFindUniqueOrThrowArgs} args - Arguments to find a OneTimeCode
     * @example
     * // Get one OneTimeCode
     * const oneTimeCode = await prisma.oneTimeCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OneTimeCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, OneTimeCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OneTimeCodeClient<$Result.GetResult<Prisma.$OneTimeCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OneTimeCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OneTimeCodeFindFirstArgs} args - Arguments to find a OneTimeCode
     * @example
     * // Get one OneTimeCode
     * const oneTimeCode = await prisma.oneTimeCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OneTimeCodeFindFirstArgs>(args?: SelectSubset<T, OneTimeCodeFindFirstArgs<ExtArgs>>): Prisma__OneTimeCodeClient<$Result.GetResult<Prisma.$OneTimeCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OneTimeCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OneTimeCodeFindFirstOrThrowArgs} args - Arguments to find a OneTimeCode
     * @example
     * // Get one OneTimeCode
     * const oneTimeCode = await prisma.oneTimeCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OneTimeCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, OneTimeCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__OneTimeCodeClient<$Result.GetResult<Prisma.$OneTimeCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OneTimeCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OneTimeCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OneTimeCodes
     * const oneTimeCodes = await prisma.oneTimeCode.findMany()
     * 
     * // Get first 10 OneTimeCodes
     * const oneTimeCodes = await prisma.oneTimeCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oneTimeCodeWithIdOnly = await prisma.oneTimeCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OneTimeCodeFindManyArgs>(args?: SelectSubset<T, OneTimeCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OneTimeCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OneTimeCode.
     * @param {OneTimeCodeCreateArgs} args - Arguments to create a OneTimeCode.
     * @example
     * // Create one OneTimeCode
     * const OneTimeCode = await prisma.oneTimeCode.create({
     *   data: {
     *     // ... data to create a OneTimeCode
     *   }
     * })
     * 
     */
    create<T extends OneTimeCodeCreateArgs>(args: SelectSubset<T, OneTimeCodeCreateArgs<ExtArgs>>): Prisma__OneTimeCodeClient<$Result.GetResult<Prisma.$OneTimeCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OneTimeCodes.
     * @param {OneTimeCodeCreateManyArgs} args - Arguments to create many OneTimeCodes.
     * @example
     * // Create many OneTimeCodes
     * const oneTimeCode = await prisma.oneTimeCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OneTimeCodeCreateManyArgs>(args?: SelectSubset<T, OneTimeCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OneTimeCodes and returns the data saved in the database.
     * @param {OneTimeCodeCreateManyAndReturnArgs} args - Arguments to create many OneTimeCodes.
     * @example
     * // Create many OneTimeCodes
     * const oneTimeCode = await prisma.oneTimeCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OneTimeCodes and only return the `id`
     * const oneTimeCodeWithIdOnly = await prisma.oneTimeCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OneTimeCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, OneTimeCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OneTimeCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OneTimeCode.
     * @param {OneTimeCodeDeleteArgs} args - Arguments to delete one OneTimeCode.
     * @example
     * // Delete one OneTimeCode
     * const OneTimeCode = await prisma.oneTimeCode.delete({
     *   where: {
     *     // ... filter to delete one OneTimeCode
     *   }
     * })
     * 
     */
    delete<T extends OneTimeCodeDeleteArgs>(args: SelectSubset<T, OneTimeCodeDeleteArgs<ExtArgs>>): Prisma__OneTimeCodeClient<$Result.GetResult<Prisma.$OneTimeCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OneTimeCode.
     * @param {OneTimeCodeUpdateArgs} args - Arguments to update one OneTimeCode.
     * @example
     * // Update one OneTimeCode
     * const oneTimeCode = await prisma.oneTimeCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OneTimeCodeUpdateArgs>(args: SelectSubset<T, OneTimeCodeUpdateArgs<ExtArgs>>): Prisma__OneTimeCodeClient<$Result.GetResult<Prisma.$OneTimeCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OneTimeCodes.
     * @param {OneTimeCodeDeleteManyArgs} args - Arguments to filter OneTimeCodes to delete.
     * @example
     * // Delete a few OneTimeCodes
     * const { count } = await prisma.oneTimeCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OneTimeCodeDeleteManyArgs>(args?: SelectSubset<T, OneTimeCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OneTimeCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OneTimeCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OneTimeCodes
     * const oneTimeCode = await prisma.oneTimeCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OneTimeCodeUpdateManyArgs>(args: SelectSubset<T, OneTimeCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OneTimeCodes and returns the data updated in the database.
     * @param {OneTimeCodeUpdateManyAndReturnArgs} args - Arguments to update many OneTimeCodes.
     * @example
     * // Update many OneTimeCodes
     * const oneTimeCode = await prisma.oneTimeCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OneTimeCodes and only return the `id`
     * const oneTimeCodeWithIdOnly = await prisma.oneTimeCode.updateManyAndReturn({
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
    updateManyAndReturn<T extends OneTimeCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, OneTimeCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OneTimeCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OneTimeCode.
     * @param {OneTimeCodeUpsertArgs} args - Arguments to update or create a OneTimeCode.
     * @example
     * // Update or create a OneTimeCode
     * const oneTimeCode = await prisma.oneTimeCode.upsert({
     *   create: {
     *     // ... data to create a OneTimeCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OneTimeCode we want to update
     *   }
     * })
     */
    upsert<T extends OneTimeCodeUpsertArgs>(args: SelectSubset<T, OneTimeCodeUpsertArgs<ExtArgs>>): Prisma__OneTimeCodeClient<$Result.GetResult<Prisma.$OneTimeCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OneTimeCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OneTimeCodeCountArgs} args - Arguments to filter OneTimeCodes to count.
     * @example
     * // Count the number of OneTimeCodes
     * const count = await prisma.oneTimeCode.count({
     *   where: {
     *     // ... the filter for the OneTimeCodes we want to count
     *   }
     * })
    **/
    count<T extends OneTimeCodeCountArgs>(
      args?: Subset<T, OneTimeCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OneTimeCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OneTimeCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OneTimeCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OneTimeCodeAggregateArgs>(args: Subset<T, OneTimeCodeAggregateArgs>): Prisma.PrismaPromise<GetOneTimeCodeAggregateType<T>>

    /**
     * Group by OneTimeCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OneTimeCodeGroupByArgs} args - Group by arguments.
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
      T extends OneTimeCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OneTimeCodeGroupByArgs['orderBy'] }
        : { orderBy?: OneTimeCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OneTimeCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOneTimeCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OneTimeCode model
   */
  readonly fields: OneTimeCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OneTimeCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OneTimeCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the OneTimeCode model
   */
  interface OneTimeCodeFieldRefs {
    readonly id: FieldRef<"OneTimeCode", 'String'>
    readonly user_id: FieldRef<"OneTimeCode", 'String'>
    readonly code: FieldRef<"OneTimeCode", 'String'>
    readonly type: FieldRef<"OneTimeCode", 'String'>
    readonly used: FieldRef<"OneTimeCode", 'Boolean'>
    readonly expires: FieldRef<"OneTimeCode", 'DateTime'>
    readonly created_at: FieldRef<"OneTimeCode", 'DateTime'>
    readonly updated_at: FieldRef<"OneTimeCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OneTimeCode findUnique
   */
  export type OneTimeCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneTimeCode
     */
    select?: OneTimeCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OneTimeCode
     */
    omit?: OneTimeCodeOmit<ExtArgs> | null
    /**
     * Filter, which OneTimeCode to fetch.
     */
    where: OneTimeCodeWhereUniqueInput
  }

  /**
   * OneTimeCode findUniqueOrThrow
   */
  export type OneTimeCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneTimeCode
     */
    select?: OneTimeCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OneTimeCode
     */
    omit?: OneTimeCodeOmit<ExtArgs> | null
    /**
     * Filter, which OneTimeCode to fetch.
     */
    where: OneTimeCodeWhereUniqueInput
  }

  /**
   * OneTimeCode findFirst
   */
  export type OneTimeCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneTimeCode
     */
    select?: OneTimeCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OneTimeCode
     */
    omit?: OneTimeCodeOmit<ExtArgs> | null
    /**
     * Filter, which OneTimeCode to fetch.
     */
    where?: OneTimeCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OneTimeCodes to fetch.
     */
    orderBy?: OneTimeCodeOrderByWithRelationInput | OneTimeCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OneTimeCodes.
     */
    cursor?: OneTimeCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OneTimeCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OneTimeCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OneTimeCodes.
     */
    distinct?: OneTimeCodeScalarFieldEnum | OneTimeCodeScalarFieldEnum[]
  }

  /**
   * OneTimeCode findFirstOrThrow
   */
  export type OneTimeCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneTimeCode
     */
    select?: OneTimeCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OneTimeCode
     */
    omit?: OneTimeCodeOmit<ExtArgs> | null
    /**
     * Filter, which OneTimeCode to fetch.
     */
    where?: OneTimeCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OneTimeCodes to fetch.
     */
    orderBy?: OneTimeCodeOrderByWithRelationInput | OneTimeCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OneTimeCodes.
     */
    cursor?: OneTimeCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OneTimeCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OneTimeCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OneTimeCodes.
     */
    distinct?: OneTimeCodeScalarFieldEnum | OneTimeCodeScalarFieldEnum[]
  }

  /**
   * OneTimeCode findMany
   */
  export type OneTimeCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneTimeCode
     */
    select?: OneTimeCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OneTimeCode
     */
    omit?: OneTimeCodeOmit<ExtArgs> | null
    /**
     * Filter, which OneTimeCodes to fetch.
     */
    where?: OneTimeCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OneTimeCodes to fetch.
     */
    orderBy?: OneTimeCodeOrderByWithRelationInput | OneTimeCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OneTimeCodes.
     */
    cursor?: OneTimeCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OneTimeCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OneTimeCodes.
     */
    skip?: number
    distinct?: OneTimeCodeScalarFieldEnum | OneTimeCodeScalarFieldEnum[]
  }

  /**
   * OneTimeCode create
   */
  export type OneTimeCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneTimeCode
     */
    select?: OneTimeCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OneTimeCode
     */
    omit?: OneTimeCodeOmit<ExtArgs> | null
    /**
     * The data needed to create a OneTimeCode.
     */
    data: XOR<OneTimeCodeCreateInput, OneTimeCodeUncheckedCreateInput>
  }

  /**
   * OneTimeCode createMany
   */
  export type OneTimeCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OneTimeCodes.
     */
    data: OneTimeCodeCreateManyInput | OneTimeCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OneTimeCode createManyAndReturn
   */
  export type OneTimeCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneTimeCode
     */
    select?: OneTimeCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OneTimeCode
     */
    omit?: OneTimeCodeOmit<ExtArgs> | null
    /**
     * The data used to create many OneTimeCodes.
     */
    data: OneTimeCodeCreateManyInput | OneTimeCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OneTimeCode update
   */
  export type OneTimeCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneTimeCode
     */
    select?: OneTimeCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OneTimeCode
     */
    omit?: OneTimeCodeOmit<ExtArgs> | null
    /**
     * The data needed to update a OneTimeCode.
     */
    data: XOR<OneTimeCodeUpdateInput, OneTimeCodeUncheckedUpdateInput>
    /**
     * Choose, which OneTimeCode to update.
     */
    where: OneTimeCodeWhereUniqueInput
  }

  /**
   * OneTimeCode updateMany
   */
  export type OneTimeCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OneTimeCodes.
     */
    data: XOR<OneTimeCodeUpdateManyMutationInput, OneTimeCodeUncheckedUpdateManyInput>
    /**
     * Filter which OneTimeCodes to update
     */
    where?: OneTimeCodeWhereInput
    /**
     * Limit how many OneTimeCodes to update.
     */
    limit?: number
  }

  /**
   * OneTimeCode updateManyAndReturn
   */
  export type OneTimeCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneTimeCode
     */
    select?: OneTimeCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OneTimeCode
     */
    omit?: OneTimeCodeOmit<ExtArgs> | null
    /**
     * The data used to update OneTimeCodes.
     */
    data: XOR<OneTimeCodeUpdateManyMutationInput, OneTimeCodeUncheckedUpdateManyInput>
    /**
     * Filter which OneTimeCodes to update
     */
    where?: OneTimeCodeWhereInput
    /**
     * Limit how many OneTimeCodes to update.
     */
    limit?: number
  }

  /**
   * OneTimeCode upsert
   */
  export type OneTimeCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneTimeCode
     */
    select?: OneTimeCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OneTimeCode
     */
    omit?: OneTimeCodeOmit<ExtArgs> | null
    /**
     * The filter to search for the OneTimeCode to update in case it exists.
     */
    where: OneTimeCodeWhereUniqueInput
    /**
     * In case the OneTimeCode found by the `where` argument doesn't exist, create a new OneTimeCode with this data.
     */
    create: XOR<OneTimeCodeCreateInput, OneTimeCodeUncheckedCreateInput>
    /**
     * In case the OneTimeCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OneTimeCodeUpdateInput, OneTimeCodeUncheckedUpdateInput>
  }

  /**
   * OneTimeCode delete
   */
  export type OneTimeCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneTimeCode
     */
    select?: OneTimeCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OneTimeCode
     */
    omit?: OneTimeCodeOmit<ExtArgs> | null
    /**
     * Filter which OneTimeCode to delete.
     */
    where: OneTimeCodeWhereUniqueInput
  }

  /**
   * OneTimeCode deleteMany
   */
  export type OneTimeCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OneTimeCodes to delete
     */
    where?: OneTimeCodeWhereInput
    /**
     * Limit how many OneTimeCodes to delete.
     */
    limit?: number
  }

  /**
   * OneTimeCode without action
   */
  export type OneTimeCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneTimeCode
     */
    select?: OneTimeCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OneTimeCode
     */
    omit?: OneTimeCodeOmit<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    user_id: string | null
    company_id: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    user_id: string | null
    company_id: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    user_id: number
    company_id: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    user_id?: true
    company_id?: true
  }

  export type EmployeeMaxAggregateInputType = {
    user_id?: true
    company_id?: true
  }

  export type EmployeeCountAggregateInputType = {
    user_id?: true
    company_id?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
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
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    user_id: string
    company_id: string
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    company_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    company_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    company_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    user_id?: boolean
    company_id?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "company_id", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      company_id: string
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const employeeWithUser_idOnly = await prisma.employee.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `user_id`
     * const employeeWithUser_idOnly = await prisma.employee.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `user_id`
     * const employeeWithUser_idOnly = await prisma.employee.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly user_id: FieldRef<"Employee", 'String'>
    readonly company_id: FieldRef<"Employee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
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
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
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
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
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
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    region: string | null
    created_by: string | null
    created_date: Date | null
    modified_by: string | null
    modified_date: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    region: string | null
    created_by: string | null
    created_date: Date | null
    modified_by: string | null
    modified_date: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    region: number
    created_by: number
    created_date: number
    modified_by: number
    modified_date: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    region?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    region?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    region?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
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
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    region: string
    created_by: string | null
    created_date: Date
    modified_by: string | null
    modified_date: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
    employees?: boolean | Company$employeesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    region?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "region" | "created_by" | "created_date" | "modified_by" | "modified_date", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | Company$employeesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      region: string
      created_by: string | null
      created_date: Date
      modified_by: string | null
      modified_date: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends Company$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Company$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly region: FieldRef<"Company", 'String'>
    readonly created_by: FieldRef<"Company", 'String'>
    readonly created_date: FieldRef<"Company", 'DateTime'>
    readonly modified_by: FieldRef<"Company", 'String'>
    readonly modified_date: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
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
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
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
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
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
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.employees
   */
  export type Company$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetAvgAggregateOutputType = {
    quantity: number | null
    unit_value: number | null
    total_value: number | null
    income_generated: number | null
  }

  export type AssetSumAggregateOutputType = {
    quantity: number | null
    unit_value: number | null
    total_value: number | null
    income_generated: number | null
  }

  export type AssetMinAggregateOutputType = {
    id: string | null
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

  export type AssetMaxAggregateOutputType = {
    id: string | null
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

  export type AssetCountAggregateOutputType = {
    id: number
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


  export type AssetAvgAggregateInputType = {
    quantity?: true
    unit_value?: true
    total_value?: true
    income_generated?: true
  }

  export type AssetSumAggregateInputType = {
    quantity?: true
    unit_value?: true
    total_value?: true
    income_generated?: true
  }

  export type AssetMinAggregateInputType = {
    id?: true
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

  export type AssetMaxAggregateInputType = {
    id?: true
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

  export type AssetCountAggregateInputType = {
    id?: true
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

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetWhereUniqueInput
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
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithAggregationInput | AssetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _avg?: AssetAvgAggregateInputType
    _sum?: AssetSumAggregateInputType
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    id: string
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
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
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
    asset_type?: boolean | ConstantsDefaultArgs<ExtArgs>
    ownerships?: boolean | Asset$ownershipsArgs<ExtArgs>
    views?: boolean | Asset$viewsArgs<ExtArgs>
    bookmarks?: boolean | Asset$bookmarksArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
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
    asset_type?: boolean | ConstantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
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
    asset_type?: boolean | ConstantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectScalar = {
    id?: boolean
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

  export type AssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "asset_type_id" | "description" | "region" | "quantity" | "unit_of_measurement" | "unit_value" | "total_value" | "income_generated" | "valuation_method" | "valuation_date" | "source_platform" | "created_by" | "created_date" | "modified_by" | "modified_date", ExtArgs["result"]["asset"]>
  export type AssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset_type?: boolean | ConstantsDefaultArgs<ExtArgs>
    ownerships?: boolean | Asset$ownershipsArgs<ExtArgs>
    views?: boolean | Asset$viewsArgs<ExtArgs>
    bookmarks?: boolean | Asset$bookmarksArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset_type?: boolean | ConstantsDefaultArgs<ExtArgs>
  }
  export type AssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset_type?: boolean | ConstantsDefaultArgs<ExtArgs>
  }

  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {
      asset_type: Prisma.$ConstantsPayload<ExtArgs>
      ownerships: Prisma.$CandidateAssetOwnershipPayload<ExtArgs>[]
      views: Prisma.$ViewPayload<ExtArgs>[]
      bookmarks: Prisma.$BookmarkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
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
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }

  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetFindUniqueArgs>(args: SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetFindFirstArgs>(args?: SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetWithIdOnly = await prisma.asset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetFindManyArgs>(args?: SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
     */
    create<T extends AssetCreateArgs>(args: SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assets.
     * @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetCreateManyArgs>(args?: SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assets and returns the data saved in the database.
     * @param {AssetCreateManyAndReturnArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
     */
    delete<T extends AssetDeleteArgs>(args: SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetUpdateArgs>(args: SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetDeleteManyArgs>(args?: SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetUpdateManyArgs>(args: SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets and returns the data updated in the database.
     * @param {AssetUpdateManyAndReturnArgs} args - Arguments to update many Assets.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.updateManyAndReturn({
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
    updateManyAndReturn<T extends AssetUpdateManyAndReturnArgs>(args: SelectSubset<T, AssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
     */
    upsert<T extends AssetUpsertArgs>(args: SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
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
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asset model
   */
  readonly fields: AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset_type<T extends ConstantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConstantsDefaultArgs<ExtArgs>>): Prisma__ConstantsClient<$Result.GetResult<Prisma.$ConstantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ownerships<T extends Asset$ownershipsArgs<ExtArgs> = {}>(args?: Subset<T, Asset$ownershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateAssetOwnershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    views<T extends Asset$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Asset$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookmarks<T extends Asset$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, Asset$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Asset model
   */
  interface AssetFieldRefs {
    readonly id: FieldRef<"Asset", 'String'>
    readonly asset_type_id: FieldRef<"Asset", 'String'>
    readonly description: FieldRef<"Asset", 'String'>
    readonly region: FieldRef<"Asset", 'String'>
    readonly quantity: FieldRef<"Asset", 'Float'>
    readonly unit_of_measurement: FieldRef<"Asset", 'String'>
    readonly unit_value: FieldRef<"Asset", 'Float'>
    readonly total_value: FieldRef<"Asset", 'Float'>
    readonly income_generated: FieldRef<"Asset", 'Float'>
    readonly valuation_method: FieldRef<"Asset", 'String'>
    readonly valuation_date: FieldRef<"Asset", 'DateTime'>
    readonly source_platform: FieldRef<"Asset", 'String'>
    readonly created_by: FieldRef<"Asset", 'String'>
    readonly created_date: FieldRef<"Asset", 'DateTime'>
    readonly modified_by: FieldRef<"Asset", 'String'>
    readonly modified_date: FieldRef<"Asset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
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
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
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
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findMany
   */
  export type AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetWhereUniqueInput
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
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset create
   */
  export type AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to create a Asset.
     */
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }

  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asset createManyAndReturn
   */
  export type AssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asset update
   */
  export type AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to update a Asset.
     */
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
  }

  /**
   * Asset updateManyAndReturn
   */
  export type AssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asset upsert
   */
  export type AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }

  /**
   * Asset delete
   */
  export type AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter which Asset to delete.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to delete.
     */
    limit?: number
  }

  /**
   * Asset.ownerships
   */
  export type Asset$ownershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Asset.views
   */
  export type Asset$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    where?: ViewWhereInput
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    cursor?: ViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * Asset.bookmarks
   */
  export type Asset$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    cursor?: BookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Asset without action
   */
  export type AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
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
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateAssetOwnership"]>

  export type CandidateAssetOwnershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset_id?: boolean
    candidate_id?: boolean
    ownership_percentage?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateAssetOwnership"]>

  export type CandidateAssetOwnershipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset_id?: boolean
    candidate_id?: boolean
    ownership_percentage?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateAssetOwnership"]>

  export type CandidateAssetOwnershipSelectScalar = {
    id?: boolean
    asset_id?: boolean
    candidate_id?: boolean
    ownership_percentage?: boolean
  }

  export type CandidateAssetOwnershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "asset_id" | "candidate_id" | "ownership_percentage", ExtArgs["result"]["candidateAssetOwnership"]>
  export type CandidateAssetOwnershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }
  export type CandidateAssetOwnershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }
  export type CandidateAssetOwnershipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }

  export type $CandidateAssetOwnershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CandidateAssetOwnership"
    objects: {
      asset: Prisma.$AssetPayload<ExtArgs>
      candidate: Prisma.$CandidatePayload<ExtArgs>
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
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidate<T extends CandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateDefaultArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Model Candidate
   */

  export type AggregateCandidate = {
    _count: CandidateCountAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  export type CandidateMinAggregateOutputType = {
    id: string | null
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

  export type CandidateMaxAggregateOutputType = {
    id: string | null
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

  export type CandidateCountAggregateOutputType = {
    id: number
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


  export type CandidateMinAggregateInputType = {
    id?: true
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

  export type CandidateMaxAggregateInputType = {
    id?: true
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

  export type CandidateCountAggregateInputType = {
    id?: true
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

  export type CandidateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidate to aggregate.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateWhereUniqueInput
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
    _count?: true | CandidateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateMaxAggregateInputType
  }

  export type GetCandidateAggregateType<T extends CandidateAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidate[P]>
      : GetScalarType<T[P], AggregateCandidate[P]>
  }




  export type CandidateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithAggregationInput | CandidateOrderByWithAggregationInput[]
    by: CandidateScalarFieldEnum[] | CandidateScalarFieldEnum
    having?: CandidateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateCountAggregateInputType | true
    _min?: CandidateMinAggregateInputType
    _max?: CandidateMaxAggregateInputType
  }

  export type CandidateGroupByOutputType = {
    id: string
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
    _count: CandidateCountAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  type GetCandidateGroupByPayload<T extends CandidateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateGroupByOutputType[P]>
        }
      >
    >


  export type CandidateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
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
    asset_ownerships?: boolean | Candidate$asset_ownershipsArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
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
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
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
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectScalar = {
    id?: boolean
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

  export type CandidateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "region" | "phone_number" | "email" | "address" | "dob" | "country_name" | "created_by" | "created_date" | "modified_by" | "modified_date", ExtArgs["result"]["candidate"]>
  export type CandidateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset_ownerships?: boolean | Candidate$asset_ownershipsArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CandidateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CandidateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CandidatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Candidate"
    objects: {
      asset_ownerships: Prisma.$CandidateAssetOwnershipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
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
    }, ExtArgs["result"]["candidate"]>
    composites: {}
  }

  type CandidateGetPayload<S extends boolean | null | undefined | CandidateDefaultArgs> = $Result.GetResult<Prisma.$CandidatePayload, S>

  type CandidateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateCountAggregateInputType | true
    }

  export interface CandidateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Candidate'], meta: { name: 'Candidate' } }
    /**
     * Find zero or one Candidate that matches the filter.
     * @param {CandidateFindUniqueArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateFindUniqueArgs>(args: SelectSubset<T, CandidateFindUniqueArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateFindUniqueOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateFindFirstArgs>(args?: SelectSubset<T, CandidateFindFirstArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidates
     * const candidates = await prisma.candidate.findMany()
     * 
     * // Get first 10 Candidates
     * const candidates = await prisma.candidate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidateWithIdOnly = await prisma.candidate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidateFindManyArgs>(args?: SelectSubset<T, CandidateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidate.
     * @param {CandidateCreateArgs} args - Arguments to create a Candidate.
     * @example
     * // Create one Candidate
     * const Candidate = await prisma.candidate.create({
     *   data: {
     *     // ... data to create a Candidate
     *   }
     * })
     * 
     */
    create<T extends CandidateCreateArgs>(args: SelectSubset<T, CandidateCreateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidates.
     * @param {CandidateCreateManyArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateCreateManyArgs>(args?: SelectSubset<T, CandidateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidates and returns the data saved in the database.
     * @param {CandidateCreateManyAndReturnArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidates and only return the `id`
     * const candidateWithIdOnly = await prisma.candidate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidate.
     * @param {CandidateDeleteArgs} args - Arguments to delete one Candidate.
     * @example
     * // Delete one Candidate
     * const Candidate = await prisma.candidate.delete({
     *   where: {
     *     // ... filter to delete one Candidate
     *   }
     * })
     * 
     */
    delete<T extends CandidateDeleteArgs>(args: SelectSubset<T, CandidateDeleteArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidate.
     * @param {CandidateUpdateArgs} args - Arguments to update one Candidate.
     * @example
     * // Update one Candidate
     * const candidate = await prisma.candidate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateUpdateArgs>(args: SelectSubset<T, CandidateUpdateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidates.
     * @param {CandidateDeleteManyArgs} args - Arguments to filter Candidates to delete.
     * @example
     * // Delete a few Candidates
     * const { count } = await prisma.candidate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateDeleteManyArgs>(args?: SelectSubset<T, CandidateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateUpdateManyArgs>(args: SelectSubset<T, CandidateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates and returns the data updated in the database.
     * @param {CandidateUpdateManyAndReturnArgs} args - Arguments to update many Candidates.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidates and only return the `id`
     * const candidateWithIdOnly = await prisma.candidate.updateManyAndReturn({
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
    updateManyAndReturn<T extends CandidateUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidate.
     * @param {CandidateUpsertArgs} args - Arguments to update or create a Candidate.
     * @example
     * // Update or create a Candidate
     * const candidate = await prisma.candidate.upsert({
     *   create: {
     *     // ... data to create a Candidate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidate we want to update
     *   }
     * })
     */
    upsert<T extends CandidateUpsertArgs>(args: SelectSubset<T, CandidateUpsertArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateCountArgs} args - Arguments to filter Candidates to count.
     * @example
     * // Count the number of Candidates
     * const count = await prisma.candidate.count({
     *   where: {
     *     // ... the filter for the Candidates we want to count
     *   }
     * })
    **/
    count<T extends CandidateCountArgs>(
      args?: Subset<T, CandidateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CandidateAggregateArgs>(args: Subset<T, CandidateAggregateArgs>): Prisma.PrismaPromise<GetCandidateAggregateType<T>>

    /**
     * Group by Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateGroupByArgs} args - Group by arguments.
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
      T extends CandidateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateGroupByArgs['orderBy'] }
        : { orderBy?: CandidateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CandidateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Candidate model
   */
  readonly fields: CandidateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Candidate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset_ownerships<T extends Candidate$asset_ownershipsArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$asset_ownershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateAssetOwnershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Candidate model
   */
  interface CandidateFieldRefs {
    readonly id: FieldRef<"Candidate", 'String'>
    readonly name: FieldRef<"Candidate", 'String'>
    readonly region: FieldRef<"Candidate", 'String'>
    readonly phone_number: FieldRef<"Candidate", 'String'>
    readonly email: FieldRef<"Candidate", 'String'>
    readonly address: FieldRef<"Candidate", 'String'>
    readonly dob: FieldRef<"Candidate", 'DateTime'>
    readonly country_name: FieldRef<"Candidate", 'String'>
    readonly created_by: FieldRef<"Candidate", 'String'>
    readonly created_date: FieldRef<"Candidate", 'DateTime'>
    readonly modified_by: FieldRef<"Candidate", 'String'>
    readonly modified_date: FieldRef<"Candidate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Candidate findUnique
   */
  export type CandidateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findUniqueOrThrow
   */
  export type CandidateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findFirst
   */
  export type CandidateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
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
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findFirstOrThrow
   */
  export type CandidateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
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
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findMany
   */
  export type CandidateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidates to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Candidates.
     */
    cursor?: CandidateWhereUniqueInput
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
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate create
   */
  export type CandidateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to create a Candidate.
     */
    data: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
  }

  /**
   * Candidate createMany
   */
  export type CandidateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Candidate createManyAndReturn
   */
  export type CandidateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Candidate update
   */
  export type CandidateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to update a Candidate.
     */
    data: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
    /**
     * Choose, which Candidate to update.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate updateMany
   */
  export type CandidateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
  }

  /**
   * Candidate updateManyAndReturn
   */
  export type CandidateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
  }

  /**
   * Candidate upsert
   */
  export type CandidateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The filter to search for the Candidate to update in case it exists.
     */
    where: CandidateWhereUniqueInput
    /**
     * In case the Candidate found by the `where` argument doesn't exist, create a new Candidate with this data.
     */
    create: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
    /**
     * In case the Candidate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
  }

  /**
   * Candidate delete
   */
  export type CandidateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter which Candidate to delete.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate deleteMany
   */
  export type CandidateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidates to delete
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to delete.
     */
    limit?: number
  }

  /**
   * Candidate.asset_ownerships
   */
  export type Candidate$asset_ownershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Candidate without action
   */
  export type CandidateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
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
    id: string | null
    user_id: string | null
    action_type: string | null
    activity_time: Date | null
    details: string | null
    ip_address: string | null
    user_agent: string | null
    created_by: string | null
    created_date: Date | null
    modified_by: string | null
    modified_date: Date | null
  }

  export type LoggingMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    action_type: string | null
    activity_time: Date | null
    details: string | null
    ip_address: string | null
    user_agent: string | null
    created_by: string | null
    created_date: Date | null
    modified_by: string | null
    modified_date: Date | null
  }

  export type LoggingCountAggregateOutputType = {
    id: number
    user_id: number
    action_type: number
    activity_time: number
    details: number
    ip_address: number
    user_agent: number
    created_by: number
    created_date: number
    modified_by: number
    modified_date: number
    _all: number
  }


  export type LoggingMinAggregateInputType = {
    id?: true
    user_id?: true
    action_type?: true
    activity_time?: true
    details?: true
    ip_address?: true
    user_agent?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
  }

  export type LoggingMaxAggregateInputType = {
    id?: true
    user_id?: true
    action_type?: true
    activity_time?: true
    details?: true
    ip_address?: true
    user_agent?: true
    created_by?: true
    created_date?: true
    modified_by?: true
    modified_date?: true
  }

  export type LoggingCountAggregateInputType = {
    id?: true
    user_id?: true
    action_type?: true
    activity_time?: true
    details?: true
    ip_address?: true
    user_agent?: true
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
    id: string
    user_id: string
    action_type: string
    activity_time: Date
    details: string | null
    ip_address: string | null
    user_agent: string | null
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
    id?: boolean
    user_id?: boolean
    action_type?: boolean
    activity_time?: boolean
    details?: boolean
    ip_address?: boolean
    user_agent?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    action_definition?: boolean | ConstantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logging"]>

  export type LoggingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action_type?: boolean
    activity_time?: boolean
    details?: boolean
    ip_address?: boolean
    user_agent?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    action_definition?: boolean | ConstantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logging"]>

  export type LoggingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action_type?: boolean
    activity_time?: boolean
    details?: boolean
    ip_address?: boolean
    user_agent?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    action_definition?: boolean | ConstantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logging"]>

  export type LoggingSelectScalar = {
    id?: boolean
    user_id?: boolean
    action_type?: boolean
    activity_time?: boolean
    details?: boolean
    ip_address?: boolean
    user_agent?: boolean
    created_by?: boolean
    created_date?: boolean
    modified_by?: boolean
    modified_date?: boolean
  }

  export type LoggingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "action_type" | "activity_time" | "details" | "ip_address" | "user_agent" | "created_by" | "created_date" | "modified_by" | "modified_date", ExtArgs["result"]["logging"]>
  export type LoggingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    action_definition?: boolean | ConstantsDefaultArgs<ExtArgs>
  }
  export type LoggingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    action_definition?: boolean | ConstantsDefaultArgs<ExtArgs>
  }
  export type LoggingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    action_definition?: boolean | ConstantsDefaultArgs<ExtArgs>
  }

  export type $LoggingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Logging"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      action_definition: Prisma.$ConstantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      action_type: string
      activity_time: Date
      details: string | null
      ip_address: string | null
      user_agent: string | null
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
     * // Only select the `id`
     * const loggingWithIdOnly = await prisma.logging.findMany({ select: { id: true } })
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
     * // Create many Loggings and only return the `id`
     * const loggingWithIdOnly = await prisma.logging.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Loggings and only return the `id`
     * const loggingWithIdOnly = await prisma.logging.updateManyAndReturn({
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    action_definition<T extends ConstantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConstantsDefaultArgs<ExtArgs>>): Prisma__ConstantsClient<$Result.GetResult<Prisma.$ConstantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Logging", 'String'>
    readonly user_id: FieldRef<"Logging", 'String'>
    readonly action_type: FieldRef<"Logging", 'String'>
    readonly activity_time: FieldRef<"Logging", 'DateTime'>
    readonly details: FieldRef<"Logging", 'String'>
    readonly ip_address: FieldRef<"Logging", 'String'>
    readonly user_agent: FieldRef<"Logging", 'String'>
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
   * Model View
   */

  export type AggregateView = {
    _count: ViewCountAggregateOutputType | null
    _min: ViewMinAggregateOutputType | null
    _max: ViewMaxAggregateOutputType | null
  }

  export type ViewMinAggregateOutputType = {
    id: string | null
    asset_id: string | null
    viewed_by: string | null
    viewed_at: Date | null
  }

  export type ViewMaxAggregateOutputType = {
    id: string | null
    asset_id: string | null
    viewed_by: string | null
    viewed_at: Date | null
  }

  export type ViewCountAggregateOutputType = {
    id: number
    asset_id: number
    viewed_by: number
    viewed_at: number
    _all: number
  }


  export type ViewMinAggregateInputType = {
    id?: true
    asset_id?: true
    viewed_by?: true
    viewed_at?: true
  }

  export type ViewMaxAggregateInputType = {
    id?: true
    asset_id?: true
    viewed_by?: true
    viewed_at?: true
  }

  export type ViewCountAggregateInputType = {
    id?: true
    asset_id?: true
    viewed_by?: true
    viewed_at?: true
    _all?: true
  }

  export type ViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which View to aggregate.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewWhereUniqueInput
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
    _count?: true | ViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewMaxAggregateInputType
  }

  export type GetViewAggregateType<T extends ViewAggregateArgs> = {
        [P in keyof T & keyof AggregateView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateView[P]>
      : GetScalarType<T[P], AggregateView[P]>
  }




  export type ViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewWhereInput
    orderBy?: ViewOrderByWithAggregationInput | ViewOrderByWithAggregationInput[]
    by: ViewScalarFieldEnum[] | ViewScalarFieldEnum
    having?: ViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewCountAggregateInputType | true
    _min?: ViewMinAggregateInputType
    _max?: ViewMaxAggregateInputType
  }

  export type ViewGroupByOutputType = {
    id: string
    asset_id: string
    viewed_by: string
    viewed_at: Date
    _count: ViewCountAggregateOutputType | null
    _min: ViewMinAggregateOutputType | null
    _max: ViewMaxAggregateOutputType | null
  }

  type GetViewGroupByPayload<T extends ViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewGroupByOutputType[P]>
            : GetScalarType<T[P], ViewGroupByOutputType[P]>
        }
      >
    >


  export type ViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset_id?: boolean
    viewed_by?: boolean
    viewed_at?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["view"]>

  export type ViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset_id?: boolean
    viewed_by?: boolean
    viewed_at?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["view"]>

  export type ViewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset_id?: boolean
    viewed_by?: boolean
    viewed_at?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["view"]>

  export type ViewSelectScalar = {
    id?: boolean
    asset_id?: boolean
    viewed_by?: boolean
    viewed_at?: boolean
  }

  export type ViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "asset_id" | "viewed_by" | "viewed_at", ExtArgs["result"]["view"]>
  export type ViewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type ViewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type ViewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }

  export type $ViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "View"
    objects: {
      asset: Prisma.$AssetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      asset_id: string
      viewed_by: string
      viewed_at: Date
    }, ExtArgs["result"]["view"]>
    composites: {}
  }

  type ViewGetPayload<S extends boolean | null | undefined | ViewDefaultArgs> = $Result.GetResult<Prisma.$ViewPayload, S>

  type ViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewCountAggregateInputType | true
    }

  export interface ViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['View'], meta: { name: 'View' } }
    /**
     * Find zero or one View that matches the filter.
     * @param {ViewFindUniqueArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewFindUniqueArgs>(args: SelectSubset<T, ViewFindUniqueArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one View that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewFindUniqueOrThrowArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first View that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindFirstArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewFindFirstArgs>(args?: SelectSubset<T, ViewFindFirstArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first View that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindFirstOrThrowArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Views
     * const views = await prisma.view.findMany()
     * 
     * // Get first 10 Views
     * const views = await prisma.view.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewWithIdOnly = await prisma.view.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewFindManyArgs>(args?: SelectSubset<T, ViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a View.
     * @param {ViewCreateArgs} args - Arguments to create a View.
     * @example
     * // Create one View
     * const View = await prisma.view.create({
     *   data: {
     *     // ... data to create a View
     *   }
     * })
     * 
     */
    create<T extends ViewCreateArgs>(args: SelectSubset<T, ViewCreateArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Views.
     * @param {ViewCreateManyArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const view = await prisma.view.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewCreateManyArgs>(args?: SelectSubset<T, ViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Views and returns the data saved in the database.
     * @param {ViewCreateManyAndReturnArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const view = await prisma.view.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Views and only return the `id`
     * const viewWithIdOnly = await prisma.view.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a View.
     * @param {ViewDeleteArgs} args - Arguments to delete one View.
     * @example
     * // Delete one View
     * const View = await prisma.view.delete({
     *   where: {
     *     // ... filter to delete one View
     *   }
     * })
     * 
     */
    delete<T extends ViewDeleteArgs>(args: SelectSubset<T, ViewDeleteArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one View.
     * @param {ViewUpdateArgs} args - Arguments to update one View.
     * @example
     * // Update one View
     * const view = await prisma.view.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewUpdateArgs>(args: SelectSubset<T, ViewUpdateArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Views.
     * @param {ViewDeleteManyArgs} args - Arguments to filter Views to delete.
     * @example
     * // Delete a few Views
     * const { count } = await prisma.view.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewDeleteManyArgs>(args?: SelectSubset<T, ViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Views
     * const view = await prisma.view.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewUpdateManyArgs>(args: SelectSubset<T, ViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views and returns the data updated in the database.
     * @param {ViewUpdateManyAndReturnArgs} args - Arguments to update many Views.
     * @example
     * // Update many Views
     * const view = await prisma.view.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Views and only return the `id`
     * const viewWithIdOnly = await prisma.view.updateManyAndReturn({
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
    updateManyAndReturn<T extends ViewUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one View.
     * @param {ViewUpsertArgs} args - Arguments to update or create a View.
     * @example
     * // Update or create a View
     * const view = await prisma.view.upsert({
     *   create: {
     *     // ... data to create a View
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the View we want to update
     *   }
     * })
     */
    upsert<T extends ViewUpsertArgs>(args: SelectSubset<T, ViewUpsertArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewCountArgs} args - Arguments to filter Views to count.
     * @example
     * // Count the number of Views
     * const count = await prisma.view.count({
     *   where: {
     *     // ... the filter for the Views we want to count
     *   }
     * })
    **/
    count<T extends ViewCountArgs>(
      args?: Subset<T, ViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a View.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViewAggregateArgs>(args: Subset<T, ViewAggregateArgs>): Prisma.PrismaPromise<GetViewAggregateType<T>>

    /**
     * Group by View.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewGroupByArgs} args - Group by arguments.
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
      T extends ViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewGroupByArgs['orderBy'] }
        : { orderBy?: ViewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the View model
   */
  readonly fields: ViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for View.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the View model
   */
  interface ViewFieldRefs {
    readonly id: FieldRef<"View", 'String'>
    readonly asset_id: FieldRef<"View", 'String'>
    readonly viewed_by: FieldRef<"View", 'String'>
    readonly viewed_at: FieldRef<"View", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * View findUnique
   */
  export type ViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View findUniqueOrThrow
   */
  export type ViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View findFirst
   */
  export type ViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewWhereUniqueInput
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
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * View findFirstOrThrow
   */
  export type ViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewWhereUniqueInput
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
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * View findMany
   */
  export type ViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Views.
     */
    cursor?: ViewWhereUniqueInput
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
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * View create
   */
  export type ViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * The data needed to create a View.
     */
    data: XOR<ViewCreateInput, ViewUncheckedCreateInput>
  }

  /**
   * View createMany
   */
  export type ViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Views.
     */
    data: ViewCreateManyInput | ViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * View createManyAndReturn
   */
  export type ViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * The data used to create many Views.
     */
    data: ViewCreateManyInput | ViewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * View update
   */
  export type ViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * The data needed to update a View.
     */
    data: XOR<ViewUpdateInput, ViewUncheckedUpdateInput>
    /**
     * Choose, which View to update.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View updateMany
   */
  export type ViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Views.
     */
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewWhereInput
    /**
     * Limit how many Views to update.
     */
    limit?: number
  }

  /**
   * View updateManyAndReturn
   */
  export type ViewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * The data used to update Views.
     */
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewWhereInput
    /**
     * Limit how many Views to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * View upsert
   */
  export type ViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * The filter to search for the View to update in case it exists.
     */
    where: ViewWhereUniqueInput
    /**
     * In case the View found by the `where` argument doesn't exist, create a new View with this data.
     */
    create: XOR<ViewCreateInput, ViewUncheckedCreateInput>
    /**
     * In case the View was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewUpdateInput, ViewUncheckedUpdateInput>
  }

  /**
   * View delete
   */
  export type ViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter which View to delete.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View deleteMany
   */
  export type ViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Views to delete
     */
    where?: ViewWhereInput
    /**
     * Limit how many Views to delete.
     */
    limit?: number
  }

  /**
   * View without action
   */
  export type ViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
  }


  /**
   * Model Bookmark
   */

  export type AggregateBookmark = {
    _count: BookmarkCountAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  export type BookmarkMinAggregateOutputType = {
    id: string | null
    asset_id: string | null
    bookmarked_by: string | null
    bookmarked_at: Date | null
  }

  export type BookmarkMaxAggregateOutputType = {
    id: string | null
    asset_id: string | null
    bookmarked_by: string | null
    bookmarked_at: Date | null
  }

  export type BookmarkCountAggregateOutputType = {
    id: number
    asset_id: number
    bookmarked_by: number
    bookmarked_at: number
    _all: number
  }


  export type BookmarkMinAggregateInputType = {
    id?: true
    asset_id?: true
    bookmarked_by?: true
    bookmarked_at?: true
  }

  export type BookmarkMaxAggregateInputType = {
    id?: true
    asset_id?: true
    bookmarked_by?: true
    bookmarked_at?: true
  }

  export type BookmarkCountAggregateInputType = {
    id?: true
    asset_id?: true
    bookmarked_by?: true
    bookmarked_at?: true
    _all?: true
  }

  export type BookmarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmark to aggregate.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmarkWhereUniqueInput
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
    _count?: true | BookmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarkMaxAggregateInputType
  }

  export type GetBookmarkAggregateType<T extends BookmarkAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmark[P]>
      : GetScalarType<T[P], AggregateBookmark[P]>
  }




  export type BookmarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithAggregationInput | BookmarkOrderByWithAggregationInput[]
    by: BookmarkScalarFieldEnum[] | BookmarkScalarFieldEnum
    having?: BookmarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarkCountAggregateInputType | true
    _min?: BookmarkMinAggregateInputType
    _max?: BookmarkMaxAggregateInputType
  }

  export type BookmarkGroupByOutputType = {
    id: string
    asset_id: string
    bookmarked_by: string
    bookmarked_at: Date
    _count: BookmarkCountAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  type GetBookmarkGroupByPayload<T extends BookmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
        }
      >
    >


  export type BookmarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset_id?: boolean
    bookmarked_by?: boolean
    bookmarked_at?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset_id?: boolean
    bookmarked_by?: boolean
    bookmarked_at?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset_id?: boolean
    bookmarked_by?: boolean
    bookmarked_at?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectScalar = {
    id?: boolean
    asset_id?: boolean
    bookmarked_by?: boolean
    bookmarked_at?: boolean
  }

  export type BookmarkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "asset_id" | "bookmarked_by" | "bookmarked_at", ExtArgs["result"]["bookmark"]>
  export type BookmarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type BookmarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type BookmarkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }

  export type $BookmarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookmark"
    objects: {
      asset: Prisma.$AssetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      asset_id: string
      bookmarked_by: string
      bookmarked_at: Date
    }, ExtArgs["result"]["bookmark"]>
    composites: {}
  }

  type BookmarkGetPayload<S extends boolean | null | undefined | BookmarkDefaultArgs> = $Result.GetResult<Prisma.$BookmarkPayload, S>

  type BookmarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookmarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookmarkCountAggregateInputType | true
    }

  export interface BookmarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookmark'], meta: { name: 'Bookmark' } }
    /**
     * Find zero or one Bookmark that matches the filter.
     * @param {BookmarkFindUniqueArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookmarkFindUniqueArgs>(args: SelectSubset<T, BookmarkFindUniqueArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookmark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookmarkFindUniqueOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookmarkFindUniqueOrThrowArgs>(args: SelectSubset<T, BookmarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookmarkFindFirstArgs>(args?: SelectSubset<T, BookmarkFindFirstArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookmark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookmarkFindFirstOrThrowArgs>(args?: SelectSubset<T, BookmarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookmarks
     * const bookmarks = await prisma.bookmark.findMany()
     * 
     * // Get first 10 Bookmarks
     * const bookmarks = await prisma.bookmark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookmarkFindManyArgs>(args?: SelectSubset<T, BookmarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookmark.
     * @param {BookmarkCreateArgs} args - Arguments to create a Bookmark.
     * @example
     * // Create one Bookmark
     * const Bookmark = await prisma.bookmark.create({
     *   data: {
     *     // ... data to create a Bookmark
     *   }
     * })
     * 
     */
    create<T extends BookmarkCreateArgs>(args: SelectSubset<T, BookmarkCreateArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookmarks.
     * @param {BookmarkCreateManyArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmark = await prisma.bookmark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookmarkCreateManyArgs>(args?: SelectSubset<T, BookmarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookmarks and returns the data saved in the database.
     * @param {BookmarkCreateManyAndReturnArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmark = await prisma.bookmark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookmarks and only return the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookmarkCreateManyAndReturnArgs>(args?: SelectSubset<T, BookmarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookmark.
     * @param {BookmarkDeleteArgs} args - Arguments to delete one Bookmark.
     * @example
     * // Delete one Bookmark
     * const Bookmark = await prisma.bookmark.delete({
     *   where: {
     *     // ... filter to delete one Bookmark
     *   }
     * })
     * 
     */
    delete<T extends BookmarkDeleteArgs>(args: SelectSubset<T, BookmarkDeleteArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookmark.
     * @param {BookmarkUpdateArgs} args - Arguments to update one Bookmark.
     * @example
     * // Update one Bookmark
     * const bookmark = await prisma.bookmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookmarkUpdateArgs>(args: SelectSubset<T, BookmarkUpdateArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookmarks.
     * @param {BookmarkDeleteManyArgs} args - Arguments to filter Bookmarks to delete.
     * @example
     * // Delete a few Bookmarks
     * const { count } = await prisma.bookmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookmarkDeleteManyArgs>(args?: SelectSubset<T, BookmarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookmarks
     * const bookmark = await prisma.bookmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookmarkUpdateManyArgs>(args: SelectSubset<T, BookmarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks and returns the data updated in the database.
     * @param {BookmarkUpdateManyAndReturnArgs} args - Arguments to update many Bookmarks.
     * @example
     * // Update many Bookmarks
     * const bookmark = await prisma.bookmark.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookmarks and only return the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookmarkUpdateManyAndReturnArgs>(args: SelectSubset<T, BookmarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookmark.
     * @param {BookmarkUpsertArgs} args - Arguments to update or create a Bookmark.
     * @example
     * // Update or create a Bookmark
     * const bookmark = await prisma.bookmark.upsert({
     *   create: {
     *     // ... data to create a Bookmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookmark we want to update
     *   }
     * })
     */
    upsert<T extends BookmarkUpsertArgs>(args: SelectSubset<T, BookmarkUpsertArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkCountArgs} args - Arguments to filter Bookmarks to count.
     * @example
     * // Count the number of Bookmarks
     * const count = await prisma.bookmark.count({
     *   where: {
     *     // ... the filter for the Bookmarks we want to count
     *   }
     * })
    **/
    count<T extends BookmarkCountArgs>(
      args?: Subset<T, BookmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookmarkAggregateArgs>(args: Subset<T, BookmarkAggregateArgs>): Prisma.PrismaPromise<GetBookmarkAggregateType<T>>

    /**
     * Group by Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkGroupByArgs} args - Group by arguments.
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
      T extends BookmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmarkGroupByArgs['orderBy'] }
        : { orderBy?: BookmarkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookmark model
   */
  readonly fields: BookmarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookmarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bookmark model
   */
  interface BookmarkFieldRefs {
    readonly id: FieldRef<"Bookmark", 'String'>
    readonly asset_id: FieldRef<"Bookmark", 'String'>
    readonly bookmarked_by: FieldRef<"Bookmark", 'String'>
    readonly bookmarked_at: FieldRef<"Bookmark", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bookmark findUnique
   */
  export type BookmarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark findUniqueOrThrow
   */
  export type BookmarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark findFirst
   */
  export type BookmarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
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
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark findFirstOrThrow
   */
  export type BookmarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
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
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark findMany
   */
  export type BookmarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
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
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark create
   */
  export type BookmarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookmark.
     */
    data: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
  }

  /**
   * Bookmark createMany
   */
  export type BookmarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarkCreateManyInput | BookmarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bookmark createManyAndReturn
   */
  export type BookmarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarkCreateManyInput | BookmarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookmark update
   */
  export type BookmarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookmark.
     */
    data: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
    /**
     * Choose, which Bookmark to update.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark updateMany
   */
  export type BookmarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarkWhereInput
    /**
     * Limit how many Bookmarks to update.
     */
    limit?: number
  }

  /**
   * Bookmark updateManyAndReturn
   */
  export type BookmarkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarkWhereInput
    /**
     * Limit how many Bookmarks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookmark upsert
   */
  export type BookmarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookmark to update in case it exists.
     */
    where: BookmarkWhereUniqueInput
    /**
     * In case the Bookmark found by the `where` argument doesn't exist, create a new Bookmark with this data.
     */
    create: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
    /**
     * In case the Bookmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
  }

  /**
   * Bookmark delete
   */
  export type BookmarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter which Bookmark to delete.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark deleteMany
   */
  export type BookmarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmarks to delete
     */
    where?: BookmarkWhereInput
    /**
     * Limit how many Bookmarks to delete.
     */
    limit?: number
  }

  /**
   * Bookmark without action
   */
  export type BookmarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
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
      assets: Prisma.$AssetPayload<ExtArgs>[]
      Users: Prisma.$UserPayload<ExtArgs>[]
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
    assets<T extends Constants$assetsArgs<ExtArgs> = {}>(args?: Subset<T, Constants$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    cursor?: AssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
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
    email: 'email',
    email_verified: 'email_verified',
    password: 'password',
    image: 'image',
    phone_number: 'phone_number',
    region: 'region',
    role: 'role',
    mfa_enabled: 'mfa_enabled',
    mfa_method: 'mfa_method',
    mfa_secret: 'mfa_secret',
    last_login: 'last_login',
    created_by: 'created_by',
    created_date: 'created_date',
    modified_by: 'modified_by',
    modified_date: 'modified_date'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    type: 'type',
    provider: 'provider',
    provider_account_id: 'provider_account_id',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    session_token: 'session_token',
    user_id: 'user_id',
    expires: 'expires',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const WebAuthnDeviceScalarFieldEnum: {
    credential_id: 'credential_id',
    user_id: 'user_id',
    public_key: 'public_key',
    counter: 'counter',
    device_type: 'device_type',
    backed_up: 'backed_up',
    transports: 'transports',
    friendly_name: 'friendly_name',
    last_used: 'last_used',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WebAuthnDeviceScalarFieldEnum = (typeof WebAuthnDeviceScalarFieldEnum)[keyof typeof WebAuthnDeviceScalarFieldEnum]


  export const OneTimeCodeScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    code: 'code',
    type: 'type',
    used: 'used',
    expires: 'expires',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OneTimeCodeScalarFieldEnum = (typeof OneTimeCodeScalarFieldEnum)[keyof typeof OneTimeCodeScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    user_id: 'user_id',
    company_id: 'company_id'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    region: 'region',
    created_by: 'created_by',
    created_date: 'created_date',
    modified_by: 'modified_by',
    modified_date: 'modified_date'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const AssetScalarFieldEnum: {
    id: 'id',
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

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const CandidateAssetOwnershipScalarFieldEnum: {
    id: 'id',
    asset_id: 'asset_id',
    candidate_id: 'candidate_id',
    ownership_percentage: 'ownership_percentage'
  };

  export type CandidateAssetOwnershipScalarFieldEnum = (typeof CandidateAssetOwnershipScalarFieldEnum)[keyof typeof CandidateAssetOwnershipScalarFieldEnum]


  export const CandidateScalarFieldEnum: {
    id: 'id',
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

  export type CandidateScalarFieldEnum = (typeof CandidateScalarFieldEnum)[keyof typeof CandidateScalarFieldEnum]


  export const LoggingScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    action_type: 'action_type',
    activity_time: 'activity_time',
    details: 'details',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    created_by: 'created_by',
    created_date: 'created_date',
    modified_by: 'modified_by',
    modified_date: 'modified_date'
  };

  export type LoggingScalarFieldEnum = (typeof LoggingScalarFieldEnum)[keyof typeof LoggingScalarFieldEnum]


  export const ViewScalarFieldEnum: {
    id: 'id',
    asset_id: 'asset_id',
    viewed_by: 'viewed_by',
    viewed_at: 'viewed_at'
  };

  export type ViewScalarFieldEnum = (typeof ViewScalarFieldEnum)[keyof typeof ViewScalarFieldEnum]


  export const BookmarkScalarFieldEnum: {
    id: 'id',
    asset_id: 'asset_id',
    bookmarked_by: 'bookmarked_by',
    bookmarked_at: 'bookmarked_at'
  };

  export type BookmarkScalarFieldEnum = (typeof BookmarkScalarFieldEnum)[keyof typeof BookmarkScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    email_verified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    phone_number?: StringNullableFilter<"User"> | string | null
    region?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    mfa_enabled?: BoolFilter<"User"> | boolean
    mfa_method?: StringNullableFilter<"User"> | string | null
    mfa_secret?: StringNullableFilter<"User"> | string | null
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    created_by?: StringNullableFilter<"User"> | string | null
    created_date?: DateTimeFilter<"User"> | Date | string
    modified_by?: StringNullableFilter<"User"> | string | null
    modified_date?: DateTimeNullableFilter<"User"> | Date | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    web_authn_devices?: WebAuthnDeviceListRelationFilter
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    userlogs?: LoggingListRelationFilter
    role_definition?: XOR<ConstantsScalarRelationFilter, ConstantsWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrderInput | SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    region?: SortOrder
    role?: SortOrder
    mfa_enabled?: SortOrder
    mfa_method?: SortOrderInput | SortOrder
    mfa_secret?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrder
    modified_by?: SortOrderInput | SortOrder
    modified_date?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    web_authn_devices?: WebAuthnDeviceOrderByRelationAggregateInput
    employee?: EmployeeOrderByWithRelationInput
    userlogs?: LoggingOrderByRelationAggregateInput
    role_definition?: ConstantsOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email_verified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    phone_number?: StringNullableFilter<"User"> | string | null
    region?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    mfa_enabled?: BoolFilter<"User"> | boolean
    mfa_method?: StringNullableFilter<"User"> | string | null
    mfa_secret?: StringNullableFilter<"User"> | string | null
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    created_by?: StringNullableFilter<"User"> | string | null
    created_date?: DateTimeFilter<"User"> | Date | string
    modified_by?: StringNullableFilter<"User"> | string | null
    modified_date?: DateTimeNullableFilter<"User"> | Date | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    web_authn_devices?: WebAuthnDeviceListRelationFilter
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    userlogs?: LoggingListRelationFilter
    role_definition?: XOR<ConstantsScalarRelationFilter, ConstantsWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrderInput | SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    region?: SortOrder
    role?: SortOrder
    mfa_enabled?: SortOrder
    mfa_method?: SortOrderInput | SortOrder
    mfa_secret?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrder
    modified_by?: SortOrderInput | SortOrder
    modified_date?: SortOrderInput | SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    email_verified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"User"> | string | null
    region?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    mfa_enabled?: BoolWithAggregatesFilter<"User"> | boolean
    mfa_method?: StringNullableWithAggregatesFilter<"User"> | string | null
    mfa_secret?: StringNullableWithAggregatesFilter<"User"> | string | null
    last_login?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_date?: DateTimeWithAggregatesFilter<"User"> | Date | string
    modified_by?: StringNullableWithAggregatesFilter<"User"> | string | null
    modified_date?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    user_id?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    provider_account_id?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    created_at?: DateTimeFilter<"Account"> | Date | string
    updated_at?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    provider_account_id?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_provider_account_id?: AccountProviderProvider_account_idCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    user_id?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    provider_account_id?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    created_at?: DateTimeFilter<"Account"> | Date | string
    updated_at?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_provider_account_id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    provider_account_id?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    user_id?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    provider_account_id?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    session_token?: StringFilter<"Session"> | string
    user_id?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    created_at?: DateTimeFilter<"Session"> | Date | string
    updated_at?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    session_token?: SortOrder
    user_id?: SortOrder
    expires?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    session_token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    user_id?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    created_at?: DateTimeFilter<"Session"> | Date | string
    updated_at?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "session_token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    session_token?: SortOrder
    user_id?: SortOrder
    expires?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    session_token?: StringWithAggregatesFilter<"Session"> | string
    user_id?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type WebAuthnDeviceWhereInput = {
    AND?: WebAuthnDeviceWhereInput | WebAuthnDeviceWhereInput[]
    OR?: WebAuthnDeviceWhereInput[]
    NOT?: WebAuthnDeviceWhereInput | WebAuthnDeviceWhereInput[]
    credential_id?: StringFilter<"WebAuthnDevice"> | string
    user_id?: StringFilter<"WebAuthnDevice"> | string
    public_key?: StringFilter<"WebAuthnDevice"> | string
    counter?: IntFilter<"WebAuthnDevice"> | number
    device_type?: StringFilter<"WebAuthnDevice"> | string
    backed_up?: BoolFilter<"WebAuthnDevice"> | boolean
    transports?: StringNullableFilter<"WebAuthnDevice"> | string | null
    friendly_name?: StringNullableFilter<"WebAuthnDevice"> | string | null
    last_used?: DateTimeNullableFilter<"WebAuthnDevice"> | Date | string | null
    created_at?: DateTimeFilter<"WebAuthnDevice"> | Date | string
    updated_at?: DateTimeFilter<"WebAuthnDevice"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WebAuthnDeviceOrderByWithRelationInput = {
    credential_id?: SortOrder
    user_id?: SortOrder
    public_key?: SortOrder
    counter?: SortOrder
    device_type?: SortOrder
    backed_up?: SortOrder
    transports?: SortOrderInput | SortOrder
    friendly_name?: SortOrderInput | SortOrder
    last_used?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WebAuthnDeviceWhereUniqueInput = Prisma.AtLeast<{
    credential_id?: string
    AND?: WebAuthnDeviceWhereInput | WebAuthnDeviceWhereInput[]
    OR?: WebAuthnDeviceWhereInput[]
    NOT?: WebAuthnDeviceWhereInput | WebAuthnDeviceWhereInput[]
    user_id?: StringFilter<"WebAuthnDevice"> | string
    public_key?: StringFilter<"WebAuthnDevice"> | string
    counter?: IntFilter<"WebAuthnDevice"> | number
    device_type?: StringFilter<"WebAuthnDevice"> | string
    backed_up?: BoolFilter<"WebAuthnDevice"> | boolean
    transports?: StringNullableFilter<"WebAuthnDevice"> | string | null
    friendly_name?: StringNullableFilter<"WebAuthnDevice"> | string | null
    last_used?: DateTimeNullableFilter<"WebAuthnDevice"> | Date | string | null
    created_at?: DateTimeFilter<"WebAuthnDevice"> | Date | string
    updated_at?: DateTimeFilter<"WebAuthnDevice"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "credential_id">

  export type WebAuthnDeviceOrderByWithAggregationInput = {
    credential_id?: SortOrder
    user_id?: SortOrder
    public_key?: SortOrder
    counter?: SortOrder
    device_type?: SortOrder
    backed_up?: SortOrder
    transports?: SortOrderInput | SortOrder
    friendly_name?: SortOrderInput | SortOrder
    last_used?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: WebAuthnDeviceCountOrderByAggregateInput
    _avg?: WebAuthnDeviceAvgOrderByAggregateInput
    _max?: WebAuthnDeviceMaxOrderByAggregateInput
    _min?: WebAuthnDeviceMinOrderByAggregateInput
    _sum?: WebAuthnDeviceSumOrderByAggregateInput
  }

  export type WebAuthnDeviceScalarWhereWithAggregatesInput = {
    AND?: WebAuthnDeviceScalarWhereWithAggregatesInput | WebAuthnDeviceScalarWhereWithAggregatesInput[]
    OR?: WebAuthnDeviceScalarWhereWithAggregatesInput[]
    NOT?: WebAuthnDeviceScalarWhereWithAggregatesInput | WebAuthnDeviceScalarWhereWithAggregatesInput[]
    credential_id?: StringWithAggregatesFilter<"WebAuthnDevice"> | string
    user_id?: StringWithAggregatesFilter<"WebAuthnDevice"> | string
    public_key?: StringWithAggregatesFilter<"WebAuthnDevice"> | string
    counter?: IntWithAggregatesFilter<"WebAuthnDevice"> | number
    device_type?: StringWithAggregatesFilter<"WebAuthnDevice"> | string
    backed_up?: BoolWithAggregatesFilter<"WebAuthnDevice"> | boolean
    transports?: StringNullableWithAggregatesFilter<"WebAuthnDevice"> | string | null
    friendly_name?: StringNullableWithAggregatesFilter<"WebAuthnDevice"> | string | null
    last_used?: DateTimeNullableWithAggregatesFilter<"WebAuthnDevice"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"WebAuthnDevice"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"WebAuthnDevice"> | Date | string
  }

  export type OneTimeCodeWhereInput = {
    AND?: OneTimeCodeWhereInput | OneTimeCodeWhereInput[]
    OR?: OneTimeCodeWhereInput[]
    NOT?: OneTimeCodeWhereInput | OneTimeCodeWhereInput[]
    id?: StringFilter<"OneTimeCode"> | string
    user_id?: StringFilter<"OneTimeCode"> | string
    code?: StringFilter<"OneTimeCode"> | string
    type?: StringFilter<"OneTimeCode"> | string
    used?: BoolFilter<"OneTimeCode"> | boolean
    expires?: DateTimeFilter<"OneTimeCode"> | Date | string
    created_at?: DateTimeFilter<"OneTimeCode"> | Date | string
    updated_at?: DateTimeFilter<"OneTimeCode"> | Date | string
  }

  export type OneTimeCodeOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    used?: SortOrder
    expires?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OneTimeCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OneTimeCodeWhereInput | OneTimeCodeWhereInput[]
    OR?: OneTimeCodeWhereInput[]
    NOT?: OneTimeCodeWhereInput | OneTimeCodeWhereInput[]
    user_id?: StringFilter<"OneTimeCode"> | string
    code?: StringFilter<"OneTimeCode"> | string
    type?: StringFilter<"OneTimeCode"> | string
    used?: BoolFilter<"OneTimeCode"> | boolean
    expires?: DateTimeFilter<"OneTimeCode"> | Date | string
    created_at?: DateTimeFilter<"OneTimeCode"> | Date | string
    updated_at?: DateTimeFilter<"OneTimeCode"> | Date | string
  }, "id">

  export type OneTimeCodeOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    used?: SortOrder
    expires?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: OneTimeCodeCountOrderByAggregateInput
    _max?: OneTimeCodeMaxOrderByAggregateInput
    _min?: OneTimeCodeMinOrderByAggregateInput
  }

  export type OneTimeCodeScalarWhereWithAggregatesInput = {
    AND?: OneTimeCodeScalarWhereWithAggregatesInput | OneTimeCodeScalarWhereWithAggregatesInput[]
    OR?: OneTimeCodeScalarWhereWithAggregatesInput[]
    NOT?: OneTimeCodeScalarWhereWithAggregatesInput | OneTimeCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OneTimeCode"> | string
    user_id?: StringWithAggregatesFilter<"OneTimeCode"> | string
    code?: StringWithAggregatesFilter<"OneTimeCode"> | string
    type?: StringWithAggregatesFilter<"OneTimeCode"> | string
    used?: BoolWithAggregatesFilter<"OneTimeCode"> | boolean
    expires?: DateTimeWithAggregatesFilter<"OneTimeCode"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"OneTimeCode"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"OneTimeCode"> | Date | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    user_id?: StringFilter<"Employee"> | string
    company_id?: StringFilter<"Employee"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type EmployeeOrderByWithRelationInput = {
    user_id?: SortOrder
    company_id?: SortOrder
    user?: UserOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    company_id?: StringFilter<"Employee"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "user_id">

  export type EmployeeOrderByWithAggregationInput = {
    user_id?: SortOrder
    company_id?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"Employee"> | string
    company_id?: StringWithAggregatesFilter<"Employee"> | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    region?: StringFilter<"Company"> | string
    created_by?: StringNullableFilter<"Company"> | string | null
    created_date?: DateTimeFilter<"Company"> | Date | string
    modified_by?: StringNullableFilter<"Company"> | string | null
    modified_date?: DateTimeFilter<"Company"> | Date | string
    employees?: EmployeeListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrder
    modified_by?: SortOrderInput | SortOrder
    modified_date?: SortOrder
    employees?: EmployeeOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    region?: StringFilter<"Company"> | string
    created_by?: StringNullableFilter<"Company"> | string | null
    created_date?: DateTimeFilter<"Company"> | Date | string
    modified_by?: StringNullableFilter<"Company"> | string | null
    modified_date?: DateTimeFilter<"Company"> | Date | string
    employees?: EmployeeListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrder
    modified_by?: SortOrderInput | SortOrder
    modified_date?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    region?: StringWithAggregatesFilter<"Company"> | string
    created_by?: StringNullableWithAggregatesFilter<"Company"> | string | null
    created_date?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    modified_by?: StringNullableWithAggregatesFilter<"Company"> | string | null
    modified_date?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    id?: StringFilter<"Asset"> | string
    asset_type_id?: StringFilter<"Asset"> | string
    description?: StringNullableFilter<"Asset"> | string | null
    region?: StringNullableFilter<"Asset"> | string | null
    quantity?: FloatNullableFilter<"Asset"> | number | null
    unit_of_measurement?: StringNullableFilter<"Asset"> | string | null
    unit_value?: FloatNullableFilter<"Asset"> | number | null
    total_value?: FloatNullableFilter<"Asset"> | number | null
    income_generated?: FloatNullableFilter<"Asset"> | number | null
    valuation_method?: StringFilter<"Asset"> | string
    valuation_date?: DateTimeFilter<"Asset"> | Date | string
    source_platform?: StringNullableFilter<"Asset"> | string | null
    created_by?: StringNullableFilter<"Asset"> | string | null
    created_date?: DateTimeFilter<"Asset"> | Date | string
    modified_by?: StringNullableFilter<"Asset"> | string | null
    modified_date?: DateTimeFilter<"Asset"> | Date | string
    asset_type?: XOR<ConstantsScalarRelationFilter, ConstantsWhereInput>
    ownerships?: CandidateAssetOwnershipListRelationFilter
    views?: ViewListRelationFilter
    bookmarks?: BookmarkListRelationFilter
  }

  export type AssetOrderByWithRelationInput = {
    id?: SortOrder
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
    asset_type?: ConstantsOrderByWithRelationInput
    ownerships?: CandidateAssetOwnershipOrderByRelationAggregateInput
    views?: ViewOrderByRelationAggregateInput
    bookmarks?: BookmarkOrderByRelationAggregateInput
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    asset_type_id?: StringFilter<"Asset"> | string
    description?: StringNullableFilter<"Asset"> | string | null
    region?: StringNullableFilter<"Asset"> | string | null
    quantity?: FloatNullableFilter<"Asset"> | number | null
    unit_of_measurement?: StringNullableFilter<"Asset"> | string | null
    unit_value?: FloatNullableFilter<"Asset"> | number | null
    total_value?: FloatNullableFilter<"Asset"> | number | null
    income_generated?: FloatNullableFilter<"Asset"> | number | null
    valuation_method?: StringFilter<"Asset"> | string
    valuation_date?: DateTimeFilter<"Asset"> | Date | string
    source_platform?: StringNullableFilter<"Asset"> | string | null
    created_by?: StringNullableFilter<"Asset"> | string | null
    created_date?: DateTimeFilter<"Asset"> | Date | string
    modified_by?: StringNullableFilter<"Asset"> | string | null
    modified_date?: DateTimeFilter<"Asset"> | Date | string
    asset_type?: XOR<ConstantsScalarRelationFilter, ConstantsWhereInput>
    ownerships?: CandidateAssetOwnershipListRelationFilter
    views?: ViewListRelationFilter
    bookmarks?: BookmarkListRelationFilter
  }, "id">

  export type AssetOrderByWithAggregationInput = {
    id?: SortOrder
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
    _count?: AssetCountOrderByAggregateInput
    _avg?: AssetAvgOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
    _sum?: AssetSumOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Asset"> | string
    asset_type_id?: StringWithAggregatesFilter<"Asset"> | string
    description?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    region?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    quantity?: FloatNullableWithAggregatesFilter<"Asset"> | number | null
    unit_of_measurement?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    unit_value?: FloatNullableWithAggregatesFilter<"Asset"> | number | null
    total_value?: FloatNullableWithAggregatesFilter<"Asset"> | number | null
    income_generated?: FloatNullableWithAggregatesFilter<"Asset"> | number | null
    valuation_method?: StringWithAggregatesFilter<"Asset"> | string
    valuation_date?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    source_platform?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    created_by?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    created_date?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    modified_by?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    modified_date?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
  }

  export type CandidateAssetOwnershipWhereInput = {
    AND?: CandidateAssetOwnershipWhereInput | CandidateAssetOwnershipWhereInput[]
    OR?: CandidateAssetOwnershipWhereInput[]
    NOT?: CandidateAssetOwnershipWhereInput | CandidateAssetOwnershipWhereInput[]
    id?: StringFilter<"CandidateAssetOwnership"> | string
    asset_id?: StringFilter<"CandidateAssetOwnership"> | string
    candidate_id?: StringFilter<"CandidateAssetOwnership"> | string
    ownership_percentage?: FloatFilter<"CandidateAssetOwnership"> | number
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
  }

  export type CandidateAssetOwnershipOrderByWithRelationInput = {
    id?: SortOrder
    asset_id?: SortOrder
    candidate_id?: SortOrder
    ownership_percentage?: SortOrder
    asset?: AssetOrderByWithRelationInput
    candidate?: CandidateOrderByWithRelationInput
  }

  export type CandidateAssetOwnershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CandidateAssetOwnershipWhereInput | CandidateAssetOwnershipWhereInput[]
    OR?: CandidateAssetOwnershipWhereInput[]
    NOT?: CandidateAssetOwnershipWhereInput | CandidateAssetOwnershipWhereInput[]
    asset_id?: StringFilter<"CandidateAssetOwnership"> | string
    candidate_id?: StringFilter<"CandidateAssetOwnership"> | string
    ownership_percentage?: FloatFilter<"CandidateAssetOwnership"> | number
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
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

  export type CandidateWhereInput = {
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    id?: StringFilter<"Candidate"> | string
    name?: StringFilter<"Candidate"> | string
    region?: StringFilter<"Candidate"> | string
    phone_number?: StringFilter<"Candidate"> | string
    email?: StringFilter<"Candidate"> | string
    address?: StringFilter<"Candidate"> | string
    dob?: DateTimeFilter<"Candidate"> | Date | string
    country_name?: StringFilter<"Candidate"> | string
    created_by?: StringNullableFilter<"Candidate"> | string | null
    created_date?: DateTimeFilter<"Candidate"> | Date | string
    modified_by?: StringNullableFilter<"Candidate"> | string | null
    modified_date?: DateTimeFilter<"Candidate"> | Date | string
    asset_ownerships?: CandidateAssetOwnershipListRelationFilter
  }

  export type CandidateOrderByWithRelationInput = {
    id?: SortOrder
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
    asset_ownerships?: CandidateAssetOwnershipOrderByRelationAggregateInput
  }

  export type CandidateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    name?: StringFilter<"Candidate"> | string
    region?: StringFilter<"Candidate"> | string
    phone_number?: StringFilter<"Candidate"> | string
    email?: StringFilter<"Candidate"> | string
    address?: StringFilter<"Candidate"> | string
    dob?: DateTimeFilter<"Candidate"> | Date | string
    country_name?: StringFilter<"Candidate"> | string
    created_by?: StringNullableFilter<"Candidate"> | string | null
    created_date?: DateTimeFilter<"Candidate"> | Date | string
    modified_by?: StringNullableFilter<"Candidate"> | string | null
    modified_date?: DateTimeFilter<"Candidate"> | Date | string
    asset_ownerships?: CandidateAssetOwnershipListRelationFilter
  }, "id">

  export type CandidateOrderByWithAggregationInput = {
    id?: SortOrder
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
    _count?: CandidateCountOrderByAggregateInput
    _max?: CandidateMaxOrderByAggregateInput
    _min?: CandidateMinOrderByAggregateInput
  }

  export type CandidateScalarWhereWithAggregatesInput = {
    AND?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    OR?: CandidateScalarWhereWithAggregatesInput[]
    NOT?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Candidate"> | string
    name?: StringWithAggregatesFilter<"Candidate"> | string
    region?: StringWithAggregatesFilter<"Candidate"> | string
    phone_number?: StringWithAggregatesFilter<"Candidate"> | string
    email?: StringWithAggregatesFilter<"Candidate"> | string
    address?: StringWithAggregatesFilter<"Candidate"> | string
    dob?: DateTimeWithAggregatesFilter<"Candidate"> | Date | string
    country_name?: StringWithAggregatesFilter<"Candidate"> | string
    created_by?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    created_date?: DateTimeWithAggregatesFilter<"Candidate"> | Date | string
    modified_by?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    modified_date?: DateTimeWithAggregatesFilter<"Candidate"> | Date | string
  }

  export type LoggingWhereInput = {
    AND?: LoggingWhereInput | LoggingWhereInput[]
    OR?: LoggingWhereInput[]
    NOT?: LoggingWhereInput | LoggingWhereInput[]
    id?: StringFilter<"Logging"> | string
    user_id?: StringFilter<"Logging"> | string
    action_type?: StringFilter<"Logging"> | string
    activity_time?: DateTimeFilter<"Logging"> | Date | string
    details?: StringNullableFilter<"Logging"> | string | null
    ip_address?: StringNullableFilter<"Logging"> | string | null
    user_agent?: StringNullableFilter<"Logging"> | string | null
    created_by?: StringNullableFilter<"Logging"> | string | null
    created_date?: DateTimeFilter<"Logging"> | Date | string
    modified_by?: StringNullableFilter<"Logging"> | string | null
    modified_date?: DateTimeFilter<"Logging"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    action_definition?: XOR<ConstantsScalarRelationFilter, ConstantsWhereInput>
  }

  export type LoggingOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    action_type?: SortOrder
    activity_time?: SortOrder
    details?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrder
    modified_by?: SortOrderInput | SortOrder
    modified_date?: SortOrder
    user?: UserOrderByWithRelationInput
    action_definition?: ConstantsOrderByWithRelationInput
  }

  export type LoggingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoggingWhereInput | LoggingWhereInput[]
    OR?: LoggingWhereInput[]
    NOT?: LoggingWhereInput | LoggingWhereInput[]
    user_id?: StringFilter<"Logging"> | string
    action_type?: StringFilter<"Logging"> | string
    activity_time?: DateTimeFilter<"Logging"> | Date | string
    details?: StringNullableFilter<"Logging"> | string | null
    ip_address?: StringNullableFilter<"Logging"> | string | null
    user_agent?: StringNullableFilter<"Logging"> | string | null
    created_by?: StringNullableFilter<"Logging"> | string | null
    created_date?: DateTimeFilter<"Logging"> | Date | string
    modified_by?: StringNullableFilter<"Logging"> | string | null
    modified_date?: DateTimeFilter<"Logging"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    action_definition?: XOR<ConstantsScalarRelationFilter, ConstantsWhereInput>
  }, "id">

  export type LoggingOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    action_type?: SortOrder
    activity_time?: SortOrder
    details?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
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
    id?: StringWithAggregatesFilter<"Logging"> | string
    user_id?: StringWithAggregatesFilter<"Logging"> | string
    action_type?: StringWithAggregatesFilter<"Logging"> | string
    activity_time?: DateTimeWithAggregatesFilter<"Logging"> | Date | string
    details?: StringNullableWithAggregatesFilter<"Logging"> | string | null
    ip_address?: StringNullableWithAggregatesFilter<"Logging"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"Logging"> | string | null
    created_by?: StringNullableWithAggregatesFilter<"Logging"> | string | null
    created_date?: DateTimeWithAggregatesFilter<"Logging"> | Date | string
    modified_by?: StringNullableWithAggregatesFilter<"Logging"> | string | null
    modified_date?: DateTimeWithAggregatesFilter<"Logging"> | Date | string
  }

  export type ViewWhereInput = {
    AND?: ViewWhereInput | ViewWhereInput[]
    OR?: ViewWhereInput[]
    NOT?: ViewWhereInput | ViewWhereInput[]
    id?: StringFilter<"View"> | string
    asset_id?: StringFilter<"View"> | string
    viewed_by?: StringFilter<"View"> | string
    viewed_at?: DateTimeFilter<"View"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }

  export type ViewOrderByWithRelationInput = {
    id?: SortOrder
    asset_id?: SortOrder
    viewed_by?: SortOrder
    viewed_at?: SortOrder
    asset?: AssetOrderByWithRelationInput
  }

  export type ViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ViewWhereInput | ViewWhereInput[]
    OR?: ViewWhereInput[]
    NOT?: ViewWhereInput | ViewWhereInput[]
    asset_id?: StringFilter<"View"> | string
    viewed_by?: StringFilter<"View"> | string
    viewed_at?: DateTimeFilter<"View"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }, "id">

  export type ViewOrderByWithAggregationInput = {
    id?: SortOrder
    asset_id?: SortOrder
    viewed_by?: SortOrder
    viewed_at?: SortOrder
    _count?: ViewCountOrderByAggregateInput
    _max?: ViewMaxOrderByAggregateInput
    _min?: ViewMinOrderByAggregateInput
  }

  export type ViewScalarWhereWithAggregatesInput = {
    AND?: ViewScalarWhereWithAggregatesInput | ViewScalarWhereWithAggregatesInput[]
    OR?: ViewScalarWhereWithAggregatesInput[]
    NOT?: ViewScalarWhereWithAggregatesInput | ViewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"View"> | string
    asset_id?: StringWithAggregatesFilter<"View"> | string
    viewed_by?: StringWithAggregatesFilter<"View"> | string
    viewed_at?: DateTimeWithAggregatesFilter<"View"> | Date | string
  }

  export type BookmarkWhereInput = {
    AND?: BookmarkWhereInput | BookmarkWhereInput[]
    OR?: BookmarkWhereInput[]
    NOT?: BookmarkWhereInput | BookmarkWhereInput[]
    id?: StringFilter<"Bookmark"> | string
    asset_id?: StringFilter<"Bookmark"> | string
    bookmarked_by?: StringFilter<"Bookmark"> | string
    bookmarked_at?: DateTimeFilter<"Bookmark"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }

  export type BookmarkOrderByWithRelationInput = {
    id?: SortOrder
    asset_id?: SortOrder
    bookmarked_by?: SortOrder
    bookmarked_at?: SortOrder
    asset?: AssetOrderByWithRelationInput
  }

  export type BookmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookmarkWhereInput | BookmarkWhereInput[]
    OR?: BookmarkWhereInput[]
    NOT?: BookmarkWhereInput | BookmarkWhereInput[]
    asset_id?: StringFilter<"Bookmark"> | string
    bookmarked_by?: StringFilter<"Bookmark"> | string
    bookmarked_at?: DateTimeFilter<"Bookmark"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }, "id">

  export type BookmarkOrderByWithAggregationInput = {
    id?: SortOrder
    asset_id?: SortOrder
    bookmarked_by?: SortOrder
    bookmarked_at?: SortOrder
    _count?: BookmarkCountOrderByAggregateInput
    _max?: BookmarkMaxOrderByAggregateInput
    _min?: BookmarkMinOrderByAggregateInput
  }

  export type BookmarkScalarWhereWithAggregatesInput = {
    AND?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[]
    OR?: BookmarkScalarWhereWithAggregatesInput[]
    NOT?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bookmark"> | string
    asset_id?: StringWithAggregatesFilter<"Bookmark"> | string
    bookmarked_by?: StringWithAggregatesFilter<"Bookmark"> | string
    bookmarked_at?: DateTimeWithAggregatesFilter<"Bookmark"> | Date | string
  }

  export type ConstantsWhereInput = {
    AND?: ConstantsWhereInput | ConstantsWhereInput[]
    OR?: ConstantsWhereInput[]
    NOT?: ConstantsWhereInput | ConstantsWhereInput[]
    const_id?: StringFilter<"Constants"> | string
    code?: StringFilter<"Constants"> | string
    description?: StringNullableFilter<"Constants"> | string | null
    assets?: AssetListRelationFilter
    Users?: UserListRelationFilter
    Logging?: LoggingListRelationFilter
  }

  export type ConstantsOrderByWithRelationInput = {
    const_id?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    assets?: AssetOrderByRelationAggregateInput
    Users?: UserOrderByRelationAggregateInput
    Logging?: LoggingOrderByRelationAggregateInput
  }

  export type ConstantsWhereUniqueInput = Prisma.AtLeast<{
    const_id?: string
    code?: string
    AND?: ConstantsWhereInput | ConstantsWhereInput[]
    OR?: ConstantsWhereInput[]
    NOT?: ConstantsWhereInput | ConstantsWhereInput[]
    description?: StringNullableFilter<"Constants"> | string | null
    assets?: AssetListRelationFilter
    Users?: UserListRelationFilter
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

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    email_verified?: Date | string | null
    password: string
    image?: string | null
    phone_number?: string | null
    region: string
    mfa_enabled?: boolean
    mfa_method?: string | null
    mfa_secret?: string | null
    last_login?: Date | string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    web_authn_devices?: WebAuthnDeviceCreateNestedManyWithoutUserInput
    employee?: EmployeeCreateNestedOneWithoutUserInput
    userlogs?: LoggingCreateNestedManyWithoutUserInput
    role_definition: ConstantsCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    email_verified?: Date | string | null
    password: string
    image?: string | null
    phone_number?: string | null
    region: string
    role: string
    mfa_enabled?: boolean
    mfa_method?: string | null
    mfa_secret?: string | null
    last_login?: Date | string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    web_authn_devices?: WebAuthnDeviceUncheckedCreateNestedManyWithoutUserInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    userlogs?: LoggingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    mfa_method?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    web_authn_devices?: WebAuthnDeviceUpdateManyWithoutUserNestedInput
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUpdateManyWithoutUserNestedInput
    role_definition?: ConstantsUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    mfa_method?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    web_authn_devices?: WebAuthnDeviceUncheckedUpdateManyWithoutUserNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    email_verified?: Date | string | null
    password: string
    image?: string | null
    phone_number?: string | null
    region: string
    role: string
    mfa_enabled?: boolean
    mfa_method?: string | null
    mfa_secret?: string | null
    last_login?: Date | string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    mfa_method?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    mfa_method?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    provider_account_id: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    user_id: string
    type: string
    provider: string
    provider_account_id: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    provider_account_id?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    provider_account_id?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    user_id: string
    type: string
    provider: string
    provider_account_id: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    provider_account_id?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    provider_account_id?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    session_token: string
    expires: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    session_token: string
    user_id: string
    expires: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    session_token: string
    user_id: string
    expires: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebAuthnDeviceCreateInput = {
    credential_id: string
    public_key: string
    counter: number
    device_type: string
    backed_up: boolean
    transports?: string | null
    friendly_name?: string | null
    last_used?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutWeb_authn_devicesInput
  }

  export type WebAuthnDeviceUncheckedCreateInput = {
    credential_id: string
    user_id: string
    public_key: string
    counter: number
    device_type: string
    backed_up: boolean
    transports?: string | null
    friendly_name?: string | null
    last_used?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WebAuthnDeviceUpdateInput = {
    credential_id?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    device_type?: StringFieldUpdateOperationsInput | string
    backed_up?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    friendly_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWeb_authn_devicesNestedInput
  }

  export type WebAuthnDeviceUncheckedUpdateInput = {
    credential_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    device_type?: StringFieldUpdateOperationsInput | string
    backed_up?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    friendly_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebAuthnDeviceCreateManyInput = {
    credential_id: string
    user_id: string
    public_key: string
    counter: number
    device_type: string
    backed_up: boolean
    transports?: string | null
    friendly_name?: string | null
    last_used?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WebAuthnDeviceUpdateManyMutationInput = {
    credential_id?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    device_type?: StringFieldUpdateOperationsInput | string
    backed_up?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    friendly_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebAuthnDeviceUncheckedUpdateManyInput = {
    credential_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    device_type?: StringFieldUpdateOperationsInput | string
    backed_up?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    friendly_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OneTimeCodeCreateInput = {
    id?: string
    user_id: string
    code: string
    type: string
    used?: boolean
    expires: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OneTimeCodeUncheckedCreateInput = {
    id?: string
    user_id: string
    code: string
    type: string
    used?: boolean
    expires: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OneTimeCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OneTimeCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OneTimeCodeCreateManyInput = {
    id?: string
    user_id: string
    code: string
    type: string
    used?: boolean
    expires: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OneTimeCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OneTimeCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateInput = {
    user: UserCreateNestedOneWithoutEmployeeInput
    company: CompanyCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateInput = {
    user_id: string
    company_id: string
  }

  export type EmployeeUpdateInput = {
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    company?: CompanyUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeCreateManyInput = {
    user_id: string
    company_id: string
  }

  export type EmployeeUpdateManyMutationInput = {

  }

  export type EmployeeUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    region: string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    region: string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    region: string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetCreateInput = {
    id?: string
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
    asset_type: ConstantsCreateNestedOneWithoutAssetsInput
    ownerships?: CandidateAssetOwnershipCreateNestedManyWithoutAssetInput
    views?: ViewCreateNestedManyWithoutAssetInput
    bookmarks?: BookmarkCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateInput = {
    id?: string
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
    ownerships?: CandidateAssetOwnershipUncheckedCreateNestedManyWithoutAssetInput
    views?: ViewUncheckedCreateNestedManyWithoutAssetInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
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
    asset_type?: ConstantsUpdateOneRequiredWithoutAssetsNestedInput
    ownerships?: CandidateAssetOwnershipUpdateManyWithoutAssetNestedInput
    views?: ViewUpdateManyWithoutAssetNestedInput
    bookmarks?: BookmarkUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
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
    ownerships?: CandidateAssetOwnershipUncheckedUpdateManyWithoutAssetNestedInput
    views?: ViewUncheckedUpdateManyWithoutAssetNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateManyInput = {
    id?: string
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

  export type AssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
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

  export type AssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
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
    asset: AssetCreateNestedOneWithoutOwnershipsInput
    candidate: CandidateCreateNestedOneWithoutAsset_ownershipsInput
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
    asset?: AssetUpdateOneRequiredWithoutOwnershipsNestedInput
    candidate?: CandidateUpdateOneRequiredWithoutAsset_ownershipsNestedInput
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

  export type CandidateCreateInput = {
    id?: string
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
    asset_ownerships?: CandidateAssetOwnershipCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateInput = {
    id?: string
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
    asset_ownerships?: CandidateAssetOwnershipUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
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
    asset_ownerships?: CandidateAssetOwnershipUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
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
    asset_ownerships?: CandidateAssetOwnershipUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateCreateManyInput = {
    id?: string
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

  export type CandidateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
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

  export type CandidateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
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
    id?: string
    activity_time?: Date | string
    details?: string | null
    ip_address?: string | null
    user_agent?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    user: UserCreateNestedOneWithoutUserlogsInput
    action_definition: ConstantsCreateNestedOneWithoutLoggingInput
  }

  export type LoggingUncheckedCreateInput = {
    id?: string
    user_id: string
    action_type: string
    activity_time?: Date | string
    details?: string | null
    ip_address?: string | null
    user_agent?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type LoggingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserlogsNestedInput
    action_definition?: ConstantsUpdateOneRequiredWithoutLoggingNestedInput
  }

  export type LoggingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    action_type?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoggingCreateManyInput = {
    id?: string
    user_id: string
    action_type: string
    activity_time?: Date | string
    details?: string | null
    ip_address?: string | null
    user_agent?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type LoggingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoggingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    action_type?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewCreateInput = {
    id?: string
    viewed_by: string
    viewed_at?: Date | string
    asset: AssetCreateNestedOneWithoutViewsInput
  }

  export type ViewUncheckedCreateInput = {
    id?: string
    asset_id: string
    viewed_by: string
    viewed_at?: Date | string
  }

  export type ViewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewed_by?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutViewsNestedInput
  }

  export type ViewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_id?: StringFieldUpdateOperationsInput | string
    viewed_by?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewCreateManyInput = {
    id?: string
    asset_id: string
    viewed_by: string
    viewed_at?: Date | string
  }

  export type ViewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewed_by?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_id?: StringFieldUpdateOperationsInput | string
    viewed_by?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkCreateInput = {
    id?: string
    bookmarked_by: string
    bookmarked_at?: Date | string
    asset: AssetCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkUncheckedCreateInput = {
    id?: string
    asset_id: string
    bookmarked_by: string
    bookmarked_at?: Date | string
  }

  export type BookmarkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookmarked_by?: StringFieldUpdateOperationsInput | string
    bookmarked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_id?: StringFieldUpdateOperationsInput | string
    bookmarked_by?: StringFieldUpdateOperationsInput | string
    bookmarked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkCreateManyInput = {
    id?: string
    asset_id: string
    bookmarked_by: string
    bookmarked_at?: Date | string
  }

  export type BookmarkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookmarked_by?: StringFieldUpdateOperationsInput | string
    bookmarked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_id?: StringFieldUpdateOperationsInput | string
    bookmarked_by?: StringFieldUpdateOperationsInput | string
    bookmarked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConstantsCreateInput = {
    const_id?: string
    code: string
    description?: string | null
    assets?: AssetCreateNestedManyWithoutAsset_typeInput
    Users?: UserCreateNestedManyWithoutRole_definitionInput
    Logging?: LoggingCreateNestedManyWithoutAction_definitionInput
  }

  export type ConstantsUncheckedCreateInput = {
    const_id?: string
    code: string
    description?: string | null
    assets?: AssetUncheckedCreateNestedManyWithoutAsset_typeInput
    Users?: UserUncheckedCreateNestedManyWithoutRole_definitionInput
    Logging?: LoggingUncheckedCreateNestedManyWithoutAction_definitionInput
  }

  export type ConstantsUpdateInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetUpdateManyWithoutAsset_typeNestedInput
    Users?: UserUpdateManyWithoutRole_definitionNestedInput
    Logging?: LoggingUpdateManyWithoutAction_definitionNestedInput
  }

  export type ConstantsUncheckedUpdateInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetUncheckedUpdateManyWithoutAsset_typeNestedInput
    Users?: UserUncheckedUpdateManyWithoutRole_definitionNestedInput
    Logging?: LoggingUncheckedUpdateManyWithoutAction_definitionNestedInput
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type WebAuthnDeviceListRelationFilter = {
    every?: WebAuthnDeviceWhereInput
    some?: WebAuthnDeviceWhereInput
    none?: WebAuthnDeviceWhereInput
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
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

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebAuthnDeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoggingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    phone_number?: SortOrder
    region?: SortOrder
    role?: SortOrder
    mfa_enabled?: SortOrder
    mfa_method?: SortOrder
    mfa_secret?: SortOrder
    last_login?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    phone_number?: SortOrder
    region?: SortOrder
    role?: SortOrder
    mfa_enabled?: SortOrder
    mfa_method?: SortOrder
    mfa_secret?: SortOrder
    last_login?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    phone_number?: SortOrder
    region?: SortOrder
    role?: SortOrder
    mfa_enabled?: SortOrder
    mfa_method?: SortOrder
    mfa_secret?: SortOrder
    last_login?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProvider_account_idCompoundUniqueInput = {
    provider: string
    provider_account_id: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    provider_account_id?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    provider_account_id?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    provider_account_id?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    session_token?: SortOrder
    user_id?: SortOrder
    expires?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    session_token?: SortOrder
    user_id?: SortOrder
    expires?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    session_token?: SortOrder
    user_id?: SortOrder
    expires?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type WebAuthnDeviceCountOrderByAggregateInput = {
    credential_id?: SortOrder
    user_id?: SortOrder
    public_key?: SortOrder
    counter?: SortOrder
    device_type?: SortOrder
    backed_up?: SortOrder
    transports?: SortOrder
    friendly_name?: SortOrder
    last_used?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WebAuthnDeviceAvgOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type WebAuthnDeviceMaxOrderByAggregateInput = {
    credential_id?: SortOrder
    user_id?: SortOrder
    public_key?: SortOrder
    counter?: SortOrder
    device_type?: SortOrder
    backed_up?: SortOrder
    transports?: SortOrder
    friendly_name?: SortOrder
    last_used?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WebAuthnDeviceMinOrderByAggregateInput = {
    credential_id?: SortOrder
    user_id?: SortOrder
    public_key?: SortOrder
    counter?: SortOrder
    device_type?: SortOrder
    backed_up?: SortOrder
    transports?: SortOrder
    friendly_name?: SortOrder
    last_used?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WebAuthnDeviceSumOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type OneTimeCodeCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    used?: SortOrder
    expires?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OneTimeCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    used?: SortOrder
    expires?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OneTimeCodeMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    used?: SortOrder
    expires?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type EmployeeCountOrderByAggregateInput = {
    user_id?: SortOrder
    company_id?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    user_id?: SortOrder
    company_id?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    user_id?: SortOrder
    company_id?: SortOrder
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
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

  export type ViewListRelationFilter = {
    every?: ViewWhereInput
    some?: ViewWhereInput
    none?: ViewWhereInput
  }

  export type BookmarkListRelationFilter = {
    every?: BookmarkWhereInput
    some?: BookmarkWhereInput
    none?: BookmarkWhereInput
  }

  export type CandidateAssetOwnershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookmarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetCountOrderByAggregateInput = {
    id?: SortOrder
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

  export type AssetAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unit_value?: SortOrder
    total_value?: SortOrder
    income_generated?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    id?: SortOrder
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

  export type AssetMinOrderByAggregateInput = {
    id?: SortOrder
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

  export type AssetSumOrderByAggregateInput = {
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

  export type AssetScalarRelationFilter = {
    is?: AssetWhereInput
    isNot?: AssetWhereInput
  }

  export type CandidateScalarRelationFilter = {
    is?: CandidateWhereInput
    isNot?: CandidateWhereInput
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

  export type CandidateCountOrderByAggregateInput = {
    id?: SortOrder
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

  export type CandidateMaxOrderByAggregateInput = {
    id?: SortOrder
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

  export type CandidateMinOrderByAggregateInput = {
    id?: SortOrder
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
    id?: SortOrder
    user_id?: SortOrder
    action_type?: SortOrder
    activity_time?: SortOrder
    details?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
  }

  export type LoggingMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action_type?: SortOrder
    activity_time?: SortOrder
    details?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
  }

  export type LoggingMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action_type?: SortOrder
    activity_time?: SortOrder
    details?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    modified_by?: SortOrder
    modified_date?: SortOrder
  }

  export type ViewCountOrderByAggregateInput = {
    id?: SortOrder
    asset_id?: SortOrder
    viewed_by?: SortOrder
    viewed_at?: SortOrder
  }

  export type ViewMaxOrderByAggregateInput = {
    id?: SortOrder
    asset_id?: SortOrder
    viewed_by?: SortOrder
    viewed_at?: SortOrder
  }

  export type ViewMinOrderByAggregateInput = {
    id?: SortOrder
    asset_id?: SortOrder
    viewed_by?: SortOrder
    viewed_at?: SortOrder
  }

  export type BookmarkCountOrderByAggregateInput = {
    id?: SortOrder
    asset_id?: SortOrder
    bookmarked_by?: SortOrder
    bookmarked_at?: SortOrder
  }

  export type BookmarkMaxOrderByAggregateInput = {
    id?: SortOrder
    asset_id?: SortOrder
    bookmarked_by?: SortOrder
    bookmarked_at?: SortOrder
  }

  export type BookmarkMinOrderByAggregateInput = {
    id?: SortOrder
    asset_id?: SortOrder
    bookmarked_by?: SortOrder
    bookmarked_at?: SortOrder
  }

  export type AssetListRelationFilter = {
    every?: AssetWhereInput
    some?: AssetWhereInput
    none?: AssetWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type AssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
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

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type WebAuthnDeviceCreateNestedManyWithoutUserInput = {
    create?: XOR<WebAuthnDeviceCreateWithoutUserInput, WebAuthnDeviceUncheckedCreateWithoutUserInput> | WebAuthnDeviceCreateWithoutUserInput[] | WebAuthnDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebAuthnDeviceCreateOrConnectWithoutUserInput | WebAuthnDeviceCreateOrConnectWithoutUserInput[]
    createMany?: WebAuthnDeviceCreateManyUserInputEnvelope
    connect?: WebAuthnDeviceWhereUniqueInput | WebAuthnDeviceWhereUniqueInput[]
  }

  export type EmployeeCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    connect?: EmployeeWhereUniqueInput
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

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type WebAuthnDeviceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WebAuthnDeviceCreateWithoutUserInput, WebAuthnDeviceUncheckedCreateWithoutUserInput> | WebAuthnDeviceCreateWithoutUserInput[] | WebAuthnDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebAuthnDeviceCreateOrConnectWithoutUserInput | WebAuthnDeviceCreateOrConnectWithoutUserInput[]
    createMany?: WebAuthnDeviceCreateManyUserInputEnvelope
    connect?: WebAuthnDeviceWhereUniqueInput | WebAuthnDeviceWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    connect?: EmployeeWhereUniqueInput
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type WebAuthnDeviceUpdateManyWithoutUserNestedInput = {
    create?: XOR<WebAuthnDeviceCreateWithoutUserInput, WebAuthnDeviceUncheckedCreateWithoutUserInput> | WebAuthnDeviceCreateWithoutUserInput[] | WebAuthnDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebAuthnDeviceCreateOrConnectWithoutUserInput | WebAuthnDeviceCreateOrConnectWithoutUserInput[]
    upsert?: WebAuthnDeviceUpsertWithWhereUniqueWithoutUserInput | WebAuthnDeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WebAuthnDeviceCreateManyUserInputEnvelope
    set?: WebAuthnDeviceWhereUniqueInput | WebAuthnDeviceWhereUniqueInput[]
    disconnect?: WebAuthnDeviceWhereUniqueInput | WebAuthnDeviceWhereUniqueInput[]
    delete?: WebAuthnDeviceWhereUniqueInput | WebAuthnDeviceWhereUniqueInput[]
    connect?: WebAuthnDeviceWhereUniqueInput | WebAuthnDeviceWhereUniqueInput[]
    update?: WebAuthnDeviceUpdateWithWhereUniqueWithoutUserInput | WebAuthnDeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WebAuthnDeviceUpdateManyWithWhereWithoutUserInput | WebAuthnDeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WebAuthnDeviceScalarWhereInput | WebAuthnDeviceScalarWhereInput[]
  }

  export type EmployeeUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    upsert?: EmployeeUpsertWithoutUserInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUserInput, EmployeeUpdateWithoutUserInput>, EmployeeUncheckedUpdateWithoutUserInput>
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

  export type WebAuthnDeviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WebAuthnDeviceCreateWithoutUserInput, WebAuthnDeviceUncheckedCreateWithoutUserInput> | WebAuthnDeviceCreateWithoutUserInput[] | WebAuthnDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebAuthnDeviceCreateOrConnectWithoutUserInput | WebAuthnDeviceCreateOrConnectWithoutUserInput[]
    upsert?: WebAuthnDeviceUpsertWithWhereUniqueWithoutUserInput | WebAuthnDeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WebAuthnDeviceCreateManyUserInputEnvelope
    set?: WebAuthnDeviceWhereUniqueInput | WebAuthnDeviceWhereUniqueInput[]
    disconnect?: WebAuthnDeviceWhereUniqueInput | WebAuthnDeviceWhereUniqueInput[]
    delete?: WebAuthnDeviceWhereUniqueInput | WebAuthnDeviceWhereUniqueInput[]
    connect?: WebAuthnDeviceWhereUniqueInput | WebAuthnDeviceWhereUniqueInput[]
    update?: WebAuthnDeviceUpdateWithWhereUniqueWithoutUserInput | WebAuthnDeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WebAuthnDeviceUpdateManyWithWhereWithoutUserInput | WebAuthnDeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WebAuthnDeviceScalarWhereInput | WebAuthnDeviceScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    upsert?: EmployeeUpsertWithoutUserInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUserInput, EmployeeUpdateWithoutUserInput>, EmployeeUncheckedUpdateWithoutUserInput>
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

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
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

  export type UserCreateNestedOneWithoutWeb_authn_devicesInput = {
    create?: XOR<UserCreateWithoutWeb_authn_devicesInput, UserUncheckedCreateWithoutWeb_authn_devicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeb_authn_devicesInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutWeb_authn_devicesNestedInput = {
    create?: XOR<UserCreateWithoutWeb_authn_devicesInput, UserUncheckedCreateWithoutWeb_authn_devicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeb_authn_devicesInput
    upsert?: UserUpsertWithoutWeb_authn_devicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWeb_authn_devicesInput, UserUpdateWithoutWeb_authn_devicesInput>, UserUncheckedUpdateWithoutWeb_authn_devicesInput>
  }

  export type UserCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    connect?: UserWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEmployeesInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    upsert?: UserUpsertWithoutEmployeeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeeInput, UserUpdateWithoutEmployeeInput>, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type CompanyUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEmployeesInput
    upsert?: CompanyUpsertWithoutEmployeesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutEmployeesInput, CompanyUpdateWithoutEmployeesInput>, CompanyUncheckedUpdateWithoutEmployeesInput>
  }

  export type EmployeeCreateNestedManyWithoutCompanyInput = {
    create?: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput> | EmployeeCreateWithoutCompanyInput[] | EmployeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutCompanyInput | EmployeeCreateOrConnectWithoutCompanyInput[]
    createMany?: EmployeeCreateManyCompanyInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput> | EmployeeCreateWithoutCompanyInput[] | EmployeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutCompanyInput | EmployeeCreateOrConnectWithoutCompanyInput[]
    createMany?: EmployeeCreateManyCompanyInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput> | EmployeeCreateWithoutCompanyInput[] | EmployeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutCompanyInput | EmployeeCreateOrConnectWithoutCompanyInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutCompanyInput | EmployeeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: EmployeeCreateManyCompanyInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutCompanyInput | EmployeeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutCompanyInput | EmployeeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput> | EmployeeCreateWithoutCompanyInput[] | EmployeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutCompanyInput | EmployeeCreateOrConnectWithoutCompanyInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutCompanyInput | EmployeeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: EmployeeCreateManyCompanyInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutCompanyInput | EmployeeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutCompanyInput | EmployeeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
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

  export type ViewCreateNestedManyWithoutAssetInput = {
    create?: XOR<ViewCreateWithoutAssetInput, ViewUncheckedCreateWithoutAssetInput> | ViewCreateWithoutAssetInput[] | ViewUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutAssetInput | ViewCreateOrConnectWithoutAssetInput[]
    createMany?: ViewCreateManyAssetInputEnvelope
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
  }

  export type BookmarkCreateNestedManyWithoutAssetInput = {
    create?: XOR<BookmarkCreateWithoutAssetInput, BookmarkUncheckedCreateWithoutAssetInput> | BookmarkCreateWithoutAssetInput[] | BookmarkUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutAssetInput | BookmarkCreateOrConnectWithoutAssetInput[]
    createMany?: BookmarkCreateManyAssetInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type CandidateAssetOwnershipUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<CandidateAssetOwnershipCreateWithoutAssetInput, CandidateAssetOwnershipUncheckedCreateWithoutAssetInput> | CandidateAssetOwnershipCreateWithoutAssetInput[] | CandidateAssetOwnershipUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: CandidateAssetOwnershipCreateOrConnectWithoutAssetInput | CandidateAssetOwnershipCreateOrConnectWithoutAssetInput[]
    createMany?: CandidateAssetOwnershipCreateManyAssetInputEnvelope
    connect?: CandidateAssetOwnershipWhereUniqueInput | CandidateAssetOwnershipWhereUniqueInput[]
  }

  export type ViewUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<ViewCreateWithoutAssetInput, ViewUncheckedCreateWithoutAssetInput> | ViewCreateWithoutAssetInput[] | ViewUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutAssetInput | ViewCreateOrConnectWithoutAssetInput[]
    createMany?: ViewCreateManyAssetInputEnvelope
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
  }

  export type BookmarkUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<BookmarkCreateWithoutAssetInput, BookmarkUncheckedCreateWithoutAssetInput> | BookmarkCreateWithoutAssetInput[] | BookmarkUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutAssetInput | BookmarkCreateOrConnectWithoutAssetInput[]
    createMany?: BookmarkCreateManyAssetInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
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

  export type ViewUpdateManyWithoutAssetNestedInput = {
    create?: XOR<ViewCreateWithoutAssetInput, ViewUncheckedCreateWithoutAssetInput> | ViewCreateWithoutAssetInput[] | ViewUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutAssetInput | ViewCreateOrConnectWithoutAssetInput[]
    upsert?: ViewUpsertWithWhereUniqueWithoutAssetInput | ViewUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: ViewCreateManyAssetInputEnvelope
    set?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    disconnect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    delete?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    update?: ViewUpdateWithWhereUniqueWithoutAssetInput | ViewUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: ViewUpdateManyWithWhereWithoutAssetInput | ViewUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: ViewScalarWhereInput | ViewScalarWhereInput[]
  }

  export type BookmarkUpdateManyWithoutAssetNestedInput = {
    create?: XOR<BookmarkCreateWithoutAssetInput, BookmarkUncheckedCreateWithoutAssetInput> | BookmarkCreateWithoutAssetInput[] | BookmarkUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutAssetInput | BookmarkCreateOrConnectWithoutAssetInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutAssetInput | BookmarkUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: BookmarkCreateManyAssetInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutAssetInput | BookmarkUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutAssetInput | BookmarkUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
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

  export type ViewUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<ViewCreateWithoutAssetInput, ViewUncheckedCreateWithoutAssetInput> | ViewCreateWithoutAssetInput[] | ViewUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutAssetInput | ViewCreateOrConnectWithoutAssetInput[]
    upsert?: ViewUpsertWithWhereUniqueWithoutAssetInput | ViewUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: ViewCreateManyAssetInputEnvelope
    set?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    disconnect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    delete?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    update?: ViewUpdateWithWhereUniqueWithoutAssetInput | ViewUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: ViewUpdateManyWithWhereWithoutAssetInput | ViewUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: ViewScalarWhereInput | ViewScalarWhereInput[]
  }

  export type BookmarkUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<BookmarkCreateWithoutAssetInput, BookmarkUncheckedCreateWithoutAssetInput> | BookmarkCreateWithoutAssetInput[] | BookmarkUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutAssetInput | BookmarkCreateOrConnectWithoutAssetInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutAssetInput | BookmarkUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: BookmarkCreateManyAssetInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutAssetInput | BookmarkUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutAssetInput | BookmarkUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type AssetCreateNestedOneWithoutOwnershipsInput = {
    create?: XOR<AssetCreateWithoutOwnershipsInput, AssetUncheckedCreateWithoutOwnershipsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutOwnershipsInput
    connect?: AssetWhereUniqueInput
  }

  export type CandidateCreateNestedOneWithoutAsset_ownershipsInput = {
    create?: XOR<CandidateCreateWithoutAsset_ownershipsInput, CandidateUncheckedCreateWithoutAsset_ownershipsInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutAsset_ownershipsInput
    connect?: CandidateWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssetUpdateOneRequiredWithoutOwnershipsNestedInput = {
    create?: XOR<AssetCreateWithoutOwnershipsInput, AssetUncheckedCreateWithoutOwnershipsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutOwnershipsInput
    upsert?: AssetUpsertWithoutOwnershipsInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutOwnershipsInput, AssetUpdateWithoutOwnershipsInput>, AssetUncheckedUpdateWithoutOwnershipsInput>
  }

  export type CandidateUpdateOneRequiredWithoutAsset_ownershipsNestedInput = {
    create?: XOR<CandidateCreateWithoutAsset_ownershipsInput, CandidateUncheckedCreateWithoutAsset_ownershipsInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutAsset_ownershipsInput
    upsert?: CandidateUpsertWithoutAsset_ownershipsInput
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutAsset_ownershipsInput, CandidateUpdateWithoutAsset_ownershipsInput>, CandidateUncheckedUpdateWithoutAsset_ownershipsInput>
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

  export type UserCreateNestedOneWithoutUserlogsInput = {
    create?: XOR<UserCreateWithoutUserlogsInput, UserUncheckedCreateWithoutUserlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserlogsInput
    connect?: UserWhereUniqueInput
  }

  export type ConstantsCreateNestedOneWithoutLoggingInput = {
    create?: XOR<ConstantsCreateWithoutLoggingInput, ConstantsUncheckedCreateWithoutLoggingInput>
    connectOrCreate?: ConstantsCreateOrConnectWithoutLoggingInput
    connect?: ConstantsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserlogsNestedInput = {
    create?: XOR<UserCreateWithoutUserlogsInput, UserUncheckedCreateWithoutUserlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserlogsInput
    upsert?: UserUpsertWithoutUserlogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserlogsInput, UserUpdateWithoutUserlogsInput>, UserUncheckedUpdateWithoutUserlogsInput>
  }

  export type ConstantsUpdateOneRequiredWithoutLoggingNestedInput = {
    create?: XOR<ConstantsCreateWithoutLoggingInput, ConstantsUncheckedCreateWithoutLoggingInput>
    connectOrCreate?: ConstantsCreateOrConnectWithoutLoggingInput
    upsert?: ConstantsUpsertWithoutLoggingInput
    connect?: ConstantsWhereUniqueInput
    update?: XOR<XOR<ConstantsUpdateToOneWithWhereWithoutLoggingInput, ConstantsUpdateWithoutLoggingInput>, ConstantsUncheckedUpdateWithoutLoggingInput>
  }

  export type AssetCreateNestedOneWithoutViewsInput = {
    create?: XOR<AssetCreateWithoutViewsInput, AssetUncheckedCreateWithoutViewsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutViewsInput
    connect?: AssetWhereUniqueInput
  }

  export type AssetUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<AssetCreateWithoutViewsInput, AssetUncheckedCreateWithoutViewsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutViewsInput
    upsert?: AssetUpsertWithoutViewsInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutViewsInput, AssetUpdateWithoutViewsInput>, AssetUncheckedUpdateWithoutViewsInput>
  }

  export type AssetCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<AssetCreateWithoutBookmarksInput, AssetUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: AssetCreateOrConnectWithoutBookmarksInput
    connect?: AssetWhereUniqueInput
  }

  export type AssetUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<AssetCreateWithoutBookmarksInput, AssetUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: AssetCreateOrConnectWithoutBookmarksInput
    upsert?: AssetUpsertWithoutBookmarksInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutBookmarksInput, AssetUpdateWithoutBookmarksInput>, AssetUncheckedUpdateWithoutBookmarksInput>
  }

  export type AssetCreateNestedManyWithoutAsset_typeInput = {
    create?: XOR<AssetCreateWithoutAsset_typeInput, AssetUncheckedCreateWithoutAsset_typeInput> | AssetCreateWithoutAsset_typeInput[] | AssetUncheckedCreateWithoutAsset_typeInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutAsset_typeInput | AssetCreateOrConnectWithoutAsset_typeInput[]
    createMany?: AssetCreateManyAsset_typeInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutRole_definitionInput = {
    create?: XOR<UserCreateWithoutRole_definitionInput, UserUncheckedCreateWithoutRole_definitionInput> | UserCreateWithoutRole_definitionInput[] | UserUncheckedCreateWithoutRole_definitionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRole_definitionInput | UserCreateOrConnectWithoutRole_definitionInput[]
    createMany?: UserCreateManyRole_definitionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type LoggingCreateNestedManyWithoutAction_definitionInput = {
    create?: XOR<LoggingCreateWithoutAction_definitionInput, LoggingUncheckedCreateWithoutAction_definitionInput> | LoggingCreateWithoutAction_definitionInput[] | LoggingUncheckedCreateWithoutAction_definitionInput[]
    connectOrCreate?: LoggingCreateOrConnectWithoutAction_definitionInput | LoggingCreateOrConnectWithoutAction_definitionInput[]
    createMany?: LoggingCreateManyAction_definitionInputEnvelope
    connect?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
  }

  export type AssetUncheckedCreateNestedManyWithoutAsset_typeInput = {
    create?: XOR<AssetCreateWithoutAsset_typeInput, AssetUncheckedCreateWithoutAsset_typeInput> | AssetCreateWithoutAsset_typeInput[] | AssetUncheckedCreateWithoutAsset_typeInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutAsset_typeInput | AssetCreateOrConnectWithoutAsset_typeInput[]
    createMany?: AssetCreateManyAsset_typeInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRole_definitionInput = {
    create?: XOR<UserCreateWithoutRole_definitionInput, UserUncheckedCreateWithoutRole_definitionInput> | UserCreateWithoutRole_definitionInput[] | UserUncheckedCreateWithoutRole_definitionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRole_definitionInput | UserCreateOrConnectWithoutRole_definitionInput[]
    createMany?: UserCreateManyRole_definitionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type LoggingUncheckedCreateNestedManyWithoutAction_definitionInput = {
    create?: XOR<LoggingCreateWithoutAction_definitionInput, LoggingUncheckedCreateWithoutAction_definitionInput> | LoggingCreateWithoutAction_definitionInput[] | LoggingUncheckedCreateWithoutAction_definitionInput[]
    connectOrCreate?: LoggingCreateOrConnectWithoutAction_definitionInput | LoggingCreateOrConnectWithoutAction_definitionInput[]
    createMany?: LoggingCreateManyAction_definitionInputEnvelope
    connect?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
  }

  export type AssetUpdateManyWithoutAsset_typeNestedInput = {
    create?: XOR<AssetCreateWithoutAsset_typeInput, AssetUncheckedCreateWithoutAsset_typeInput> | AssetCreateWithoutAsset_typeInput[] | AssetUncheckedCreateWithoutAsset_typeInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutAsset_typeInput | AssetCreateOrConnectWithoutAsset_typeInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutAsset_typeInput | AssetUpsertWithWhereUniqueWithoutAsset_typeInput[]
    createMany?: AssetCreateManyAsset_typeInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutAsset_typeInput | AssetUpdateWithWhereUniqueWithoutAsset_typeInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutAsset_typeInput | AssetUpdateManyWithWhereWithoutAsset_typeInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type UserUpdateManyWithoutRole_definitionNestedInput = {
    create?: XOR<UserCreateWithoutRole_definitionInput, UserUncheckedCreateWithoutRole_definitionInput> | UserCreateWithoutRole_definitionInput[] | UserUncheckedCreateWithoutRole_definitionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRole_definitionInput | UserCreateOrConnectWithoutRole_definitionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRole_definitionInput | UserUpsertWithWhereUniqueWithoutRole_definitionInput[]
    createMany?: UserCreateManyRole_definitionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRole_definitionInput | UserUpdateWithWhereUniqueWithoutRole_definitionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRole_definitionInput | UserUpdateManyWithWhereWithoutRole_definitionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type LoggingUpdateManyWithoutAction_definitionNestedInput = {
    create?: XOR<LoggingCreateWithoutAction_definitionInput, LoggingUncheckedCreateWithoutAction_definitionInput> | LoggingCreateWithoutAction_definitionInput[] | LoggingUncheckedCreateWithoutAction_definitionInput[]
    connectOrCreate?: LoggingCreateOrConnectWithoutAction_definitionInput | LoggingCreateOrConnectWithoutAction_definitionInput[]
    upsert?: LoggingUpsertWithWhereUniqueWithoutAction_definitionInput | LoggingUpsertWithWhereUniqueWithoutAction_definitionInput[]
    createMany?: LoggingCreateManyAction_definitionInputEnvelope
    set?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    disconnect?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    delete?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    connect?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    update?: LoggingUpdateWithWhereUniqueWithoutAction_definitionInput | LoggingUpdateWithWhereUniqueWithoutAction_definitionInput[]
    updateMany?: LoggingUpdateManyWithWhereWithoutAction_definitionInput | LoggingUpdateManyWithWhereWithoutAction_definitionInput[]
    deleteMany?: LoggingScalarWhereInput | LoggingScalarWhereInput[]
  }

  export type AssetUncheckedUpdateManyWithoutAsset_typeNestedInput = {
    create?: XOR<AssetCreateWithoutAsset_typeInput, AssetUncheckedCreateWithoutAsset_typeInput> | AssetCreateWithoutAsset_typeInput[] | AssetUncheckedCreateWithoutAsset_typeInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutAsset_typeInput | AssetCreateOrConnectWithoutAsset_typeInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutAsset_typeInput | AssetUpsertWithWhereUniqueWithoutAsset_typeInput[]
    createMany?: AssetCreateManyAsset_typeInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutAsset_typeInput | AssetUpdateWithWhereUniqueWithoutAsset_typeInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutAsset_typeInput | AssetUpdateManyWithWhereWithoutAsset_typeInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRole_definitionNestedInput = {
    create?: XOR<UserCreateWithoutRole_definitionInput, UserUncheckedCreateWithoutRole_definitionInput> | UserCreateWithoutRole_definitionInput[] | UserUncheckedCreateWithoutRole_definitionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRole_definitionInput | UserCreateOrConnectWithoutRole_definitionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRole_definitionInput | UserUpsertWithWhereUniqueWithoutRole_definitionInput[]
    createMany?: UserCreateManyRole_definitionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRole_definitionInput | UserUpdateWithWhereUniqueWithoutRole_definitionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRole_definitionInput | UserUpdateManyWithWhereWithoutRole_definitionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type LoggingUncheckedUpdateManyWithoutAction_definitionNestedInput = {
    create?: XOR<LoggingCreateWithoutAction_definitionInput, LoggingUncheckedCreateWithoutAction_definitionInput> | LoggingCreateWithoutAction_definitionInput[] | LoggingUncheckedCreateWithoutAction_definitionInput[]
    connectOrCreate?: LoggingCreateOrConnectWithoutAction_definitionInput | LoggingCreateOrConnectWithoutAction_definitionInput[]
    upsert?: LoggingUpsertWithWhereUniqueWithoutAction_definitionInput | LoggingUpsertWithWhereUniqueWithoutAction_definitionInput[]
    createMany?: LoggingCreateManyAction_definitionInputEnvelope
    set?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    disconnect?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    delete?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    connect?: LoggingWhereUniqueInput | LoggingWhereUniqueInput[]
    update?: LoggingUpdateWithWhereUniqueWithoutAction_definitionInput | LoggingUpdateWithWhereUniqueWithoutAction_definitionInput[]
    updateMany?: LoggingUpdateManyWithWhereWithoutAction_definitionInput | LoggingUpdateManyWithWhereWithoutAction_definitionInput[]
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    provider_account_id: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    provider_account_id: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    session_token: string
    expires: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    session_token: string
    expires: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WebAuthnDeviceCreateWithoutUserInput = {
    credential_id: string
    public_key: string
    counter: number
    device_type: string
    backed_up: boolean
    transports?: string | null
    friendly_name?: string | null
    last_used?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WebAuthnDeviceUncheckedCreateWithoutUserInput = {
    credential_id: string
    public_key: string
    counter: number
    device_type: string
    backed_up: boolean
    transports?: string | null
    friendly_name?: string | null
    last_used?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WebAuthnDeviceCreateOrConnectWithoutUserInput = {
    where: WebAuthnDeviceWhereUniqueInput
    create: XOR<WebAuthnDeviceCreateWithoutUserInput, WebAuthnDeviceUncheckedCreateWithoutUserInput>
  }

  export type WebAuthnDeviceCreateManyUserInputEnvelope = {
    data: WebAuthnDeviceCreateManyUserInput | WebAuthnDeviceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutUserInput = {
    company: CompanyCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateWithoutUserInput = {
    company_id: string
  }

  export type EmployeeCreateOrConnectWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
  }

  export type LoggingCreateWithoutUserInput = {
    id?: string
    activity_time?: Date | string
    details?: string | null
    ip_address?: string | null
    user_agent?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    action_definition: ConstantsCreateNestedOneWithoutLoggingInput
  }

  export type LoggingUncheckedCreateWithoutUserInput = {
    id?: string
    action_type: string
    activity_time?: Date | string
    details?: string | null
    ip_address?: string | null
    user_agent?: string | null
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
    assets?: AssetCreateNestedManyWithoutAsset_typeInput
    Logging?: LoggingCreateNestedManyWithoutAction_definitionInput
  }

  export type ConstantsUncheckedCreateWithoutUsersInput = {
    const_id?: string
    code: string
    description?: string | null
    assets?: AssetUncheckedCreateNestedManyWithoutAsset_typeInput
    Logging?: LoggingUncheckedCreateNestedManyWithoutAction_definitionInput
  }

  export type ConstantsCreateOrConnectWithoutUsersInput = {
    where: ConstantsWhereUniqueInput
    create: XOR<ConstantsCreateWithoutUsersInput, ConstantsUncheckedCreateWithoutUsersInput>
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
    user_id?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    provider_account_id?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    created_at?: DateTimeFilter<"Account"> | Date | string
    updated_at?: DateTimeFilter<"Account"> | Date | string
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
    session_token?: StringFilter<"Session"> | string
    user_id?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    created_at?: DateTimeFilter<"Session"> | Date | string
    updated_at?: DateTimeFilter<"Session"> | Date | string
  }

  export type WebAuthnDeviceUpsertWithWhereUniqueWithoutUserInput = {
    where: WebAuthnDeviceWhereUniqueInput
    update: XOR<WebAuthnDeviceUpdateWithoutUserInput, WebAuthnDeviceUncheckedUpdateWithoutUserInput>
    create: XOR<WebAuthnDeviceCreateWithoutUserInput, WebAuthnDeviceUncheckedCreateWithoutUserInput>
  }

  export type WebAuthnDeviceUpdateWithWhereUniqueWithoutUserInput = {
    where: WebAuthnDeviceWhereUniqueInput
    data: XOR<WebAuthnDeviceUpdateWithoutUserInput, WebAuthnDeviceUncheckedUpdateWithoutUserInput>
  }

  export type WebAuthnDeviceUpdateManyWithWhereWithoutUserInput = {
    where: WebAuthnDeviceScalarWhereInput
    data: XOR<WebAuthnDeviceUpdateManyMutationInput, WebAuthnDeviceUncheckedUpdateManyWithoutUserInput>
  }

  export type WebAuthnDeviceScalarWhereInput = {
    AND?: WebAuthnDeviceScalarWhereInput | WebAuthnDeviceScalarWhereInput[]
    OR?: WebAuthnDeviceScalarWhereInput[]
    NOT?: WebAuthnDeviceScalarWhereInput | WebAuthnDeviceScalarWhereInput[]
    credential_id?: StringFilter<"WebAuthnDevice"> | string
    user_id?: StringFilter<"WebAuthnDevice"> | string
    public_key?: StringFilter<"WebAuthnDevice"> | string
    counter?: IntFilter<"WebAuthnDevice"> | number
    device_type?: StringFilter<"WebAuthnDevice"> | string
    backed_up?: BoolFilter<"WebAuthnDevice"> | boolean
    transports?: StringNullableFilter<"WebAuthnDevice"> | string | null
    friendly_name?: StringNullableFilter<"WebAuthnDevice"> | string | null
    last_used?: DateTimeNullableFilter<"WebAuthnDevice"> | Date | string | null
    created_at?: DateTimeFilter<"WebAuthnDevice"> | Date | string
    updated_at?: DateTimeFilter<"WebAuthnDevice"> | Date | string
  }

  export type EmployeeUpsertWithoutUserInput = {
    update: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutUserInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type EmployeeUpdateWithoutUserInput = {
    company?: CompanyUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutUserInput = {
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
    id?: StringFilter<"Logging"> | string
    user_id?: StringFilter<"Logging"> | string
    action_type?: StringFilter<"Logging"> | string
    activity_time?: DateTimeFilter<"Logging"> | Date | string
    details?: StringNullableFilter<"Logging"> | string | null
    ip_address?: StringNullableFilter<"Logging"> | string | null
    user_agent?: StringNullableFilter<"Logging"> | string | null
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
    assets?: AssetUpdateManyWithoutAsset_typeNestedInput
    Logging?: LoggingUpdateManyWithoutAction_definitionNestedInput
  }

  export type ConstantsUncheckedUpdateWithoutUsersInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetUncheckedUpdateManyWithoutAsset_typeNestedInput
    Logging?: LoggingUncheckedUpdateManyWithoutAction_definitionNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    email_verified?: Date | string | null
    password: string
    image?: string | null
    phone_number?: string | null
    region: string
    mfa_enabled?: boolean
    mfa_method?: string | null
    mfa_secret?: string | null
    last_login?: Date | string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    web_authn_devices?: WebAuthnDeviceCreateNestedManyWithoutUserInput
    employee?: EmployeeCreateNestedOneWithoutUserInput
    userlogs?: LoggingCreateNestedManyWithoutUserInput
    role_definition: ConstantsCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    email_verified?: Date | string | null
    password: string
    image?: string | null
    phone_number?: string | null
    region: string
    role: string
    mfa_enabled?: boolean
    mfa_method?: string | null
    mfa_secret?: string | null
    last_login?: Date | string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    web_authn_devices?: WebAuthnDeviceUncheckedCreateNestedManyWithoutUserInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    userlogs?: LoggingUncheckedCreateNestedManyWithoutUserInput
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
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    mfa_method?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    web_authn_devices?: WebAuthnDeviceUpdateManyWithoutUserNestedInput
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUpdateManyWithoutUserNestedInput
    role_definition?: ConstantsUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    mfa_method?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    web_authn_devices?: WebAuthnDeviceUncheckedUpdateManyWithoutUserNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    email_verified?: Date | string | null
    password: string
    image?: string | null
    phone_number?: string | null
    region: string
    mfa_enabled?: boolean
    mfa_method?: string | null
    mfa_secret?: string | null
    last_login?: Date | string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    web_authn_devices?: WebAuthnDeviceCreateNestedManyWithoutUserInput
    employee?: EmployeeCreateNestedOneWithoutUserInput
    userlogs?: LoggingCreateNestedManyWithoutUserInput
    role_definition: ConstantsCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    email_verified?: Date | string | null
    password: string
    image?: string | null
    phone_number?: string | null
    region: string
    role: string
    mfa_enabled?: boolean
    mfa_method?: string | null
    mfa_secret?: string | null
    last_login?: Date | string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    web_authn_devices?: WebAuthnDeviceUncheckedCreateNestedManyWithoutUserInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    userlogs?: LoggingUncheckedCreateNestedManyWithoutUserInput
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
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    mfa_method?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    web_authn_devices?: WebAuthnDeviceUpdateManyWithoutUserNestedInput
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUpdateManyWithoutUserNestedInput
    role_definition?: ConstantsUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    mfa_method?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    web_authn_devices?: WebAuthnDeviceUncheckedUpdateManyWithoutUserNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWeb_authn_devicesInput = {
    id?: string
    name: string
    email: string
    email_verified?: Date | string | null
    password: string
    image?: string | null
    phone_number?: string | null
    region: string
    mfa_enabled?: boolean
    mfa_method?: string | null
    mfa_secret?: string | null
    last_login?: Date | string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    employee?: EmployeeCreateNestedOneWithoutUserInput
    userlogs?: LoggingCreateNestedManyWithoutUserInput
    role_definition: ConstantsCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutWeb_authn_devicesInput = {
    id?: string
    name: string
    email: string
    email_verified?: Date | string | null
    password: string
    image?: string | null
    phone_number?: string | null
    region: string
    role: string
    mfa_enabled?: boolean
    mfa_method?: string | null
    mfa_secret?: string | null
    last_login?: Date | string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    userlogs?: LoggingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWeb_authn_devicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWeb_authn_devicesInput, UserUncheckedCreateWithoutWeb_authn_devicesInput>
  }

  export type UserUpsertWithoutWeb_authn_devicesInput = {
    update: XOR<UserUpdateWithoutWeb_authn_devicesInput, UserUncheckedUpdateWithoutWeb_authn_devicesInput>
    create: XOR<UserCreateWithoutWeb_authn_devicesInput, UserUncheckedCreateWithoutWeb_authn_devicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWeb_authn_devicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWeb_authn_devicesInput, UserUncheckedUpdateWithoutWeb_authn_devicesInput>
  }

  export type UserUpdateWithoutWeb_authn_devicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    mfa_method?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUpdateManyWithoutUserNestedInput
    role_definition?: ConstantsUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutWeb_authn_devicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    mfa_method?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEmployeeInput = {
    id?: string
    name: string
    email: string
    email_verified?: Date | string | null
    password: string
    image?: string | null
    phone_number?: string | null
    region: string
    mfa_enabled?: boolean
    mfa_method?: string | null
    mfa_secret?: string | null
    last_login?: Date | string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    web_authn_devices?: WebAuthnDeviceCreateNestedManyWithoutUserInput
    userlogs?: LoggingCreateNestedManyWithoutUserInput
    role_definition: ConstantsCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutEmployeeInput = {
    id?: string
    name: string
    email: string
    email_verified?: Date | string | null
    password: string
    image?: string | null
    phone_number?: string | null
    region: string
    role: string
    mfa_enabled?: boolean
    mfa_method?: string | null
    mfa_secret?: string | null
    last_login?: Date | string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    web_authn_devices?: WebAuthnDeviceUncheckedCreateNestedManyWithoutUserInput
    userlogs?: LoggingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmployeeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
  }

  export type CompanyCreateWithoutEmployeesInput = {
    id?: string
    name: string
    region: string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type CompanyUncheckedCreateWithoutEmployeesInput = {
    id?: string
    name: string
    region: string
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type CompanyCreateOrConnectWithoutEmployeesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
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
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    mfa_method?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    web_authn_devices?: WebAuthnDeviceUpdateManyWithoutUserNestedInput
    userlogs?: LoggingUpdateManyWithoutUserNestedInput
    role_definition?: ConstantsUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    mfa_method?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    web_authn_devices?: WebAuthnDeviceUncheckedUpdateManyWithoutUserNestedInput
    userlogs?: LoggingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CompanyUpsertWithoutEmployeesInput = {
    update: XOR<CompanyUpdateWithoutEmployeesInput, CompanyUncheckedUpdateWithoutEmployeesInput>
    create: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutEmployeesInput, CompanyUncheckedUpdateWithoutEmployeesInput>
  }

  export type CompanyUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateWithoutCompanyInput = {
    user: UserCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutCompanyInput = {
    user_id: string
  }

  export type EmployeeCreateOrConnectWithoutCompanyInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput>
  }

  export type EmployeeCreateManyCompanyInputEnvelope = {
    data: EmployeeCreateManyCompanyInput | EmployeeCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithWhereUniqueWithoutCompanyInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutCompanyInput, EmployeeUncheckedUpdateWithoutCompanyInput>
    create: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutCompanyInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutCompanyInput, EmployeeUncheckedUpdateWithoutCompanyInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutCompanyInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutCompanyInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    user_id?: StringFilter<"Employee"> | string
    company_id?: StringFilter<"Employee"> | string
  }

  export type ConstantsCreateWithoutAssetsInput = {
    const_id?: string
    code: string
    description?: string | null
    Users?: UserCreateNestedManyWithoutRole_definitionInput
    Logging?: LoggingCreateNestedManyWithoutAction_definitionInput
  }

  export type ConstantsUncheckedCreateWithoutAssetsInput = {
    const_id?: string
    code: string
    description?: string | null
    Users?: UserUncheckedCreateNestedManyWithoutRole_definitionInput
    Logging?: LoggingUncheckedCreateNestedManyWithoutAction_definitionInput
  }

  export type ConstantsCreateOrConnectWithoutAssetsInput = {
    where: ConstantsWhereUniqueInput
    create: XOR<ConstantsCreateWithoutAssetsInput, ConstantsUncheckedCreateWithoutAssetsInput>
  }

  export type CandidateAssetOwnershipCreateWithoutAssetInput = {
    id?: string
    ownership_percentage: number
    candidate: CandidateCreateNestedOneWithoutAsset_ownershipsInput
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

  export type ViewCreateWithoutAssetInput = {
    id?: string
    viewed_by: string
    viewed_at?: Date | string
  }

  export type ViewUncheckedCreateWithoutAssetInput = {
    id?: string
    viewed_by: string
    viewed_at?: Date | string
  }

  export type ViewCreateOrConnectWithoutAssetInput = {
    where: ViewWhereUniqueInput
    create: XOR<ViewCreateWithoutAssetInput, ViewUncheckedCreateWithoutAssetInput>
  }

  export type ViewCreateManyAssetInputEnvelope = {
    data: ViewCreateManyAssetInput | ViewCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkCreateWithoutAssetInput = {
    id?: string
    bookmarked_by: string
    bookmarked_at?: Date | string
  }

  export type BookmarkUncheckedCreateWithoutAssetInput = {
    id?: string
    bookmarked_by: string
    bookmarked_at?: Date | string
  }

  export type BookmarkCreateOrConnectWithoutAssetInput = {
    where: BookmarkWhereUniqueInput
    create: XOR<BookmarkCreateWithoutAssetInput, BookmarkUncheckedCreateWithoutAssetInput>
  }

  export type BookmarkCreateManyAssetInputEnvelope = {
    data: BookmarkCreateManyAssetInput | BookmarkCreateManyAssetInput[]
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
    Users?: UserUpdateManyWithoutRole_definitionNestedInput
    Logging?: LoggingUpdateManyWithoutAction_definitionNestedInput
  }

  export type ConstantsUncheckedUpdateWithoutAssetsInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Users?: UserUncheckedUpdateManyWithoutRole_definitionNestedInput
    Logging?: LoggingUncheckedUpdateManyWithoutAction_definitionNestedInput
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

  export type ViewUpsertWithWhereUniqueWithoutAssetInput = {
    where: ViewWhereUniqueInput
    update: XOR<ViewUpdateWithoutAssetInput, ViewUncheckedUpdateWithoutAssetInput>
    create: XOR<ViewCreateWithoutAssetInput, ViewUncheckedCreateWithoutAssetInput>
  }

  export type ViewUpdateWithWhereUniqueWithoutAssetInput = {
    where: ViewWhereUniqueInput
    data: XOR<ViewUpdateWithoutAssetInput, ViewUncheckedUpdateWithoutAssetInput>
  }

  export type ViewUpdateManyWithWhereWithoutAssetInput = {
    where: ViewScalarWhereInput
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyWithoutAssetInput>
  }

  export type ViewScalarWhereInput = {
    AND?: ViewScalarWhereInput | ViewScalarWhereInput[]
    OR?: ViewScalarWhereInput[]
    NOT?: ViewScalarWhereInput | ViewScalarWhereInput[]
    id?: StringFilter<"View"> | string
    asset_id?: StringFilter<"View"> | string
    viewed_by?: StringFilter<"View"> | string
    viewed_at?: DateTimeFilter<"View"> | Date | string
  }

  export type BookmarkUpsertWithWhereUniqueWithoutAssetInput = {
    where: BookmarkWhereUniqueInput
    update: XOR<BookmarkUpdateWithoutAssetInput, BookmarkUncheckedUpdateWithoutAssetInput>
    create: XOR<BookmarkCreateWithoutAssetInput, BookmarkUncheckedCreateWithoutAssetInput>
  }

  export type BookmarkUpdateWithWhereUniqueWithoutAssetInput = {
    where: BookmarkWhereUniqueInput
    data: XOR<BookmarkUpdateWithoutAssetInput, BookmarkUncheckedUpdateWithoutAssetInput>
  }

  export type BookmarkUpdateManyWithWhereWithoutAssetInput = {
    where: BookmarkScalarWhereInput
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyWithoutAssetInput>
  }

  export type BookmarkScalarWhereInput = {
    AND?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
    OR?: BookmarkScalarWhereInput[]
    NOT?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
    id?: StringFilter<"Bookmark"> | string
    asset_id?: StringFilter<"Bookmark"> | string
    bookmarked_by?: StringFilter<"Bookmark"> | string
    bookmarked_at?: DateTimeFilter<"Bookmark"> | Date | string
  }

  export type AssetCreateWithoutOwnershipsInput = {
    id?: string
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
    asset_type: ConstantsCreateNestedOneWithoutAssetsInput
    views?: ViewCreateNestedManyWithoutAssetInput
    bookmarks?: BookmarkCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutOwnershipsInput = {
    id?: string
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
    views?: ViewUncheckedCreateNestedManyWithoutAssetInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutOwnershipsInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutOwnershipsInput, AssetUncheckedCreateWithoutOwnershipsInput>
  }

  export type CandidateCreateWithoutAsset_ownershipsInput = {
    id?: string
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

  export type CandidateUncheckedCreateWithoutAsset_ownershipsInput = {
    id?: string
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

  export type CandidateCreateOrConnectWithoutAsset_ownershipsInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutAsset_ownershipsInput, CandidateUncheckedCreateWithoutAsset_ownershipsInput>
  }

  export type AssetUpsertWithoutOwnershipsInput = {
    update: XOR<AssetUpdateWithoutOwnershipsInput, AssetUncheckedUpdateWithoutOwnershipsInput>
    create: XOR<AssetCreateWithoutOwnershipsInput, AssetUncheckedCreateWithoutOwnershipsInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutOwnershipsInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutOwnershipsInput, AssetUncheckedUpdateWithoutOwnershipsInput>
  }

  export type AssetUpdateWithoutOwnershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
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
    asset_type?: ConstantsUpdateOneRequiredWithoutAssetsNestedInput
    views?: ViewUpdateManyWithoutAssetNestedInput
    bookmarks?: BookmarkUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutOwnershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
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
    views?: ViewUncheckedUpdateManyWithoutAssetNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type CandidateUpsertWithoutAsset_ownershipsInput = {
    update: XOR<CandidateUpdateWithoutAsset_ownershipsInput, CandidateUncheckedUpdateWithoutAsset_ownershipsInput>
    create: XOR<CandidateCreateWithoutAsset_ownershipsInput, CandidateUncheckedCreateWithoutAsset_ownershipsInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutAsset_ownershipsInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutAsset_ownershipsInput, CandidateUncheckedUpdateWithoutAsset_ownershipsInput>
  }

  export type CandidateUpdateWithoutAsset_ownershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
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

  export type CandidateUncheckedUpdateWithoutAsset_ownershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
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
    asset: AssetCreateNestedOneWithoutOwnershipsInput
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

  export type UserCreateWithoutUserlogsInput = {
    id?: string
    name: string
    email: string
    email_verified?: Date | string | null
    password: string
    image?: string | null
    phone_number?: string | null
    region: string
    mfa_enabled?: boolean
    mfa_method?: string | null
    mfa_secret?: string | null
    last_login?: Date | string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    web_authn_devices?: WebAuthnDeviceCreateNestedManyWithoutUserInput
    employee?: EmployeeCreateNestedOneWithoutUserInput
    role_definition: ConstantsCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutUserlogsInput = {
    id?: string
    name: string
    email: string
    email_verified?: Date | string | null
    password: string
    image?: string | null
    phone_number?: string | null
    region: string
    role: string
    mfa_enabled?: boolean
    mfa_method?: string | null
    mfa_secret?: string | null
    last_login?: Date | string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    web_authn_devices?: WebAuthnDeviceUncheckedCreateNestedManyWithoutUserInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserlogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserlogsInput, UserUncheckedCreateWithoutUserlogsInput>
  }

  export type ConstantsCreateWithoutLoggingInput = {
    const_id?: string
    code: string
    description?: string | null
    assets?: AssetCreateNestedManyWithoutAsset_typeInput
    Users?: UserCreateNestedManyWithoutRole_definitionInput
  }

  export type ConstantsUncheckedCreateWithoutLoggingInput = {
    const_id?: string
    code: string
    description?: string | null
    assets?: AssetUncheckedCreateNestedManyWithoutAsset_typeInput
    Users?: UserUncheckedCreateNestedManyWithoutRole_definitionInput
  }

  export type ConstantsCreateOrConnectWithoutLoggingInput = {
    where: ConstantsWhereUniqueInput
    create: XOR<ConstantsCreateWithoutLoggingInput, ConstantsUncheckedCreateWithoutLoggingInput>
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
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    mfa_method?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    web_authn_devices?: WebAuthnDeviceUpdateManyWithoutUserNestedInput
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    role_definition?: ConstantsUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutUserlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    mfa_method?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    web_authn_devices?: WebAuthnDeviceUncheckedUpdateManyWithoutUserNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
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
    assets?: AssetUpdateManyWithoutAsset_typeNestedInput
    Users?: UserUpdateManyWithoutRole_definitionNestedInput
  }

  export type ConstantsUncheckedUpdateWithoutLoggingInput = {
    const_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetUncheckedUpdateManyWithoutAsset_typeNestedInput
    Users?: UserUncheckedUpdateManyWithoutRole_definitionNestedInput
  }

  export type AssetCreateWithoutViewsInput = {
    id?: string
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
    asset_type: ConstantsCreateNestedOneWithoutAssetsInput
    ownerships?: CandidateAssetOwnershipCreateNestedManyWithoutAssetInput
    bookmarks?: BookmarkCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutViewsInput = {
    id?: string
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
    ownerships?: CandidateAssetOwnershipUncheckedCreateNestedManyWithoutAssetInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutViewsInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutViewsInput, AssetUncheckedCreateWithoutViewsInput>
  }

  export type AssetUpsertWithoutViewsInput = {
    update: XOR<AssetUpdateWithoutViewsInput, AssetUncheckedUpdateWithoutViewsInput>
    create: XOR<AssetCreateWithoutViewsInput, AssetUncheckedCreateWithoutViewsInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutViewsInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutViewsInput, AssetUncheckedUpdateWithoutViewsInput>
  }

  export type AssetUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
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
    asset_type?: ConstantsUpdateOneRequiredWithoutAssetsNestedInput
    ownerships?: CandidateAssetOwnershipUpdateManyWithoutAssetNestedInput
    bookmarks?: BookmarkUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
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
    ownerships?: CandidateAssetOwnershipUncheckedUpdateManyWithoutAssetNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateWithoutBookmarksInput = {
    id?: string
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
    asset_type: ConstantsCreateNestedOneWithoutAssetsInput
    ownerships?: CandidateAssetOwnershipCreateNestedManyWithoutAssetInput
    views?: ViewCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutBookmarksInput = {
    id?: string
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
    ownerships?: CandidateAssetOwnershipUncheckedCreateNestedManyWithoutAssetInput
    views?: ViewUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutBookmarksInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutBookmarksInput, AssetUncheckedCreateWithoutBookmarksInput>
  }

  export type AssetUpsertWithoutBookmarksInput = {
    update: XOR<AssetUpdateWithoutBookmarksInput, AssetUncheckedUpdateWithoutBookmarksInput>
    create: XOR<AssetCreateWithoutBookmarksInput, AssetUncheckedCreateWithoutBookmarksInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutBookmarksInput, AssetUncheckedUpdateWithoutBookmarksInput>
  }

  export type AssetUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
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
    asset_type?: ConstantsUpdateOneRequiredWithoutAssetsNestedInput
    ownerships?: CandidateAssetOwnershipUpdateManyWithoutAssetNestedInput
    views?: ViewUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
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
    ownerships?: CandidateAssetOwnershipUncheckedUpdateManyWithoutAssetNestedInput
    views?: ViewUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateWithoutAsset_typeInput = {
    id?: string
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
    ownerships?: CandidateAssetOwnershipCreateNestedManyWithoutAssetInput
    views?: ViewCreateNestedManyWithoutAssetInput
    bookmarks?: BookmarkCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutAsset_typeInput = {
    id?: string
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
    ownerships?: CandidateAssetOwnershipUncheckedCreateNestedManyWithoutAssetInput
    views?: ViewUncheckedCreateNestedManyWithoutAssetInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutAsset_typeInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutAsset_typeInput, AssetUncheckedCreateWithoutAsset_typeInput>
  }

  export type AssetCreateManyAsset_typeInputEnvelope = {
    data: AssetCreateManyAsset_typeInput | AssetCreateManyAsset_typeInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutRole_definitionInput = {
    id?: string
    name: string
    email: string
    email_verified?: Date | string | null
    password: string
    image?: string | null
    phone_number?: string | null
    region: string
    mfa_enabled?: boolean
    mfa_method?: string | null
    mfa_secret?: string | null
    last_login?: Date | string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    web_authn_devices?: WebAuthnDeviceCreateNestedManyWithoutUserInput
    employee?: EmployeeCreateNestedOneWithoutUserInput
    userlogs?: LoggingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRole_definitionInput = {
    id?: string
    name: string
    email: string
    email_verified?: Date | string | null
    password: string
    image?: string | null
    phone_number?: string | null
    region: string
    mfa_enabled?: boolean
    mfa_method?: string | null
    mfa_secret?: string | null
    last_login?: Date | string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    web_authn_devices?: WebAuthnDeviceUncheckedCreateNestedManyWithoutUserInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    userlogs?: LoggingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRole_definitionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRole_definitionInput, UserUncheckedCreateWithoutRole_definitionInput>
  }

  export type UserCreateManyRole_definitionInputEnvelope = {
    data: UserCreateManyRole_definitionInput | UserCreateManyRole_definitionInput[]
    skipDuplicates?: boolean
  }

  export type LoggingCreateWithoutAction_definitionInput = {
    id?: string
    activity_time?: Date | string
    details?: string | null
    ip_address?: string | null
    user_agent?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
    user: UserCreateNestedOneWithoutUserlogsInput
  }

  export type LoggingUncheckedCreateWithoutAction_definitionInput = {
    id?: string
    user_id: string
    activity_time?: Date | string
    details?: string | null
    ip_address?: string | null
    user_agent?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type LoggingCreateOrConnectWithoutAction_definitionInput = {
    where: LoggingWhereUniqueInput
    create: XOR<LoggingCreateWithoutAction_definitionInput, LoggingUncheckedCreateWithoutAction_definitionInput>
  }

  export type LoggingCreateManyAction_definitionInputEnvelope = {
    data: LoggingCreateManyAction_definitionInput | LoggingCreateManyAction_definitionInput[]
    skipDuplicates?: boolean
  }

  export type AssetUpsertWithWhereUniqueWithoutAsset_typeInput = {
    where: AssetWhereUniqueInput
    update: XOR<AssetUpdateWithoutAsset_typeInput, AssetUncheckedUpdateWithoutAsset_typeInput>
    create: XOR<AssetCreateWithoutAsset_typeInput, AssetUncheckedCreateWithoutAsset_typeInput>
  }

  export type AssetUpdateWithWhereUniqueWithoutAsset_typeInput = {
    where: AssetWhereUniqueInput
    data: XOR<AssetUpdateWithoutAsset_typeInput, AssetUncheckedUpdateWithoutAsset_typeInput>
  }

  export type AssetUpdateManyWithWhereWithoutAsset_typeInput = {
    where: AssetScalarWhereInput
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyWithoutAsset_typeInput>
  }

  export type AssetScalarWhereInput = {
    AND?: AssetScalarWhereInput | AssetScalarWhereInput[]
    OR?: AssetScalarWhereInput[]
    NOT?: AssetScalarWhereInput | AssetScalarWhereInput[]
    id?: StringFilter<"Asset"> | string
    asset_type_id?: StringFilter<"Asset"> | string
    description?: StringNullableFilter<"Asset"> | string | null
    region?: StringNullableFilter<"Asset"> | string | null
    quantity?: FloatNullableFilter<"Asset"> | number | null
    unit_of_measurement?: StringNullableFilter<"Asset"> | string | null
    unit_value?: FloatNullableFilter<"Asset"> | number | null
    total_value?: FloatNullableFilter<"Asset"> | number | null
    income_generated?: FloatNullableFilter<"Asset"> | number | null
    valuation_method?: StringFilter<"Asset"> | string
    valuation_date?: DateTimeFilter<"Asset"> | Date | string
    source_platform?: StringNullableFilter<"Asset"> | string | null
    created_by?: StringNullableFilter<"Asset"> | string | null
    created_date?: DateTimeFilter<"Asset"> | Date | string
    modified_by?: StringNullableFilter<"Asset"> | string | null
    modified_date?: DateTimeFilter<"Asset"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutRole_definitionInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRole_definitionInput, UserUncheckedUpdateWithoutRole_definitionInput>
    create: XOR<UserCreateWithoutRole_definitionInput, UserUncheckedCreateWithoutRole_definitionInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRole_definitionInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRole_definitionInput, UserUncheckedUpdateWithoutRole_definitionInput>
  }

  export type UserUpdateManyWithWhereWithoutRole_definitionInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRole_definitionInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    email_verified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    phone_number?: StringNullableFilter<"User"> | string | null
    region?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    mfa_enabled?: BoolFilter<"User"> | boolean
    mfa_method?: StringNullableFilter<"User"> | string | null
    mfa_secret?: StringNullableFilter<"User"> | string | null
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    created_by?: StringNullableFilter<"User"> | string | null
    created_date?: DateTimeFilter<"User"> | Date | string
    modified_by?: StringNullableFilter<"User"> | string | null
    modified_date?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type LoggingUpsertWithWhereUniqueWithoutAction_definitionInput = {
    where: LoggingWhereUniqueInput
    update: XOR<LoggingUpdateWithoutAction_definitionInput, LoggingUncheckedUpdateWithoutAction_definitionInput>
    create: XOR<LoggingCreateWithoutAction_definitionInput, LoggingUncheckedCreateWithoutAction_definitionInput>
  }

  export type LoggingUpdateWithWhereUniqueWithoutAction_definitionInput = {
    where: LoggingWhereUniqueInput
    data: XOR<LoggingUpdateWithoutAction_definitionInput, LoggingUncheckedUpdateWithoutAction_definitionInput>
  }

  export type LoggingUpdateManyWithWhereWithoutAction_definitionInput = {
    where: LoggingScalarWhereInput
    data: XOR<LoggingUpdateManyMutationInput, LoggingUncheckedUpdateManyWithoutAction_definitionInput>
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    provider_account_id: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    session_token: string
    expires: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WebAuthnDeviceCreateManyUserInput = {
    credential_id: string
    public_key: string
    counter: number
    device_type: string
    backed_up: boolean
    transports?: string | null
    friendly_name?: string | null
    last_used?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LoggingCreateManyUserInput = {
    id?: string
    action_type: string
    activity_time?: Date | string
    details?: string | null
    ip_address?: string | null
    user_agent?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    provider_account_id?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    provider_account_id?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    provider_account_id?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebAuthnDeviceUpdateWithoutUserInput = {
    credential_id?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    device_type?: StringFieldUpdateOperationsInput | string
    backed_up?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    friendly_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebAuthnDeviceUncheckedUpdateWithoutUserInput = {
    credential_id?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    device_type?: StringFieldUpdateOperationsInput | string
    backed_up?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    friendly_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebAuthnDeviceUncheckedUpdateManyWithoutUserInput = {
    credential_id?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    device_type?: StringFieldUpdateOperationsInput | string
    backed_up?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    friendly_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoggingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    action_definition?: ConstantsUpdateOneRequiredWithoutLoggingNestedInput
  }

  export type LoggingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action_type?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoggingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action_type?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManyCompanyInput = {
    user_id: string
  }

  export type EmployeeUpdateWithoutCompanyInput = {
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutCompanyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUncheckedUpdateManyWithoutCompanyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateAssetOwnershipCreateManyAssetInput = {
    id?: string
    candidate_id: string
    ownership_percentage: number
  }

  export type ViewCreateManyAssetInput = {
    id?: string
    viewed_by: string
    viewed_at?: Date | string
  }

  export type BookmarkCreateManyAssetInput = {
    id?: string
    bookmarked_by: string
    bookmarked_at?: Date | string
  }

  export type CandidateAssetOwnershipUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownership_percentage?: FloatFieldUpdateOperationsInput | number
    candidate?: CandidateUpdateOneRequiredWithoutAsset_ownershipsNestedInput
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

  export type ViewUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewed_by?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewed_by?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewUncheckedUpdateManyWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewed_by?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookmarked_by?: StringFieldUpdateOperationsInput | string
    bookmarked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookmarked_by?: StringFieldUpdateOperationsInput | string
    bookmarked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookmarked_by?: StringFieldUpdateOperationsInput | string
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
    asset?: AssetUpdateOneRequiredWithoutOwnershipsNestedInput
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

  export type AssetCreateManyAsset_typeInput = {
    id?: string
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

  export type UserCreateManyRole_definitionInput = {
    id?: string
    name: string
    email: string
    email_verified?: Date | string | null
    password: string
    image?: string | null
    phone_number?: string | null
    region: string
    mfa_enabled?: boolean
    mfa_method?: string | null
    mfa_secret?: string | null
    last_login?: Date | string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string | null
  }

  export type LoggingCreateManyAction_definitionInput = {
    id?: string
    user_id: string
    activity_time?: Date | string
    details?: string | null
    ip_address?: string | null
    user_agent?: string | null
    created_by?: string | null
    created_date?: Date | string
    modified_by?: string | null
    modified_date?: Date | string
  }

  export type AssetUpdateWithoutAsset_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
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
    ownerships?: CandidateAssetOwnershipUpdateManyWithoutAssetNestedInput
    views?: ViewUpdateManyWithoutAssetNestedInput
    bookmarks?: BookmarkUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutAsset_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
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
    ownerships?: CandidateAssetOwnershipUncheckedUpdateManyWithoutAssetNestedInput
    views?: ViewUncheckedUpdateManyWithoutAssetNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateManyWithoutAsset_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
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

  export type UserUpdateWithoutRole_definitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    mfa_method?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    web_authn_devices?: WebAuthnDeviceUpdateManyWithoutUserNestedInput
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRole_definitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    mfa_method?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    web_authn_devices?: WebAuthnDeviceUncheckedUpdateManyWithoutUserNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    userlogs?: LoggingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRole_definitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    mfa_method?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoggingUpdateWithoutAction_definitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserlogsNestedInput
  }

  export type LoggingUncheckedUpdateWithoutAction_definitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_by?: NullableStringFieldUpdateOperationsInput | string | null
    modified_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoggingUncheckedUpdateManyWithoutAction_definitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    activity_time?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
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