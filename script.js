// ==========================================
// KHAI BÁO LINK ẢNH MẶC ĐỊNH (Bắt buộc phải có)
// ==========================================
const imgCPU = "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=300&h=200&fit=crop";
const imgRAM = "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=200&fit=crop";
const imgVGA = "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=200&fit=crop";
const imgKeyboard = "https://images.unsplash.com/photo-1595225476474-87563907a212?w=300&h=200&fit=crop";
const imgMouse = "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop";
const imgHeadphone = "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=200&fit=crop";
const imgMainboard = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop";
const imgSSD = "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=300&h=200&fit=crop";
const imgPower = "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300&h=200&fit=crop";
const imgCase = "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300&h=200&fit=crop";
const imgCooler = "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300&h=200&fit=crop";
const imgCable = "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=300&h=200&fit=crop";

const products = [
    // Bàn phím
    { id: 1, name: "Bàn phím cơ AKKO 3087", price: 950000, category: "BanPhim", image: "assets/Bàn Phím/Bàn phím giả cơ.webp", description: "Bàn phím cơ chính hãng Akko, switch Akko V3, layout 87 phím, gõ cực sướng, có LED RGB." },
    { id: 2, name: "Bàn phím cơ Custom Hồng", price: 1500000, category: "BanPhim", image: "assets/Bàn Phím/Bàn phím Keycap.jpg", description: "Bàn phím cơ custom, keycap hồng pastel, switch êm ái, phù hợp cho setup nữ tính." },
    { id: 3, name: "Bàn phím cơ Retro", price: 1800000, category: "BanPhim", image: "assets/Bàn Phím/Bàn phím không dây.webp", description: "Thiết kế phong cách cổ điển, có núm xoay âm lượng, layout nhỏ gọn 75%." },
    { id: 4, name: "Bàn phím cơ Switch Test", price: 200000, category: "BanPhim", image: "assets/Bàn Phím/Bàn phím switch.jpg", description: "Bảng thử nghiệm các loại switch cơ khác nhau, dành cho người mới chơi." },
    { id: 5, name: "Bàn phím cơ Face RGB", price: 2500000, category: "BanPhim", image: "assets/Bàn Phím/Ban-phim-GravaStar-Mercury-V75-Pro-Special-Edition-–-Neon-Graffiti-600x600.jpg", description: "Thiết kế mặt trên độc đáo, full LED RGB, switch xanh gõ cực nảy." },
    { id: 6, name: "Bàn phím Logitech K380", price: 650000, category: "BanPhim", image: "assets/Bàn Phím/images.jpg", description: "Bàn phím Bluetooth đa thiết bị, thiết kế mỏng nhẹ, phù hợp văn phòng." },
    { id: 7, name: "Bàn phím cơ không dây", price: 800000, category: "BanPhim", image: "assets/Bàn Phím/Keyboard-trend.jpg", description: "Thiết kế nhỏ gọn, kết nối không dây tiện lợi, pin trâu." },
    { id: 8, name: "Bàn phím JBLUE K2", price: 550000, category: "BanPhim", image: "assets/Bàn Phím/vn-11134207-7ras8-m3g7eobfrfss3f.jpg", description: "Bàn phím cơ giá rẻ, LED RGB rực rỡ, phù hợp học sinh sinh viên." },

    // Nguồn
    { id: 9, name: "Nguồn MSI MAG 650W", price: 1500000, category: "BoNguon", image: "assets/Bộ Nguồn/Bộ nguồn máy tính Nguồn 450W.webp", description: "Nguồn 650W chuẩn 80 Plus Bronze, quạt êm, bảo hành 5 năm." },
    { id: 10, name: "Nguồn Corsair CV550", price: 1200000, category: "BoNguon", image: "assets/Bộ Nguồn/Bộ nguồn máy tính Nguồn 550W.webp", description: "Nguồn 550W chuẩn 80 Plus Bronze, ổn định cho cấu hình tầm trung." },
    { id: 11, name: "Nguồn RGB 750W", price: 2200000, category: "BoNguon", image: "assets/Bộ Nguồn/Bộ nguồn máy tính Nguồn 650W.webp", description: "Nguồn 750W có đèn LED RGB, dây bọc dù, đồng bộ setup." },
    { id: 12, name: "Nguồn Xigmatek 750W", price: 1800000, category: "BoNguon", image: "assets/Bộ Nguồn/Bộ nguồn máy tính Nguồn 750W.webp", description: "Nguồn 750W chuẩn 80 Plus Gold, quạt 120mm." },
    { id: 13, name: "Nguồn ASUS ROG Strix 850W", price: 3800000, category: "BoNguon", image: "assets/Bộ Nguồn/Bộ nguồn máy tính Nguồn 850W.webp", description: "Nguồn 850W chuẩn 80 Plus Gold, Full Modular, dành cho cấu hình cao cấp." },
    { id: 14, name: "Nguồn 850W Full Modular", price: 3200000, category: "BoNguon", image: "assets/Bộ Nguồn/Bộ nguồn máy tính Nguồn 1000W trở lên.webp", description: "Nguồn 850W, dây rời hoàn toàn, tản nhiệt tốt, hoạt động bền bỉ." },

    // Cáp & Phụ Kiện (Lưu ý: đổi tên file ảnh trên máy bạn thành không dấu)
    { id: 15, name: "Cáp SATA 3.0", price: 50000, category: "CapPhuKien", image: "assets/Cáp vs Phụ Kiện/Cáp và phụ kiện lắp ráp Cáp SATA.jpg", description: "Cáp nối ổ cứng SATA, bọc dù siêu bền, tốc độ truyền tải cao." },
    { id: 16, name: "Dây nguồn mở rộng (Trắng)", price: 450000, category: "CapPhuKien", image: "assets/Cáp vs Phụ Kiện/Cáp và phụ kiện lắp ráp Dây nối dài nguồn.jpg", description: "Dây nguồn mở rộng màu trắng, tăng tính thẩm mỹ cho case." },
    { id: 17, name: "Giá đỡ VGA chống cong", price: 150000, category: "CapPhuKien", image: "assets/Cáp vs Phụ Kiện/Cáp và phụ kiện lắp ráp Giá đỡ card màn hình.jpg", description: "Giá đỡ card đồ họa, chống cong vênh mạch, có LED." },

    // CARD (VGA)
    { id: 18, name: "Card Capture 4K", price: 1200000, category: "Card", image: "assets/CARD/Card mở rộng Card âm thanh.webp", description: "Card thu âm/ghi hình HDMI, hỗ trợ stream game chất lượng cao." },
    { id: 19, name: "Card PCIe USB 3.0", price: 350000, category: "Card", image: "assets/CARD/Card mở rộng Card mở rộng USB.webp", description: "Card mở rộng cổng USB 3.0 ra sau máy tính." }, // Đã sửa lỗi 'rice' thành 'price'
    { id: 20, name: "Card Wifi PCIe", price: 450000, category: "Card", image: "assets/CARD/Card mở rộng Card Wi-Fi.webp", description: "Card Wifi gắn trong, có 2 ăng ten, kết nối mạng ổn định." },

    // CHUỘT (Chuot)
    { id: 21, name: "Chuột UGREEN Bluetooth", price: 350000, category: "Chuot", image: "assets/Chuột/Chuột gaming không dây.webp", description: "Chuột không dây 2 chế độ (Bluetooth + 2.4G), thiết kế công thái học." },
    { id: 22, name: "Chuột Logitech G502 Hero", price: 1200000, category: "Chuot", image: "assets/Chuột/Chuột Gaming.webp", description: "Chuột gaming huyền thoại, cảm biến HERO 25K, nhiều nút tùy chỉnh." },

    //CPU
    { id: 23, name: "CPU AMD Ryzen 9", price: 3000000, category:"CPU",image: "assets/CPU/CPUAMD.webp", description: "CPU AMD cao cấp nhất, 16 nhân 32 luồng, hiệu năng đỉnh cao."},
    { id: 24, name: "CPU Intel Core i3 12100F", price: 2000000, category: "CPU", image: "assets/CPU/CPUi3.webp", description: "CPU Intel thế hệ 12, 4 nhân 8 luồng, giá rẻ, phù hợp văn phòng." },
    { id: 25, name: "CPU Intel Core i5 14400F", price: 4500000, category: "CPU", image: "assets/CPU/CPUi5.webp", description: "CPU Intel thế hệ 14, 10 nhân 16 luồng, chiến game tốt." },
    { id: 26, name: "CPU Intel Core i7 13700K", price: 8500000, category: "CPU", image: "assets/CPU/cpui7.webp", description: "CPU Intel 16 nhân 24 luồng, ép xung mạnh mẽ." },
    { id: 27,  name: "CPU Intel Core i9 14900KF", price: 14000000, category: "CPU", image: "assets/CPU/CPUi9.webp", description: "CPU Intel 24 nhân 32 luồng, dành cho render đồ họa và gaming." },

    //MAINBOARD (MainBoard) 
    { id: 24,name: "Mainboard MSI B760M", price: 3200000, category: "Mainboard", image: "assets/MainBoard/B760.webp", description: "Mainboard MSI, hỗ trợ chip Intel, có Wifi, DDR5." },
    { id: 25,name: "Mainboard Gigabyte H610M", price: 1800000, category: "Mainboard", image: "assets/MainBoard/B860.webp", description: "Mainboard Gigabyte giá rẻ, hỗ trợ chip Intel thế hệ 12/13." },
    { id: 26,name: "Mainboard ASUS Prime X670", price: 7500000, category: "Mainboard", image: "assets/MainBoard/H610.webp", description: "Mainboard ASUS cao cấp, hỗ trợ chip AMD, DDR5, PCIe 5.0." },
    { id: 27,name: "Mainboard MSI B550M", price: 2500000, category: "Mainboard", image: "assets/MainBoard/MainBoard AMD A520.webp", description: "Mainboard MSI, hỗ trợ chip AMD Ryzen, DDR4." },

    // MÀN HÌNH (ManHinh) 
    { id: 28,name: "Màn hình ViewSonic 27\" 4K", price: 6500000, category: "ManHinh", image: "assets/Màn Hình/Màn hình 4K.webp", description: "Màn hình 27 inch, độ phân giải 4K, tấm nền IPS, màu sắc chuẩn." },
    { id: 29,name: "Màn hình Cong 34", price: 8500000, category: "ManHinh", image: "assets/Màn Hình/Màn hình cong.webp", description: "Màn hình cong 34 inch, tỉ lệ 21:9, trải nghiệm gaming đắm chìm." },
    { id: 30,name: "Màn hình ASUS OLED", price: 15000000, category: "ManHinh", image: "assets/Màn Hình/Màn hình OLED.webp", description: "Màn hình ASUS tấm nền OLED, màu đen tuyệt đối, tần số quét cao." },
    { id: 31,name: "Màn hình ASUS 24\" 144Hz", price: 3200000, category: "ManHinh", image: "assets/Màn Hình/màn hình ultrawide.jpg", description: "Màn hình gaming 24 inch, tần số quét 144Hz, tấm nền IPS." },

    //Ổ CỨNG (OCung)
    { id: 32,name: "Ổ cứng HDD Seagate 8TB", price: 4500000, category: "OCung", image: "assets/Ổ Cứng/Ổ cứng và thiết bị lưu trữ HDD 3.5 inch.webp", description: "Ổ cứng cơ lưu trữ dung lượng lớn, chuyên dùng cho NAS hoặc lưu phim." },
    { id: 33,name: "SSD Indilinx M.2 1TB", price: 1600000, category: "OCung", image: "assets/Ổ Cứng/Ổ cứng và thiết bị lưu trữ SSD M.2 NVMe PCIe.webp", description: "Ổ cứng SSD NVMe PCIe Gen4, tốc độ đọc 7200MB/s." },
    { id: 34,name: "Box SSD UGREEN", price: 350000, category: "OCung", image: "assets/Ổ Cứng/Ổ cứng và thiết bị lưu trữ SSD M.2 SATA.jpg", description: "Box đựng SSD M.2 NVME, kết nối USB 3.2 tốc độ 10Gbps."},
    { id: 35,name: "Box HDD", price: 150000, category: "OCung", image: "assets/Ổ Cứng/Ổ cứng và thiết bị lưu trữ SSD SATA 2.5 inch.webp", description: "Box đựng ổ cứng HDD 2.5 inch, kết nối USB." },

    //Ram
    { id: 36,name:"RAM Desktop DDR3", price: 400000, category: "RAM", image: "assets/Ram/RAM DDR3.jpg", description: "RAM DDR3 4GB/8GB, dành cho máy tính cũ." },
    { id: 37,name:"RAM VSP DDR4 8GB", price: 550000, category: "RAM", image: "assets/Ram/RAM DDR4.png", description: "RAM VSP 8GB DDR4 bus 3200MHz, có tản nhiệt." },
    { id: 38,name:"RAM T-Force Delta RGB", price: 1800000, category: "RAM", image: "assets/Ram/RAM DDR5.webp", description: "Kit 2 thanh RAM 16GB DDR5, LED RGB rực rỡ, hỗ trợ ép xung." },

    //TaiNghe
    { id: 39,name: "Tai nghe Gaming Đen", price: 850000, category: "TaiNghe", image: "assets/Tai Nghe/shopping (1).webp", description: "Tai nghe gaming, mic khử ồn, âm thanh vòm 7.1." },
    { id: 40,name: "Tai nghe Sony Trắng", price: 1200000, category: "TaiNghe", image: "assets/Tai Nghe/shopping (2).webp", description: "Tai nghe Sony thiết kế trắng sang trọng, âm thanh chi tiết." },
    { id: 41, name: "Tai nghe ASUS ROG", price: 2200000, category: "TaiNghe", image: "assets/Tai Nghe/shopping (3).webp", description: "Tai nghe ROG, đệm tai da, LED đỏ, dành cho game thủ." },

    //TẢN NHIỆT
    { id: 42,name: "Tản nhiệt khí Deepcool", price: 450000, category: "TanNhiet", image: "assets/Tản Nhiệt/Tản nhiệt khí (Air Cooler).webp", description: "Tản nhiệt khí 4 ống đồng, có LED RGB, giá rẻ." },
    { id: 43,name: "Tản nhiệt nước AIO 360mm", price: 3200000, category: "TanNhiet", image: "assets/Tản Nhiệt/Tản nhiệt nước AIO 120mm,.webp", description: "Tản nhiệt nước 3 quạt, làm mát cực tốt cho CPU." },
    { id: 44,name: "Tản nhiệt nước AIO 120mm", price: 1500000, category: "TanNhiet", image: "assets/Tản Nhiệt/Tản nhiệt nước custom.jpg", description: "Tản nhiệt nước 1 quạt, có màn hình hiển thị nhiệt độ." },

      //VỎ MÁY TÍNH
    { id: 45, name: "Vỏ Case Custom Nước", price: 8500000, category: "VoMayTinh", image: "assets/Vỏ máy tính/Vỏ máy tính Case gaming.webp", description: "Vỏ case custom tản nhiệt nước, dàn ống đồng cực chất." },
    { id: 46, name: "Vỏ Case Kính Đen", price: 1900000, category: "VoMayTinh", image: "assets/Vỏ máy tính/Vỏ máy tính Case kính cường lực.webp", description: "Vỏ case kính cường lực 2 mặt, có 6 quạt LED." },
    { id: 47, name: "Vỏ Case Lưới Đen", price: 1500000, category: "VoMayTinh", image: "assets/Vỏ máy tính/Vỏ máy tính Case Mini-ITX.webp", description: "Vỏ case mặt lưới, tản nhiệt tốt, thiết kế tối giản." },
    { id: 48, name: "Vỏ Case Trắng Nhỏ", price: 2200000, category: "VoMayTinh", image: "assets/Vỏ máy tính/Vỏ máy tính full tower.webp", description: "Vỏ case Mini-ITX màu trắng, nhỏ gọn, sang trọng." },

    { id: 48,name: "Card GIGABYTE RTX 5060", price: 8500000, category: "Card", image: "assets/CARD/RTX 5060.webp", description: "Card đồ họa thế hệ mới RTX 5060, hiệu năng cực mạnh." },
    { id: 49,name: "Card GIGABYTE RTX 5080", price: 28500000, category: "Card", image: "assets/CARD/RTX 5080.webp", description: "Card đồ họa cao cấp RTX 5080, chiến mọi tựa game AAA ở 4K." },
    { id: 50,name: "Card ASUS ROG Astral RTX 5090", price: 55000000, category: "Card", image: "assets/CARD/RTX 5090.jpg", description: "Siêu phẩm card đồ họa RTX 5090, VRAM khủng, dành cho dân chuyên nghiệp." },

];

