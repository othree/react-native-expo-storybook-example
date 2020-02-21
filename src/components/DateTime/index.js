import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DateTime() {
  return <DateTimePicker value={new Date()} />;
}
