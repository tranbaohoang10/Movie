# Movie Ticket Booking System – Hệ thống Đặt Vé Xem Phim

> **Đồ án môn học:** Phân tích và Thiết kế Hệ thống Thông tin  
> **Nhóm:** 04  
> **Trường:** Trường Đại Học  Nông Lâm 
> **Học kỳ:** Năm học 2025–2026

---

## Giới thiệu

**Movie Ticket Booking System** là một ứng dụng web đặt vé xem phim trực tuyến, được xây dựng nhằm mô phỏng quy trình hoạt động thực tế của các hệ thống bán vé rạp chiếu phim. Người dùng có thể dễ dàng tìm kiếm phim, chọn suất chiếu, đặt ghế, chọn combo bắp nước và thanh toán ngay trên website. Hệ thống cũng cung cấp trang quản trị (Admin Dashboard) để quản lý toàn bộ dữ liệu.

---

## Chức năng hệ thống

### Dành cho Người dùng (User)
| Trang | Mô tả |
| :--- | :--- |
| `index.html` | Trang chủ – Hiển thị phim nổi bật, đang chiếu, sắp chiếu |
| `phim.html` | Danh sách tất cả các bộ phim |
| `detail.html` | Chi tiết phim – nội dung, trailer, diễn viên |
| `lich-chieu.html` | Xem lịch chiếu theo ngày, rạp, phim |
| `booking-seat.html` | Chọn ghế ngồi theo sơ đồ phòng chiếu |
| `booking-combo.html` | Chọn combo bắp rang & nước uống |
| `booking-payment.html` | Trang thanh toán và xác nhận đặt vé |
| `khuyen-mai.html` | Xem các chương trình khuyến mãi đang áp dụng |
| `profile.html` | Quản lý thông tin cá nhân và lịch sử đặt vé |
| `login.html` | Đăng nhập tài khoản |
| `register.html` | Đăng ký tài khoản mới |
| `forgot-password.html` | Quên mật khẩu – gửi yêu cầu đặt lại |

### Dành cho Quản trị viên (Admin)
| Trang | Mô tả |
| :--- | :--- |
| `admin/index.html` | Dashboard – Thống kê doanh thu, vé bán ra, người dùng mới |
| `admin/movies.html` | Quản lý danh sách phim (Thêm / Sửa / Xóa) |
| `admin/showtimes.html` | Quản lý lịch chiếu |
| `admin/rooms.html` | Quản lý phòng chiếu và sơ đồ ghế |
| `admin/tickets.html` | Quản lý danh sách vé đã đặt |
| `admin/combos.html` | Quản lý combo bắp rang & nước |
| `admin/promos.html` | Quản lý mã khuyến mãi |
| `admin/users.html` | Quản lý tài khoản người dùng |
| `admin/reviews.html` | Quản lý đánh giá & bình luận phim |
| `admin/profile.html` | Thông tin tài khoản quản trị viên |

---

## Công nghệ sử dụng

| Thành phần | Công nghệ |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript |
| **Backend** | Java Web (Servlet / JSP) |
| **Build Tool** | Apache Maven |
| **Cơ sở dữ liệu** | MySQL |
| **Web Server** | Apache Tomcat |
| **IDE** | IntelliJ IDEA |
| **Quản lý mã nguồn** | Git & GitHub |