let cart = [];
let currentUser = null;
let orders = [];
let orderIdCounter = 1001;

// ==========================================
// 2. KHỞI TẠO VÀ CÁC HÀM TIỆN ÍCH
// ==========================================
function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    toast.innerHTML = isError ? '⚠️ ' + message : '✅ ' + message;
    toast.className = isError ? 'toast show error' : 'toast show';
    setTimeout(() => { toast.className = 'toast'; }, 3000);
}

window.onload = function() {
    renderProducts(products);
    updateCartUI();
    updateUserUI();
};

function scrollToProducts() {
    document.querySelector('.section-header').scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// 3. ĐIỀU HƯỚNG TRANG
// ==========================================
function showPage(pageName) {
    document.querySelectorAll('.page-section').forEach(page => page.style.display = 'none');
    document.getElementById('banner-section').style.display = (pageName === 'home') ? 'flex' : 'none';

    if (pageName === 'home') document.getElementById('page-home').style.display = 'block';
    else if (pageName === 'login') document.getElementById('page-login').style.display = 'flex';
    else if (pageName === 'history') { document.getElementById('page-history').style.display = 'block'; renderHistory(); }
    else if (pageName === 'admin') { document.getElementById('page-admin').style.display = 'block'; renderAdminOrders(); }
    
    window.scrollTo(0, 0);
}

function handleUserClick() {
    if (!currentUser) return;
    if (currentUser.role === 'admin') showPage('admin');
    else showPage('history');
}

// ==========================================
// 4. XỬ LÝ SẢN PHẨM & DANH MỤC
// ==========================================
function filterProducts(category, btnElement) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    document.getElementById('page-title').innerText = btnElement.innerText === 'Tất cả' ? 'Sản phẩm nổi bật' : btnElement.innerText;

    if (category === 'all') renderProducts(products);
    else renderProducts(products.filter(p => p.category === category));
    
    showPage('home');
    scrollToProducts();
}

