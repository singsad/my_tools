import React, { useEffect, useState } from "react";
import { View, Text } from "@tarojs/components";
import "./mine.less";

import { getCurrentInstance } from "@tarojs/taro";

const Luck = () => {
  useEffect(() => {
    console.log(getCurrentInstance().router.params);
  }, []);
  return (
    <View className="luck">
      <Text>请先设定人数</Text>
    </View>
  );
};

export default React.memo(Luck);
