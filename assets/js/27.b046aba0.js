(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{216:function(n,t,I){"use strict";I.r(t);var a=I(3),e=Object(a.a)({},(function(){var n=this,t=n.$createElement,I=n._self._c||t;return I("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[I("h1",{attrs:{id:"clickhouse-数据类型"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#clickhouse-数据类型"}},[n._v("#")]),n._v(" ClickHouse 数据类型")]),n._v(" "),I("h2",{attrs:{id:"version"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[n._v("#")]),n._v(" Version")]),n._v(" "),I("div",{staticClass:"language- extra-class"},[I("pre",{pre:!0,attrs:{class:"language-text"}},[I("code",[n._v("SELECT version()\n\n┌─version()─┐\n│ 20.8.5.45 │\n└───────────┘\n")])])]),I("h2",{attrs:{id:"data-type-families"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#data-type-families"}},[n._v("#")]),n._v(" Data Type Families")]),n._v(" "),I("div",{staticClass:"language- extra-class"},[I("pre",{pre:!0,attrs:{class:"language-text"}},[I("code",[n._v("SELECT * FROM system.data_type_families\n\n┌─name────────────────────────────┬─case_insensitive─┬─alias_to────┐\n│ Polygon                         │                0 │             │\n│ Ring                            │                0 │             │\n│ MultiPolygon                    │                0 │             │\n│ IPv6                            │                0 │             │\n│ IntervalSecond                  │                0 │             │\n│ IPv4                            │                0 │             │\n│ UInt32                          │                0 │             │\n│ IntervalYear                    │                0 │             │\n│ IntervalQuarter                 │                0 │             │\n│ IntervalMonth                   │                0 │             │\n│ Int64                           │                0 │             │\n│ IntervalDay                     │                0 │             │\n│ IntervalHour                    │                0 │             │\n│ UInt256                         │                0 │             │\n│ Int16                           │                0 │             │\n│ LowCardinality                  │                0 │             │\n│ AggregateFunction               │                0 │             │\n│ Nothing                         │                0 │             │\n│ Decimal256                      │                1 │             │\n│ Tuple                           │                0 │             │\n│ Array                           │                0 │             │\n│ Enum16                          │                0 │             │\n│ Enum8                           │                0 │             │\n│ IntervalMinute                  │                0 │             │\n│ FixedString                     │                0 │             │\n│ String                          │                0 │             │\n│ DateTime                        │                1 │             │\n│ UUID                            │                0 │             │\n│ Decimal64                       │                1 │             │\n│ Nullable                        │                0 │             │\n│ Enum                            │                0 │             │\n│ Int32                           │                0 │             │\n│ UInt8                           │                0 │             │\n│ Date                            │                1 │             │\n│ Decimal32                       │                1 │             │\n│ Point                           │                0 │             │\n│ Float64                         │                0 │             │\n│ DateTime64                      │                1 │             │\n│ Int128                          │                0 │             │\n│ Decimal128                      │                1 │             │\n│ Int8                            │                0 │             │\n│ SimpleAggregateFunction         │                0 │             │\n│ Nested                          │                0 │             │\n│ Decimal                         │                1 │             │\n│ Int256                          │                0 │             │\n│ IntervalWeek                    │                0 │             │\n│ UInt64                          │                0 │             │\n│ UInt16                          │                0 │             │\n│ Float32                         │                0 │             │\n│ INET6                           │                1 │ IPv6        │\n│ INET4                           │                1 │ IPv4        │\n│ BINARY                          │                1 │ FixedString │\n│ NATIONAL CHAR VARYING           │                1 │ String      │\n│ BINARY VARYING                  │                1 │ String      │\n│ NCHAR LARGE OBJECT              │                1 │ String      │\n│ NATIONAL CHARACTER VARYING      │                1 │ String      │\n│ NATIONAL CHARACTER LARGE OBJECT │                1 │ String      │\n│ NATIONAL CHARACTER              │                1 │ String      │\n│ NATIONAL CHAR                   │                1 │ String      │\n│ CHARACTER VARYING               │                1 │ String      │\n│ LONGBLOB                        │                1 │ String      │\n│ MEDIUMTEXT                      │                1 │ String      │\n│ TEXT                            │                1 │ String      │\n│ TINYBLOB                        │                1 │ String      │\n│ VARCHAR2                        │                1 │ String      │\n│ CHARACTER LARGE OBJECT          │                1 │ String      │\n│ DOUBLE PRECISION                │                1 │ Float64     │\n│ LONGTEXT                        │                1 │ String      │\n│ NVARCHAR                        │                1 │ String      │\n│ INT1 UNSIGNED                   │                1 │ UInt8       │\n│ VARCHAR                         │                1 │ String      │\n│ CHAR VARYING                    │                1 │ String      │\n│ MEDIUMBLOB                      │                1 │ String      │\n│ NCHAR                           │                1 │ String      │\n│ CHAR                            │                1 │ String      │\n│ SMALLINT UNSIGNED               │                1 │ UInt16      │\n│ TIMESTAMP                       │                1 │ DateTime    │\n│ FIXED                           │                1 │ Decimal     │\n│ TINYTEXT                        │                1 │ String      │\n│ NUMERIC                         │                1 │ Decimal     │\n│ DEC                             │                1 │ Decimal     │\n│ TINYINT UNSIGNED                │                1 │ UInt8       │\n│ INTEGER UNSIGNED                │                1 │ UInt32      │\n│ INT UNSIGNED                    │                1 │ UInt32      │\n│ CLOB                            │                1 │ String      │\n│ MEDIUMINT UNSIGNED              │                1 │ UInt32      │\n│ BOOL                            │                1 │ Int8        │\n│ SMALLINT                        │                1 │ Int16       │\n│ INTEGER SIGNED                  │                1 │ Int32       │\n│ NCHAR VARYING                   │                1 │ String      │\n│ INT SIGNED                      │                1 │ Int32       │\n│ TINYINT SIGNED                  │                1 │ Int8        │\n│ BIGINT SIGNED                   │                1 │ Int64       │\n│ BINARY LARGE OBJECT             │                1 │ String      │\n│ SMALLINT SIGNED                 │                1 │ Int16       │\n│ MEDIUMINT                       │                1 │ Int32       │\n│ INTEGER                         │                1 │ Int32       │\n│ INT1 SIGNED                     │                1 │ Int8        │\n│ BIGINT UNSIGNED                 │                1 │ UInt64      │\n│ BYTEA                           │                1 │ String      │\n│ INT                             │                1 │ Int32       │\n│ SINGLE                          │                1 │ Float32     │\n│ FLOAT                           │                1 │ Float32     │\n│ MEDIUMINT SIGNED                │                1 │ Int32       │\n│ BOOLEAN                         │                1 │ Int8        │\n│ DOUBLE                          │                1 │ Float64     │\n│ INT1                            │                1 │ Int8        │\n│ CHAR LARGE OBJECT               │                1 │ String      │\n│ TINYINT                         │                1 │ Int8        │\n│ BIGINT                          │                1 │ Int64       │\n│ CHARACTER                       │                1 │ String      │\n│ BYTE                            │                1 │ Int8        │\n│ BLOB                            │                1 │ String      │\n│ REAL                            │                1 │ Float32     │\n└─────────────────────────────────┴──────────────────┴─────────────┘\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);