function searchProduct() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
    document.getElementById('page-title').innerText = `Tìm kiếm: "${keyword}"`;
    renderProducts(filtered);
    showPage('home');
}

function renderProducts(list) {
    const grid = document.getElementById('product-list');
    grid.innerHTML = '';
    if(list.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; padding: 40px; font-size: 18px; color: #94a3b8;">Không tìm thấy sản phẩm nào phù hợp.</p>';
        return;
    }
    list.forEach(p => {
        grid.innerHTML += `
            <div class="product-card">
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p class="price">${p.price.toLocaleString('vi-VN')} VND</p>
                <p class="desc">${p.description}</p> <!-- HIỂN THỊ MÔ TẢ -->
                <button class="add-to-cart-btn" onclick="addToCart(${p.id})">Thêm vào giỏ</button>
            </div>
        `;
    });
}

// ==========================================
// 5. XỬ LÝ ĐĂNG NHẬP / ĐĂNG XUẤT
// ==========================================
function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === 'admin' && pass === '123') {
        currentUser = { username: 'admin', role: 'admin' };
        showToast("Đăng nhập Admin thành công!");
        updateUserUI();
        showPage('admin');
    } else if (user === 'khach' && pass === '123') {
        currentUser = { username: 'khach', role: 'customer' };
        showToast("Đăng nhập thành công!");
        updateUserUI();
        showPage('home');
    } else {
        showToast("Sai tài khoản hoặc mật khẩu!", true);
    }
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function updateUserUI() {
    const loginBtn = document.getElementById('login-btn');
    const userLoggedIn = document.getElementById('user-logged-in');
    const userName = document.getElementById('user-name');
    const userIcon = document.getElementById('user-icon');

    if (currentUser) {
        loginBtn.style.display = 'none';
        userLoggedIn.style.display = 'flex';
        
        if (currentUser.role === 'admin') {
            userName.innerText = "Quản trị viên";
            userIcon.innerText = "👑";
        } else {
            userName.innerText = "Khách hàng";
            userIcon.innerText = "👤";
        }
    } else {
        loginBtn.style.display = 'flex';
        userLoggedIn.style.display = 'none';
    }
}

