document.addEventListener("DOMContentLoaded", () => {
    console.log("Ứng dụng đã được khởi tạo.");

    // Quản lý trạng thái Đăng nhập trên toàn hệ thống
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const navButtons = document.querySelector(".nav-buttons");

    if (navButtons) {
        if (isLoggedIn === "true") {
            navButtons.innerHTML = `<a href="profile.html" class="btn btn-primary">Tài Khoản</a>`;
        } else {
            navButtons.innerHTML = `
                <a href="login.html" class="btn" style="margin-right: 15px; text-decoration: none; color: #fff;">Đăng Nhập</a>
                <a href="register.html" class="btn btn-primary">Đăng Ký</a>
            `;
        }
    }

    // Highlight active nav link on user pages
    if (!window.location.pathname.includes('/admin/')) {
        let currentPage = window.location.pathname.split('/').pop();
        if (!currentPage) currentPage = 'index.html';
        const navLinks = document.querySelectorAll('.nav-links li a');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // Hiện sidebar
    if (window.location.pathname.includes('/admin/')) {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar && sidebar.innerHTML.trim() === '') {
            fetch('sidebar.html')
                .then(response => response.text())
                .then(data => {
                    sidebar.innerHTML = data;
                    let currentPage = window.location.pathname.split('/').pop().split('.')[0];
                    if (!currentPage || currentPage === 'admin') currentPage = 'index';
                    const activeItem = sidebar.querySelector('.sidebar-item[data-page="' + currentPage + '"]');
                    if (activeItem) {
                        activeItem.classList.add('active');
                    }
                })
                .catch(err => console.error('Error loading sidebar:', err));
        }

        const topbar = document.querySelector('.topbar');
        if (topbar && topbar.innerHTML.trim() === '') {
            fetch('topbar.html')
                .then(response => response.text())
                .then(data => {
                    topbar.innerHTML = data;
                })
                .catch(err => console.error('Error loading topbar:', err));
        }
    }

});

// Hàm Đăng xuất toàn cục
function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    alert('Đã đăng xuất thành công!');
    if (window.location.pathname.includes('/admin/')) {
        window.location.href = '../user/index.html';
    } else {
        window.location.href = 'index.html';
    }
}
