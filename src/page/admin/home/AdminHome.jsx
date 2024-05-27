import { Row } from "antd";
import React, { useMemo } from "react";
import AdminStatisticCard from "../../../components/admin/statistic/AdminStatisticCard";
import ColumnBarChart from "../../../components/common/charts/ColumnBarChart";
import LineChart from "../../../components/common/charts/line/LineChart";
import { useGetAdminBalanceQuery } from "../../../features/admin/statistic/adminStatisticApiSlice";

function AdminHome() {
  const { data, isLoading, isError, refetch } = useGetAdminBalanceQuery();

  const { bank, karta, naqdUsd, naqdSum } = useMemo(() => {
    if (data?.success === true && data?.data) {
      return {
        bank: data?.data?.bank,
        karta: data?.data?.karta,
        naqdUsd: data?.data?.naqdusd,
        naqdSum: data?.data?.naqdsum,
      };
    }
    return {};
  }, [data]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "1rem",
      }}
    >
      <Row gutter={[16, 16]}>
        <AdminStatisticCard
          danger={naqdSum < 0}
          title={"Naqd so'm"}
          value={naqdSum}
          isLoading={isLoading}
        />
        <AdminStatisticCard
          danger={naqdUsd < 0}
          title={"Naqd USD"}
          value={naqdUsd || 0}
          isLoading={isLoading}
          suffix="$"
        />
        <AdminStatisticCard
          danger={bank < 0}
          title={"Bank"}
          value={bank || 0}
          isLoading={isLoading}
        />
        <AdminStatisticCard
          danger={karta < 0}
          title={"Karta"}
          value={karta || 0}
          isLoading={isLoading}
        />
      </Row>

      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <ColumnBarChart />
        <LineChart />
      </div>
    </div>
  );
}

export default AdminHome;