function logout() {
    if (confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
        currentUser = null;
        cart = [];
        updateCartUI();
        updateUserUI();
        showToast("Đã đăng xuất tài khoản!");
        showPage('home');
    }
}

// ==========================================
// 6. XỬ LÝ GIỎ HÀNG (UC07)
// ==========================================
function addToCart(productId) {
    if (!currentUser) {
        showToast("Vui lòng đăng nhập để mua hàng!", true);
        showPage('login');
        return;
    }
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    
    if (cartItem) cartItem.quantity += 1;
    else cart.push({ ...product, quantity: 1 });
    
    showToast("Đã thêm vào giỏ hàng!");
    updateCartUI();
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) cart = cart.filter(i => i.id !== productId);
        updateCartUI();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    updateCartUI();
    showToast("Đã xóa khỏi giỏ hàng");
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartItemsList = document.getElementById('cart-items');
    let totalPrice = 0;
    cartItemsList.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li style="justify-content:center; color:#94a3b8; padding: 30px 0;">Giỏ hàng đang trống</li>';
    }
    
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        cartItemsList.innerHTML += `
            <li>
                <div style="display:flex; align-items:center; gap:12px;">
                    <img src="${item.image}" style="width:50px; height:50px; object-fit:contain; border-radius:8px; background:#f1f5f9;">
                    <div>
                        <div style="font-weight:600; font-size:14px; max-width:180px; line-height:1.3;">${item.name}</div>
                        <div style="font-size:12px; color:#64748b; margin-top:4px;">${item.price.toLocaleString('vi-VN')} đ</div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span style="font-weight:600; min-width:20px; text-align:center;">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button onclick="removeFromCart(${item.id})" style="background:none; border:none; cursor:pointer; font-size:16px; margin-left:5px;">🗑️</button>
                </div>
            </li>
        `;
    });
    document.getElementById('cart-total').innerText = totalPrice.toLocaleString('vi-VN') + ' VND';
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// ==========================================
// 7. XỬ LÝ ĐẶT HÀNG (UC08, UC09)
// ==========================================
function checkout() {
    if (!currentUser) return showToast("Vui lòng đăng nhập!", true);
    if (cart.length === 0) return showToast("Giỏ hàng đang trống!", true);

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const newOrder = {
        id: orderIdCounter++,
        customer: currentUser.username,
        date: new Date().toLocaleString('vi-VN'),
        items: [...cart],
        total: total,
        status: 'CHO_XAC_NHAN'
    };

    orders.push(newOrder);
    showToast(`Đặt hàng thành công! Mã đơn: #${newOrder.id}`);
    
    cart = [];
    updateCartUI();
    toggleCart();
    if(currentUser.role === 'customer') showPage('history');
}

