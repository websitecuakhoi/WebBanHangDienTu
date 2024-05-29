import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateOrderAction } from "../../../redux/slices/orders/ordersSlices";

const UpdateOrders = () => {
  // Lấy id từ params
  const { id } = useParams();
  // Sử dụng useDispatch để lấy function dispatch từ Redux
  const dispatch = useDispatch();
  
  // Sử dụng React.useState để tạo state cho component
  const [order, setOrder] = React.useState({
   
  });

  // Hàm xử lý sự kiện khi giá trị select thay đổi
  const onChange = (e) => {
    // Lấy giá trị từ sự kiện
    const selectedStatus = e.target.value;

    // Kiểm tra xem giá trị đã chọn có phải là một trong 4 lựa chọn hay không
    if (["pending", "processing", "shipped", "delivered"].includes(selectedStatus)) {
      // Nếu là một trong 4 giá trị hợp lệ, thực hiện dispatch với giá trị mới
      dispatch(updateOrderAction({ status: selectedStatus, id }));

      // Redirect sau khi dispatch (lưu ý: sử dụng history.push để thay đổi URL mà không làm tải lại trang)
      // history.push("/admin");
    } else {
      // Nếu không phải là một trong 4 giá trị hợp lệ, bạn có thể xử lý theo ý của mình, ví dụ, hiển thị thông báo lỗi.
      console.error("Invalid status value");
    }
  };

  return (
    <div className="mt-6 flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:mt-0 sm:ml-4 sm:border-none sm:pt-0">
      <div className="flex flex-1 justify-center">
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700">
            Update Order
          </label>
          <select
            id="location"
            name="status"
            onChange={onChange}
            value={order.status}
            className="mt-1 block w-full rounded-md border-2 border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue="Canada">
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrders;
