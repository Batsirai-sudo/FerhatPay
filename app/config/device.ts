import * as Device from 'expo-device';

const DeviceInformation = () => {
	/**
	 * true if the app is running on a real
	 * device and false if running in a simulator
	 *  or emulator. On web, this always returns true.
	 */
	DeviceInformation.isDevice = Device.isDevice;
	/**
	 *  The device brand. The consumer-visible brand
	 *  of the product/hardware. On web,
	 * this value is null.
	 *  Device.brand; // Android: "google", "xiaomi";
	 *  iOS: "Apple"; web: null
	 */
	DeviceInformation.brand = Device.brand;
	/**
 * The actual device manufacturer of the
 *  product or hardware. This value of this 
 * field may be null if it cannot be determined.
    Device.manufacturer; // Android: "Google",
    "xiaomi"; iOS: "Apple"; web: "Google", null
 */
	DeviceInformation.manufacturer = Device.manufacturer;
	/**
	 *   The human-friendly name of the device model.
	 *  This is the name that people would typically
	 * use to refer to the device rather than a programmatic
	 *  model identifier.
	 * This value of this field may be null if it cannot be determined.
	 */
	DeviceInformation.modelName = Device.modelName;
	/**
 * The device's total memory, in bytes. This 
 * is the total memory accessible to the kernel,
 *  but not necessarily to a single app. This is
 *  basically the amount of RAM the device has, not 
 * including below-kernel fixed allocations like DMA
 *  buffers, RAM for the baseband CPU, etc… On web,
 *  this value is null.
  Device.totalMemory; // 17179869184
 */
	DeviceInformation.totalMemory = Device.totalMemory;
	/**
 * The name of the OS running on the device.
    Examples
    Device.osName; // Android: "Android";
    iOS: "iOS" or "iPadOS"; web: "iOS", "Android", "Windows"
 */
	DeviceInformation.osName = Device.osName;
	/**
 *  The build ID of the OS that more 
 * precisely identifies the version of 
 * the OS. On Android, this corresponds to
 *  Build.DISPLAY (not Build.ID) and currently
 *  is a string as described here. On iOS, this
 *  corresponds to kern.osversion and is the 
 * detailed OS version sometimes displayed next 
 * to the more human-readable version. On web, 
 * this value is null.
    Examples
    Device.osBuildId; // Android: "PSR1.180720.075"; iOS: "16F203"; web: null
 */
	DeviceInformation.osBuildId = Device.osBuildId;
	/**
 *  Android only. The Android SDK version
 *  of the software currently running on this
 *  hardware device. This value never changes 
 * while a device is booted, but it may increase 
 * when the hardware manufacturer provides an OS
 *  update. See here to see all possible version codes 
 * and corresponding versions. On web and iOS, this
 *  value is null.
    Examples
    Device.platformApiLevel; // Android: 19; iOS: null; web: null
 */
	DeviceInformation.platformApiLevel = Device.platformApiLevel;
	/**
 *The human-readable name of the device,
  which may be set by the device's user.
   If the device name is unavailable, 
   particularly on web, this value is null.
    Examples
    Device.deviceName; // "Vivian's iPhone XS"
 */
	DeviceInformation.deviceName = Device.deviceName;
	/**
 * Checks the type of the device as a
 *  Device.DeviceType enum value.
On Android, for devices other than TVs, 
the device type is determined by the screen resolution 
(screen diagonal size), so the result may not be completely 
accurate. If the screen diagonal length is between 3" and
 6.9", the method returns DeviceType.PHONE. For lengths 
 between 7" and 18", the method returns DeviceType.TABLET.
  Otherwise, the method returns DeviceType.UNKNOWN.
Returns
Returns a promise that resolves to a Device.DeviceType enum value.
Examples
An enum of the different types of devices supported by Expo, 
with these values:
UNKNOWN -- An unrecognized device type
PHONE -- Mobile phone handsets, typically with a touch screen
 and held in one hand
TABLET -- Tablet computers, typically with a touch screen that
 is larger than a phone's
DESKTOP -- Desktop or laptop computers, typically with a keyboard
 and mouse
TV -- TV-based interfaces
Device.DeviceType

 */
	DeviceInformation.getDeviceType = Device.getDeviceTypeAsync();
	/**
 * Gets the uptime since the last reboot
 *  of the device, in milliseconds.
Returns
Returns a promise that resolves to a number
 that represents the milliseconds since last reboot.
  Android devices dp not count time spent in deep sleep
  . On web, this throws an UnavailabilityError.
Examples
 */
	DeviceInformation.getUptime = Device.getUptimeAsync();

	DeviceInformation.DeviceType = Device.DeviceType;
	return null;
};

export default DeviceInformation;
