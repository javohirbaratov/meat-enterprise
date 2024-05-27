import { lazy } from "react";

/* Layout */
export const SalesLayout = lazy(() => import("../../layout/sales/SalesLayout"));

/* Page */
export const SalesOrderGrindPage = lazy(() =>
  import("./orderGrind/SalesOrderGrindPage")
);
export const SalesOrderUploader = lazy(() =>
  import("./orderUploader/SalesOrderUploader")
);
export const SalesProductSale = lazy(() =>
  import("./productSale/SalesProductSale")
);
export const SalesCustomer = lazy(() => import("./customer/SalesCustomer"));
export const SalesOrderHistory = lazy(() =>
  import("./orderHistory/SalesOrderHistory")
);
export const SalesReturnProduct = lazy(() =>
  import("./returnProduct/SalesReturnProduct")
);
export const SalesReport = lazy(() => import("./report/SalesReport"));
export const SalesReportAll = lazy(() => import("./reportAll/SalesReportAll"));
export const SalesReportCustomer = lazy(() =>
  import("./reportAll copy/SalesReportCustomer")
);
export const SalesDailyReceipts = lazy(() =>
  import("./dailyReceipts/SalesDailyReceipts")
);
export const SalesCancelOrderHistory = lazy(() =>
  import("./cancelOrderHistory/SalesCancelOrderHistory")
);
 