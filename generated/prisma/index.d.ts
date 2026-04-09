
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model SubCategory
 * 
 */
export type SubCategory = $Result.DefaultSelection<Prisma.$SubCategoryPayload>
/**
 * Model AttributeOption
 * 
 */
export type AttributeOption = $Result.DefaultSelection<Prisma.$AttributeOptionPayload>
/**
 * Model Attribute
 * 
 */
export type Attribute = $Result.DefaultSelection<Prisma.$AttributePayload>
/**
 * Model SubCategoryAttribute
 * 
 */
export type SubCategoryAttribute = $Result.DefaultSelection<Prisma.$SubCategoryAttributePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model ProductAttribute
 * 
 */
export type ProductAttribute = $Result.DefaultSelection<Prisma.$ProductAttributePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AttributeType: {
  STRING: 'STRING',
  NUMBER: 'NUMBER',
  BOOLEAN: 'BOOLEAN',
  SELECT: 'SELECT'
};

export type AttributeType = (typeof AttributeType)[keyof typeof AttributeType]


export const Rol: {
  admin: 'admin',
  user: 'user'
};

export type Rol = (typeof Rol)[keyof typeof Rol]

}

export type AttributeType = $Enums.AttributeType

export const AttributeType: typeof $Enums.AttributeType

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subCategory`: Exposes CRUD operations for the **SubCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubCategories
    * const subCategories = await prisma.subCategory.findMany()
    * ```
    */
  get subCategory(): Prisma.SubCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attributeOption`: Exposes CRUD operations for the **AttributeOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttributeOptions
    * const attributeOptions = await prisma.attributeOption.findMany()
    * ```
    */
  get attributeOption(): Prisma.AttributeOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attribute`: Exposes CRUD operations for the **Attribute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attributes
    * const attributes = await prisma.attribute.findMany()
    * ```
    */
  get attribute(): Prisma.AttributeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subCategoryAttribute`: Exposes CRUD operations for the **SubCategoryAttribute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubCategoryAttributes
    * const subCategoryAttributes = await prisma.subCategoryAttribute.findMany()
    * ```
    */
  get subCategoryAttribute(): Prisma.SubCategoryAttributeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productAttribute`: Exposes CRUD operations for the **ProductAttribute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductAttributes
    * const productAttributes = await prisma.productAttribute.findMany()
    * ```
    */
  get productAttribute(): Prisma.ProductAttributeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Category: 'Category',
    SubCategory: 'SubCategory',
    AttributeOption: 'AttributeOption',
    Attribute: 'Attribute',
    SubCategoryAttribute: 'SubCategoryAttribute',
    Product: 'Product',
    Brand: 'Brand',
    ProductAttribute: 'ProductAttribute',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "category" | "subCategory" | "attributeOption" | "attribute" | "subCategoryAttribute" | "product" | "brand" | "productAttribute" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      SubCategory: {
        payload: Prisma.$SubCategoryPayload<ExtArgs>
        fields: Prisma.SubCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findFirst: {
            args: Prisma.SubCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findMany: {
            args: Prisma.SubCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          create: {
            args: Prisma.SubCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          createMany: {
            args: Prisma.SubCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          delete: {
            args: Prisma.SubCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          update: {
            args: Prisma.SubCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SubCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          upsert: {
            args: Prisma.SubCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          aggregate: {
            args: Prisma.SubCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubCategory>
          }
          groupBy: {
            args: Prisma.SubCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SubCategoryCountAggregateOutputType> | number
          }
        }
      }
      AttributeOption: {
        payload: Prisma.$AttributeOptionPayload<ExtArgs>
        fields: Prisma.AttributeOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttributeOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttributeOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>
          }
          findFirst: {
            args: Prisma.AttributeOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttributeOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>
          }
          findMany: {
            args: Prisma.AttributeOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>[]
          }
          create: {
            args: Prisma.AttributeOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>
          }
          createMany: {
            args: Prisma.AttributeOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttributeOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>[]
          }
          delete: {
            args: Prisma.AttributeOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>
          }
          update: {
            args: Prisma.AttributeOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>
          }
          deleteMany: {
            args: Prisma.AttributeOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttributeOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttributeOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>[]
          }
          upsert: {
            args: Prisma.AttributeOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>
          }
          aggregate: {
            args: Prisma.AttributeOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttributeOption>
          }
          groupBy: {
            args: Prisma.AttributeOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttributeOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttributeOptionCountArgs<ExtArgs>
            result: $Utils.Optional<AttributeOptionCountAggregateOutputType> | number
          }
        }
      }
      Attribute: {
        payload: Prisma.$AttributePayload<ExtArgs>
        fields: Prisma.AttributeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttributeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttributeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          findFirst: {
            args: Prisma.AttributeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttributeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          findMany: {
            args: Prisma.AttributeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>[]
          }
          create: {
            args: Prisma.AttributeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          createMany: {
            args: Prisma.AttributeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttributeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>[]
          }
          delete: {
            args: Prisma.AttributeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          update: {
            args: Prisma.AttributeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          deleteMany: {
            args: Prisma.AttributeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttributeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttributeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>[]
          }
          upsert: {
            args: Prisma.AttributeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          aggregate: {
            args: Prisma.AttributeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttribute>
          }
          groupBy: {
            args: Prisma.AttributeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttributeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttributeCountArgs<ExtArgs>
            result: $Utils.Optional<AttributeCountAggregateOutputType> | number
          }
        }
      }
      SubCategoryAttribute: {
        payload: Prisma.$SubCategoryAttributePayload<ExtArgs>
        fields: Prisma.SubCategoryAttributeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubCategoryAttributeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryAttributePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubCategoryAttributeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryAttributePayload>
          }
          findFirst: {
            args: Prisma.SubCategoryAttributeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryAttributePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubCategoryAttributeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryAttributePayload>
          }
          findMany: {
            args: Prisma.SubCategoryAttributeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryAttributePayload>[]
          }
          create: {
            args: Prisma.SubCategoryAttributeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryAttributePayload>
          }
          createMany: {
            args: Prisma.SubCategoryAttributeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubCategoryAttributeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryAttributePayload>[]
          }
          delete: {
            args: Prisma.SubCategoryAttributeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryAttributePayload>
          }
          update: {
            args: Prisma.SubCategoryAttributeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryAttributePayload>
          }
          deleteMany: {
            args: Prisma.SubCategoryAttributeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubCategoryAttributeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubCategoryAttributeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryAttributePayload>[]
          }
          upsert: {
            args: Prisma.SubCategoryAttributeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryAttributePayload>
          }
          aggregate: {
            args: Prisma.SubCategoryAttributeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubCategoryAttribute>
          }
          groupBy: {
            args: Prisma.SubCategoryAttributeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubCategoryAttributeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubCategoryAttributeCountArgs<ExtArgs>
            result: $Utils.Optional<SubCategoryAttributeCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      ProductAttribute: {
        payload: Prisma.$ProductAttributePayload<ExtArgs>
        fields: Prisma.ProductAttributeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductAttributeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductAttributeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload>
          }
          findFirst: {
            args: Prisma.ProductAttributeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductAttributeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload>
          }
          findMany: {
            args: Prisma.ProductAttributeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload>[]
          }
          create: {
            args: Prisma.ProductAttributeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload>
          }
          createMany: {
            args: Prisma.ProductAttributeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductAttributeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload>[]
          }
          delete: {
            args: Prisma.ProductAttributeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload>
          }
          update: {
            args: Prisma.ProductAttributeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload>
          }
          deleteMany: {
            args: Prisma.ProductAttributeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductAttributeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductAttributeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload>[]
          }
          upsert: {
            args: Prisma.ProductAttributeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributePayload>
          }
          aggregate: {
            args: Prisma.ProductAttributeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductAttribute>
          }
          groupBy: {
            args: Prisma.ProductAttributeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductAttributeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductAttributeCountArgs<ExtArgs>
            result: $Utils.Optional<ProductAttributeCountAggregateOutputType> | number
          }
        }
      }
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    category?: CategoryOmit
    subCategory?: SubCategoryOmit
    attributeOption?: AttributeOptionOmit
    attribute?: AttributeOmit
    subCategoryAttribute?: SubCategoryAttributeOmit
    product?: ProductOmit
    brand?: BrandOmit
    productAttribute?: ProductAttributeOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    subCategories: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategories?: boolean | CategoryCountOutputTypeCountSubCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
  }


  /**
   * Count Type SubCategoryCountOutputType
   */

  export type SubCategoryCountOutputType = {
    products: number
    attributes: number
  }

  export type SubCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | SubCategoryCountOutputTypeCountProductsArgs
    attributes?: boolean | SubCategoryCountOutputTypeCountAttributesArgs
  }

  // Custom InputTypes
  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryCountOutputType
     */
    select?: SubCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeCountAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryAttributeWhereInput
  }


  /**
   * Count Type AttributeOptionCountOutputType
   */

  export type AttributeOptionCountOutputType = {
    productAttributes: number
  }

  export type AttributeOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productAttributes?: boolean | AttributeOptionCountOutputTypeCountProductAttributesArgs
  }

  // Custom InputTypes
  /**
   * AttributeOptionCountOutputType without action
   */
  export type AttributeOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOptionCountOutputType
     */
    select?: AttributeOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttributeOptionCountOutputType without action
   */
  export type AttributeOptionCountOutputTypeCountProductAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAttributeWhereInput
  }


  /**
   * Count Type AttributeCountOutputType
   */

  export type AttributeCountOutputType = {
    options: number
    subCategories: number
    productAttributes: number
  }

  export type AttributeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | AttributeCountOutputTypeCountOptionsArgs
    subCategories?: boolean | AttributeCountOutputTypeCountSubCategoriesArgs
    productAttributes?: boolean | AttributeCountOutputTypeCountProductAttributesArgs
  }

  // Custom InputTypes
  /**
   * AttributeCountOutputType without action
   */
  export type AttributeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeCountOutputType
     */
    select?: AttributeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttributeCountOutputType without action
   */
  export type AttributeCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeOptionWhereInput
  }

  /**
   * AttributeCountOutputType without action
   */
  export type AttributeCountOutputTypeCountSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryAttributeWhereInput
  }

  /**
   * AttributeCountOutputType without action
   */
  export type AttributeCountOutputTypeCountProductAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAttributeWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    productAttributes: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productAttributes?: boolean | ProductCountOutputTypeCountProductAttributesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAttributeWhereInput
  }


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    products: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | BrandCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subCategories?: boolean | Category$subCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategories?: boolean | Category$subCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      subCategories: Prisma.$SubCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subCategories<T extends Category$subCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$subCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.subCategories
   */
  export type Category$subCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    cursor?: SubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model SubCategory
   */

  export type AggregateSubCategory = {
    _count: SubCategoryCountAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  export type SubCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    categoryId: string | null
  }

  export type SubCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    categoryId: string | null
  }

  export type SubCategoryCountAggregateOutputType = {
    id: number
    name: number
    categoryId: number
    _all: number
  }


  export type SubCategoryMinAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
  }

  export type SubCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
  }

  export type SubCategoryCountAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    _all?: true
  }

  export type SubCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategory to aggregate.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubCategories
    **/
    _count?: true | SubCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubCategoryMaxAggregateInputType
  }

  export type GetSubCategoryAggregateType<T extends SubCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubCategory[P]>
      : GetScalarType<T[P], AggregateSubCategory[P]>
  }




  export type SubCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithAggregationInput | SubCategoryOrderByWithAggregationInput[]
    by: SubCategoryScalarFieldEnum[] | SubCategoryScalarFieldEnum
    having?: SubCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubCategoryCountAggregateInputType | true
    _min?: SubCategoryMinAggregateInputType
    _max?: SubCategoryMaxAggregateInputType
  }

  export type SubCategoryGroupByOutputType = {
    id: string
    name: string
    categoryId: string
    _count: SubCategoryCountAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  type GetSubCategoryGroupByPayload<T extends SubCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SubCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    products?: boolean | SubCategory$productsArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    attributes?: boolean | SubCategory$attributesArgs<ExtArgs>
    _count?: boolean | SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>

  export type SubCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>

  export type SubCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>

  export type SubCategorySelectScalar = {
    id?: boolean
    name?: boolean
    categoryId?: boolean
  }

  export type SubCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "categoryId", ExtArgs["result"]["subCategory"]>
  export type SubCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | SubCategory$productsArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    attributes?: boolean | SubCategory$attributesArgs<ExtArgs>
    _count?: boolean | SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type SubCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $SubCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubCategory"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
      category: Prisma.$CategoryPayload<ExtArgs>
      attributes: Prisma.$SubCategoryAttributePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      categoryId: string
    }, ExtArgs["result"]["subCategory"]>
    composites: {}
  }

  type SubCategoryGetPayload<S extends boolean | null | undefined | SubCategoryDefaultArgs> = $Result.GetResult<Prisma.$SubCategoryPayload, S>

  type SubCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubCategoryCountAggregateInputType | true
    }

  export interface SubCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubCategory'], meta: { name: 'SubCategory' } }
    /**
     * Find zero or one SubCategory that matches the filter.
     * @param {SubCategoryFindUniqueArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubCategoryFindUniqueArgs>(args: SelectSubset<T, SubCategoryFindUniqueArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubCategoryFindUniqueOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SubCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubCategoryFindFirstArgs>(args?: SelectSubset<T, SubCategoryFindFirstArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SubCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubCategories
     * const subCategories = await prisma.subCategory.findMany()
     * 
     * // Get first 10 SubCategories
     * const subCategories = await prisma.subCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubCategoryFindManyArgs>(args?: SelectSubset<T, SubCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubCategory.
     * @param {SubCategoryCreateArgs} args - Arguments to create a SubCategory.
     * @example
     * // Create one SubCategory
     * const SubCategory = await prisma.subCategory.create({
     *   data: {
     *     // ... data to create a SubCategory
     *   }
     * })
     * 
     */
    create<T extends SubCategoryCreateArgs>(args: SelectSubset<T, SubCategoryCreateArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubCategories.
     * @param {SubCategoryCreateManyArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategory = await prisma.subCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubCategoryCreateManyArgs>(args?: SelectSubset<T, SubCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubCategories and returns the data saved in the database.
     * @param {SubCategoryCreateManyAndReturnArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategory = await prisma.subCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubCategories and only return the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SubCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubCategory.
     * @param {SubCategoryDeleteArgs} args - Arguments to delete one SubCategory.
     * @example
     * // Delete one SubCategory
     * const SubCategory = await prisma.subCategory.delete({
     *   where: {
     *     // ... filter to delete one SubCategory
     *   }
     * })
     * 
     */
    delete<T extends SubCategoryDeleteArgs>(args: SelectSubset<T, SubCategoryDeleteArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubCategory.
     * @param {SubCategoryUpdateArgs} args - Arguments to update one SubCategory.
     * @example
     * // Update one SubCategory
     * const subCategory = await prisma.subCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubCategoryUpdateArgs>(args: SelectSubset<T, SubCategoryUpdateArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubCategories.
     * @param {SubCategoryDeleteManyArgs} args - Arguments to filter SubCategories to delete.
     * @example
     * // Delete a few SubCategories
     * const { count } = await prisma.subCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubCategoryDeleteManyArgs>(args?: SelectSubset<T, SubCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubCategories
     * const subCategory = await prisma.subCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubCategoryUpdateManyArgs>(args: SelectSubset<T, SubCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories and returns the data updated in the database.
     * @param {SubCategoryUpdateManyAndReturnArgs} args - Arguments to update many SubCategories.
     * @example
     * // Update many SubCategories
     * const subCategory = await prisma.subCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubCategories and only return the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SubCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubCategory.
     * @param {SubCategoryUpsertArgs} args - Arguments to update or create a SubCategory.
     * @example
     * // Update or create a SubCategory
     * const subCategory = await prisma.subCategory.upsert({
     *   create: {
     *     // ... data to create a SubCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubCategory we want to update
     *   }
     * })
     */
    upsert<T extends SubCategoryUpsertArgs>(args: SelectSubset<T, SubCategoryUpsertArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryCountArgs} args - Arguments to filter SubCategories to count.
     * @example
     * // Count the number of SubCategories
     * const count = await prisma.subCategory.count({
     *   where: {
     *     // ... the filter for the SubCategories we want to count
     *   }
     * })
    **/
    count<T extends SubCategoryCountArgs>(
      args?: Subset<T, SubCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubCategoryAggregateArgs>(args: Subset<T, SubCategoryAggregateArgs>): Prisma.PrismaPromise<GetSubCategoryAggregateType<T>>

    /**
     * Group by SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryGroupByArgs} args - Group by arguments.
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
      T extends SubCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SubCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubCategory model
   */
  readonly fields: SubCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends SubCategory$productsArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attributes<T extends SubCategory$attributesArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$attributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryAttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubCategory model
   */
  interface SubCategoryFieldRefs {
    readonly id: FieldRef<"SubCategory", 'String'>
    readonly name: FieldRef<"SubCategory", 'String'>
    readonly categoryId: FieldRef<"SubCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubCategory findUnique
   */
  export type SubCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory findUniqueOrThrow
   */
  export type SubCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory findFirst
   */
  export type SubCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory findFirstOrThrow
   */
  export type SubCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory findMany
   */
  export type SubCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory create
   */
  export type SubCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SubCategory.
     */
    data: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
  }

  /**
   * SubCategory createMany
   */
  export type SubCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoryCreateManyInput | SubCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubCategory createManyAndReturn
   */
  export type SubCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoryCreateManyInput | SubCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCategory update
   */
  export type SubCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SubCategory.
     */
    data: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
    /**
     * Choose, which SubCategory to update.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory updateMany
   */
  export type SubCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoryWhereInput
    /**
     * Limit how many SubCategories to update.
     */
    limit?: number
  }

  /**
   * SubCategory updateManyAndReturn
   */
  export type SubCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoryWhereInput
    /**
     * Limit how many SubCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCategory upsert
   */
  export type SubCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SubCategory to update in case it exists.
     */
    where: SubCategoryWhereUniqueInput
    /**
     * In case the SubCategory found by the `where` argument doesn't exist, create a new SubCategory with this data.
     */
    create: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
    /**
     * In case the SubCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
  }

  /**
   * SubCategory delete
   */
  export type SubCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter which SubCategory to delete.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory deleteMany
   */
  export type SubCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategories to delete
     */
    where?: SubCategoryWhereInput
    /**
     * Limit how many SubCategories to delete.
     */
    limit?: number
  }

  /**
   * SubCategory.products
   */
  export type SubCategory$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * SubCategory.attributes
   */
  export type SubCategory$attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryAttribute
     */
    select?: SubCategoryAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoryAttribute
     */
    omit?: SubCategoryAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryAttributeInclude<ExtArgs> | null
    where?: SubCategoryAttributeWhereInput
    orderBy?: SubCategoryAttributeOrderByWithRelationInput | SubCategoryAttributeOrderByWithRelationInput[]
    cursor?: SubCategoryAttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoryAttributeScalarFieldEnum | SubCategoryAttributeScalarFieldEnum[]
  }

  /**
   * SubCategory without action
   */
  export type SubCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
  }


  /**
   * Model AttributeOption
   */

  export type AggregateAttributeOption = {
    _count: AttributeOptionCountAggregateOutputType | null
    _min: AttributeOptionMinAggregateOutputType | null
    _max: AttributeOptionMaxAggregateOutputType | null
  }

  export type AttributeOptionMinAggregateOutputType = {
    id: string | null
    value: string | null
    attributeId: string | null
  }

  export type AttributeOptionMaxAggregateOutputType = {
    id: string | null
    value: string | null
    attributeId: string | null
  }

  export type AttributeOptionCountAggregateOutputType = {
    id: number
    value: number
    attributeId: number
    _all: number
  }


  export type AttributeOptionMinAggregateInputType = {
    id?: true
    value?: true
    attributeId?: true
  }

  export type AttributeOptionMaxAggregateInputType = {
    id?: true
    value?: true
    attributeId?: true
  }

  export type AttributeOptionCountAggregateInputType = {
    id?: true
    value?: true
    attributeId?: true
    _all?: true
  }

  export type AttributeOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributeOption to aggregate.
     */
    where?: AttributeOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeOptions to fetch.
     */
    orderBy?: AttributeOptionOrderByWithRelationInput | AttributeOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttributeOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttributeOptions
    **/
    _count?: true | AttributeOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttributeOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttributeOptionMaxAggregateInputType
  }

  export type GetAttributeOptionAggregateType<T extends AttributeOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateAttributeOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttributeOption[P]>
      : GetScalarType<T[P], AggregateAttributeOption[P]>
  }




  export type AttributeOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeOptionWhereInput
    orderBy?: AttributeOptionOrderByWithAggregationInput | AttributeOptionOrderByWithAggregationInput[]
    by: AttributeOptionScalarFieldEnum[] | AttributeOptionScalarFieldEnum
    having?: AttributeOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttributeOptionCountAggregateInputType | true
    _min?: AttributeOptionMinAggregateInputType
    _max?: AttributeOptionMaxAggregateInputType
  }

  export type AttributeOptionGroupByOutputType = {
    id: string
    value: string
    attributeId: string
    _count: AttributeOptionCountAggregateOutputType | null
    _min: AttributeOptionMinAggregateOutputType | null
    _max: AttributeOptionMaxAggregateOutputType | null
  }

  type GetAttributeOptionGroupByPayload<T extends AttributeOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttributeOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttributeOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttributeOptionGroupByOutputType[P]>
            : GetScalarType<T[P], AttributeOptionGroupByOutputType[P]>
        }
      >
    >


  export type AttributeOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    attributeId?: boolean
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    productAttributes?: boolean | AttributeOption$productAttributesArgs<ExtArgs>
    _count?: boolean | AttributeOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributeOption"]>

  export type AttributeOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    attributeId?: boolean
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributeOption"]>

  export type AttributeOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    attributeId?: boolean
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributeOption"]>

  export type AttributeOptionSelectScalar = {
    id?: boolean
    value?: boolean
    attributeId?: boolean
  }

  export type AttributeOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "attributeId", ExtArgs["result"]["attributeOption"]>
  export type AttributeOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    productAttributes?: boolean | AttributeOption$productAttributesArgs<ExtArgs>
    _count?: boolean | AttributeOptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttributeOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }
  export type AttributeOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }

  export type $AttributeOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttributeOption"
    objects: {
      attribute: Prisma.$AttributePayload<ExtArgs>
      productAttributes: Prisma.$ProductAttributePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: string
      attributeId: string
    }, ExtArgs["result"]["attributeOption"]>
    composites: {}
  }

  type AttributeOptionGetPayload<S extends boolean | null | undefined | AttributeOptionDefaultArgs> = $Result.GetResult<Prisma.$AttributeOptionPayload, S>

  type AttributeOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttributeOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttributeOptionCountAggregateInputType | true
    }

  export interface AttributeOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttributeOption'], meta: { name: 'AttributeOption' } }
    /**
     * Find zero or one AttributeOption that matches the filter.
     * @param {AttributeOptionFindUniqueArgs} args - Arguments to find a AttributeOption
     * @example
     * // Get one AttributeOption
     * const attributeOption = await prisma.attributeOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttributeOptionFindUniqueArgs>(args: SelectSubset<T, AttributeOptionFindUniqueArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttributeOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttributeOptionFindUniqueOrThrowArgs} args - Arguments to find a AttributeOption
     * @example
     * // Get one AttributeOption
     * const attributeOption = await prisma.attributeOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttributeOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, AttributeOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttributeOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionFindFirstArgs} args - Arguments to find a AttributeOption
     * @example
     * // Get one AttributeOption
     * const attributeOption = await prisma.attributeOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttributeOptionFindFirstArgs>(args?: SelectSubset<T, AttributeOptionFindFirstArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttributeOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionFindFirstOrThrowArgs} args - Arguments to find a AttributeOption
     * @example
     * // Get one AttributeOption
     * const attributeOption = await prisma.attributeOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttributeOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, AttributeOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttributeOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttributeOptions
     * const attributeOptions = await prisma.attributeOption.findMany()
     * 
     * // Get first 10 AttributeOptions
     * const attributeOptions = await prisma.attributeOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attributeOptionWithIdOnly = await prisma.attributeOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttributeOptionFindManyArgs>(args?: SelectSubset<T, AttributeOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttributeOption.
     * @param {AttributeOptionCreateArgs} args - Arguments to create a AttributeOption.
     * @example
     * // Create one AttributeOption
     * const AttributeOption = await prisma.attributeOption.create({
     *   data: {
     *     // ... data to create a AttributeOption
     *   }
     * })
     * 
     */
    create<T extends AttributeOptionCreateArgs>(args: SelectSubset<T, AttributeOptionCreateArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttributeOptions.
     * @param {AttributeOptionCreateManyArgs} args - Arguments to create many AttributeOptions.
     * @example
     * // Create many AttributeOptions
     * const attributeOption = await prisma.attributeOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttributeOptionCreateManyArgs>(args?: SelectSubset<T, AttributeOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttributeOptions and returns the data saved in the database.
     * @param {AttributeOptionCreateManyAndReturnArgs} args - Arguments to create many AttributeOptions.
     * @example
     * // Create many AttributeOptions
     * const attributeOption = await prisma.attributeOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttributeOptions and only return the `id`
     * const attributeOptionWithIdOnly = await prisma.attributeOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttributeOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, AttributeOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttributeOption.
     * @param {AttributeOptionDeleteArgs} args - Arguments to delete one AttributeOption.
     * @example
     * // Delete one AttributeOption
     * const AttributeOption = await prisma.attributeOption.delete({
     *   where: {
     *     // ... filter to delete one AttributeOption
     *   }
     * })
     * 
     */
    delete<T extends AttributeOptionDeleteArgs>(args: SelectSubset<T, AttributeOptionDeleteArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttributeOption.
     * @param {AttributeOptionUpdateArgs} args - Arguments to update one AttributeOption.
     * @example
     * // Update one AttributeOption
     * const attributeOption = await prisma.attributeOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttributeOptionUpdateArgs>(args: SelectSubset<T, AttributeOptionUpdateArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttributeOptions.
     * @param {AttributeOptionDeleteManyArgs} args - Arguments to filter AttributeOptions to delete.
     * @example
     * // Delete a few AttributeOptions
     * const { count } = await prisma.attributeOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttributeOptionDeleteManyArgs>(args?: SelectSubset<T, AttributeOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttributeOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttributeOptions
     * const attributeOption = await prisma.attributeOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttributeOptionUpdateManyArgs>(args: SelectSubset<T, AttributeOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttributeOptions and returns the data updated in the database.
     * @param {AttributeOptionUpdateManyAndReturnArgs} args - Arguments to update many AttributeOptions.
     * @example
     * // Update many AttributeOptions
     * const attributeOption = await prisma.attributeOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttributeOptions and only return the `id`
     * const attributeOptionWithIdOnly = await prisma.attributeOption.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttributeOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, AttributeOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttributeOption.
     * @param {AttributeOptionUpsertArgs} args - Arguments to update or create a AttributeOption.
     * @example
     * // Update or create a AttributeOption
     * const attributeOption = await prisma.attributeOption.upsert({
     *   create: {
     *     // ... data to create a AttributeOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttributeOption we want to update
     *   }
     * })
     */
    upsert<T extends AttributeOptionUpsertArgs>(args: SelectSubset<T, AttributeOptionUpsertArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttributeOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionCountArgs} args - Arguments to filter AttributeOptions to count.
     * @example
     * // Count the number of AttributeOptions
     * const count = await prisma.attributeOption.count({
     *   where: {
     *     // ... the filter for the AttributeOptions we want to count
     *   }
     * })
    **/
    count<T extends AttributeOptionCountArgs>(
      args?: Subset<T, AttributeOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttributeOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttributeOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttributeOptionAggregateArgs>(args: Subset<T, AttributeOptionAggregateArgs>): Prisma.PrismaPromise<GetAttributeOptionAggregateType<T>>

    /**
     * Group by AttributeOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionGroupByArgs} args - Group by arguments.
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
      T extends AttributeOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttributeOptionGroupByArgs['orderBy'] }
        : { orderBy?: AttributeOptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttributeOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributeOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttributeOption model
   */
  readonly fields: AttributeOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttributeOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttributeOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attribute<T extends AttributeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttributeDefaultArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productAttributes<T extends AttributeOption$productAttributesArgs<ExtArgs> = {}>(args?: Subset<T, AttributeOption$productAttributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AttributeOption model
   */
  interface AttributeOptionFieldRefs {
    readonly id: FieldRef<"AttributeOption", 'String'>
    readonly value: FieldRef<"AttributeOption", 'String'>
    readonly attributeId: FieldRef<"AttributeOption", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AttributeOption findUnique
   */
  export type AttributeOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOption to fetch.
     */
    where: AttributeOptionWhereUniqueInput
  }

  /**
   * AttributeOption findUniqueOrThrow
   */
  export type AttributeOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOption to fetch.
     */
    where: AttributeOptionWhereUniqueInput
  }

  /**
   * AttributeOption findFirst
   */
  export type AttributeOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOption to fetch.
     */
    where?: AttributeOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeOptions to fetch.
     */
    orderBy?: AttributeOptionOrderByWithRelationInput | AttributeOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributeOptions.
     */
    cursor?: AttributeOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributeOptions.
     */
    distinct?: AttributeOptionScalarFieldEnum | AttributeOptionScalarFieldEnum[]
  }

  /**
   * AttributeOption findFirstOrThrow
   */
  export type AttributeOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOption to fetch.
     */
    where?: AttributeOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeOptions to fetch.
     */
    orderBy?: AttributeOptionOrderByWithRelationInput | AttributeOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributeOptions.
     */
    cursor?: AttributeOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributeOptions.
     */
    distinct?: AttributeOptionScalarFieldEnum | AttributeOptionScalarFieldEnum[]
  }

  /**
   * AttributeOption findMany
   */
  export type AttributeOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOptions to fetch.
     */
    where?: AttributeOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeOptions to fetch.
     */
    orderBy?: AttributeOptionOrderByWithRelationInput | AttributeOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttributeOptions.
     */
    cursor?: AttributeOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributeOptions.
     */
    distinct?: AttributeOptionScalarFieldEnum | AttributeOptionScalarFieldEnum[]
  }

  /**
   * AttributeOption create
   */
  export type AttributeOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a AttributeOption.
     */
    data: XOR<AttributeOptionCreateInput, AttributeOptionUncheckedCreateInput>
  }

  /**
   * AttributeOption createMany
   */
  export type AttributeOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttributeOptions.
     */
    data: AttributeOptionCreateManyInput | AttributeOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttributeOption createManyAndReturn
   */
  export type AttributeOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * The data used to create many AttributeOptions.
     */
    data: AttributeOptionCreateManyInput | AttributeOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttributeOption update
   */
  export type AttributeOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a AttributeOption.
     */
    data: XOR<AttributeOptionUpdateInput, AttributeOptionUncheckedUpdateInput>
    /**
     * Choose, which AttributeOption to update.
     */
    where: AttributeOptionWhereUniqueInput
  }

  /**
   * AttributeOption updateMany
   */
  export type AttributeOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttributeOptions.
     */
    data: XOR<AttributeOptionUpdateManyMutationInput, AttributeOptionUncheckedUpdateManyInput>
    /**
     * Filter which AttributeOptions to update
     */
    where?: AttributeOptionWhereInput
    /**
     * Limit how many AttributeOptions to update.
     */
    limit?: number
  }

  /**
   * AttributeOption updateManyAndReturn
   */
  export type AttributeOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * The data used to update AttributeOptions.
     */
    data: XOR<AttributeOptionUpdateManyMutationInput, AttributeOptionUncheckedUpdateManyInput>
    /**
     * Filter which AttributeOptions to update
     */
    where?: AttributeOptionWhereInput
    /**
     * Limit how many AttributeOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttributeOption upsert
   */
  export type AttributeOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the AttributeOption to update in case it exists.
     */
    where: AttributeOptionWhereUniqueInput
    /**
     * In case the AttributeOption found by the `where` argument doesn't exist, create a new AttributeOption with this data.
     */
    create: XOR<AttributeOptionCreateInput, AttributeOptionUncheckedCreateInput>
    /**
     * In case the AttributeOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttributeOptionUpdateInput, AttributeOptionUncheckedUpdateInput>
  }

  /**
   * AttributeOption delete
   */
  export type AttributeOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * Filter which AttributeOption to delete.
     */
    where: AttributeOptionWhereUniqueInput
  }

  /**
   * AttributeOption deleteMany
   */
  export type AttributeOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributeOptions to delete
     */
    where?: AttributeOptionWhereInput
    /**
     * Limit how many AttributeOptions to delete.
     */
    limit?: number
  }

  /**
   * AttributeOption.productAttributes
   */
  export type AttributeOption$productAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeInclude<ExtArgs> | null
    where?: ProductAttributeWhereInput
    orderBy?: ProductAttributeOrderByWithRelationInput | ProductAttributeOrderByWithRelationInput[]
    cursor?: ProductAttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductAttributeScalarFieldEnum | ProductAttributeScalarFieldEnum[]
  }

  /**
   * AttributeOption without action
   */
  export type AttributeOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
  }


  /**
   * Model Attribute
   */

  export type AggregateAttribute = {
    _count: AttributeCountAggregateOutputType | null
    _min: AttributeMinAggregateOutputType | null
    _max: AttributeMaxAggregateOutputType | null
  }

  export type AttributeMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.AttributeType | null
    group: string | null
    unit: string | null
    required: boolean | null
  }

  export type AttributeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.AttributeType | null
    group: string | null
    unit: string | null
    required: boolean | null
  }

  export type AttributeCountAggregateOutputType = {
    id: number
    name: number
    type: number
    group: number
    unit: number
    required: number
    _all: number
  }


  export type AttributeMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    group?: true
    unit?: true
    required?: true
  }

  export type AttributeMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    group?: true
    unit?: true
    required?: true
  }

  export type AttributeCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    group?: true
    unit?: true
    required?: true
    _all?: true
  }

  export type AttributeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attribute to aggregate.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attributes
    **/
    _count?: true | AttributeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttributeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttributeMaxAggregateInputType
  }

  export type GetAttributeAggregateType<T extends AttributeAggregateArgs> = {
        [P in keyof T & keyof AggregateAttribute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttribute[P]>
      : GetScalarType<T[P], AggregateAttribute[P]>
  }




  export type AttributeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeWhereInput
    orderBy?: AttributeOrderByWithAggregationInput | AttributeOrderByWithAggregationInput[]
    by: AttributeScalarFieldEnum[] | AttributeScalarFieldEnum
    having?: AttributeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttributeCountAggregateInputType | true
    _min?: AttributeMinAggregateInputType
    _max?: AttributeMaxAggregateInputType
  }

  export type AttributeGroupByOutputType = {
    id: string
    name: string
    type: $Enums.AttributeType
    group: string
    unit: string | null
    required: boolean
    _count: AttributeCountAggregateOutputType | null
    _min: AttributeMinAggregateOutputType | null
    _max: AttributeMaxAggregateOutputType | null
  }

  type GetAttributeGroupByPayload<T extends AttributeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttributeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttributeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttributeGroupByOutputType[P]>
            : GetScalarType<T[P], AttributeGroupByOutputType[P]>
        }
      >
    >


  export type AttributeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    group?: boolean
    unit?: boolean
    required?: boolean
    options?: boolean | Attribute$optionsArgs<ExtArgs>
    subCategories?: boolean | Attribute$subCategoriesArgs<ExtArgs>
    productAttributes?: boolean | Attribute$productAttributesArgs<ExtArgs>
    _count?: boolean | AttributeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attribute"]>

  export type AttributeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    group?: boolean
    unit?: boolean
    required?: boolean
  }, ExtArgs["result"]["attribute"]>

  export type AttributeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    group?: boolean
    unit?: boolean
    required?: boolean
  }, ExtArgs["result"]["attribute"]>

  export type AttributeSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    group?: boolean
    unit?: boolean
    required?: boolean
  }

  export type AttributeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "group" | "unit" | "required", ExtArgs["result"]["attribute"]>
  export type AttributeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | Attribute$optionsArgs<ExtArgs>
    subCategories?: boolean | Attribute$subCategoriesArgs<ExtArgs>
    productAttributes?: boolean | Attribute$productAttributesArgs<ExtArgs>
    _count?: boolean | AttributeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttributeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AttributeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AttributePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attribute"
    objects: {
      options: Prisma.$AttributeOptionPayload<ExtArgs>[]
      subCategories: Prisma.$SubCategoryAttributePayload<ExtArgs>[]
      productAttributes: Prisma.$ProductAttributePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.AttributeType
      group: string
      unit: string | null
      required: boolean
    }, ExtArgs["result"]["attribute"]>
    composites: {}
  }

  type AttributeGetPayload<S extends boolean | null | undefined | AttributeDefaultArgs> = $Result.GetResult<Prisma.$AttributePayload, S>

  type AttributeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttributeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttributeCountAggregateInputType | true
    }

  export interface AttributeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attribute'], meta: { name: 'Attribute' } }
    /**
     * Find zero or one Attribute that matches the filter.
     * @param {AttributeFindUniqueArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttributeFindUniqueArgs>(args: SelectSubset<T, AttributeFindUniqueArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attribute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttributeFindUniqueOrThrowArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttributeFindUniqueOrThrowArgs>(args: SelectSubset<T, AttributeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attribute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindFirstArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttributeFindFirstArgs>(args?: SelectSubset<T, AttributeFindFirstArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attribute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindFirstOrThrowArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttributeFindFirstOrThrowArgs>(args?: SelectSubset<T, AttributeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attributes
     * const attributes = await prisma.attribute.findMany()
     * 
     * // Get first 10 Attributes
     * const attributes = await prisma.attribute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attributeWithIdOnly = await prisma.attribute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttributeFindManyArgs>(args?: SelectSubset<T, AttributeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attribute.
     * @param {AttributeCreateArgs} args - Arguments to create a Attribute.
     * @example
     * // Create one Attribute
     * const Attribute = await prisma.attribute.create({
     *   data: {
     *     // ... data to create a Attribute
     *   }
     * })
     * 
     */
    create<T extends AttributeCreateArgs>(args: SelectSubset<T, AttributeCreateArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attributes.
     * @param {AttributeCreateManyArgs} args - Arguments to create many Attributes.
     * @example
     * // Create many Attributes
     * const attribute = await prisma.attribute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttributeCreateManyArgs>(args?: SelectSubset<T, AttributeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attributes and returns the data saved in the database.
     * @param {AttributeCreateManyAndReturnArgs} args - Arguments to create many Attributes.
     * @example
     * // Create many Attributes
     * const attribute = await prisma.attribute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attributes and only return the `id`
     * const attributeWithIdOnly = await prisma.attribute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttributeCreateManyAndReturnArgs>(args?: SelectSubset<T, AttributeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attribute.
     * @param {AttributeDeleteArgs} args - Arguments to delete one Attribute.
     * @example
     * // Delete one Attribute
     * const Attribute = await prisma.attribute.delete({
     *   where: {
     *     // ... filter to delete one Attribute
     *   }
     * })
     * 
     */
    delete<T extends AttributeDeleteArgs>(args: SelectSubset<T, AttributeDeleteArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attribute.
     * @param {AttributeUpdateArgs} args - Arguments to update one Attribute.
     * @example
     * // Update one Attribute
     * const attribute = await prisma.attribute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttributeUpdateArgs>(args: SelectSubset<T, AttributeUpdateArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attributes.
     * @param {AttributeDeleteManyArgs} args - Arguments to filter Attributes to delete.
     * @example
     * // Delete a few Attributes
     * const { count } = await prisma.attribute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttributeDeleteManyArgs>(args?: SelectSubset<T, AttributeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attributes
     * const attribute = await prisma.attribute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttributeUpdateManyArgs>(args: SelectSubset<T, AttributeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attributes and returns the data updated in the database.
     * @param {AttributeUpdateManyAndReturnArgs} args - Arguments to update many Attributes.
     * @example
     * // Update many Attributes
     * const attribute = await prisma.attribute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attributes and only return the `id`
     * const attributeWithIdOnly = await prisma.attribute.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttributeUpdateManyAndReturnArgs>(args: SelectSubset<T, AttributeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attribute.
     * @param {AttributeUpsertArgs} args - Arguments to update or create a Attribute.
     * @example
     * // Update or create a Attribute
     * const attribute = await prisma.attribute.upsert({
     *   create: {
     *     // ... data to create a Attribute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attribute we want to update
     *   }
     * })
     */
    upsert<T extends AttributeUpsertArgs>(args: SelectSubset<T, AttributeUpsertArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeCountArgs} args - Arguments to filter Attributes to count.
     * @example
     * // Count the number of Attributes
     * const count = await prisma.attribute.count({
     *   where: {
     *     // ... the filter for the Attributes we want to count
     *   }
     * })
    **/
    count<T extends AttributeCountArgs>(
      args?: Subset<T, AttributeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttributeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttributeAggregateArgs>(args: Subset<T, AttributeAggregateArgs>): Prisma.PrismaPromise<GetAttributeAggregateType<T>>

    /**
     * Group by Attribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeGroupByArgs} args - Group by arguments.
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
      T extends AttributeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttributeGroupByArgs['orderBy'] }
        : { orderBy?: AttributeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttributeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attribute model
   */
  readonly fields: AttributeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attribute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttributeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    options<T extends Attribute$optionsArgs<ExtArgs> = {}>(args?: Subset<T, Attribute$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subCategories<T extends Attribute$subCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Attribute$subCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryAttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productAttributes<T extends Attribute$productAttributesArgs<ExtArgs> = {}>(args?: Subset<T, Attribute$productAttributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Attribute model
   */
  interface AttributeFieldRefs {
    readonly id: FieldRef<"Attribute", 'String'>
    readonly name: FieldRef<"Attribute", 'String'>
    readonly type: FieldRef<"Attribute", 'AttributeType'>
    readonly group: FieldRef<"Attribute", 'String'>
    readonly unit: FieldRef<"Attribute", 'String'>
    readonly required: FieldRef<"Attribute", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Attribute findUnique
   */
  export type AttributeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute findUniqueOrThrow
   */
  export type AttributeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute findFirst
   */
  export type AttributeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attributes.
     */
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * Attribute findFirstOrThrow
   */
  export type AttributeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attributes.
     */
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * Attribute findMany
   */
  export type AttributeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attributes to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attributes.
     */
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * Attribute create
   */
  export type AttributeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The data needed to create a Attribute.
     */
    data: XOR<AttributeCreateInput, AttributeUncheckedCreateInput>
  }

  /**
   * Attribute createMany
   */
  export type AttributeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attributes.
     */
    data: AttributeCreateManyInput | AttributeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attribute createManyAndReturn
   */
  export type AttributeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * The data used to create many Attributes.
     */
    data: AttributeCreateManyInput | AttributeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attribute update
   */
  export type AttributeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The data needed to update a Attribute.
     */
    data: XOR<AttributeUpdateInput, AttributeUncheckedUpdateInput>
    /**
     * Choose, which Attribute to update.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute updateMany
   */
  export type AttributeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attributes.
     */
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyInput>
    /**
     * Filter which Attributes to update
     */
    where?: AttributeWhereInput
    /**
     * Limit how many Attributes to update.
     */
    limit?: number
  }

  /**
   * Attribute updateManyAndReturn
   */
  export type AttributeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * The data used to update Attributes.
     */
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyInput>
    /**
     * Filter which Attributes to update
     */
    where?: AttributeWhereInput
    /**
     * Limit how many Attributes to update.
     */
    limit?: number
  }

  /**
   * Attribute upsert
   */
  export type AttributeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The filter to search for the Attribute to update in case it exists.
     */
    where: AttributeWhereUniqueInput
    /**
     * In case the Attribute found by the `where` argument doesn't exist, create a new Attribute with this data.
     */
    create: XOR<AttributeCreateInput, AttributeUncheckedCreateInput>
    /**
     * In case the Attribute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttributeUpdateInput, AttributeUncheckedUpdateInput>
  }

  /**
   * Attribute delete
   */
  export type AttributeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter which Attribute to delete.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute deleteMany
   */
  export type AttributeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attributes to delete
     */
    where?: AttributeWhereInput
    /**
     * Limit how many Attributes to delete.
     */
    limit?: number
  }

  /**
   * Attribute.options
   */
  export type Attribute$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    where?: AttributeOptionWhereInput
    orderBy?: AttributeOptionOrderByWithRelationInput | AttributeOptionOrderByWithRelationInput[]
    cursor?: AttributeOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttributeOptionScalarFieldEnum | AttributeOptionScalarFieldEnum[]
  }

  /**
   * Attribute.subCategories
   */
  export type Attribute$subCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryAttribute
     */
    select?: SubCategoryAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoryAttribute
     */
    omit?: SubCategoryAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryAttributeInclude<ExtArgs> | null
    where?: SubCategoryAttributeWhereInput
    orderBy?: SubCategoryAttributeOrderByWithRelationInput | SubCategoryAttributeOrderByWithRelationInput[]
    cursor?: SubCategoryAttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoryAttributeScalarFieldEnum | SubCategoryAttributeScalarFieldEnum[]
  }

  /**
   * Attribute.productAttributes
   */
  export type Attribute$productAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeInclude<ExtArgs> | null
    where?: ProductAttributeWhereInput
    orderBy?: ProductAttributeOrderByWithRelationInput | ProductAttributeOrderByWithRelationInput[]
    cursor?: ProductAttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductAttributeScalarFieldEnum | ProductAttributeScalarFieldEnum[]
  }

  /**
   * Attribute without action
   */
  export type AttributeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
  }


  /**
   * Model SubCategoryAttribute
   */

  export type AggregateSubCategoryAttribute = {
    _count: SubCategoryAttributeCountAggregateOutputType | null
    _min: SubCategoryAttributeMinAggregateOutputType | null
    _max: SubCategoryAttributeMaxAggregateOutputType | null
  }

  export type SubCategoryAttributeMinAggregateOutputType = {
    subCategoryId: string | null
    attributeId: string | null
  }

  export type SubCategoryAttributeMaxAggregateOutputType = {
    subCategoryId: string | null
    attributeId: string | null
  }

  export type SubCategoryAttributeCountAggregateOutputType = {
    subCategoryId: number
    attributeId: number
    _all: number
  }


  export type SubCategoryAttributeMinAggregateInputType = {
    subCategoryId?: true
    attributeId?: true
  }

  export type SubCategoryAttributeMaxAggregateInputType = {
    subCategoryId?: true
    attributeId?: true
  }

  export type SubCategoryAttributeCountAggregateInputType = {
    subCategoryId?: true
    attributeId?: true
    _all?: true
  }

  export type SubCategoryAttributeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategoryAttribute to aggregate.
     */
    where?: SubCategoryAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategoryAttributes to fetch.
     */
    orderBy?: SubCategoryAttributeOrderByWithRelationInput | SubCategoryAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubCategoryAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategoryAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategoryAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubCategoryAttributes
    **/
    _count?: true | SubCategoryAttributeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubCategoryAttributeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubCategoryAttributeMaxAggregateInputType
  }

  export type GetSubCategoryAttributeAggregateType<T extends SubCategoryAttributeAggregateArgs> = {
        [P in keyof T & keyof AggregateSubCategoryAttribute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubCategoryAttribute[P]>
      : GetScalarType<T[P], AggregateSubCategoryAttribute[P]>
  }




  export type SubCategoryAttributeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryAttributeWhereInput
    orderBy?: SubCategoryAttributeOrderByWithAggregationInput | SubCategoryAttributeOrderByWithAggregationInput[]
    by: SubCategoryAttributeScalarFieldEnum[] | SubCategoryAttributeScalarFieldEnum
    having?: SubCategoryAttributeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubCategoryAttributeCountAggregateInputType | true
    _min?: SubCategoryAttributeMinAggregateInputType
    _max?: SubCategoryAttributeMaxAggregateInputType
  }

  export type SubCategoryAttributeGroupByOutputType = {
    subCategoryId: string
    attributeId: string
    _count: SubCategoryAttributeCountAggregateOutputType | null
    _min: SubCategoryAttributeMinAggregateOutputType | null
    _max: SubCategoryAttributeMaxAggregateOutputType | null
  }

  type GetSubCategoryAttributeGroupByPayload<T extends SubCategoryAttributeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubCategoryAttributeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubCategoryAttributeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubCategoryAttributeGroupByOutputType[P]>
            : GetScalarType<T[P], SubCategoryAttributeGroupByOutputType[P]>
        }
      >
    >


  export type SubCategoryAttributeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subCategoryId?: boolean
    attributeId?: boolean
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategoryAttribute"]>

  export type SubCategoryAttributeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subCategoryId?: boolean
    attributeId?: boolean
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategoryAttribute"]>

  export type SubCategoryAttributeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subCategoryId?: boolean
    attributeId?: boolean
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategoryAttribute"]>

  export type SubCategoryAttributeSelectScalar = {
    subCategoryId?: boolean
    attributeId?: boolean
  }

  export type SubCategoryAttributeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"subCategoryId" | "attributeId", ExtArgs["result"]["subCategoryAttribute"]>
  export type SubCategoryAttributeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }
  export type SubCategoryAttributeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }
  export type SubCategoryAttributeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }

  export type $SubCategoryAttributePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubCategoryAttribute"
    objects: {
      subCategory: Prisma.$SubCategoryPayload<ExtArgs>
      attribute: Prisma.$AttributePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      subCategoryId: string
      attributeId: string
    }, ExtArgs["result"]["subCategoryAttribute"]>
    composites: {}
  }

  type SubCategoryAttributeGetPayload<S extends boolean | null | undefined | SubCategoryAttributeDefaultArgs> = $Result.GetResult<Prisma.$SubCategoryAttributePayload, S>

  type SubCategoryAttributeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubCategoryAttributeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubCategoryAttributeCountAggregateInputType | true
    }

  export interface SubCategoryAttributeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubCategoryAttribute'], meta: { name: 'SubCategoryAttribute' } }
    /**
     * Find zero or one SubCategoryAttribute that matches the filter.
     * @param {SubCategoryAttributeFindUniqueArgs} args - Arguments to find a SubCategoryAttribute
     * @example
     * // Get one SubCategoryAttribute
     * const subCategoryAttribute = await prisma.subCategoryAttribute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubCategoryAttributeFindUniqueArgs>(args: SelectSubset<T, SubCategoryAttributeFindUniqueArgs<ExtArgs>>): Prisma__SubCategoryAttributeClient<$Result.GetResult<Prisma.$SubCategoryAttributePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubCategoryAttribute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubCategoryAttributeFindUniqueOrThrowArgs} args - Arguments to find a SubCategoryAttribute
     * @example
     * // Get one SubCategoryAttribute
     * const subCategoryAttribute = await prisma.subCategoryAttribute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubCategoryAttributeFindUniqueOrThrowArgs>(args: SelectSubset<T, SubCategoryAttributeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubCategoryAttributeClient<$Result.GetResult<Prisma.$SubCategoryAttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategoryAttribute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryAttributeFindFirstArgs} args - Arguments to find a SubCategoryAttribute
     * @example
     * // Get one SubCategoryAttribute
     * const subCategoryAttribute = await prisma.subCategoryAttribute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubCategoryAttributeFindFirstArgs>(args?: SelectSubset<T, SubCategoryAttributeFindFirstArgs<ExtArgs>>): Prisma__SubCategoryAttributeClient<$Result.GetResult<Prisma.$SubCategoryAttributePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategoryAttribute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryAttributeFindFirstOrThrowArgs} args - Arguments to find a SubCategoryAttribute
     * @example
     * // Get one SubCategoryAttribute
     * const subCategoryAttribute = await prisma.subCategoryAttribute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubCategoryAttributeFindFirstOrThrowArgs>(args?: SelectSubset<T, SubCategoryAttributeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubCategoryAttributeClient<$Result.GetResult<Prisma.$SubCategoryAttributePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubCategoryAttributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryAttributeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubCategoryAttributes
     * const subCategoryAttributes = await prisma.subCategoryAttribute.findMany()
     * 
     * // Get first 10 SubCategoryAttributes
     * const subCategoryAttributes = await prisma.subCategoryAttribute.findMany({ take: 10 })
     * 
     * // Only select the `subCategoryId`
     * const subCategoryAttributeWithSubCategoryIdOnly = await prisma.subCategoryAttribute.findMany({ select: { subCategoryId: true } })
     * 
     */
    findMany<T extends SubCategoryAttributeFindManyArgs>(args?: SelectSubset<T, SubCategoryAttributeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryAttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubCategoryAttribute.
     * @param {SubCategoryAttributeCreateArgs} args - Arguments to create a SubCategoryAttribute.
     * @example
     * // Create one SubCategoryAttribute
     * const SubCategoryAttribute = await prisma.subCategoryAttribute.create({
     *   data: {
     *     // ... data to create a SubCategoryAttribute
     *   }
     * })
     * 
     */
    create<T extends SubCategoryAttributeCreateArgs>(args: SelectSubset<T, SubCategoryAttributeCreateArgs<ExtArgs>>): Prisma__SubCategoryAttributeClient<$Result.GetResult<Prisma.$SubCategoryAttributePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubCategoryAttributes.
     * @param {SubCategoryAttributeCreateManyArgs} args - Arguments to create many SubCategoryAttributes.
     * @example
     * // Create many SubCategoryAttributes
     * const subCategoryAttribute = await prisma.subCategoryAttribute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubCategoryAttributeCreateManyArgs>(args?: SelectSubset<T, SubCategoryAttributeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubCategoryAttributes and returns the data saved in the database.
     * @param {SubCategoryAttributeCreateManyAndReturnArgs} args - Arguments to create many SubCategoryAttributes.
     * @example
     * // Create many SubCategoryAttributes
     * const subCategoryAttribute = await prisma.subCategoryAttribute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubCategoryAttributes and only return the `subCategoryId`
     * const subCategoryAttributeWithSubCategoryIdOnly = await prisma.subCategoryAttribute.createManyAndReturn({
     *   select: { subCategoryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubCategoryAttributeCreateManyAndReturnArgs>(args?: SelectSubset<T, SubCategoryAttributeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryAttributePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubCategoryAttribute.
     * @param {SubCategoryAttributeDeleteArgs} args - Arguments to delete one SubCategoryAttribute.
     * @example
     * // Delete one SubCategoryAttribute
     * const SubCategoryAttribute = await prisma.subCategoryAttribute.delete({
     *   where: {
     *     // ... filter to delete one SubCategoryAttribute
     *   }
     * })
     * 
     */
    delete<T extends SubCategoryAttributeDeleteArgs>(args: SelectSubset<T, SubCategoryAttributeDeleteArgs<ExtArgs>>): Prisma__SubCategoryAttributeClient<$Result.GetResult<Prisma.$SubCategoryAttributePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubCategoryAttribute.
     * @param {SubCategoryAttributeUpdateArgs} args - Arguments to update one SubCategoryAttribute.
     * @example
     * // Update one SubCategoryAttribute
     * const subCategoryAttribute = await prisma.subCategoryAttribute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubCategoryAttributeUpdateArgs>(args: SelectSubset<T, SubCategoryAttributeUpdateArgs<ExtArgs>>): Prisma__SubCategoryAttributeClient<$Result.GetResult<Prisma.$SubCategoryAttributePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubCategoryAttributes.
     * @param {SubCategoryAttributeDeleteManyArgs} args - Arguments to filter SubCategoryAttributes to delete.
     * @example
     * // Delete a few SubCategoryAttributes
     * const { count } = await prisma.subCategoryAttribute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubCategoryAttributeDeleteManyArgs>(args?: SelectSubset<T, SubCategoryAttributeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategoryAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryAttributeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubCategoryAttributes
     * const subCategoryAttribute = await prisma.subCategoryAttribute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubCategoryAttributeUpdateManyArgs>(args: SelectSubset<T, SubCategoryAttributeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategoryAttributes and returns the data updated in the database.
     * @param {SubCategoryAttributeUpdateManyAndReturnArgs} args - Arguments to update many SubCategoryAttributes.
     * @example
     * // Update many SubCategoryAttributes
     * const subCategoryAttribute = await prisma.subCategoryAttribute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubCategoryAttributes and only return the `subCategoryId`
     * const subCategoryAttributeWithSubCategoryIdOnly = await prisma.subCategoryAttribute.updateManyAndReturn({
     *   select: { subCategoryId: true },
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
    updateManyAndReturn<T extends SubCategoryAttributeUpdateManyAndReturnArgs>(args: SelectSubset<T, SubCategoryAttributeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryAttributePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubCategoryAttribute.
     * @param {SubCategoryAttributeUpsertArgs} args - Arguments to update or create a SubCategoryAttribute.
     * @example
     * // Update or create a SubCategoryAttribute
     * const subCategoryAttribute = await prisma.subCategoryAttribute.upsert({
     *   create: {
     *     // ... data to create a SubCategoryAttribute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubCategoryAttribute we want to update
     *   }
     * })
     */
    upsert<T extends SubCategoryAttributeUpsertArgs>(args: SelectSubset<T, SubCategoryAttributeUpsertArgs<ExtArgs>>): Prisma__SubCategoryAttributeClient<$Result.GetResult<Prisma.$SubCategoryAttributePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubCategoryAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryAttributeCountArgs} args - Arguments to filter SubCategoryAttributes to count.
     * @example
     * // Count the number of SubCategoryAttributes
     * const count = await prisma.subCategoryAttribute.count({
     *   where: {
     *     // ... the filter for the SubCategoryAttributes we want to count
     *   }
     * })
    **/
    count<T extends SubCategoryAttributeCountArgs>(
      args?: Subset<T, SubCategoryAttributeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubCategoryAttributeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubCategoryAttribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryAttributeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubCategoryAttributeAggregateArgs>(args: Subset<T, SubCategoryAttributeAggregateArgs>): Prisma.PrismaPromise<GetSubCategoryAttributeAggregateType<T>>

    /**
     * Group by SubCategoryAttribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryAttributeGroupByArgs} args - Group by arguments.
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
      T extends SubCategoryAttributeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubCategoryAttributeGroupByArgs['orderBy'] }
        : { orderBy?: SubCategoryAttributeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubCategoryAttributeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubCategoryAttributeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubCategoryAttribute model
   */
  readonly fields: SubCategoryAttributeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubCategoryAttribute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubCategoryAttributeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subCategory<T extends SubCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubCategoryDefaultArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attribute<T extends AttributeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttributeDefaultArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SubCategoryAttribute model
   */
  interface SubCategoryAttributeFieldRefs {
    readonly subCategoryId: FieldRef<"SubCategoryAttribute", 'String'>
    readonly attributeId: FieldRef<"SubCategoryAttribute", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubCategoryAttribute findUnique
   */
  export type SubCategoryAttributeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryAttribute
     */
    select?: SubCategoryAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoryAttribute
     */
    omit?: SubCategoryAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryAttributeInclude<ExtArgs> | null
    /**
     * Filter, which SubCategoryAttribute to fetch.
     */
    where: SubCategoryAttributeWhereUniqueInput
  }

  /**
   * SubCategoryAttribute findUniqueOrThrow
   */
  export type SubCategoryAttributeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryAttribute
     */
    select?: SubCategoryAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoryAttribute
     */
    omit?: SubCategoryAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryAttributeInclude<ExtArgs> | null
    /**
     * Filter, which SubCategoryAttribute to fetch.
     */
    where: SubCategoryAttributeWhereUniqueInput
  }

  /**
   * SubCategoryAttribute findFirst
   */
  export type SubCategoryAttributeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryAttribute
     */
    select?: SubCategoryAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoryAttribute
     */
    omit?: SubCategoryAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryAttributeInclude<ExtArgs> | null
    /**
     * Filter, which SubCategoryAttribute to fetch.
     */
    where?: SubCategoryAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategoryAttributes to fetch.
     */
    orderBy?: SubCategoryAttributeOrderByWithRelationInput | SubCategoryAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategoryAttributes.
     */
    cursor?: SubCategoryAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategoryAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategoryAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategoryAttributes.
     */
    distinct?: SubCategoryAttributeScalarFieldEnum | SubCategoryAttributeScalarFieldEnum[]
  }

  /**
   * SubCategoryAttribute findFirstOrThrow
   */
  export type SubCategoryAttributeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryAttribute
     */
    select?: SubCategoryAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoryAttribute
     */
    omit?: SubCategoryAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryAttributeInclude<ExtArgs> | null
    /**
     * Filter, which SubCategoryAttribute to fetch.
     */
    where?: SubCategoryAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategoryAttributes to fetch.
     */
    orderBy?: SubCategoryAttributeOrderByWithRelationInput | SubCategoryAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategoryAttributes.
     */
    cursor?: SubCategoryAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategoryAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategoryAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategoryAttributes.
     */
    distinct?: SubCategoryAttributeScalarFieldEnum | SubCategoryAttributeScalarFieldEnum[]
  }

  /**
   * SubCategoryAttribute findMany
   */
  export type SubCategoryAttributeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryAttribute
     */
    select?: SubCategoryAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoryAttribute
     */
    omit?: SubCategoryAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryAttributeInclude<ExtArgs> | null
    /**
     * Filter, which SubCategoryAttributes to fetch.
     */
    where?: SubCategoryAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategoryAttributes to fetch.
     */
    orderBy?: SubCategoryAttributeOrderByWithRelationInput | SubCategoryAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubCategoryAttributes.
     */
    cursor?: SubCategoryAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategoryAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategoryAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategoryAttributes.
     */
    distinct?: SubCategoryAttributeScalarFieldEnum | SubCategoryAttributeScalarFieldEnum[]
  }

  /**
   * SubCategoryAttribute create
   */
  export type SubCategoryAttributeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryAttribute
     */
    select?: SubCategoryAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoryAttribute
     */
    omit?: SubCategoryAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryAttributeInclude<ExtArgs> | null
    /**
     * The data needed to create a SubCategoryAttribute.
     */
    data: XOR<SubCategoryAttributeCreateInput, SubCategoryAttributeUncheckedCreateInput>
  }

  /**
   * SubCategoryAttribute createMany
   */
  export type SubCategoryAttributeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubCategoryAttributes.
     */
    data: SubCategoryAttributeCreateManyInput | SubCategoryAttributeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubCategoryAttribute createManyAndReturn
   */
  export type SubCategoryAttributeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryAttribute
     */
    select?: SubCategoryAttributeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoryAttribute
     */
    omit?: SubCategoryAttributeOmit<ExtArgs> | null
    /**
     * The data used to create many SubCategoryAttributes.
     */
    data: SubCategoryAttributeCreateManyInput | SubCategoryAttributeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryAttributeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCategoryAttribute update
   */
  export type SubCategoryAttributeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryAttribute
     */
    select?: SubCategoryAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoryAttribute
     */
    omit?: SubCategoryAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryAttributeInclude<ExtArgs> | null
    /**
     * The data needed to update a SubCategoryAttribute.
     */
    data: XOR<SubCategoryAttributeUpdateInput, SubCategoryAttributeUncheckedUpdateInput>
    /**
     * Choose, which SubCategoryAttribute to update.
     */
    where: SubCategoryAttributeWhereUniqueInput
  }

  /**
   * SubCategoryAttribute updateMany
   */
  export type SubCategoryAttributeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubCategoryAttributes.
     */
    data: XOR<SubCategoryAttributeUpdateManyMutationInput, SubCategoryAttributeUncheckedUpdateManyInput>
    /**
     * Filter which SubCategoryAttributes to update
     */
    where?: SubCategoryAttributeWhereInput
    /**
     * Limit how many SubCategoryAttributes to update.
     */
    limit?: number
  }

  /**
   * SubCategoryAttribute updateManyAndReturn
   */
  export type SubCategoryAttributeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryAttribute
     */
    select?: SubCategoryAttributeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoryAttribute
     */
    omit?: SubCategoryAttributeOmit<ExtArgs> | null
    /**
     * The data used to update SubCategoryAttributes.
     */
    data: XOR<SubCategoryAttributeUpdateManyMutationInput, SubCategoryAttributeUncheckedUpdateManyInput>
    /**
     * Filter which SubCategoryAttributes to update
     */
    where?: SubCategoryAttributeWhereInput
    /**
     * Limit how many SubCategoryAttributes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryAttributeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCategoryAttribute upsert
   */
  export type SubCategoryAttributeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryAttribute
     */
    select?: SubCategoryAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoryAttribute
     */
    omit?: SubCategoryAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryAttributeInclude<ExtArgs> | null
    /**
     * The filter to search for the SubCategoryAttribute to update in case it exists.
     */
    where: SubCategoryAttributeWhereUniqueInput
    /**
     * In case the SubCategoryAttribute found by the `where` argument doesn't exist, create a new SubCategoryAttribute with this data.
     */
    create: XOR<SubCategoryAttributeCreateInput, SubCategoryAttributeUncheckedCreateInput>
    /**
     * In case the SubCategoryAttribute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubCategoryAttributeUpdateInput, SubCategoryAttributeUncheckedUpdateInput>
  }

  /**
   * SubCategoryAttribute delete
   */
  export type SubCategoryAttributeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryAttribute
     */
    select?: SubCategoryAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoryAttribute
     */
    omit?: SubCategoryAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryAttributeInclude<ExtArgs> | null
    /**
     * Filter which SubCategoryAttribute to delete.
     */
    where: SubCategoryAttributeWhereUniqueInput
  }

  /**
   * SubCategoryAttribute deleteMany
   */
  export type SubCategoryAttributeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategoryAttributes to delete
     */
    where?: SubCategoryAttributeWhereInput
    /**
     * Limit how many SubCategoryAttributes to delete.
     */
    limit?: number
  }

  /**
   * SubCategoryAttribute without action
   */
  export type SubCategoryAttributeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryAttribute
     */
    select?: SubCategoryAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoryAttribute
     */
    omit?: SubCategoryAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryAttributeInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    stock: number | null
    price: number | null
    discountPrice: number | null
  }

  export type ProductSumAggregateOutputType = {
    stock: number | null
    price: number | null
    discountPrice: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    stock: number | null
    sku: string | null
    price: number | null
    discountPrice: number | null
    slug: string | null
    subCategoryId: string | null
    brandId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    stock: number | null
    sku: string | null
    price: number | null
    discountPrice: number | null
    slug: string | null
    subCategoryId: string | null
    brandId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    stock: number
    sku: number
    price: number
    discountPrice: number
    slug: number
    images: number
    subCategoryId: number
    brandId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    stock?: true
    price?: true
    discountPrice?: true
  }

  export type ProductSumAggregateInputType = {
    stock?: true
    price?: true
    discountPrice?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    stock?: true
    sku?: true
    price?: true
    discountPrice?: true
    slug?: true
    subCategoryId?: true
    brandId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    stock?: true
    sku?: true
    price?: true
    discountPrice?: true
    slug?: true
    subCategoryId?: true
    brandId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    stock?: true
    sku?: true
    price?: true
    discountPrice?: true
    slug?: true
    images?: true
    subCategoryId?: true
    brandId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    description: string | null
    stock: number
    sku: string | null
    price: number
    discountPrice: number | null
    slug: string
    images: string[]
    subCategoryId: string
    brandId: string
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    stock?: boolean
    sku?: boolean
    price?: boolean
    discountPrice?: boolean
    slug?: boolean
    images?: boolean
    subCategoryId?: boolean
    brandId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
    brands?: boolean | Product$brandsArgs<ExtArgs>
    productAttributes?: boolean | Product$productAttributesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    stock?: boolean
    sku?: boolean
    price?: boolean
    discountPrice?: boolean
    slug?: boolean
    images?: boolean
    subCategoryId?: boolean
    brandId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
    brands?: boolean | Product$brandsArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    stock?: boolean
    sku?: boolean
    price?: boolean
    discountPrice?: boolean
    slug?: boolean
    images?: boolean
    subCategoryId?: boolean
    brandId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
    brands?: boolean | Product$brandsArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    stock?: boolean
    sku?: boolean
    price?: boolean
    discountPrice?: boolean
    slug?: boolean
    images?: boolean
    subCategoryId?: boolean
    brandId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "stock" | "sku" | "price" | "discountPrice" | "slug" | "images" | "subCategoryId" | "brandId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
    brands?: boolean | Product$brandsArgs<ExtArgs>
    productAttributes?: boolean | Product$productAttributesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
    brands?: boolean | Product$brandsArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
    brands?: boolean | Product$brandsArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      subCategory: Prisma.$SubCategoryPayload<ExtArgs>
      brands: Prisma.$BrandPayload<ExtArgs> | null
      productAttributes: Prisma.$ProductAttributePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      stock: number
      sku: string | null
      price: number
      discountPrice: number | null
      slug: string
      images: string[]
      subCategoryId: string
      brandId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subCategory<T extends SubCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubCategoryDefaultArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    brands<T extends Product$brandsArgs<ExtArgs> = {}>(args?: Subset<T, Product$brandsArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    productAttributes<T extends Product$productAttributesArgs<ExtArgs> = {}>(args?: Subset<T, Product$productAttributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly discountPrice: FieldRef<"Product", 'Float'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly images: FieldRef<"Product", 'String[]'>
    readonly subCategoryId: FieldRef<"Product", 'String'>
    readonly brandId: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.brands
   */
  export type Product$brandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    where?: BrandWhereInput
  }

  /**
   * Product.productAttributes
   */
  export type Product$productAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeInclude<ExtArgs> | null
    where?: ProductAttributeWhereInput
    orderBy?: ProductAttributeOrderByWithRelationInput | ProductAttributeOrderByWithRelationInput[]
    cursor?: ProductAttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductAttributeScalarFieldEnum | ProductAttributeScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BrandMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type BrandMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: string
    name: string
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    products?: boolean | Brand$productsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type BrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["brand"]>
  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Brand$productsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BrandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {BrandUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.updateManyAndReturn({
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
    updateManyAndReturn<T extends BrandUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
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
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Brand$productsArgs<ExtArgs> = {}>(args?: Subset<T, Brand$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Brand model
   */
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'String'>
    readonly name: FieldRef<"Brand", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand createManyAndReturn
   */
  export type BrandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand updateManyAndReturn
   */
  export type BrandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brand.products
   */
  export type Brand$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model ProductAttribute
   */

  export type AggregateProductAttribute = {
    _count: ProductAttributeCountAggregateOutputType | null
    _avg: ProductAttributeAvgAggregateOutputType | null
    _sum: ProductAttributeSumAggregateOutputType | null
    _min: ProductAttributeMinAggregateOutputType | null
    _max: ProductAttributeMaxAggregateOutputType | null
  }

  export type ProductAttributeAvgAggregateOutputType = {
    id: number | null
    valueNumber: number | null
  }

  export type ProductAttributeSumAggregateOutputType = {
    id: number | null
    valueNumber: number | null
  }

  export type ProductAttributeMinAggregateOutputType = {
    id: number | null
    productId: string | null
    attributeId: string | null
    valueString: string | null
    valueNumber: number | null
    valueBoolean: boolean | null
    optionId: string | null
  }

  export type ProductAttributeMaxAggregateOutputType = {
    id: number | null
    productId: string | null
    attributeId: string | null
    valueString: string | null
    valueNumber: number | null
    valueBoolean: boolean | null
    optionId: string | null
  }

  export type ProductAttributeCountAggregateOutputType = {
    id: number
    productId: number
    attributeId: number
    valueString: number
    valueNumber: number
    valueBoolean: number
    optionId: number
    _all: number
  }


  export type ProductAttributeAvgAggregateInputType = {
    id?: true
    valueNumber?: true
  }

  export type ProductAttributeSumAggregateInputType = {
    id?: true
    valueNumber?: true
  }

  export type ProductAttributeMinAggregateInputType = {
    id?: true
    productId?: true
    attributeId?: true
    valueString?: true
    valueNumber?: true
    valueBoolean?: true
    optionId?: true
  }

  export type ProductAttributeMaxAggregateInputType = {
    id?: true
    productId?: true
    attributeId?: true
    valueString?: true
    valueNumber?: true
    valueBoolean?: true
    optionId?: true
  }

  export type ProductAttributeCountAggregateInputType = {
    id?: true
    productId?: true
    attributeId?: true
    valueString?: true
    valueNumber?: true
    valueBoolean?: true
    optionId?: true
    _all?: true
  }

  export type ProductAttributeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductAttribute to aggregate.
     */
    where?: ProductAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAttributes to fetch.
     */
    orderBy?: ProductAttributeOrderByWithRelationInput | ProductAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductAttributes
    **/
    _count?: true | ProductAttributeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAttributeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductAttributeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductAttributeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductAttributeMaxAggregateInputType
  }

  export type GetProductAttributeAggregateType<T extends ProductAttributeAggregateArgs> = {
        [P in keyof T & keyof AggregateProductAttribute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductAttribute[P]>
      : GetScalarType<T[P], AggregateProductAttribute[P]>
  }




  export type ProductAttributeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAttributeWhereInput
    orderBy?: ProductAttributeOrderByWithAggregationInput | ProductAttributeOrderByWithAggregationInput[]
    by: ProductAttributeScalarFieldEnum[] | ProductAttributeScalarFieldEnum
    having?: ProductAttributeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductAttributeCountAggregateInputType | true
    _avg?: ProductAttributeAvgAggregateInputType
    _sum?: ProductAttributeSumAggregateInputType
    _min?: ProductAttributeMinAggregateInputType
    _max?: ProductAttributeMaxAggregateInputType
  }

  export type ProductAttributeGroupByOutputType = {
    id: number
    productId: string
    attributeId: string
    valueString: string | null
    valueNumber: number | null
    valueBoolean: boolean | null
    optionId: string | null
    _count: ProductAttributeCountAggregateOutputType | null
    _avg: ProductAttributeAvgAggregateOutputType | null
    _sum: ProductAttributeSumAggregateOutputType | null
    _min: ProductAttributeMinAggregateOutputType | null
    _max: ProductAttributeMaxAggregateOutputType | null
  }

  type GetProductAttributeGroupByPayload<T extends ProductAttributeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductAttributeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductAttributeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductAttributeGroupByOutputType[P]>
            : GetScalarType<T[P], ProductAttributeGroupByOutputType[P]>
        }
      >
    >


  export type ProductAttributeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    attributeId?: boolean
    valueString?: boolean
    valueNumber?: boolean
    valueBoolean?: boolean
    optionId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    option?: boolean | ProductAttribute$optionArgs<ExtArgs>
  }, ExtArgs["result"]["productAttribute"]>

  export type ProductAttributeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    attributeId?: boolean
    valueString?: boolean
    valueNumber?: boolean
    valueBoolean?: boolean
    optionId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    option?: boolean | ProductAttribute$optionArgs<ExtArgs>
  }, ExtArgs["result"]["productAttribute"]>

  export type ProductAttributeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    attributeId?: boolean
    valueString?: boolean
    valueNumber?: boolean
    valueBoolean?: boolean
    optionId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    option?: boolean | ProductAttribute$optionArgs<ExtArgs>
  }, ExtArgs["result"]["productAttribute"]>

  export type ProductAttributeSelectScalar = {
    id?: boolean
    productId?: boolean
    attributeId?: boolean
    valueString?: boolean
    valueNumber?: boolean
    valueBoolean?: boolean
    optionId?: boolean
  }

  export type ProductAttributeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "attributeId" | "valueString" | "valueNumber" | "valueBoolean" | "optionId", ExtArgs["result"]["productAttribute"]>
  export type ProductAttributeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    option?: boolean | ProductAttribute$optionArgs<ExtArgs>
  }
  export type ProductAttributeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    option?: boolean | ProductAttribute$optionArgs<ExtArgs>
  }
  export type ProductAttributeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    option?: boolean | ProductAttribute$optionArgs<ExtArgs>
  }

  export type $ProductAttributePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductAttribute"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      attribute: Prisma.$AttributePayload<ExtArgs>
      option: Prisma.$AttributeOptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: string
      attributeId: string
      valueString: string | null
      valueNumber: number | null
      valueBoolean: boolean | null
      optionId: string | null
    }, ExtArgs["result"]["productAttribute"]>
    composites: {}
  }

  type ProductAttributeGetPayload<S extends boolean | null | undefined | ProductAttributeDefaultArgs> = $Result.GetResult<Prisma.$ProductAttributePayload, S>

  type ProductAttributeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductAttributeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductAttributeCountAggregateInputType | true
    }

  export interface ProductAttributeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductAttribute'], meta: { name: 'ProductAttribute' } }
    /**
     * Find zero or one ProductAttribute that matches the filter.
     * @param {ProductAttributeFindUniqueArgs} args - Arguments to find a ProductAttribute
     * @example
     * // Get one ProductAttribute
     * const productAttribute = await prisma.productAttribute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductAttributeFindUniqueArgs>(args: SelectSubset<T, ProductAttributeFindUniqueArgs<ExtArgs>>): Prisma__ProductAttributeClient<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductAttribute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductAttributeFindUniqueOrThrowArgs} args - Arguments to find a ProductAttribute
     * @example
     * // Get one ProductAttribute
     * const productAttribute = await prisma.productAttribute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductAttributeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductAttributeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductAttributeClient<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductAttribute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeFindFirstArgs} args - Arguments to find a ProductAttribute
     * @example
     * // Get one ProductAttribute
     * const productAttribute = await prisma.productAttribute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductAttributeFindFirstArgs>(args?: SelectSubset<T, ProductAttributeFindFirstArgs<ExtArgs>>): Prisma__ProductAttributeClient<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductAttribute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeFindFirstOrThrowArgs} args - Arguments to find a ProductAttribute
     * @example
     * // Get one ProductAttribute
     * const productAttribute = await prisma.productAttribute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductAttributeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductAttributeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductAttributeClient<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductAttributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductAttributes
     * const productAttributes = await prisma.productAttribute.findMany()
     * 
     * // Get first 10 ProductAttributes
     * const productAttributes = await prisma.productAttribute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productAttributeWithIdOnly = await prisma.productAttribute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductAttributeFindManyArgs>(args?: SelectSubset<T, ProductAttributeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductAttribute.
     * @param {ProductAttributeCreateArgs} args - Arguments to create a ProductAttribute.
     * @example
     * // Create one ProductAttribute
     * const ProductAttribute = await prisma.productAttribute.create({
     *   data: {
     *     // ... data to create a ProductAttribute
     *   }
     * })
     * 
     */
    create<T extends ProductAttributeCreateArgs>(args: SelectSubset<T, ProductAttributeCreateArgs<ExtArgs>>): Prisma__ProductAttributeClient<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductAttributes.
     * @param {ProductAttributeCreateManyArgs} args - Arguments to create many ProductAttributes.
     * @example
     * // Create many ProductAttributes
     * const productAttribute = await prisma.productAttribute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductAttributeCreateManyArgs>(args?: SelectSubset<T, ProductAttributeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductAttributes and returns the data saved in the database.
     * @param {ProductAttributeCreateManyAndReturnArgs} args - Arguments to create many ProductAttributes.
     * @example
     * // Create many ProductAttributes
     * const productAttribute = await prisma.productAttribute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductAttributes and only return the `id`
     * const productAttributeWithIdOnly = await prisma.productAttribute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductAttributeCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductAttributeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductAttribute.
     * @param {ProductAttributeDeleteArgs} args - Arguments to delete one ProductAttribute.
     * @example
     * // Delete one ProductAttribute
     * const ProductAttribute = await prisma.productAttribute.delete({
     *   where: {
     *     // ... filter to delete one ProductAttribute
     *   }
     * })
     * 
     */
    delete<T extends ProductAttributeDeleteArgs>(args: SelectSubset<T, ProductAttributeDeleteArgs<ExtArgs>>): Prisma__ProductAttributeClient<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductAttribute.
     * @param {ProductAttributeUpdateArgs} args - Arguments to update one ProductAttribute.
     * @example
     * // Update one ProductAttribute
     * const productAttribute = await prisma.productAttribute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductAttributeUpdateArgs>(args: SelectSubset<T, ProductAttributeUpdateArgs<ExtArgs>>): Prisma__ProductAttributeClient<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductAttributes.
     * @param {ProductAttributeDeleteManyArgs} args - Arguments to filter ProductAttributes to delete.
     * @example
     * // Delete a few ProductAttributes
     * const { count } = await prisma.productAttribute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductAttributeDeleteManyArgs>(args?: SelectSubset<T, ProductAttributeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductAttributes
     * const productAttribute = await prisma.productAttribute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductAttributeUpdateManyArgs>(args: SelectSubset<T, ProductAttributeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductAttributes and returns the data updated in the database.
     * @param {ProductAttributeUpdateManyAndReturnArgs} args - Arguments to update many ProductAttributes.
     * @example
     * // Update many ProductAttributes
     * const productAttribute = await prisma.productAttribute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductAttributes and only return the `id`
     * const productAttributeWithIdOnly = await prisma.productAttribute.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductAttributeUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductAttributeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductAttribute.
     * @param {ProductAttributeUpsertArgs} args - Arguments to update or create a ProductAttribute.
     * @example
     * // Update or create a ProductAttribute
     * const productAttribute = await prisma.productAttribute.upsert({
     *   create: {
     *     // ... data to create a ProductAttribute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductAttribute we want to update
     *   }
     * })
     */
    upsert<T extends ProductAttributeUpsertArgs>(args: SelectSubset<T, ProductAttributeUpsertArgs<ExtArgs>>): Prisma__ProductAttributeClient<$Result.GetResult<Prisma.$ProductAttributePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeCountArgs} args - Arguments to filter ProductAttributes to count.
     * @example
     * // Count the number of ProductAttributes
     * const count = await prisma.productAttribute.count({
     *   where: {
     *     // ... the filter for the ProductAttributes we want to count
     *   }
     * })
    **/
    count<T extends ProductAttributeCountArgs>(
      args?: Subset<T, ProductAttributeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductAttributeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductAttribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAttributeAggregateArgs>(args: Subset<T, ProductAttributeAggregateArgs>): Prisma.PrismaPromise<GetProductAttributeAggregateType<T>>

    /**
     * Group by ProductAttribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeGroupByArgs} args - Group by arguments.
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
      T extends ProductAttributeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductAttributeGroupByArgs['orderBy'] }
        : { orderBy?: ProductAttributeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductAttributeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductAttributeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductAttribute model
   */
  readonly fields: ProductAttributeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductAttribute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductAttributeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attribute<T extends AttributeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttributeDefaultArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    option<T extends ProductAttribute$optionArgs<ExtArgs> = {}>(args?: Subset<T, ProductAttribute$optionArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductAttribute model
   */
  interface ProductAttributeFieldRefs {
    readonly id: FieldRef<"ProductAttribute", 'Int'>
    readonly productId: FieldRef<"ProductAttribute", 'String'>
    readonly attributeId: FieldRef<"ProductAttribute", 'String'>
    readonly valueString: FieldRef<"ProductAttribute", 'String'>
    readonly valueNumber: FieldRef<"ProductAttribute", 'Float'>
    readonly valueBoolean: FieldRef<"ProductAttribute", 'Boolean'>
    readonly optionId: FieldRef<"ProductAttribute", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductAttribute findUnique
   */
  export type ProductAttributeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeInclude<ExtArgs> | null
    /**
     * Filter, which ProductAttribute to fetch.
     */
    where: ProductAttributeWhereUniqueInput
  }

  /**
   * ProductAttribute findUniqueOrThrow
   */
  export type ProductAttributeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeInclude<ExtArgs> | null
    /**
     * Filter, which ProductAttribute to fetch.
     */
    where: ProductAttributeWhereUniqueInput
  }

  /**
   * ProductAttribute findFirst
   */
  export type ProductAttributeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeInclude<ExtArgs> | null
    /**
     * Filter, which ProductAttribute to fetch.
     */
    where?: ProductAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAttributes to fetch.
     */
    orderBy?: ProductAttributeOrderByWithRelationInput | ProductAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductAttributes.
     */
    cursor?: ProductAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductAttributes.
     */
    distinct?: ProductAttributeScalarFieldEnum | ProductAttributeScalarFieldEnum[]
  }

  /**
   * ProductAttribute findFirstOrThrow
   */
  export type ProductAttributeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeInclude<ExtArgs> | null
    /**
     * Filter, which ProductAttribute to fetch.
     */
    where?: ProductAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAttributes to fetch.
     */
    orderBy?: ProductAttributeOrderByWithRelationInput | ProductAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductAttributes.
     */
    cursor?: ProductAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductAttributes.
     */
    distinct?: ProductAttributeScalarFieldEnum | ProductAttributeScalarFieldEnum[]
  }

  /**
   * ProductAttribute findMany
   */
  export type ProductAttributeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeInclude<ExtArgs> | null
    /**
     * Filter, which ProductAttributes to fetch.
     */
    where?: ProductAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAttributes to fetch.
     */
    orderBy?: ProductAttributeOrderByWithRelationInput | ProductAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductAttributes.
     */
    cursor?: ProductAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductAttributes.
     */
    distinct?: ProductAttributeScalarFieldEnum | ProductAttributeScalarFieldEnum[]
  }

  /**
   * ProductAttribute create
   */
  export type ProductAttributeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductAttribute.
     */
    data: XOR<ProductAttributeCreateInput, ProductAttributeUncheckedCreateInput>
  }

  /**
   * ProductAttribute createMany
   */
  export type ProductAttributeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductAttributes.
     */
    data: ProductAttributeCreateManyInput | ProductAttributeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductAttribute createManyAndReturn
   */
  export type ProductAttributeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * The data used to create many ProductAttributes.
     */
    data: ProductAttributeCreateManyInput | ProductAttributeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductAttribute update
   */
  export type ProductAttributeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductAttribute.
     */
    data: XOR<ProductAttributeUpdateInput, ProductAttributeUncheckedUpdateInput>
    /**
     * Choose, which ProductAttribute to update.
     */
    where: ProductAttributeWhereUniqueInput
  }

  /**
   * ProductAttribute updateMany
   */
  export type ProductAttributeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductAttributes.
     */
    data: XOR<ProductAttributeUpdateManyMutationInput, ProductAttributeUncheckedUpdateManyInput>
    /**
     * Filter which ProductAttributes to update
     */
    where?: ProductAttributeWhereInput
    /**
     * Limit how many ProductAttributes to update.
     */
    limit?: number
  }

  /**
   * ProductAttribute updateManyAndReturn
   */
  export type ProductAttributeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * The data used to update ProductAttributes.
     */
    data: XOR<ProductAttributeUpdateManyMutationInput, ProductAttributeUncheckedUpdateManyInput>
    /**
     * Filter which ProductAttributes to update
     */
    where?: ProductAttributeWhereInput
    /**
     * Limit how many ProductAttributes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductAttribute upsert
   */
  export type ProductAttributeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductAttribute to update in case it exists.
     */
    where: ProductAttributeWhereUniqueInput
    /**
     * In case the ProductAttribute found by the `where` argument doesn't exist, create a new ProductAttribute with this data.
     */
    create: XOR<ProductAttributeCreateInput, ProductAttributeUncheckedCreateInput>
    /**
     * In case the ProductAttribute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductAttributeUpdateInput, ProductAttributeUncheckedUpdateInput>
  }

  /**
   * ProductAttribute delete
   */
  export type ProductAttributeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeInclude<ExtArgs> | null
    /**
     * Filter which ProductAttribute to delete.
     */
    where: ProductAttributeWhereUniqueInput
  }

  /**
   * ProductAttribute deleteMany
   */
  export type ProductAttributeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductAttributes to delete
     */
    where?: ProductAttributeWhereInput
    /**
     * Limit how many ProductAttributes to delete.
     */
    limit?: number
  }

  /**
   * ProductAttribute.option
   */
  export type ProductAttribute$optionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    where?: AttributeOptionWhereInput
  }

  /**
   * ProductAttribute without action
   */
  export type ProductAttributeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttribute
     */
    select?: ProductAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttribute
     */
    omit?: ProductAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeInclude<ExtArgs> | null
  }


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
    lastName: string | null
    email: string | null
    emailVerify: Date | null
    password: string | null
    rol: $Enums.Rol | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    lastName: string | null
    email: string | null
    emailVerify: Date | null
    password: string | null
    rol: $Enums.Rol | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    lastName: number
    email: number
    emailVerify: number
    password: number
    rol: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    emailVerify?: true
    password?: true
    rol?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    emailVerify?: true
    password?: true
    rol?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    emailVerify?: true
    password?: true
    rol?: true
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
    lastName: string
    email: string
    emailVerify: Date | null
    password: string
    rol: $Enums.Rol
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
    lastName?: boolean
    email?: boolean
    emailVerify?: boolean
    password?: boolean
    rol?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    emailVerify?: boolean
    password?: boolean
    rol?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    emailVerify?: boolean
    password?: boolean
    rol?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    emailVerify?: boolean
    password?: boolean
    rol?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastName" | "email" | "emailVerify" | "password" | "rol", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      lastName: string
      email: string
      emailVerify: Date | null
      password: string
      rol: $Enums.Rol
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
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerify: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly rol: FieldRef<"User", 'Rol'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SubCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    categoryId: 'categoryId'
  };

  export type SubCategoryScalarFieldEnum = (typeof SubCategoryScalarFieldEnum)[keyof typeof SubCategoryScalarFieldEnum]


  export const AttributeOptionScalarFieldEnum: {
    id: 'id',
    value: 'value',
    attributeId: 'attributeId'
  };

  export type AttributeOptionScalarFieldEnum = (typeof AttributeOptionScalarFieldEnum)[keyof typeof AttributeOptionScalarFieldEnum]


  export const AttributeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    group: 'group',
    unit: 'unit',
    required: 'required'
  };

  export type AttributeScalarFieldEnum = (typeof AttributeScalarFieldEnum)[keyof typeof AttributeScalarFieldEnum]


  export const SubCategoryAttributeScalarFieldEnum: {
    subCategoryId: 'subCategoryId',
    attributeId: 'attributeId'
  };

  export type SubCategoryAttributeScalarFieldEnum = (typeof SubCategoryAttributeScalarFieldEnum)[keyof typeof SubCategoryAttributeScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    stock: 'stock',
    sku: 'sku',
    price: 'price',
    discountPrice: 'discountPrice',
    slug: 'slug',
    images: 'images',
    subCategoryId: 'subCategoryId',
    brandId: 'brandId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const ProductAttributeScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    attributeId: 'attributeId',
    valueString: 'valueString',
    valueNumber: 'valueNumber',
    valueBoolean: 'valueBoolean',
    optionId: 'optionId'
  };

  export type ProductAttributeScalarFieldEnum = (typeof ProductAttributeScalarFieldEnum)[keyof typeof ProductAttributeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastName: 'lastName',
    email: 'email',
    emailVerify: 'emailVerify',
    password: 'password',
    rol: 'rol'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
   * Reference to a field of type 'AttributeType'
   */
  export type EnumAttributeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttributeType'>
    


  /**
   * Reference to a field of type 'AttributeType[]'
   */
  export type ListEnumAttributeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttributeType[]'>
    


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    subCategories?: SubCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subCategories?: SubCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    subCategories?: SubCategoryListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type SubCategoryWhereInput = {
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    id?: StringFilter<"SubCategory"> | string
    name?: StringFilter<"SubCategory"> | string
    categoryId?: StringFilter<"SubCategory"> | string
    products?: ProductListRelationFilter
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    attributes?: SubCategoryAttributeListRelationFilter
  }

  export type SubCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    category?: CategoryOrderByWithRelationInput
    attributes?: SubCategoryAttributeOrderByRelationAggregateInput
  }

  export type SubCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    categoryId?: StringFilter<"SubCategory"> | string
    products?: ProductListRelationFilter
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    attributes?: SubCategoryAttributeListRelationFilter
  }, "id" | "name">

  export type SubCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    _count?: SubCategoryCountOrderByAggregateInput
    _max?: SubCategoryMaxOrderByAggregateInput
    _min?: SubCategoryMinOrderByAggregateInput
  }

  export type SubCategoryScalarWhereWithAggregatesInput = {
    AND?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    OR?: SubCategoryScalarWhereWithAggregatesInput[]
    NOT?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubCategory"> | string
    name?: StringWithAggregatesFilter<"SubCategory"> | string
    categoryId?: StringWithAggregatesFilter<"SubCategory"> | string
  }

  export type AttributeOptionWhereInput = {
    AND?: AttributeOptionWhereInput | AttributeOptionWhereInput[]
    OR?: AttributeOptionWhereInput[]
    NOT?: AttributeOptionWhereInput | AttributeOptionWhereInput[]
    id?: StringFilter<"AttributeOption"> | string
    value?: StringFilter<"AttributeOption"> | string
    attributeId?: StringFilter<"AttributeOption"> | string
    attribute?: XOR<AttributeScalarRelationFilter, AttributeWhereInput>
    productAttributes?: ProductAttributeListRelationFilter
  }

  export type AttributeOptionOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    attributeId?: SortOrder
    attribute?: AttributeOrderByWithRelationInput
    productAttributes?: ProductAttributeOrderByRelationAggregateInput
  }

  export type AttributeOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttributeOptionWhereInput | AttributeOptionWhereInput[]
    OR?: AttributeOptionWhereInput[]
    NOT?: AttributeOptionWhereInput | AttributeOptionWhereInput[]
    value?: StringFilter<"AttributeOption"> | string
    attributeId?: StringFilter<"AttributeOption"> | string
    attribute?: XOR<AttributeScalarRelationFilter, AttributeWhereInput>
    productAttributes?: ProductAttributeListRelationFilter
  }, "id">

  export type AttributeOptionOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    attributeId?: SortOrder
    _count?: AttributeOptionCountOrderByAggregateInput
    _max?: AttributeOptionMaxOrderByAggregateInput
    _min?: AttributeOptionMinOrderByAggregateInput
  }

  export type AttributeOptionScalarWhereWithAggregatesInput = {
    AND?: AttributeOptionScalarWhereWithAggregatesInput | AttributeOptionScalarWhereWithAggregatesInput[]
    OR?: AttributeOptionScalarWhereWithAggregatesInput[]
    NOT?: AttributeOptionScalarWhereWithAggregatesInput | AttributeOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AttributeOption"> | string
    value?: StringWithAggregatesFilter<"AttributeOption"> | string
    attributeId?: StringWithAggregatesFilter<"AttributeOption"> | string
  }

  export type AttributeWhereInput = {
    AND?: AttributeWhereInput | AttributeWhereInput[]
    OR?: AttributeWhereInput[]
    NOT?: AttributeWhereInput | AttributeWhereInput[]
    id?: StringFilter<"Attribute"> | string
    name?: StringFilter<"Attribute"> | string
    type?: EnumAttributeTypeFilter<"Attribute"> | $Enums.AttributeType
    group?: StringFilter<"Attribute"> | string
    unit?: StringNullableFilter<"Attribute"> | string | null
    required?: BoolFilter<"Attribute"> | boolean
    options?: AttributeOptionListRelationFilter
    subCategories?: SubCategoryAttributeListRelationFilter
    productAttributes?: ProductAttributeListRelationFilter
  }

  export type AttributeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    group?: SortOrder
    unit?: SortOrderInput | SortOrder
    required?: SortOrder
    options?: AttributeOptionOrderByRelationAggregateInput
    subCategories?: SubCategoryAttributeOrderByRelationAggregateInput
    productAttributes?: ProductAttributeOrderByRelationAggregateInput
  }

  export type AttributeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AttributeWhereInput | AttributeWhereInput[]
    OR?: AttributeWhereInput[]
    NOT?: AttributeWhereInput | AttributeWhereInput[]
    type?: EnumAttributeTypeFilter<"Attribute"> | $Enums.AttributeType
    group?: StringFilter<"Attribute"> | string
    unit?: StringNullableFilter<"Attribute"> | string | null
    required?: BoolFilter<"Attribute"> | boolean
    options?: AttributeOptionListRelationFilter
    subCategories?: SubCategoryAttributeListRelationFilter
    productAttributes?: ProductAttributeListRelationFilter
  }, "id" | "name">

  export type AttributeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    group?: SortOrder
    unit?: SortOrderInput | SortOrder
    required?: SortOrder
    _count?: AttributeCountOrderByAggregateInput
    _max?: AttributeMaxOrderByAggregateInput
    _min?: AttributeMinOrderByAggregateInput
  }

  export type AttributeScalarWhereWithAggregatesInput = {
    AND?: AttributeScalarWhereWithAggregatesInput | AttributeScalarWhereWithAggregatesInput[]
    OR?: AttributeScalarWhereWithAggregatesInput[]
    NOT?: AttributeScalarWhereWithAggregatesInput | AttributeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attribute"> | string
    name?: StringWithAggregatesFilter<"Attribute"> | string
    type?: EnumAttributeTypeWithAggregatesFilter<"Attribute"> | $Enums.AttributeType
    group?: StringWithAggregatesFilter<"Attribute"> | string
    unit?: StringNullableWithAggregatesFilter<"Attribute"> | string | null
    required?: BoolWithAggregatesFilter<"Attribute"> | boolean
  }

  export type SubCategoryAttributeWhereInput = {
    AND?: SubCategoryAttributeWhereInput | SubCategoryAttributeWhereInput[]
    OR?: SubCategoryAttributeWhereInput[]
    NOT?: SubCategoryAttributeWhereInput | SubCategoryAttributeWhereInput[]
    subCategoryId?: StringFilter<"SubCategoryAttribute"> | string
    attributeId?: StringFilter<"SubCategoryAttribute"> | string
    subCategory?: XOR<SubCategoryScalarRelationFilter, SubCategoryWhereInput>
    attribute?: XOR<AttributeScalarRelationFilter, AttributeWhereInput>
  }

  export type SubCategoryAttributeOrderByWithRelationInput = {
    subCategoryId?: SortOrder
    attributeId?: SortOrder
    subCategory?: SubCategoryOrderByWithRelationInput
    attribute?: AttributeOrderByWithRelationInput
  }

  export type SubCategoryAttributeWhereUniqueInput = Prisma.AtLeast<{
    subCategoryId_attributeId?: SubCategoryAttributeSubCategoryIdAttributeIdCompoundUniqueInput
    AND?: SubCategoryAttributeWhereInput | SubCategoryAttributeWhereInput[]
    OR?: SubCategoryAttributeWhereInput[]
    NOT?: SubCategoryAttributeWhereInput | SubCategoryAttributeWhereInput[]
    subCategoryId?: StringFilter<"SubCategoryAttribute"> | string
    attributeId?: StringFilter<"SubCategoryAttribute"> | string
    subCategory?: XOR<SubCategoryScalarRelationFilter, SubCategoryWhereInput>
    attribute?: XOR<AttributeScalarRelationFilter, AttributeWhereInput>
  }, "subCategoryId_attributeId">

  export type SubCategoryAttributeOrderByWithAggregationInput = {
    subCategoryId?: SortOrder
    attributeId?: SortOrder
    _count?: SubCategoryAttributeCountOrderByAggregateInput
    _max?: SubCategoryAttributeMaxOrderByAggregateInput
    _min?: SubCategoryAttributeMinOrderByAggregateInput
  }

  export type SubCategoryAttributeScalarWhereWithAggregatesInput = {
    AND?: SubCategoryAttributeScalarWhereWithAggregatesInput | SubCategoryAttributeScalarWhereWithAggregatesInput[]
    OR?: SubCategoryAttributeScalarWhereWithAggregatesInput[]
    NOT?: SubCategoryAttributeScalarWhereWithAggregatesInput | SubCategoryAttributeScalarWhereWithAggregatesInput[]
    subCategoryId?: StringWithAggregatesFilter<"SubCategoryAttribute"> | string
    attributeId?: StringWithAggregatesFilter<"SubCategoryAttribute"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    stock?: IntFilter<"Product"> | number
    sku?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    discountPrice?: FloatNullableFilter<"Product"> | number | null
    slug?: StringFilter<"Product"> | string
    images?: StringNullableListFilter<"Product">
    subCategoryId?: StringFilter<"Product"> | string
    brandId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    subCategory?: XOR<SubCategoryScalarRelationFilter, SubCategoryWhereInput>
    brands?: XOR<BrandNullableScalarRelationFilter, BrandWhereInput> | null
    productAttributes?: ProductAttributeListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    stock?: SortOrder
    sku?: SortOrderInput | SortOrder
    price?: SortOrder
    discountPrice?: SortOrderInput | SortOrder
    slug?: SortOrder
    images?: SortOrder
    subCategoryId?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subCategory?: SubCategoryOrderByWithRelationInput
    brands?: BrandOrderByWithRelationInput
    productAttributes?: ProductAttributeOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    stock?: IntFilter<"Product"> | number
    sku?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    discountPrice?: FloatNullableFilter<"Product"> | number | null
    images?: StringNullableListFilter<"Product">
    subCategoryId?: StringFilter<"Product"> | string
    brandId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    subCategory?: XOR<SubCategoryScalarRelationFilter, SubCategoryWhereInput>
    brands?: XOR<BrandNullableScalarRelationFilter, BrandWhereInput> | null
    productAttributes?: ProductAttributeListRelationFilter
  }, "id" | "slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    stock?: SortOrder
    sku?: SortOrderInput | SortOrder
    price?: SortOrder
    discountPrice?: SortOrderInput | SortOrder
    slug?: SortOrder
    images?: SortOrder
    subCategoryId?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    stock?: IntWithAggregatesFilter<"Product"> | number
    sku?: StringNullableWithAggregatesFilter<"Product"> | string | null
    price?: FloatWithAggregatesFilter<"Product"> | number
    discountPrice?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    slug?: StringWithAggregatesFilter<"Product"> | string
    images?: StringNullableListFilter<"Product">
    subCategoryId?: StringWithAggregatesFilter<"Product"> | string
    brandId?: StringWithAggregatesFilter<"Product"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: StringFilter<"Brand"> | string
    name?: StringFilter<"Brand"> | string
    products?: ProductListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    products?: ProductListRelationFilter
  }, "id" | "name">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brand"> | string
    name?: StringWithAggregatesFilter<"Brand"> | string
  }

  export type ProductAttributeWhereInput = {
    AND?: ProductAttributeWhereInput | ProductAttributeWhereInput[]
    OR?: ProductAttributeWhereInput[]
    NOT?: ProductAttributeWhereInput | ProductAttributeWhereInput[]
    id?: IntFilter<"ProductAttribute"> | number
    productId?: StringFilter<"ProductAttribute"> | string
    attributeId?: StringFilter<"ProductAttribute"> | string
    valueString?: StringNullableFilter<"ProductAttribute"> | string | null
    valueNumber?: FloatNullableFilter<"ProductAttribute"> | number | null
    valueBoolean?: BoolNullableFilter<"ProductAttribute"> | boolean | null
    optionId?: StringNullableFilter<"ProductAttribute"> | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    attribute?: XOR<AttributeScalarRelationFilter, AttributeWhereInput>
    option?: XOR<AttributeOptionNullableScalarRelationFilter, AttributeOptionWhereInput> | null
  }

  export type ProductAttributeOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    attributeId?: SortOrder
    valueString?: SortOrderInput | SortOrder
    valueNumber?: SortOrderInput | SortOrder
    valueBoolean?: SortOrderInput | SortOrder
    optionId?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    attribute?: AttributeOrderByWithRelationInput
    option?: AttributeOptionOrderByWithRelationInput
  }

  export type ProductAttributeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productId_attributeId?: ProductAttributeProductIdAttributeIdCompoundUniqueInput
    AND?: ProductAttributeWhereInput | ProductAttributeWhereInput[]
    OR?: ProductAttributeWhereInput[]
    NOT?: ProductAttributeWhereInput | ProductAttributeWhereInput[]
    productId?: StringFilter<"ProductAttribute"> | string
    attributeId?: StringFilter<"ProductAttribute"> | string
    valueString?: StringNullableFilter<"ProductAttribute"> | string | null
    valueNumber?: FloatNullableFilter<"ProductAttribute"> | number | null
    valueBoolean?: BoolNullableFilter<"ProductAttribute"> | boolean | null
    optionId?: StringNullableFilter<"ProductAttribute"> | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    attribute?: XOR<AttributeScalarRelationFilter, AttributeWhereInput>
    option?: XOR<AttributeOptionNullableScalarRelationFilter, AttributeOptionWhereInput> | null
  }, "id" | "productId_attributeId">

  export type ProductAttributeOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    attributeId?: SortOrder
    valueString?: SortOrderInput | SortOrder
    valueNumber?: SortOrderInput | SortOrder
    valueBoolean?: SortOrderInput | SortOrder
    optionId?: SortOrderInput | SortOrder
    _count?: ProductAttributeCountOrderByAggregateInput
    _avg?: ProductAttributeAvgOrderByAggregateInput
    _max?: ProductAttributeMaxOrderByAggregateInput
    _min?: ProductAttributeMinOrderByAggregateInput
    _sum?: ProductAttributeSumOrderByAggregateInput
  }

  export type ProductAttributeScalarWhereWithAggregatesInput = {
    AND?: ProductAttributeScalarWhereWithAggregatesInput | ProductAttributeScalarWhereWithAggregatesInput[]
    OR?: ProductAttributeScalarWhereWithAggregatesInput[]
    NOT?: ProductAttributeScalarWhereWithAggregatesInput | ProductAttributeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductAttribute"> | number
    productId?: StringWithAggregatesFilter<"ProductAttribute"> | string
    attributeId?: StringWithAggregatesFilter<"ProductAttribute"> | string
    valueString?: StringNullableWithAggregatesFilter<"ProductAttribute"> | string | null
    valueNumber?: FloatNullableWithAggregatesFilter<"ProductAttribute"> | number | null
    valueBoolean?: BoolNullableWithAggregatesFilter<"ProductAttribute"> | boolean | null
    optionId?: StringNullableWithAggregatesFilter<"ProductAttribute"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerify?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    rol?: EnumRolFilter<"User"> | $Enums.Rol
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    emailVerify?: SortOrderInput | SortOrder
    password?: SortOrder
    rol?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    emailVerify?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    rol?: EnumRolFilter<"User"> | $Enums.Rol
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    emailVerify?: SortOrderInput | SortOrder
    password?: SortOrder
    rol?: SortOrder
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
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerify?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    rol?: EnumRolWithAggregatesFilter<"User"> | $Enums.Rol
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    subCategories?: SubCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subCategories?: SubCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subCategories?: SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubCategoryCreateInput = {
    id?: string
    name: string
    products?: ProductCreateNestedManyWithoutSubCategoryInput
    category: CategoryCreateNestedOneWithoutSubCategoriesInput
    attributes?: SubCategoryAttributeCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryUncheckedCreateInput = {
    id?: string
    name: string
    categoryId: string
    products?: ProductUncheckedCreateNestedManyWithoutSubCategoryInput
    attributes?: SubCategoryAttributeUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutSubCategoryNestedInput
    category?: CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
    attributes?: SubCategoryAttributeUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutSubCategoryNestedInput
    attributes?: SubCategoryAttributeUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryCreateManyInput = {
    id?: string
    name: string
    categoryId: string
  }

  export type SubCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type AttributeOptionCreateInput = {
    id?: string
    value: string
    attribute: AttributeCreateNestedOneWithoutOptionsInput
    productAttributes?: ProductAttributeCreateNestedManyWithoutOptionInput
  }

  export type AttributeOptionUncheckedCreateInput = {
    id?: string
    value: string
    attributeId: string
    productAttributes?: ProductAttributeUncheckedCreateNestedManyWithoutOptionInput
  }

  export type AttributeOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    attribute?: AttributeUpdateOneRequiredWithoutOptionsNestedInput
    productAttributes?: ProductAttributeUpdateManyWithoutOptionNestedInput
  }

  export type AttributeOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    attributeId?: StringFieldUpdateOperationsInput | string
    productAttributes?: ProductAttributeUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type AttributeOptionCreateManyInput = {
    id?: string
    value: string
    attributeId: string
  }

  export type AttributeOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type AttributeOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    attributeId?: StringFieldUpdateOperationsInput | string
  }

  export type AttributeCreateInput = {
    id?: string
    name: string
    type: $Enums.AttributeType
    group: string
    unit?: string | null
    required?: boolean
    options?: AttributeOptionCreateNestedManyWithoutAttributeInput
    subCategories?: SubCategoryAttributeCreateNestedManyWithoutAttributeInput
    productAttributes?: ProductAttributeCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.AttributeType
    group: string
    unit?: string | null
    required?: boolean
    options?: AttributeOptionUncheckedCreateNestedManyWithoutAttributeInput
    subCategories?: SubCategoryAttributeUncheckedCreateNestedManyWithoutAttributeInput
    productAttributes?: ProductAttributeUncheckedCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAttributeTypeFieldUpdateOperationsInput | $Enums.AttributeType
    group?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: AttributeOptionUpdateManyWithoutAttributeNestedInput
    subCategories?: SubCategoryAttributeUpdateManyWithoutAttributeNestedInput
    productAttributes?: ProductAttributeUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAttributeTypeFieldUpdateOperationsInput | $Enums.AttributeType
    group?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: AttributeOptionUncheckedUpdateManyWithoutAttributeNestedInput
    subCategories?: SubCategoryAttributeUncheckedUpdateManyWithoutAttributeNestedInput
    productAttributes?: ProductAttributeUncheckedUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeCreateManyInput = {
    id?: string
    name: string
    type: $Enums.AttributeType
    group: string
    unit?: string | null
    required?: boolean
  }

  export type AttributeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAttributeTypeFieldUpdateOperationsInput | $Enums.AttributeType
    group?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttributeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAttributeTypeFieldUpdateOperationsInput | $Enums.AttributeType
    group?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubCategoryAttributeCreateInput = {
    subCategory: SubCategoryCreateNestedOneWithoutAttributesInput
    attribute: AttributeCreateNestedOneWithoutSubCategoriesInput
  }

  export type SubCategoryAttributeUncheckedCreateInput = {
    subCategoryId: string
    attributeId: string
  }

  export type SubCategoryAttributeUpdateInput = {
    subCategory?: SubCategoryUpdateOneRequiredWithoutAttributesNestedInput
    attribute?: AttributeUpdateOneRequiredWithoutSubCategoriesNestedInput
  }

  export type SubCategoryAttributeUncheckedUpdateInput = {
    subCategoryId?: StringFieldUpdateOperationsInput | string
    attributeId?: StringFieldUpdateOperationsInput | string
  }

  export type SubCategoryAttributeCreateManyInput = {
    subCategoryId: string
    attributeId: string
  }

  export type SubCategoryAttributeUpdateManyMutationInput = {

  }

  export type SubCategoryAttributeUncheckedUpdateManyInput = {
    subCategoryId?: StringFieldUpdateOperationsInput | string
    attributeId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    description?: string | null
    stock: number
    sku?: string | null
    price?: number
    discountPrice?: number | null
    slug: string
    images?: ProductCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategory: SubCategoryCreateNestedOneWithoutProductsInput
    brands?: BrandCreateNestedOneWithoutProductsInput
    productAttributes?: ProductAttributeCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    stock: number
    sku?: string | null
    price?: number
    discountPrice?: number | null
    slug: string
    images?: ProductCreateimagesInput | string[]
    subCategoryId: string
    brandId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productAttributes?: ProductAttributeUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategory?: SubCategoryUpdateOneRequiredWithoutProductsNestedInput
    brands?: BrandUpdateOneWithoutProductsNestedInput
    productAttributes?: ProductAttributeUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    subCategoryId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productAttributes?: ProductAttributeUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    stock: number
    sku?: string | null
    price?: number
    discountPrice?: number | null
    slug: string
    images?: ProductCreateimagesInput | string[]
    subCategoryId: string
    brandId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    subCategoryId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandCreateInput = {
    id?: string
    name: string
    products?: ProductCreateNestedManyWithoutBrandsInput
  }

  export type BrandUncheckedCreateInput = {
    id?: string
    name: string
    products?: ProductUncheckedCreateNestedManyWithoutBrandsInput
  }

  export type BrandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutBrandsNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutBrandsNestedInput
  }

  export type BrandCreateManyInput = {
    id?: string
    name: string
  }

  export type BrandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductAttributeCreateInput = {
    valueString?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
    product: ProductCreateNestedOneWithoutProductAttributesInput
    attribute: AttributeCreateNestedOneWithoutProductAttributesInput
    option?: AttributeOptionCreateNestedOneWithoutProductAttributesInput
  }

  export type ProductAttributeUncheckedCreateInput = {
    id?: number
    productId: string
    attributeId: string
    valueString?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
    optionId?: string | null
  }

  export type ProductAttributeUpdateInput = {
    valueString?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    product?: ProductUpdateOneRequiredWithoutProductAttributesNestedInput
    attribute?: AttributeUpdateOneRequiredWithoutProductAttributesNestedInput
    option?: AttributeOptionUpdateOneWithoutProductAttributesNestedInput
  }

  export type ProductAttributeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    attributeId?: StringFieldUpdateOperationsInput | string
    valueString?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    optionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductAttributeCreateManyInput = {
    id?: number
    productId: string
    attributeId: string
    valueString?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
    optionId?: string | null
  }

  export type ProductAttributeUpdateManyMutationInput = {
    valueString?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProductAttributeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    attributeId?: StringFieldUpdateOperationsInput | string
    valueString?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    optionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    lastName: string
    email: string
    emailVerify?: Date | string | null
    password: string
    rol?: $Enums.Rol
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    lastName: string
    email: string
    emailVerify?: Date | string | null
    password: string
    rol?: $Enums.Rol
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerify?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerify?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    lastName: string
    email: string
    emailVerify?: Date | string | null
    password: string
    rol?: $Enums.Rol
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerify?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerify?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
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

  export type SubCategoryListRelationFilter = {
    every?: SubCategoryWhereInput
    some?: SubCategoryWhereInput
    none?: SubCategoryWhereInput
  }

  export type SubCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
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

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SubCategoryAttributeListRelationFilter = {
    every?: SubCategoryAttributeWhereInput
    some?: SubCategoryAttributeWhereInput
    none?: SubCategoryAttributeWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubCategoryAttributeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
  }

  export type SubCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
  }

  export type SubCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
  }

  export type AttributeScalarRelationFilter = {
    is?: AttributeWhereInput
    isNot?: AttributeWhereInput
  }

  export type ProductAttributeListRelationFilter = {
    every?: ProductAttributeWhereInput
    some?: ProductAttributeWhereInput
    none?: ProductAttributeWhereInput
  }

  export type ProductAttributeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttributeOptionCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    attributeId?: SortOrder
  }

  export type AttributeOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    attributeId?: SortOrder
  }

  export type AttributeOptionMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    attributeId?: SortOrder
  }

  export type EnumAttributeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttributeType | EnumAttributeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttributeType[] | ListEnumAttributeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttributeType[] | ListEnumAttributeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttributeTypeFilter<$PrismaModel> | $Enums.AttributeType
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

  export type AttributeOptionListRelationFilter = {
    every?: AttributeOptionWhereInput
    some?: AttributeOptionWhereInput
    none?: AttributeOptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AttributeOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttributeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    group?: SortOrder
    unit?: SortOrder
    required?: SortOrder
  }

  export type AttributeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    group?: SortOrder
    unit?: SortOrder
    required?: SortOrder
  }

  export type AttributeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    group?: SortOrder
    unit?: SortOrder
    required?: SortOrder
  }

  export type EnumAttributeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttributeType | EnumAttributeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttributeType[] | ListEnumAttributeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttributeType[] | ListEnumAttributeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttributeTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttributeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttributeTypeFilter<$PrismaModel>
    _max?: NestedEnumAttributeTypeFilter<$PrismaModel>
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

  export type SubCategoryScalarRelationFilter = {
    is?: SubCategoryWhereInput
    isNot?: SubCategoryWhereInput
  }

  export type SubCategoryAttributeSubCategoryIdAttributeIdCompoundUniqueInput = {
    subCategoryId: string
    attributeId: string
  }

  export type SubCategoryAttributeCountOrderByAggregateInput = {
    subCategoryId?: SortOrder
    attributeId?: SortOrder
  }

  export type SubCategoryAttributeMaxOrderByAggregateInput = {
    subCategoryId?: SortOrder
    attributeId?: SortOrder
  }

  export type SubCategoryAttributeMinOrderByAggregateInput = {
    subCategoryId?: SortOrder
    attributeId?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type BrandNullableScalarRelationFilter = {
    is?: BrandWhereInput | null
    isNot?: BrandWhereInput | null
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    stock?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    slug?: SortOrder
    images?: SortOrder
    subCategoryId?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    stock?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    stock?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    slug?: SortOrder
    subCategoryId?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    stock?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    slug?: SortOrder
    subCategoryId?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    stock?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
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

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type AttributeOptionNullableScalarRelationFilter = {
    is?: AttributeOptionWhereInput | null
    isNot?: AttributeOptionWhereInput | null
  }

  export type ProductAttributeProductIdAttributeIdCompoundUniqueInput = {
    productId: string
    attributeId: string
  }

  export type ProductAttributeCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    attributeId?: SortOrder
    valueString?: SortOrder
    valueNumber?: SortOrder
    valueBoolean?: SortOrder
    optionId?: SortOrder
  }

  export type ProductAttributeAvgOrderByAggregateInput = {
    id?: SortOrder
    valueNumber?: SortOrder
  }

  export type ProductAttributeMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    attributeId?: SortOrder
    valueString?: SortOrder
    valueNumber?: SortOrder
    valueBoolean?: SortOrder
    optionId?: SortOrder
  }

  export type ProductAttributeMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    attributeId?: SortOrder
    valueString?: SortOrder
    valueNumber?: SortOrder
    valueBoolean?: SortOrder
    optionId?: SortOrder
  }

  export type ProductAttributeSumOrderByAggregateInput = {
    id?: SortOrder
    valueNumber?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    emailVerify?: SortOrder
    password?: SortOrder
    rol?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    emailVerify?: SortOrder
    password?: SortOrder
    rol?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    emailVerify?: SortOrder
    password?: SortOrder
    rol?: SortOrder
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

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type SubCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type SubCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SubCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutCategoryInput | SubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutCategoryInput | SubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutSubCategoryInput = {
    create?: XOR<ProductCreateWithoutSubCategoryInput, ProductUncheckedCreateWithoutSubCategoryInput> | ProductCreateWithoutSubCategoryInput[] | ProductUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubCategoryInput | ProductCreateOrConnectWithoutSubCategoryInput[]
    createMany?: ProductCreateManySubCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutSubCategoriesInput = {
    create?: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type SubCategoryAttributeCreateNestedManyWithoutSubCategoryInput = {
    create?: XOR<SubCategoryAttributeCreateWithoutSubCategoryInput, SubCategoryAttributeUncheckedCreateWithoutSubCategoryInput> | SubCategoryAttributeCreateWithoutSubCategoryInput[] | SubCategoryAttributeUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: SubCategoryAttributeCreateOrConnectWithoutSubCategoryInput | SubCategoryAttributeCreateOrConnectWithoutSubCategoryInput[]
    createMany?: SubCategoryAttributeCreateManySubCategoryInputEnvelope
    connect?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutSubCategoryInput = {
    create?: XOR<ProductCreateWithoutSubCategoryInput, ProductUncheckedCreateWithoutSubCategoryInput> | ProductCreateWithoutSubCategoryInput[] | ProductUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubCategoryInput | ProductCreateOrConnectWithoutSubCategoryInput[]
    createMany?: ProductCreateManySubCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SubCategoryAttributeUncheckedCreateNestedManyWithoutSubCategoryInput = {
    create?: XOR<SubCategoryAttributeCreateWithoutSubCategoryInput, SubCategoryAttributeUncheckedCreateWithoutSubCategoryInput> | SubCategoryAttributeCreateWithoutSubCategoryInput[] | SubCategoryAttributeUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: SubCategoryAttributeCreateOrConnectWithoutSubCategoryInput | SubCategoryAttributeCreateOrConnectWithoutSubCategoryInput[]
    createMany?: SubCategoryAttributeCreateManySubCategoryInputEnvelope
    connect?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutSubCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutSubCategoryInput, ProductUncheckedCreateWithoutSubCategoryInput> | ProductCreateWithoutSubCategoryInput[] | ProductUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubCategoryInput | ProductCreateOrConnectWithoutSubCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSubCategoryInput | ProductUpsertWithWhereUniqueWithoutSubCategoryInput[]
    createMany?: ProductCreateManySubCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSubCategoryInput | ProductUpdateWithWhereUniqueWithoutSubCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSubCategoryInput | ProductUpdateManyWithWhereWithoutSubCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoriesInput
    upsert?: CategoryUpsertWithoutSubCategoriesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSubCategoriesInput, CategoryUpdateWithoutSubCategoriesInput>, CategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type SubCategoryAttributeUpdateManyWithoutSubCategoryNestedInput = {
    create?: XOR<SubCategoryAttributeCreateWithoutSubCategoryInput, SubCategoryAttributeUncheckedCreateWithoutSubCategoryInput> | SubCategoryAttributeCreateWithoutSubCategoryInput[] | SubCategoryAttributeUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: SubCategoryAttributeCreateOrConnectWithoutSubCategoryInput | SubCategoryAttributeCreateOrConnectWithoutSubCategoryInput[]
    upsert?: SubCategoryAttributeUpsertWithWhereUniqueWithoutSubCategoryInput | SubCategoryAttributeUpsertWithWhereUniqueWithoutSubCategoryInput[]
    createMany?: SubCategoryAttributeCreateManySubCategoryInputEnvelope
    set?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
    disconnect?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
    delete?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
    connect?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
    update?: SubCategoryAttributeUpdateWithWhereUniqueWithoutSubCategoryInput | SubCategoryAttributeUpdateWithWhereUniqueWithoutSubCategoryInput[]
    updateMany?: SubCategoryAttributeUpdateManyWithWhereWithoutSubCategoryInput | SubCategoryAttributeUpdateManyWithWhereWithoutSubCategoryInput[]
    deleteMany?: SubCategoryAttributeScalarWhereInput | SubCategoryAttributeScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutSubCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutSubCategoryInput, ProductUncheckedCreateWithoutSubCategoryInput> | ProductCreateWithoutSubCategoryInput[] | ProductUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubCategoryInput | ProductCreateOrConnectWithoutSubCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSubCategoryInput | ProductUpsertWithWhereUniqueWithoutSubCategoryInput[]
    createMany?: ProductCreateManySubCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSubCategoryInput | ProductUpdateWithWhereUniqueWithoutSubCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSubCategoryInput | ProductUpdateManyWithWhereWithoutSubCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SubCategoryAttributeUncheckedUpdateManyWithoutSubCategoryNestedInput = {
    create?: XOR<SubCategoryAttributeCreateWithoutSubCategoryInput, SubCategoryAttributeUncheckedCreateWithoutSubCategoryInput> | SubCategoryAttributeCreateWithoutSubCategoryInput[] | SubCategoryAttributeUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: SubCategoryAttributeCreateOrConnectWithoutSubCategoryInput | SubCategoryAttributeCreateOrConnectWithoutSubCategoryInput[]
    upsert?: SubCategoryAttributeUpsertWithWhereUniqueWithoutSubCategoryInput | SubCategoryAttributeUpsertWithWhereUniqueWithoutSubCategoryInput[]
    createMany?: SubCategoryAttributeCreateManySubCategoryInputEnvelope
    set?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
    disconnect?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
    delete?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
    connect?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
    update?: SubCategoryAttributeUpdateWithWhereUniqueWithoutSubCategoryInput | SubCategoryAttributeUpdateWithWhereUniqueWithoutSubCategoryInput[]
    updateMany?: SubCategoryAttributeUpdateManyWithWhereWithoutSubCategoryInput | SubCategoryAttributeUpdateManyWithWhereWithoutSubCategoryInput[]
    deleteMany?: SubCategoryAttributeScalarWhereInput | SubCategoryAttributeScalarWhereInput[]
  }

  export type AttributeCreateNestedOneWithoutOptionsInput = {
    create?: XOR<AttributeCreateWithoutOptionsInput, AttributeUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: AttributeCreateOrConnectWithoutOptionsInput
    connect?: AttributeWhereUniqueInput
  }

  export type ProductAttributeCreateNestedManyWithoutOptionInput = {
    create?: XOR<ProductAttributeCreateWithoutOptionInput, ProductAttributeUncheckedCreateWithoutOptionInput> | ProductAttributeCreateWithoutOptionInput[] | ProductAttributeUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: ProductAttributeCreateOrConnectWithoutOptionInput | ProductAttributeCreateOrConnectWithoutOptionInput[]
    createMany?: ProductAttributeCreateManyOptionInputEnvelope
    connect?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
  }

  export type ProductAttributeUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<ProductAttributeCreateWithoutOptionInput, ProductAttributeUncheckedCreateWithoutOptionInput> | ProductAttributeCreateWithoutOptionInput[] | ProductAttributeUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: ProductAttributeCreateOrConnectWithoutOptionInput | ProductAttributeCreateOrConnectWithoutOptionInput[]
    createMany?: ProductAttributeCreateManyOptionInputEnvelope
    connect?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
  }

  export type AttributeUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<AttributeCreateWithoutOptionsInput, AttributeUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: AttributeCreateOrConnectWithoutOptionsInput
    upsert?: AttributeUpsertWithoutOptionsInput
    connect?: AttributeWhereUniqueInput
    update?: XOR<XOR<AttributeUpdateToOneWithWhereWithoutOptionsInput, AttributeUpdateWithoutOptionsInput>, AttributeUncheckedUpdateWithoutOptionsInput>
  }

  export type ProductAttributeUpdateManyWithoutOptionNestedInput = {
    create?: XOR<ProductAttributeCreateWithoutOptionInput, ProductAttributeUncheckedCreateWithoutOptionInput> | ProductAttributeCreateWithoutOptionInput[] | ProductAttributeUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: ProductAttributeCreateOrConnectWithoutOptionInput | ProductAttributeCreateOrConnectWithoutOptionInput[]
    upsert?: ProductAttributeUpsertWithWhereUniqueWithoutOptionInput | ProductAttributeUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: ProductAttributeCreateManyOptionInputEnvelope
    set?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    disconnect?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    delete?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    connect?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    update?: ProductAttributeUpdateWithWhereUniqueWithoutOptionInput | ProductAttributeUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: ProductAttributeUpdateManyWithWhereWithoutOptionInput | ProductAttributeUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: ProductAttributeScalarWhereInput | ProductAttributeScalarWhereInput[]
  }

  export type ProductAttributeUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<ProductAttributeCreateWithoutOptionInput, ProductAttributeUncheckedCreateWithoutOptionInput> | ProductAttributeCreateWithoutOptionInput[] | ProductAttributeUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: ProductAttributeCreateOrConnectWithoutOptionInput | ProductAttributeCreateOrConnectWithoutOptionInput[]
    upsert?: ProductAttributeUpsertWithWhereUniqueWithoutOptionInput | ProductAttributeUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: ProductAttributeCreateManyOptionInputEnvelope
    set?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    disconnect?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    delete?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    connect?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    update?: ProductAttributeUpdateWithWhereUniqueWithoutOptionInput | ProductAttributeUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: ProductAttributeUpdateManyWithWhereWithoutOptionInput | ProductAttributeUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: ProductAttributeScalarWhereInput | ProductAttributeScalarWhereInput[]
  }

  export type AttributeOptionCreateNestedManyWithoutAttributeInput = {
    create?: XOR<AttributeOptionCreateWithoutAttributeInput, AttributeOptionUncheckedCreateWithoutAttributeInput> | AttributeOptionCreateWithoutAttributeInput[] | AttributeOptionUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributeOptionCreateOrConnectWithoutAttributeInput | AttributeOptionCreateOrConnectWithoutAttributeInput[]
    createMany?: AttributeOptionCreateManyAttributeInputEnvelope
    connect?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
  }

  export type SubCategoryAttributeCreateNestedManyWithoutAttributeInput = {
    create?: XOR<SubCategoryAttributeCreateWithoutAttributeInput, SubCategoryAttributeUncheckedCreateWithoutAttributeInput> | SubCategoryAttributeCreateWithoutAttributeInput[] | SubCategoryAttributeUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: SubCategoryAttributeCreateOrConnectWithoutAttributeInput | SubCategoryAttributeCreateOrConnectWithoutAttributeInput[]
    createMany?: SubCategoryAttributeCreateManyAttributeInputEnvelope
    connect?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
  }

  export type ProductAttributeCreateNestedManyWithoutAttributeInput = {
    create?: XOR<ProductAttributeCreateWithoutAttributeInput, ProductAttributeUncheckedCreateWithoutAttributeInput> | ProductAttributeCreateWithoutAttributeInput[] | ProductAttributeUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: ProductAttributeCreateOrConnectWithoutAttributeInput | ProductAttributeCreateOrConnectWithoutAttributeInput[]
    createMany?: ProductAttributeCreateManyAttributeInputEnvelope
    connect?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
  }

  export type AttributeOptionUncheckedCreateNestedManyWithoutAttributeInput = {
    create?: XOR<AttributeOptionCreateWithoutAttributeInput, AttributeOptionUncheckedCreateWithoutAttributeInput> | AttributeOptionCreateWithoutAttributeInput[] | AttributeOptionUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributeOptionCreateOrConnectWithoutAttributeInput | AttributeOptionCreateOrConnectWithoutAttributeInput[]
    createMany?: AttributeOptionCreateManyAttributeInputEnvelope
    connect?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
  }

  export type SubCategoryAttributeUncheckedCreateNestedManyWithoutAttributeInput = {
    create?: XOR<SubCategoryAttributeCreateWithoutAttributeInput, SubCategoryAttributeUncheckedCreateWithoutAttributeInput> | SubCategoryAttributeCreateWithoutAttributeInput[] | SubCategoryAttributeUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: SubCategoryAttributeCreateOrConnectWithoutAttributeInput | SubCategoryAttributeCreateOrConnectWithoutAttributeInput[]
    createMany?: SubCategoryAttributeCreateManyAttributeInputEnvelope
    connect?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
  }

  export type ProductAttributeUncheckedCreateNestedManyWithoutAttributeInput = {
    create?: XOR<ProductAttributeCreateWithoutAttributeInput, ProductAttributeUncheckedCreateWithoutAttributeInput> | ProductAttributeCreateWithoutAttributeInput[] | ProductAttributeUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: ProductAttributeCreateOrConnectWithoutAttributeInput | ProductAttributeCreateOrConnectWithoutAttributeInput[]
    createMany?: ProductAttributeCreateManyAttributeInputEnvelope
    connect?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
  }

  export type EnumAttributeTypeFieldUpdateOperationsInput = {
    set?: $Enums.AttributeType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AttributeOptionUpdateManyWithoutAttributeNestedInput = {
    create?: XOR<AttributeOptionCreateWithoutAttributeInput, AttributeOptionUncheckedCreateWithoutAttributeInput> | AttributeOptionCreateWithoutAttributeInput[] | AttributeOptionUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributeOptionCreateOrConnectWithoutAttributeInput | AttributeOptionCreateOrConnectWithoutAttributeInput[]
    upsert?: AttributeOptionUpsertWithWhereUniqueWithoutAttributeInput | AttributeOptionUpsertWithWhereUniqueWithoutAttributeInput[]
    createMany?: AttributeOptionCreateManyAttributeInputEnvelope
    set?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
    disconnect?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
    delete?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
    connect?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
    update?: AttributeOptionUpdateWithWhereUniqueWithoutAttributeInput | AttributeOptionUpdateWithWhereUniqueWithoutAttributeInput[]
    updateMany?: AttributeOptionUpdateManyWithWhereWithoutAttributeInput | AttributeOptionUpdateManyWithWhereWithoutAttributeInput[]
    deleteMany?: AttributeOptionScalarWhereInput | AttributeOptionScalarWhereInput[]
  }

  export type SubCategoryAttributeUpdateManyWithoutAttributeNestedInput = {
    create?: XOR<SubCategoryAttributeCreateWithoutAttributeInput, SubCategoryAttributeUncheckedCreateWithoutAttributeInput> | SubCategoryAttributeCreateWithoutAttributeInput[] | SubCategoryAttributeUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: SubCategoryAttributeCreateOrConnectWithoutAttributeInput | SubCategoryAttributeCreateOrConnectWithoutAttributeInput[]
    upsert?: SubCategoryAttributeUpsertWithWhereUniqueWithoutAttributeInput | SubCategoryAttributeUpsertWithWhereUniqueWithoutAttributeInput[]
    createMany?: SubCategoryAttributeCreateManyAttributeInputEnvelope
    set?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
    disconnect?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
    delete?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
    connect?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
    update?: SubCategoryAttributeUpdateWithWhereUniqueWithoutAttributeInput | SubCategoryAttributeUpdateWithWhereUniqueWithoutAttributeInput[]
    updateMany?: SubCategoryAttributeUpdateManyWithWhereWithoutAttributeInput | SubCategoryAttributeUpdateManyWithWhereWithoutAttributeInput[]
    deleteMany?: SubCategoryAttributeScalarWhereInput | SubCategoryAttributeScalarWhereInput[]
  }

  export type ProductAttributeUpdateManyWithoutAttributeNestedInput = {
    create?: XOR<ProductAttributeCreateWithoutAttributeInput, ProductAttributeUncheckedCreateWithoutAttributeInput> | ProductAttributeCreateWithoutAttributeInput[] | ProductAttributeUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: ProductAttributeCreateOrConnectWithoutAttributeInput | ProductAttributeCreateOrConnectWithoutAttributeInput[]
    upsert?: ProductAttributeUpsertWithWhereUniqueWithoutAttributeInput | ProductAttributeUpsertWithWhereUniqueWithoutAttributeInput[]
    createMany?: ProductAttributeCreateManyAttributeInputEnvelope
    set?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    disconnect?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    delete?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    connect?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    update?: ProductAttributeUpdateWithWhereUniqueWithoutAttributeInput | ProductAttributeUpdateWithWhereUniqueWithoutAttributeInput[]
    updateMany?: ProductAttributeUpdateManyWithWhereWithoutAttributeInput | ProductAttributeUpdateManyWithWhereWithoutAttributeInput[]
    deleteMany?: ProductAttributeScalarWhereInput | ProductAttributeScalarWhereInput[]
  }

  export type AttributeOptionUncheckedUpdateManyWithoutAttributeNestedInput = {
    create?: XOR<AttributeOptionCreateWithoutAttributeInput, AttributeOptionUncheckedCreateWithoutAttributeInput> | AttributeOptionCreateWithoutAttributeInput[] | AttributeOptionUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributeOptionCreateOrConnectWithoutAttributeInput | AttributeOptionCreateOrConnectWithoutAttributeInput[]
    upsert?: AttributeOptionUpsertWithWhereUniqueWithoutAttributeInput | AttributeOptionUpsertWithWhereUniqueWithoutAttributeInput[]
    createMany?: AttributeOptionCreateManyAttributeInputEnvelope
    set?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
    disconnect?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
    delete?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
    connect?: AttributeOptionWhereUniqueInput | AttributeOptionWhereUniqueInput[]
    update?: AttributeOptionUpdateWithWhereUniqueWithoutAttributeInput | AttributeOptionUpdateWithWhereUniqueWithoutAttributeInput[]
    updateMany?: AttributeOptionUpdateManyWithWhereWithoutAttributeInput | AttributeOptionUpdateManyWithWhereWithoutAttributeInput[]
    deleteMany?: AttributeOptionScalarWhereInput | AttributeOptionScalarWhereInput[]
  }

  export type SubCategoryAttributeUncheckedUpdateManyWithoutAttributeNestedInput = {
    create?: XOR<SubCategoryAttributeCreateWithoutAttributeInput, SubCategoryAttributeUncheckedCreateWithoutAttributeInput> | SubCategoryAttributeCreateWithoutAttributeInput[] | SubCategoryAttributeUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: SubCategoryAttributeCreateOrConnectWithoutAttributeInput | SubCategoryAttributeCreateOrConnectWithoutAttributeInput[]
    upsert?: SubCategoryAttributeUpsertWithWhereUniqueWithoutAttributeInput | SubCategoryAttributeUpsertWithWhereUniqueWithoutAttributeInput[]
    createMany?: SubCategoryAttributeCreateManyAttributeInputEnvelope
    set?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
    disconnect?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
    delete?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
    connect?: SubCategoryAttributeWhereUniqueInput | SubCategoryAttributeWhereUniqueInput[]
    update?: SubCategoryAttributeUpdateWithWhereUniqueWithoutAttributeInput | SubCategoryAttributeUpdateWithWhereUniqueWithoutAttributeInput[]
    updateMany?: SubCategoryAttributeUpdateManyWithWhereWithoutAttributeInput | SubCategoryAttributeUpdateManyWithWhereWithoutAttributeInput[]
    deleteMany?: SubCategoryAttributeScalarWhereInput | SubCategoryAttributeScalarWhereInput[]
  }

  export type ProductAttributeUncheckedUpdateManyWithoutAttributeNestedInput = {
    create?: XOR<ProductAttributeCreateWithoutAttributeInput, ProductAttributeUncheckedCreateWithoutAttributeInput> | ProductAttributeCreateWithoutAttributeInput[] | ProductAttributeUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: ProductAttributeCreateOrConnectWithoutAttributeInput | ProductAttributeCreateOrConnectWithoutAttributeInput[]
    upsert?: ProductAttributeUpsertWithWhereUniqueWithoutAttributeInput | ProductAttributeUpsertWithWhereUniqueWithoutAttributeInput[]
    createMany?: ProductAttributeCreateManyAttributeInputEnvelope
    set?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    disconnect?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    delete?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    connect?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    update?: ProductAttributeUpdateWithWhereUniqueWithoutAttributeInput | ProductAttributeUpdateWithWhereUniqueWithoutAttributeInput[]
    updateMany?: ProductAttributeUpdateManyWithWhereWithoutAttributeInput | ProductAttributeUpdateManyWithWhereWithoutAttributeInput[]
    deleteMany?: ProductAttributeScalarWhereInput | ProductAttributeScalarWhereInput[]
  }

  export type SubCategoryCreateNestedOneWithoutAttributesInput = {
    create?: XOR<SubCategoryCreateWithoutAttributesInput, SubCategoryUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutAttributesInput
    connect?: SubCategoryWhereUniqueInput
  }

  export type AttributeCreateNestedOneWithoutSubCategoriesInput = {
    create?: XOR<AttributeCreateWithoutSubCategoriesInput, AttributeUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: AttributeCreateOrConnectWithoutSubCategoriesInput
    connect?: AttributeWhereUniqueInput
  }

  export type SubCategoryUpdateOneRequiredWithoutAttributesNestedInput = {
    create?: XOR<SubCategoryCreateWithoutAttributesInput, SubCategoryUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutAttributesInput
    upsert?: SubCategoryUpsertWithoutAttributesInput
    connect?: SubCategoryWhereUniqueInput
    update?: XOR<XOR<SubCategoryUpdateToOneWithWhereWithoutAttributesInput, SubCategoryUpdateWithoutAttributesInput>, SubCategoryUncheckedUpdateWithoutAttributesInput>
  }

  export type AttributeUpdateOneRequiredWithoutSubCategoriesNestedInput = {
    create?: XOR<AttributeCreateWithoutSubCategoriesInput, AttributeUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: AttributeCreateOrConnectWithoutSubCategoriesInput
    upsert?: AttributeUpsertWithoutSubCategoriesInput
    connect?: AttributeWhereUniqueInput
    update?: XOR<XOR<AttributeUpdateToOneWithWhereWithoutSubCategoriesInput, AttributeUpdateWithoutSubCategoriesInput>, AttributeUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type ProductCreateimagesInput = {
    set: string[]
  }

  export type SubCategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<SubCategoryCreateWithoutProductsInput, SubCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutProductsInput
    connect?: SubCategoryWhereUniqueInput
  }

  export type BrandCreateNestedOneWithoutProductsInput = {
    create?: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput
    connect?: BrandWhereUniqueInput
  }

  export type ProductAttributeCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductAttributeCreateWithoutProductInput, ProductAttributeUncheckedCreateWithoutProductInput> | ProductAttributeCreateWithoutProductInput[] | ProductAttributeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAttributeCreateOrConnectWithoutProductInput | ProductAttributeCreateOrConnectWithoutProductInput[]
    createMany?: ProductAttributeCreateManyProductInputEnvelope
    connect?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
  }

  export type ProductAttributeUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductAttributeCreateWithoutProductInput, ProductAttributeUncheckedCreateWithoutProductInput> | ProductAttributeCreateWithoutProductInput[] | ProductAttributeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAttributeCreateOrConnectWithoutProductInput | ProductAttributeCreateOrConnectWithoutProductInput[]
    createMany?: ProductAttributeCreateManyProductInputEnvelope
    connect?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubCategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<SubCategoryCreateWithoutProductsInput, SubCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutProductsInput
    upsert?: SubCategoryUpsertWithoutProductsInput
    connect?: SubCategoryWhereUniqueInput
    update?: XOR<XOR<SubCategoryUpdateToOneWithWhereWithoutProductsInput, SubCategoryUpdateWithoutProductsInput>, SubCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type BrandUpdateOneWithoutProductsNestedInput = {
    create?: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput
    upsert?: BrandUpsertWithoutProductsInput
    disconnect?: BrandWhereInput | boolean
    delete?: BrandWhereInput | boolean
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutProductsInput, BrandUpdateWithoutProductsInput>, BrandUncheckedUpdateWithoutProductsInput>
  }

  export type ProductAttributeUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductAttributeCreateWithoutProductInput, ProductAttributeUncheckedCreateWithoutProductInput> | ProductAttributeCreateWithoutProductInput[] | ProductAttributeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAttributeCreateOrConnectWithoutProductInput | ProductAttributeCreateOrConnectWithoutProductInput[]
    upsert?: ProductAttributeUpsertWithWhereUniqueWithoutProductInput | ProductAttributeUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductAttributeCreateManyProductInputEnvelope
    set?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    disconnect?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    delete?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    connect?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    update?: ProductAttributeUpdateWithWhereUniqueWithoutProductInput | ProductAttributeUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductAttributeUpdateManyWithWhereWithoutProductInput | ProductAttributeUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductAttributeScalarWhereInput | ProductAttributeScalarWhereInput[]
  }

  export type ProductAttributeUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductAttributeCreateWithoutProductInput, ProductAttributeUncheckedCreateWithoutProductInput> | ProductAttributeCreateWithoutProductInput[] | ProductAttributeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAttributeCreateOrConnectWithoutProductInput | ProductAttributeCreateOrConnectWithoutProductInput[]
    upsert?: ProductAttributeUpsertWithWhereUniqueWithoutProductInput | ProductAttributeUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductAttributeCreateManyProductInputEnvelope
    set?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    disconnect?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    delete?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    connect?: ProductAttributeWhereUniqueInput | ProductAttributeWhereUniqueInput[]
    update?: ProductAttributeUpdateWithWhereUniqueWithoutProductInput | ProductAttributeUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductAttributeUpdateManyWithWhereWithoutProductInput | ProductAttributeUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductAttributeScalarWhereInput | ProductAttributeScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutBrandsInput = {
    create?: XOR<ProductCreateWithoutBrandsInput, ProductUncheckedCreateWithoutBrandsInput> | ProductCreateWithoutBrandsInput[] | ProductUncheckedCreateWithoutBrandsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandsInput | ProductCreateOrConnectWithoutBrandsInput[]
    createMany?: ProductCreateManyBrandsInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBrandsInput = {
    create?: XOR<ProductCreateWithoutBrandsInput, ProductUncheckedCreateWithoutBrandsInput> | ProductCreateWithoutBrandsInput[] | ProductUncheckedCreateWithoutBrandsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandsInput | ProductCreateOrConnectWithoutBrandsInput[]
    createMany?: ProductCreateManyBrandsInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutBrandsNestedInput = {
    create?: XOR<ProductCreateWithoutBrandsInput, ProductUncheckedCreateWithoutBrandsInput> | ProductCreateWithoutBrandsInput[] | ProductUncheckedCreateWithoutBrandsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandsInput | ProductCreateOrConnectWithoutBrandsInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandsInput | ProductUpsertWithWhereUniqueWithoutBrandsInput[]
    createMany?: ProductCreateManyBrandsInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandsInput | ProductUpdateWithWhereUniqueWithoutBrandsInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandsInput | ProductUpdateManyWithWhereWithoutBrandsInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBrandsNestedInput = {
    create?: XOR<ProductCreateWithoutBrandsInput, ProductUncheckedCreateWithoutBrandsInput> | ProductCreateWithoutBrandsInput[] | ProductUncheckedCreateWithoutBrandsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandsInput | ProductCreateOrConnectWithoutBrandsInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandsInput | ProductUpsertWithWhereUniqueWithoutBrandsInput[]
    createMany?: ProductCreateManyBrandsInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandsInput | ProductUpdateWithWhereUniqueWithoutBrandsInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandsInput | ProductUpdateManyWithWhereWithoutBrandsInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProductAttributesInput = {
    create?: XOR<ProductCreateWithoutProductAttributesInput, ProductUncheckedCreateWithoutProductAttributesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductAttributesInput
    connect?: ProductWhereUniqueInput
  }

  export type AttributeCreateNestedOneWithoutProductAttributesInput = {
    create?: XOR<AttributeCreateWithoutProductAttributesInput, AttributeUncheckedCreateWithoutProductAttributesInput>
    connectOrCreate?: AttributeCreateOrConnectWithoutProductAttributesInput
    connect?: AttributeWhereUniqueInput
  }

  export type AttributeOptionCreateNestedOneWithoutProductAttributesInput = {
    create?: XOR<AttributeOptionCreateWithoutProductAttributesInput, AttributeOptionUncheckedCreateWithoutProductAttributesInput>
    connectOrCreate?: AttributeOptionCreateOrConnectWithoutProductAttributesInput
    connect?: AttributeOptionWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ProductUpdateOneRequiredWithoutProductAttributesNestedInput = {
    create?: XOR<ProductCreateWithoutProductAttributesInput, ProductUncheckedCreateWithoutProductAttributesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductAttributesInput
    upsert?: ProductUpsertWithoutProductAttributesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductAttributesInput, ProductUpdateWithoutProductAttributesInput>, ProductUncheckedUpdateWithoutProductAttributesInput>
  }

  export type AttributeUpdateOneRequiredWithoutProductAttributesNestedInput = {
    create?: XOR<AttributeCreateWithoutProductAttributesInput, AttributeUncheckedCreateWithoutProductAttributesInput>
    connectOrCreate?: AttributeCreateOrConnectWithoutProductAttributesInput
    upsert?: AttributeUpsertWithoutProductAttributesInput
    connect?: AttributeWhereUniqueInput
    update?: XOR<XOR<AttributeUpdateToOneWithWhereWithoutProductAttributesInput, AttributeUpdateWithoutProductAttributesInput>, AttributeUncheckedUpdateWithoutProductAttributesInput>
  }

  export type AttributeOptionUpdateOneWithoutProductAttributesNestedInput = {
    create?: XOR<AttributeOptionCreateWithoutProductAttributesInput, AttributeOptionUncheckedCreateWithoutProductAttributesInput>
    connectOrCreate?: AttributeOptionCreateOrConnectWithoutProductAttributesInput
    upsert?: AttributeOptionUpsertWithoutProductAttributesInput
    disconnect?: AttributeOptionWhereInput | boolean
    delete?: AttributeOptionWhereInput | boolean
    connect?: AttributeOptionWhereUniqueInput
    update?: XOR<XOR<AttributeOptionUpdateToOneWithWhereWithoutProductAttributesInput, AttributeOptionUpdateWithoutProductAttributesInput>, AttributeOptionUncheckedUpdateWithoutProductAttributesInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
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

  export type NestedEnumAttributeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttributeType | EnumAttributeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttributeType[] | ListEnumAttributeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttributeType[] | ListEnumAttributeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttributeTypeFilter<$PrismaModel> | $Enums.AttributeType
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

  export type NestedEnumAttributeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttributeType | EnumAttributeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttributeType[] | ListEnumAttributeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttributeType[] | ListEnumAttributeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttributeTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttributeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttributeTypeFilter<$PrismaModel>
    _max?: NestedEnumAttributeTypeFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
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

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type SubCategoryCreateWithoutCategoryInput = {
    id?: string
    name: string
    products?: ProductCreateNestedManyWithoutSubCategoryInput
    attributes?: SubCategoryAttributeCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    products?: ProductUncheckedCreateNestedManyWithoutSubCategoryInput
    attributes?: SubCategoryAttributeUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryCreateOrConnectWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoryCreateManyCategoryInputEnvelope = {
    data: SubCategoryCreateManyCategoryInput | SubCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SubCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    update: XOR<SubCategoryUpdateWithoutCategoryInput, SubCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    data: XOR<SubCategoryUpdateWithoutCategoryInput, SubCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type SubCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: SubCategoryScalarWhereInput
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SubCategoryScalarWhereInput = {
    AND?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    OR?: SubCategoryScalarWhereInput[]
    NOT?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    id?: StringFilter<"SubCategory"> | string
    name?: StringFilter<"SubCategory"> | string
    categoryId?: StringFilter<"SubCategory"> | string
  }

  export type ProductCreateWithoutSubCategoryInput = {
    id?: string
    name: string
    description?: string | null
    stock: number
    sku?: string | null
    price?: number
    discountPrice?: number | null
    slug: string
    images?: ProductCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    brands?: BrandCreateNestedOneWithoutProductsInput
    productAttributes?: ProductAttributeCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSubCategoryInput = {
    id?: string
    name: string
    description?: string | null
    stock: number
    sku?: string | null
    price?: number
    discountPrice?: number | null
    slug: string
    images?: ProductCreateimagesInput | string[]
    brandId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productAttributes?: ProductAttributeUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSubCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSubCategoryInput, ProductUncheckedCreateWithoutSubCategoryInput>
  }

  export type ProductCreateManySubCategoryInputEnvelope = {
    data: ProductCreateManySubCategoryInput | ProductCreateManySubCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutSubCategoriesInput = {
    id?: string
    name: string
  }

  export type CategoryUncheckedCreateWithoutSubCategoriesInput = {
    id?: string
    name: string
  }

  export type CategoryCreateOrConnectWithoutSubCategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
  }

  export type SubCategoryAttributeCreateWithoutSubCategoryInput = {
    attribute: AttributeCreateNestedOneWithoutSubCategoriesInput
  }

  export type SubCategoryAttributeUncheckedCreateWithoutSubCategoryInput = {
    attributeId: string
  }

  export type SubCategoryAttributeCreateOrConnectWithoutSubCategoryInput = {
    where: SubCategoryAttributeWhereUniqueInput
    create: XOR<SubCategoryAttributeCreateWithoutSubCategoryInput, SubCategoryAttributeUncheckedCreateWithoutSubCategoryInput>
  }

  export type SubCategoryAttributeCreateManySubCategoryInputEnvelope = {
    data: SubCategoryAttributeCreateManySubCategoryInput | SubCategoryAttributeCreateManySubCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutSubCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutSubCategoryInput, ProductUncheckedUpdateWithoutSubCategoryInput>
    create: XOR<ProductCreateWithoutSubCategoryInput, ProductUncheckedCreateWithoutSubCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutSubCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutSubCategoryInput, ProductUncheckedUpdateWithoutSubCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutSubCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutSubCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    stock?: IntFilter<"Product"> | number
    sku?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    discountPrice?: FloatNullableFilter<"Product"> | number | null
    slug?: StringFilter<"Product"> | string
    images?: StringNullableListFilter<"Product">
    subCategoryId?: StringFilter<"Product"> | string
    brandId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type CategoryUpsertWithoutSubCategoriesInput = {
    update: XOR<CategoryUpdateWithoutSubCategoriesInput, CategoryUncheckedUpdateWithoutSubCategoriesInput>
    create: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSubCategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSubCategoriesInput, CategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type CategoryUpdateWithoutSubCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutSubCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubCategoryAttributeUpsertWithWhereUniqueWithoutSubCategoryInput = {
    where: SubCategoryAttributeWhereUniqueInput
    update: XOR<SubCategoryAttributeUpdateWithoutSubCategoryInput, SubCategoryAttributeUncheckedUpdateWithoutSubCategoryInput>
    create: XOR<SubCategoryAttributeCreateWithoutSubCategoryInput, SubCategoryAttributeUncheckedCreateWithoutSubCategoryInput>
  }

  export type SubCategoryAttributeUpdateWithWhereUniqueWithoutSubCategoryInput = {
    where: SubCategoryAttributeWhereUniqueInput
    data: XOR<SubCategoryAttributeUpdateWithoutSubCategoryInput, SubCategoryAttributeUncheckedUpdateWithoutSubCategoryInput>
  }

  export type SubCategoryAttributeUpdateManyWithWhereWithoutSubCategoryInput = {
    where: SubCategoryAttributeScalarWhereInput
    data: XOR<SubCategoryAttributeUpdateManyMutationInput, SubCategoryAttributeUncheckedUpdateManyWithoutSubCategoryInput>
  }

  export type SubCategoryAttributeScalarWhereInput = {
    AND?: SubCategoryAttributeScalarWhereInput | SubCategoryAttributeScalarWhereInput[]
    OR?: SubCategoryAttributeScalarWhereInput[]
    NOT?: SubCategoryAttributeScalarWhereInput | SubCategoryAttributeScalarWhereInput[]
    subCategoryId?: StringFilter<"SubCategoryAttribute"> | string
    attributeId?: StringFilter<"SubCategoryAttribute"> | string
  }

  export type AttributeCreateWithoutOptionsInput = {
    id?: string
    name: string
    type: $Enums.AttributeType
    group: string
    unit?: string | null
    required?: boolean
    subCategories?: SubCategoryAttributeCreateNestedManyWithoutAttributeInput
    productAttributes?: ProductAttributeCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUncheckedCreateWithoutOptionsInput = {
    id?: string
    name: string
    type: $Enums.AttributeType
    group: string
    unit?: string | null
    required?: boolean
    subCategories?: SubCategoryAttributeUncheckedCreateNestedManyWithoutAttributeInput
    productAttributes?: ProductAttributeUncheckedCreateNestedManyWithoutAttributeInput
  }

  export type AttributeCreateOrConnectWithoutOptionsInput = {
    where: AttributeWhereUniqueInput
    create: XOR<AttributeCreateWithoutOptionsInput, AttributeUncheckedCreateWithoutOptionsInput>
  }

  export type ProductAttributeCreateWithoutOptionInput = {
    valueString?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
    product: ProductCreateNestedOneWithoutProductAttributesInput
    attribute: AttributeCreateNestedOneWithoutProductAttributesInput
  }

  export type ProductAttributeUncheckedCreateWithoutOptionInput = {
    id?: number
    productId: string
    attributeId: string
    valueString?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
  }

  export type ProductAttributeCreateOrConnectWithoutOptionInput = {
    where: ProductAttributeWhereUniqueInput
    create: XOR<ProductAttributeCreateWithoutOptionInput, ProductAttributeUncheckedCreateWithoutOptionInput>
  }

  export type ProductAttributeCreateManyOptionInputEnvelope = {
    data: ProductAttributeCreateManyOptionInput | ProductAttributeCreateManyOptionInput[]
    skipDuplicates?: boolean
  }

  export type AttributeUpsertWithoutOptionsInput = {
    update: XOR<AttributeUpdateWithoutOptionsInput, AttributeUncheckedUpdateWithoutOptionsInput>
    create: XOR<AttributeCreateWithoutOptionsInput, AttributeUncheckedCreateWithoutOptionsInput>
    where?: AttributeWhereInput
  }

  export type AttributeUpdateToOneWithWhereWithoutOptionsInput = {
    where?: AttributeWhereInput
    data: XOR<AttributeUpdateWithoutOptionsInput, AttributeUncheckedUpdateWithoutOptionsInput>
  }

  export type AttributeUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAttributeTypeFieldUpdateOperationsInput | $Enums.AttributeType
    group?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    subCategories?: SubCategoryAttributeUpdateManyWithoutAttributeNestedInput
    productAttributes?: ProductAttributeUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAttributeTypeFieldUpdateOperationsInput | $Enums.AttributeType
    group?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    subCategories?: SubCategoryAttributeUncheckedUpdateManyWithoutAttributeNestedInput
    productAttributes?: ProductAttributeUncheckedUpdateManyWithoutAttributeNestedInput
  }

  export type ProductAttributeUpsertWithWhereUniqueWithoutOptionInput = {
    where: ProductAttributeWhereUniqueInput
    update: XOR<ProductAttributeUpdateWithoutOptionInput, ProductAttributeUncheckedUpdateWithoutOptionInput>
    create: XOR<ProductAttributeCreateWithoutOptionInput, ProductAttributeUncheckedCreateWithoutOptionInput>
  }

  export type ProductAttributeUpdateWithWhereUniqueWithoutOptionInput = {
    where: ProductAttributeWhereUniqueInput
    data: XOR<ProductAttributeUpdateWithoutOptionInput, ProductAttributeUncheckedUpdateWithoutOptionInput>
  }

  export type ProductAttributeUpdateManyWithWhereWithoutOptionInput = {
    where: ProductAttributeScalarWhereInput
    data: XOR<ProductAttributeUpdateManyMutationInput, ProductAttributeUncheckedUpdateManyWithoutOptionInput>
  }

  export type ProductAttributeScalarWhereInput = {
    AND?: ProductAttributeScalarWhereInput | ProductAttributeScalarWhereInput[]
    OR?: ProductAttributeScalarWhereInput[]
    NOT?: ProductAttributeScalarWhereInput | ProductAttributeScalarWhereInput[]
    id?: IntFilter<"ProductAttribute"> | number
    productId?: StringFilter<"ProductAttribute"> | string
    attributeId?: StringFilter<"ProductAttribute"> | string
    valueString?: StringNullableFilter<"ProductAttribute"> | string | null
    valueNumber?: FloatNullableFilter<"ProductAttribute"> | number | null
    valueBoolean?: BoolNullableFilter<"ProductAttribute"> | boolean | null
    optionId?: StringNullableFilter<"ProductAttribute"> | string | null
  }

  export type AttributeOptionCreateWithoutAttributeInput = {
    id?: string
    value: string
    productAttributes?: ProductAttributeCreateNestedManyWithoutOptionInput
  }

  export type AttributeOptionUncheckedCreateWithoutAttributeInput = {
    id?: string
    value: string
    productAttributes?: ProductAttributeUncheckedCreateNestedManyWithoutOptionInput
  }

  export type AttributeOptionCreateOrConnectWithoutAttributeInput = {
    where: AttributeOptionWhereUniqueInput
    create: XOR<AttributeOptionCreateWithoutAttributeInput, AttributeOptionUncheckedCreateWithoutAttributeInput>
  }

  export type AttributeOptionCreateManyAttributeInputEnvelope = {
    data: AttributeOptionCreateManyAttributeInput | AttributeOptionCreateManyAttributeInput[]
    skipDuplicates?: boolean
  }

  export type SubCategoryAttributeCreateWithoutAttributeInput = {
    subCategory: SubCategoryCreateNestedOneWithoutAttributesInput
  }

  export type SubCategoryAttributeUncheckedCreateWithoutAttributeInput = {
    subCategoryId: string
  }

  export type SubCategoryAttributeCreateOrConnectWithoutAttributeInput = {
    where: SubCategoryAttributeWhereUniqueInput
    create: XOR<SubCategoryAttributeCreateWithoutAttributeInput, SubCategoryAttributeUncheckedCreateWithoutAttributeInput>
  }

  export type SubCategoryAttributeCreateManyAttributeInputEnvelope = {
    data: SubCategoryAttributeCreateManyAttributeInput | SubCategoryAttributeCreateManyAttributeInput[]
    skipDuplicates?: boolean
  }

  export type ProductAttributeCreateWithoutAttributeInput = {
    valueString?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
    product: ProductCreateNestedOneWithoutProductAttributesInput
    option?: AttributeOptionCreateNestedOneWithoutProductAttributesInput
  }

  export type ProductAttributeUncheckedCreateWithoutAttributeInput = {
    id?: number
    productId: string
    valueString?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
    optionId?: string | null
  }

  export type ProductAttributeCreateOrConnectWithoutAttributeInput = {
    where: ProductAttributeWhereUniqueInput
    create: XOR<ProductAttributeCreateWithoutAttributeInput, ProductAttributeUncheckedCreateWithoutAttributeInput>
  }

  export type ProductAttributeCreateManyAttributeInputEnvelope = {
    data: ProductAttributeCreateManyAttributeInput | ProductAttributeCreateManyAttributeInput[]
    skipDuplicates?: boolean
  }

  export type AttributeOptionUpsertWithWhereUniqueWithoutAttributeInput = {
    where: AttributeOptionWhereUniqueInput
    update: XOR<AttributeOptionUpdateWithoutAttributeInput, AttributeOptionUncheckedUpdateWithoutAttributeInput>
    create: XOR<AttributeOptionCreateWithoutAttributeInput, AttributeOptionUncheckedCreateWithoutAttributeInput>
  }

  export type AttributeOptionUpdateWithWhereUniqueWithoutAttributeInput = {
    where: AttributeOptionWhereUniqueInput
    data: XOR<AttributeOptionUpdateWithoutAttributeInput, AttributeOptionUncheckedUpdateWithoutAttributeInput>
  }

  export type AttributeOptionUpdateManyWithWhereWithoutAttributeInput = {
    where: AttributeOptionScalarWhereInput
    data: XOR<AttributeOptionUpdateManyMutationInput, AttributeOptionUncheckedUpdateManyWithoutAttributeInput>
  }

  export type AttributeOptionScalarWhereInput = {
    AND?: AttributeOptionScalarWhereInput | AttributeOptionScalarWhereInput[]
    OR?: AttributeOptionScalarWhereInput[]
    NOT?: AttributeOptionScalarWhereInput | AttributeOptionScalarWhereInput[]
    id?: StringFilter<"AttributeOption"> | string
    value?: StringFilter<"AttributeOption"> | string
    attributeId?: StringFilter<"AttributeOption"> | string
  }

  export type SubCategoryAttributeUpsertWithWhereUniqueWithoutAttributeInput = {
    where: SubCategoryAttributeWhereUniqueInput
    update: XOR<SubCategoryAttributeUpdateWithoutAttributeInput, SubCategoryAttributeUncheckedUpdateWithoutAttributeInput>
    create: XOR<SubCategoryAttributeCreateWithoutAttributeInput, SubCategoryAttributeUncheckedCreateWithoutAttributeInput>
  }

  export type SubCategoryAttributeUpdateWithWhereUniqueWithoutAttributeInput = {
    where: SubCategoryAttributeWhereUniqueInput
    data: XOR<SubCategoryAttributeUpdateWithoutAttributeInput, SubCategoryAttributeUncheckedUpdateWithoutAttributeInput>
  }

  export type SubCategoryAttributeUpdateManyWithWhereWithoutAttributeInput = {
    where: SubCategoryAttributeScalarWhereInput
    data: XOR<SubCategoryAttributeUpdateManyMutationInput, SubCategoryAttributeUncheckedUpdateManyWithoutAttributeInput>
  }

  export type ProductAttributeUpsertWithWhereUniqueWithoutAttributeInput = {
    where: ProductAttributeWhereUniqueInput
    update: XOR<ProductAttributeUpdateWithoutAttributeInput, ProductAttributeUncheckedUpdateWithoutAttributeInput>
    create: XOR<ProductAttributeCreateWithoutAttributeInput, ProductAttributeUncheckedCreateWithoutAttributeInput>
  }

  export type ProductAttributeUpdateWithWhereUniqueWithoutAttributeInput = {
    where: ProductAttributeWhereUniqueInput
    data: XOR<ProductAttributeUpdateWithoutAttributeInput, ProductAttributeUncheckedUpdateWithoutAttributeInput>
  }

  export type ProductAttributeUpdateManyWithWhereWithoutAttributeInput = {
    where: ProductAttributeScalarWhereInput
    data: XOR<ProductAttributeUpdateManyMutationInput, ProductAttributeUncheckedUpdateManyWithoutAttributeInput>
  }

  export type SubCategoryCreateWithoutAttributesInput = {
    id?: string
    name: string
    products?: ProductCreateNestedManyWithoutSubCategoryInput
    category: CategoryCreateNestedOneWithoutSubCategoriesInput
  }

  export type SubCategoryUncheckedCreateWithoutAttributesInput = {
    id?: string
    name: string
    categoryId: string
    products?: ProductUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryCreateOrConnectWithoutAttributesInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutAttributesInput, SubCategoryUncheckedCreateWithoutAttributesInput>
  }

  export type AttributeCreateWithoutSubCategoriesInput = {
    id?: string
    name: string
    type: $Enums.AttributeType
    group: string
    unit?: string | null
    required?: boolean
    options?: AttributeOptionCreateNestedManyWithoutAttributeInput
    productAttributes?: ProductAttributeCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUncheckedCreateWithoutSubCategoriesInput = {
    id?: string
    name: string
    type: $Enums.AttributeType
    group: string
    unit?: string | null
    required?: boolean
    options?: AttributeOptionUncheckedCreateNestedManyWithoutAttributeInput
    productAttributes?: ProductAttributeUncheckedCreateNestedManyWithoutAttributeInput
  }

  export type AttributeCreateOrConnectWithoutSubCategoriesInput = {
    where: AttributeWhereUniqueInput
    create: XOR<AttributeCreateWithoutSubCategoriesInput, AttributeUncheckedCreateWithoutSubCategoriesInput>
  }

  export type SubCategoryUpsertWithoutAttributesInput = {
    update: XOR<SubCategoryUpdateWithoutAttributesInput, SubCategoryUncheckedUpdateWithoutAttributesInput>
    create: XOR<SubCategoryCreateWithoutAttributesInput, SubCategoryUncheckedCreateWithoutAttributesInput>
    where?: SubCategoryWhereInput
  }

  export type SubCategoryUpdateToOneWithWhereWithoutAttributesInput = {
    where?: SubCategoryWhereInput
    data: XOR<SubCategoryUpdateWithoutAttributesInput, SubCategoryUncheckedUpdateWithoutAttributesInput>
  }

  export type SubCategoryUpdateWithoutAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutSubCategoryNestedInput
    category?: CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type AttributeUpsertWithoutSubCategoriesInput = {
    update: XOR<AttributeUpdateWithoutSubCategoriesInput, AttributeUncheckedUpdateWithoutSubCategoriesInput>
    create: XOR<AttributeCreateWithoutSubCategoriesInput, AttributeUncheckedCreateWithoutSubCategoriesInput>
    where?: AttributeWhereInput
  }

  export type AttributeUpdateToOneWithWhereWithoutSubCategoriesInput = {
    where?: AttributeWhereInput
    data: XOR<AttributeUpdateWithoutSubCategoriesInput, AttributeUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type AttributeUpdateWithoutSubCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAttributeTypeFieldUpdateOperationsInput | $Enums.AttributeType
    group?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: AttributeOptionUpdateManyWithoutAttributeNestedInput
    productAttributes?: ProductAttributeUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateWithoutSubCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAttributeTypeFieldUpdateOperationsInput | $Enums.AttributeType
    group?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: AttributeOptionUncheckedUpdateManyWithoutAttributeNestedInput
    productAttributes?: ProductAttributeUncheckedUpdateManyWithoutAttributeNestedInput
  }

  export type SubCategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    category: CategoryCreateNestedOneWithoutSubCategoriesInput
    attributes?: SubCategoryAttributeCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    categoryId: string
    attributes?: SubCategoryAttributeUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryCreateOrConnectWithoutProductsInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutProductsInput, SubCategoryUncheckedCreateWithoutProductsInput>
  }

  export type BrandCreateWithoutProductsInput = {
    id?: string
    name: string
  }

  export type BrandUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
  }

  export type BrandCreateOrConnectWithoutProductsInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
  }

  export type ProductAttributeCreateWithoutProductInput = {
    valueString?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
    attribute: AttributeCreateNestedOneWithoutProductAttributesInput
    option?: AttributeOptionCreateNestedOneWithoutProductAttributesInput
  }

  export type ProductAttributeUncheckedCreateWithoutProductInput = {
    id?: number
    attributeId: string
    valueString?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
    optionId?: string | null
  }

  export type ProductAttributeCreateOrConnectWithoutProductInput = {
    where: ProductAttributeWhereUniqueInput
    create: XOR<ProductAttributeCreateWithoutProductInput, ProductAttributeUncheckedCreateWithoutProductInput>
  }

  export type ProductAttributeCreateManyProductInputEnvelope = {
    data: ProductAttributeCreateManyProductInput | ProductAttributeCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type SubCategoryUpsertWithoutProductsInput = {
    update: XOR<SubCategoryUpdateWithoutProductsInput, SubCategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<SubCategoryCreateWithoutProductsInput, SubCategoryUncheckedCreateWithoutProductsInput>
    where?: SubCategoryWhereInput
  }

  export type SubCategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: SubCategoryWhereInput
    data: XOR<SubCategoryUpdateWithoutProductsInput, SubCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type SubCategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
    attributes?: SubCategoryAttributeUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    attributes?: SubCategoryAttributeUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type BrandUpsertWithoutProductsInput = {
    update: XOR<BrandUpdateWithoutProductsInput, BrandUncheckedUpdateWithoutProductsInput>
    create: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutProductsInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutProductsInput, BrandUncheckedUpdateWithoutProductsInput>
  }

  export type BrandUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BrandUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductAttributeUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductAttributeWhereUniqueInput
    update: XOR<ProductAttributeUpdateWithoutProductInput, ProductAttributeUncheckedUpdateWithoutProductInput>
    create: XOR<ProductAttributeCreateWithoutProductInput, ProductAttributeUncheckedCreateWithoutProductInput>
  }

  export type ProductAttributeUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductAttributeWhereUniqueInput
    data: XOR<ProductAttributeUpdateWithoutProductInput, ProductAttributeUncheckedUpdateWithoutProductInput>
  }

  export type ProductAttributeUpdateManyWithWhereWithoutProductInput = {
    where: ProductAttributeScalarWhereInput
    data: XOR<ProductAttributeUpdateManyMutationInput, ProductAttributeUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCreateWithoutBrandsInput = {
    id?: string
    name: string
    description?: string | null
    stock: number
    sku?: string | null
    price?: number
    discountPrice?: number | null
    slug: string
    images?: ProductCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategory: SubCategoryCreateNestedOneWithoutProductsInput
    productAttributes?: ProductAttributeCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBrandsInput = {
    id?: string
    name: string
    description?: string | null
    stock: number
    sku?: string | null
    price?: number
    discountPrice?: number | null
    slug: string
    images?: ProductCreateimagesInput | string[]
    subCategoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productAttributes?: ProductAttributeUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBrandsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBrandsInput, ProductUncheckedCreateWithoutBrandsInput>
  }

  export type ProductCreateManyBrandsInputEnvelope = {
    data: ProductCreateManyBrandsInput | ProductCreateManyBrandsInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutBrandsInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBrandsInput, ProductUncheckedUpdateWithoutBrandsInput>
    create: XOR<ProductCreateWithoutBrandsInput, ProductUncheckedCreateWithoutBrandsInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBrandsInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBrandsInput, ProductUncheckedUpdateWithoutBrandsInput>
  }

  export type ProductUpdateManyWithWhereWithoutBrandsInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBrandsInput>
  }

  export type ProductCreateWithoutProductAttributesInput = {
    id?: string
    name: string
    description?: string | null
    stock: number
    sku?: string | null
    price?: number
    discountPrice?: number | null
    slug: string
    images?: ProductCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategory: SubCategoryCreateNestedOneWithoutProductsInput
    brands?: BrandCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutProductAttributesInput = {
    id?: string
    name: string
    description?: string | null
    stock: number
    sku?: string | null
    price?: number
    discountPrice?: number | null
    slug: string
    images?: ProductCreateimagesInput | string[]
    subCategoryId: string
    brandId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutProductAttributesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductAttributesInput, ProductUncheckedCreateWithoutProductAttributesInput>
  }

  export type AttributeCreateWithoutProductAttributesInput = {
    id?: string
    name: string
    type: $Enums.AttributeType
    group: string
    unit?: string | null
    required?: boolean
    options?: AttributeOptionCreateNestedManyWithoutAttributeInput
    subCategories?: SubCategoryAttributeCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUncheckedCreateWithoutProductAttributesInput = {
    id?: string
    name: string
    type: $Enums.AttributeType
    group: string
    unit?: string | null
    required?: boolean
    options?: AttributeOptionUncheckedCreateNestedManyWithoutAttributeInput
    subCategories?: SubCategoryAttributeUncheckedCreateNestedManyWithoutAttributeInput
  }

  export type AttributeCreateOrConnectWithoutProductAttributesInput = {
    where: AttributeWhereUniqueInput
    create: XOR<AttributeCreateWithoutProductAttributesInput, AttributeUncheckedCreateWithoutProductAttributesInput>
  }

  export type AttributeOptionCreateWithoutProductAttributesInput = {
    id?: string
    value: string
    attribute: AttributeCreateNestedOneWithoutOptionsInput
  }

  export type AttributeOptionUncheckedCreateWithoutProductAttributesInput = {
    id?: string
    value: string
    attributeId: string
  }

  export type AttributeOptionCreateOrConnectWithoutProductAttributesInput = {
    where: AttributeOptionWhereUniqueInput
    create: XOR<AttributeOptionCreateWithoutProductAttributesInput, AttributeOptionUncheckedCreateWithoutProductAttributesInput>
  }

  export type ProductUpsertWithoutProductAttributesInput = {
    update: XOR<ProductUpdateWithoutProductAttributesInput, ProductUncheckedUpdateWithoutProductAttributesInput>
    create: XOR<ProductCreateWithoutProductAttributesInput, ProductUncheckedCreateWithoutProductAttributesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductAttributesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductAttributesInput, ProductUncheckedUpdateWithoutProductAttributesInput>
  }

  export type ProductUpdateWithoutProductAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategory?: SubCategoryUpdateOneRequiredWithoutProductsNestedInput
    brands?: BrandUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    subCategoryId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeUpsertWithoutProductAttributesInput = {
    update: XOR<AttributeUpdateWithoutProductAttributesInput, AttributeUncheckedUpdateWithoutProductAttributesInput>
    create: XOR<AttributeCreateWithoutProductAttributesInput, AttributeUncheckedCreateWithoutProductAttributesInput>
    where?: AttributeWhereInput
  }

  export type AttributeUpdateToOneWithWhereWithoutProductAttributesInput = {
    where?: AttributeWhereInput
    data: XOR<AttributeUpdateWithoutProductAttributesInput, AttributeUncheckedUpdateWithoutProductAttributesInput>
  }

  export type AttributeUpdateWithoutProductAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAttributeTypeFieldUpdateOperationsInput | $Enums.AttributeType
    group?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: AttributeOptionUpdateManyWithoutAttributeNestedInput
    subCategories?: SubCategoryAttributeUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateWithoutProductAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAttributeTypeFieldUpdateOperationsInput | $Enums.AttributeType
    group?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: AttributeOptionUncheckedUpdateManyWithoutAttributeNestedInput
    subCategories?: SubCategoryAttributeUncheckedUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeOptionUpsertWithoutProductAttributesInput = {
    update: XOR<AttributeOptionUpdateWithoutProductAttributesInput, AttributeOptionUncheckedUpdateWithoutProductAttributesInput>
    create: XOR<AttributeOptionCreateWithoutProductAttributesInput, AttributeOptionUncheckedCreateWithoutProductAttributesInput>
    where?: AttributeOptionWhereInput
  }

  export type AttributeOptionUpdateToOneWithWhereWithoutProductAttributesInput = {
    where?: AttributeOptionWhereInput
    data: XOR<AttributeOptionUpdateWithoutProductAttributesInput, AttributeOptionUncheckedUpdateWithoutProductAttributesInput>
  }

  export type AttributeOptionUpdateWithoutProductAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    attribute?: AttributeUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type AttributeOptionUncheckedUpdateWithoutProductAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    attributeId?: StringFieldUpdateOperationsInput | string
  }

  export type SubCategoryCreateManyCategoryInput = {
    id?: string
    name: string
  }

  export type SubCategoryUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutSubCategoryNestedInput
    attributes?: SubCategoryAttributeUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutSubCategoryNestedInput
    attributes?: SubCategoryAttributeUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManySubCategoryInput = {
    id?: string
    name: string
    description?: string | null
    stock: number
    sku?: string | null
    price?: number
    discountPrice?: number | null
    slug: string
    images?: ProductCreateimagesInput | string[]
    brandId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubCategoryAttributeCreateManySubCategoryInput = {
    attributeId: string
  }

  export type ProductUpdateWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brands?: BrandUpdateOneWithoutProductsNestedInput
    productAttributes?: ProductAttributeUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    brandId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productAttributes?: ProductAttributeUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    brandId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryAttributeUpdateWithoutSubCategoryInput = {
    attribute?: AttributeUpdateOneRequiredWithoutSubCategoriesNestedInput
  }

  export type SubCategoryAttributeUncheckedUpdateWithoutSubCategoryInput = {
    attributeId?: StringFieldUpdateOperationsInput | string
  }

  export type SubCategoryAttributeUncheckedUpdateManyWithoutSubCategoryInput = {
    attributeId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductAttributeCreateManyOptionInput = {
    id?: number
    productId: string
    attributeId: string
    valueString?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
  }

  export type ProductAttributeUpdateWithoutOptionInput = {
    valueString?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    product?: ProductUpdateOneRequiredWithoutProductAttributesNestedInput
    attribute?: AttributeUpdateOneRequiredWithoutProductAttributesNestedInput
  }

  export type ProductAttributeUncheckedUpdateWithoutOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    attributeId?: StringFieldUpdateOperationsInput | string
    valueString?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProductAttributeUncheckedUpdateManyWithoutOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    attributeId?: StringFieldUpdateOperationsInput | string
    valueString?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AttributeOptionCreateManyAttributeInput = {
    id?: string
    value: string
  }

  export type SubCategoryAttributeCreateManyAttributeInput = {
    subCategoryId: string
  }

  export type ProductAttributeCreateManyAttributeInput = {
    id?: number
    productId: string
    valueString?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
    optionId?: string | null
  }

  export type AttributeOptionUpdateWithoutAttributeInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    productAttributes?: ProductAttributeUpdateManyWithoutOptionNestedInput
  }

  export type AttributeOptionUncheckedUpdateWithoutAttributeInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    productAttributes?: ProductAttributeUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type AttributeOptionUncheckedUpdateManyWithoutAttributeInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SubCategoryAttributeUpdateWithoutAttributeInput = {
    subCategory?: SubCategoryUpdateOneRequiredWithoutAttributesNestedInput
  }

  export type SubCategoryAttributeUncheckedUpdateWithoutAttributeInput = {
    subCategoryId?: StringFieldUpdateOperationsInput | string
  }

  export type SubCategoryAttributeUncheckedUpdateManyWithoutAttributeInput = {
    subCategoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductAttributeUpdateWithoutAttributeInput = {
    valueString?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    product?: ProductUpdateOneRequiredWithoutProductAttributesNestedInput
    option?: AttributeOptionUpdateOneWithoutProductAttributesNestedInput
  }

  export type ProductAttributeUncheckedUpdateWithoutAttributeInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    valueString?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    optionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductAttributeUncheckedUpdateManyWithoutAttributeInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    valueString?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    optionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductAttributeCreateManyProductInput = {
    id?: number
    attributeId: string
    valueString?: string | null
    valueNumber?: number | null
    valueBoolean?: boolean | null
    optionId?: string | null
  }

  export type ProductAttributeUpdateWithoutProductInput = {
    valueString?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    attribute?: AttributeUpdateOneRequiredWithoutProductAttributesNestedInput
    option?: AttributeOptionUpdateOneWithoutProductAttributesNestedInput
  }

  export type ProductAttributeUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    attributeId?: StringFieldUpdateOperationsInput | string
    valueString?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    optionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductAttributeUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    attributeId?: StringFieldUpdateOperationsInput | string
    valueString?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    optionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductCreateManyBrandsInput = {
    id?: string
    name: string
    description?: string | null
    stock: number
    sku?: string | null
    price?: number
    discountPrice?: number | null
    slug: string
    images?: ProductCreateimagesInput | string[]
    subCategoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutBrandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategory?: SubCategoryUpdateOneRequiredWithoutProductsNestedInput
    productAttributes?: ProductAttributeUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBrandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    subCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productAttributes?: ProductAttributeUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutBrandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    subCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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