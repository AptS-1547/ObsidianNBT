# ObsidianNBT

一个用 Rust 编写的 Minecraft NBT（Named Binary Tag）数据操作命令行工具。

> [!NOTE]
> 本项目目前处于早期开发阶段（v0.0.0），核心功能尚未实现。

## 项目目标

ObsidianNBT 旨在提供一个快速、可靠的命令行工具，用于读取、编辑和转换 Minecraft NBT 数据。

计划支持的功能：

- NBT 二进制格式的解析与序列化
- NBT 数据的人类可读输出（JSON / SNBT）
- NBT 文件的查看、编辑和转换
- 支持 Gzip / Zlib 压缩格式
- 区域文件（Region File）支持

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

> 尚未发布到 crates.io，请先使用源码构建。

## 开发

```bash
# 检查代码格式
cargo fmt --check

# 运行 Clippy 检查
cargo clippy -- -D warnings

# 运行测试
cargo test

# 构建文档站（需要 Node.js）
cd docs && yarn install && yarn docs:dev
```

## 文档

在线文档：[https://apts-1547.github.io/ObsidianNBT/](https://apts-1547.github.io/ObsidianNBT/)

## 许可证

[MIT License](LICENSE) © 2026 AptS:1547
