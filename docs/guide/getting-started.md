# 快速开始

::: warning 开发中
ObsidianNBT 目前处于早期开发阶段，以下内容为计划功能，尚未实现。
:::

## 安装

### 从源码构建

需要 Rust 1.88.0 或更高版本。

```bash
git clone https://github.com/AptS-1547/ObsidianNBT.git
cd ObsidianNBT
cargo build --release
```

构建产物位于 `target/release/obsidian-nbt`。

### 通过 Cargo 安装

```bash
cargo install obsidian-nbt
```

### 通过 Homebrew 安装（macOS）

```bash
brew install AptS-1547/tap/obsidian-nbt
```

## 基本用法

### 查看 NBT 文件

```bash
# 以树形结构查看 NBT 文件内容
obsidian-nbt view level.dat

# 输出为 JSON 格式
obsidian-nbt view level.dat --format json

# 输出为 SNBT 格式
obsidian-nbt view level.dat --format snbt
```

### 转换格式

```bash
# NBT 转 JSON
obsidian-nbt convert level.dat -o level.json

# JSON 转 NBT
obsidian-nbt convert level.json -o level.dat
```

### 编辑 NBT 数据

```bash
# 设置指定路径的值
obsidian-nbt set level.dat "Data.GameType" int 1

# 删除指定路径
obsidian-nbt delete level.dat "Data.CustomBossEvents"
```

## 支持的 NBT 类型

| 类型 ID | 类型名称 | Rust 类型 | 说明 |
|---------|---------|----------|------|
| 0 | TAG_End | - | 标记复合标签结束 |
| 1 | TAG_Byte | `i8` | 有符号字节 |
| 2 | TAG_Short | `i16` | 有符号短整数 |
| 3 | TAG_Int | `i32` | 有符号整数 |
| 4 | TAG_Long | `i64` | 有符号长整数 |
| 5 | TAG_Float | `f32` | 单精度浮点数 |
| 6 | TAG_Double | `f64` | 双精度浮点数 |
| 7 | TAG_Byte_Array | `Vec<i8>` | 字节数组 |
| 8 | TAG_String | `String` | UTF-8 字符串 |
| 9 | TAG_List | `Vec<Tag>` | 同类型标签列表 |
| 10 | TAG_Compound | `HashMap` | 命名标签集合 |
| 11 | TAG_Int_Array | `Vec<i32>` | 整数数组 |
| 12 | TAG_Long_Array | `Vec<i64>` | 长整数数组 |