// ==========================================
// 8. XEM LỊCH SỬ MUA HÀNG (UC10)
// ==========================================
function renderHistory() {
    const historyList = document.getElementById('history-list');
    if (!currentUser) return;
    const myOrders = orders.filter(o => o.customer === currentUser.username);
    
    if (myOrders.length === 0) {
        historyList.innerHTML = '<div style="text-align:center; padding: 50px; background: white; border-radius: 15px; color:#94a3b8;">Bạn chưa có đơn hàng nào.</div>';
        return;
    }

    let html = '<table><thead><tr><th>Mã Đơn</th><th>Ngày Đặt</th><th>Sản Phẩm</th><th>Tổng Tiền</th><th>Trạng Thái</th></tr></thead><tbody>';
    myOrders.forEach(order => {
        const statusText = order.status === 'CHO_XAC_NHAN' ? 'Chờ xác nhận' : (order.status === 'DA_XAC_NHAN' ? 'Đã xác nhận' : 'Hoàn thành');
        html += `
            <tr>
                <td><b style="color:#166534;">#${order.id}</b></td>
                <td>${order.date}</td>
                <td>${order.items.reduce((sum, i) => sum + i.quantity, 0)} món</td>
                <td style="color:#dc2626; font-weight:700;">${order.total.toLocaleString('vi-VN')} VND</td>
                <td><span class="status-badge status-${order.status}">${statusText}</span></td>
            </tr>
        `;
    });
    historyList.innerHTML = html + '</tbody></table>';
}

