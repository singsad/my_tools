import React, { useEffect, useState } from "react";
import { View, Text } from "@tarojs/components";
import "./mine.less";

import { getCurrentInstance } from "@tarojs/taro";

const Mine = () => {
  useEffect(() => {
    console.log(getCurrentInstance().router.params);
  }, []);
  return <View></View>;
};

export default React.memo(Mine);
