# NBT 格式说明

NBT（Named Binary Tag）是 Minecraft 使用的二进制数据格式，用于存储游戏中的各种结构化数据。

## 概述

NBT 格式由 Notch 设计，用于 Minecraft 的数据持久化。它是一种树形结构的二进制格式，类似于 JSON，但使用二进制编码以提高存储效率。

## 文件结构

一个 NBT 文件的基本结构：

```
[压缩层（可选）]
  └─ 根标签（TAG_Compound）
       ├─ 标签类型 ID（1 字节）
       ├─ 标签名称（UTF-8 字符串）
       └─ 标签载荷（取决于类型）
```

### 标签的二进制布局

每个命名标签由三部分组成：

1. **类型 ID**（1 字节）：标识标签的数据类型
2. **名称长度**（2 字节，大端序）：标签名称的 UTF-8 字节长度
3. **名称**（N 字节）：UTF-8 编码的标签名称
4. **载荷**（可变长度）：实际数据，格式取决于类型 ID

### 数据类型

| ID | 类型 | 载荷格式 |
|----|------|---------|
| 0 | TAG_End | 无载荷，标记 Compound 结束 |
| 1 | TAG_Byte | 1 字节有符号整数 |
| 2 | TAG_Short | 2 字节有符号整数，大端序 |
| 3 | TAG_Int | 4 字节有符号整数，大端序 |
| 4 | TAG_Long | 8 字节有符号整数，大端序 |
| 5 | TAG_Float | 4 字节 IEEE 754 浮点数，大端序 |
| 6 | TAG_Double | 8 字节 IEEE 754 浮点数，大端序 |
| 7 | TAG_Byte_Array | 4 字节长度前缀 + N 字节数据 |
| 8 | TAG_String | 2 字节长度前缀 + UTF-8 字符串 |
| 9 | TAG_List | 1 字节元素类型 + 4 字节长度 + N 个载荷 |
| 10 | TAG_Compound | 连续的命名标签，以 TAG_End 结束 |
| 11 | TAG_Int_Array | 4 字节长度前缀 + N×4 字节数据 |
| 12 | TAG_Long_Array | 4 字节长度前缀 + N×8 字节数据 |

## 压缩

Minecraft 中的 NBT 文件通常使用压缩存储：

- **Gzip 压缩**：`level.dat`、`<uuid>.dat`（玩家数据）等
- **Zlib 压缩**：区域文件（`.mca`）中的区块数据
- **无压缩**：网络传输中的 NBT 数据（1.20.2+ 部分场景）

## 常见 NBT 文件

| 文件 | 位置 | 压缩 | 说明 |
|------|------|------|------|
| `level.dat` | 存档根目录 | Gzip | 世界设置和元数据 |
| `r.X.Z.mca` | `region/` | Zlib（每区块） | 区域文件，包含区块数据 |
| `<uuid>.dat` | `playerdata/` | Gzip | 玩家数据 |
| `idcounts.dat` | `data/` | Gzip | 地图 ID 计数器 |
| `raids.dat` | `data/` | Gzip | 袭击事件数据 |

## SNBT 格式

SNBT（Stringified NBT）是 NBT 的文本表示形式，用于 Minecraft 命令中：

```snbt
{
    Name: "Steve",
    Health: 20.0f,
    Inventory: [
        {id: "minecraft:diamond_sword", Count: 1b}
    ],
    Pos: [0.0d, 64.0d, 0.0d]
}
```

类型后缀：`b`（Byte）、`s`（Short）、`l`（Long）、`f`（Float）、`d`（Double）。无后缀的整数为 Int，无后缀的小数为 Double。

## 参考资料

- [Minecraft Wiki - NBT Format](https://minecraft.wiki/w/NBT_format)
- [NBT Specification (by Notch)](https://web.archive.org/web/20110723210920/http://www.minecraft.net/docs/NBT.txt)
