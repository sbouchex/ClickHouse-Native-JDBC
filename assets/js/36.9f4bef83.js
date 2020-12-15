(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{224:function(e,t,r){"use strict";r.r(t);var a=r(3),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"clickhouse-native-jdbc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#clickhouse-native-jdbc"}},[e._v("#")]),e._v(" ClickHouse Native JDBC")]),e._v(" "),r("p",[e._v("这是一个用原生(TCP)协议实现的 JDBC 驱动，用来访问 "),r("a",{attrs:{href:"https://clickhouse.yandex/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ClickHouse"),r("OutboundLink")],1),e._v(" ，同时也支持与 "),r("a",{attrs:{href:"https://github.com/apache/spark/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Spark"),r("OutboundLink")],1),e._v(" 的集成。")]),e._v(" "),r("p",[e._v("本项目受 "),r("a",{attrs:{href:"https://www.jetbrains.com/?from=ClickHouse-Native-JDBC",target:"_blank",rel:"noopener noreferrer"}},[e._v("JetBrains Open Source License"),r("OutboundLink")],1),e._v(" 2020-2021 赞助支持.")]),e._v(" "),r("h2",{attrs:{id:"jdbc-驱动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jdbc-驱动"}},[e._v("#")]),e._v(" JDBC 驱动")]),e._v(" "),r("h3",{attrs:{id:"与-yandex-clickhouse-jdbc-驱动的不同点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#与-yandex-clickhouse-jdbc-驱动的不同点"}},[e._v("#")]),e._v(" 与 "),r("a",{attrs:{href:"https://github.com/yandex/clickhouse-jdbc",target:"_blank",rel:"noopener noreferrer"}},[e._v("yandex/clickhouse-jdbc"),r("OutboundLink")],1),e._v(" 驱动的不同点")]),e._v(" "),r("ul",[r("li",[e._v("写入时，数据按照列式格式组织并压缩")]),e._v(" "),r("li",[e._v("基于 TCP 协议实现，比 HTTP 协议更高效，参考 "),r("RouterLink",{attrs:{to:"/zh/guide/docs/dev/benchmark.html"}},[e._v("性能测试报告")]),e._v("。")],1)]),e._v(" "),r("h3",{attrs:{id:"限制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#限制"}},[e._v("#")]),e._v(" 限制")]),e._v(" "),r("ul",[r("li",[e._v("不支持 non-values 格式。")]),e._v(" "),r("li",[e._v("不支持复杂表达式语句的批量写入，如："),r("code",[e._v("INSERT INTO test_table VALUES(toDate(123456))")]),e._v("。")]),e._v(" "),r("li",[e._v("不支持 "),r("code",[e._v("ZSTD")]),e._v(" 压缩。")])]),e._v(" "),r("h2",{attrs:{id:"spark-集成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spark-集成"}},[e._v("#")]),e._v(" Spark 集成")]),e._v(" "),r("p",[e._v("目前的实现基于 Spark JDBC API，支持数据类型映射，自动建表，表清空(truncate)，表读写等。")]),e._v(" "),r("h2",{attrs:{id:"开源协议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开源协议"}},[e._v("#")]),e._v(" 开源协议")]),e._v(" "),r("p",[e._v("Apache License (Version 2.0)。详情参考 "),r("a",{attrs:{href:"https://github.com/housepower/ClickHouse-Native-JDBC/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[e._v("LICENSE"),r("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);