// deviceInfo.js
import DeviceInfo from "react-native-device-info";

type OutputData = {
  isEmulator?: boolean;
  version?: string;
};
var output: OutputData = {};

exports.populateDeviceInfo = async () => {
  output.isEmulator = await DeviceInfo.isEmulator();
  output.version = await DeviceInfo.getVersion();
};

export default output;
