# Building and Packaging the TS3 Plugin

## 1. Building the TS3 Plugin

To compile the TS3 plugin, ensure you have the following installed:

* [Visual Studio (any version)](https://visualstudio.microsoft.com/vs/) — recommended: **Visual Studio 2022**
* [Qt 5.12.7](https://download.qt.io/archive/qt/5.12/5.12.7/)
* [CMake](https://cmake.org/)

### Step-by-Step:

1. **Clone the repo** and initialize submodules:

   ```bash
   git submodule update --init --recursive
   ```

2. **Navigate** to the `ts3_plugin` directory.

3. **Build 32-bit version:**

   ```bash
   mkdir build32 && cd build32
   cmake -G "Visual Studio 17 2022" -DCMAKE_PREFIX_PATH="C:/Qt/Qt5.12.7/5.12.7/msvc2017" ..
   cd ..
   ```

4. **Build 64-bit version:**

   ```bash
   mkdir build64 && cd build64
   cmake -G "Visual Studio 17 2022" -DCMAKE_PREFIX_PATH="C:/Qt/Qt5.12.7/5.12.7/msvc2017_64" ..
   ```

> ✅ After running the above, Visual Studio solutions will be available in their respective folders (`build32` and `build64`).

---


## 2. Guide: Building the TS3 Plugin in Visual Studio 2022

### Prerequisites

Before building, make sure you have the following installed:

* **[Visual Studio 2022](https://visualstudio.microsoft.com/vs/)**
  During installation, ensure the following workloads are selected:

  * **Desktop development with C++**
  * **C++ CMake tools for Windows** (optional, recommended for troubleshooting)

* **[Qt 5.12.7](https://download.qt.io/archive/qt/5.12/5.12.7/)**

* **[CMake (latest stable)](https://cmake.org/download/)**
  Add CMake to your system PATH during installation.

---

1. Launch **Visual Studio 2022**.

2. Go to **File → Open → Project/Solution**, then open:

   * `build32/TokoVoIP.sln` for the 32-bit version, or
   * `build64/TokoVoIP.sln` for the 64-bit version.

3. In the top bar, select:

   * **Solution Configuration**: `Release`
   * **Solution Platform**: `Win32` or `x64` (depending on build)

4. Right-click the **Solution** in the Solution Explorer and select **Build Solution** (`Ctrl+Shift+B`).

---

## Locate the Output DLL

After building, the plugin DLL will be located in:

* `build32/Release/plugin_win32.dll`
* `build64/Release/plugin_win64.dll`

These files can now be packaged into a `.ts3_plugin` archive as described in the [Packaging Guide](#packaging-the-ts3-plugin).

---

## Common Build Errors

| Issue                                    | Solution                                                                                                |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **CMake cannot find Qt**                 | Double-check your `CMAKE_PREFIX_PATH` value and ensure it points to the correct Qt `msvc2019` directory |
| **Missing headers/libraries**            | Ensure you've selected the correct Visual Studio workloads (especially Desktop Development with C++)    |
| **Solution fails with unknown platform** | Ensure you're passing `-A Win32` or `-A x64` correctly to CMake                                         |


---

## Packaging the TS3 Plugin

### What you need:

* A `package.ini` file describing the plugin.
* A `plugins/` folder containing:

  * Plugin `.dll` files (must include suffixes: `_win32` and `_win64` for each platform).
  * Optional assets like icons or sound effects.

### Folder structure example:

```
.
+-- package.ini
+-- plugins
|   +-- tokovoip
|       +-- walkie_talkie16.png
|       +-- mic_click_off.wav
|       +-- mic_click_on.wav
|   +-- plugin_win32.dll
|   +-- plugin_win64.dll
```

### Final Step:

1. Zip the entire directory.
2. Rename the `.zip` to `.ts3_plugin`.

Done!