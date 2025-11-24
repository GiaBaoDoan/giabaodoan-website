"use client";

import { FeatureData } from "@/data/FeatureData";
import FeatureCard from "@/components/website/FeatureCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { memo } from "react";

const FeatureList = memo(() => {
  return (
    <div className="space-y-6 max-w-7xl w-full mx-auto mt-10">
      <div>
        <h2 className="text-2xl font-bold mb-2">Tính Năng Bổ Sung</h2>
        <p>Chọn các tính năng để tùy chỉnh website của bạn</p>
      </div>
      <Tabs defaultValue="thiet-ke" className="w-full space-y-6">
        <TabsList className="grid grid-cols-5 w-full bg-transparent">
          {FeatureData.map((tab) => (
            <TabsTrigger
              key={tab.value}
              className="text-white"
              value={tab.value}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {FeatureData.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {tab.features.map((feature, idx) => (
                <FeatureCard
                  key={idx}
                  icon={feature?.icon}
                  title={feature?.title || ""}
                  desc={feature?.desc || ""}
                  price={feature?.price || 0}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
});

export default FeatureList;