// ==========================================
// 9. QUẢN LÝ ĐƠN HÀNG - ADMIN (UC20)
// ==========================================
function renderAdminOrders() {
    const tbody = document.getElementById('admin-orders-body');
    tbody.innerHTML = '';
    if (orders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding: 30px; color:#94a3b8;">Chưa có đơn hàng nào.</td></tr>';
        return;
    }
    orders.forEach(order => {
        let actionBtn = '', statusText = '';
        if (order.status === 'CHO_XAC_NHAN') {
            statusText = 'Chờ xác nhận';
            actionBtn = `<button class="action-btn" onclick="updateOrderStatus(${order.id}, 'DA_XAC_NHAN')">Xác nhận</button>`;
        } else if (order.status === 'DA_XAC_NHAN') {
            statusText = 'Đã xác nhận';
            actionBtn = `<button class="action-btn" style="background:#22c55e;" onclick="updateOrderStatus(${order.id}, 'HOAN_THANH')">Giao hàng</button>`;
        } else {
            statusText = 'Hoàn thành';
            actionBtn = `<span style="color:#22c55e; font-weight:700;">✔ Đã xong</span>`;
        }
        tbody.innerHTML += `
            <tr>
                <td><b style="color:#166534;">#${order.id}</b></td>
                <td>${order.customer}</td>
                <td style="color:#dc2626; font-weight:700;">${order.total.toLocaleString('vi-VN')} VND</td>
                <td><span class="status-badge status-${order.status}">${statusText}</span></td>
                <td>${actionBtn}</td>
            </tr>
        `;
    });
}

function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        showToast(`Đã cập nhật đơn #${orderId}`);
        renderAdminOrders();
    }
}