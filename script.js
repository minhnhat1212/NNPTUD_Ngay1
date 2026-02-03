// ============================================
// Nguyễn Minh Nhật - 2280602207
// ============================================

// Câu 1:
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2:
const products = [
    new Product(1, "Laptop Dell XPS 15", 35000000, 5, "Điện tử", true),
    new Product(2, "iPhone 15 Pro Max", 32000000, 8, "Điện tử", true),
    new Product(3, "Tai nghe AirPods Pro", 6500000, 0, "Phụ kiện", false),
    new Product(4, "Bàn phím cơ Logitech", 2500000, 12, "Phụ kiện", true),
    new Product(5, "Chuột không dây Razer", 1800000, 15, "Phụ kiện", true),
    new Product(6, "Màn hình LG 27 inch", 8500000, 3, "Điện tử", true),
    new Product(7, "Ốp lưng iPhone", 500000, 0, "Phụ kiện", false),
    new Product(8, "MacBook Pro M3", 45000000, 2, "Điện tử", true)
];

// Câu 3:
console.log("Câu 3: Mảng chứa name và price của mỗi sản phẩm");
const namePriceArray = products.map(product => ({
    name: product.name,
    price: product.price
}));
console.log(namePriceArray);
console.log("\n");

// Câu 4:
console.log("Câu 4: Sản phẩm còn tồn kho (quantity > 0)");
const inStockProducts = products.filter(product => product.quantity > 0);
console.log(inStockProducts);
console.log("\n");

// Câu 5:
console.log("Câu 5: Kiểm tra có sản phẩm nào có giá > 30,000,000");
const hasExpensiveProduct = products.some(product => product.price > 30000000);
console.log(`Kết quả: ${hasExpensiveProduct ? "Có" : "Không"}`);
if (hasExpensiveProduct) {
    const expensiveProducts = products.filter(product => product.price > 30000000);
    console.log("Các sản phẩm có giá > 30,000,000:");
    expensiveProducts.forEach(p => console.log(`  - ${p.name}: ${p.price.toLocaleString('vi-VN')} VNĐ`));
}
console.log("\n");

// Câu 6:
console.log("Câu 6: Kiểm tra tất cả sản phẩm 'Phụ kiện' có đang bán không");
const accessoriesProducts = products.filter(product => product.category === "Phụ kiện");
const allAccessoriesAvailable = accessoriesProducts.every(product => product.isAvailable);
console.log(`Kết quả: ${allAccessoriesAvailable ? "Tất cả đều đang bán" : "Có sản phẩm không đang bán"}`);
console.log("Chi tiết sản phẩm Phụ kiện:");
accessoriesProducts.forEach(p => {
    console.log(`  - ${p.name}: isAvailable = ${p.isAvailable}`);
});
console.log("\n");

// Câu 7:
console.log("Câu 7: Tổng giá trị tồn kho");
const totalInventoryValue = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);
console.log(`Tổng giá trị tồn kho: ${totalInventoryValue.toLocaleString('vi-VN')} VNĐ`);
console.log("\n");

// Câu 8:
console.log("Câu 8: Dùng for...of để in thông tin sản phẩm");
for (const product of products) {
    const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${product.name} - ${product.category} - ${status}`);
}
console.log("\n");

// Câu 9:
console.log("Câu 9: Dùng for...in để in thuộc tính và giá trị (sản phẩm đầu tiên)");
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
}
console.log("\n");

// Câu 10:
console.log("Câu 10: Danh sách sản phẩm đang bán và còn tồn kho");
const availableInStockProducts = products
    .filter(product => product.isAvailable === true && product.quantity > 0)
    .map(product => product.name);
console.log("Danh sách tên sản phẩm:");
availableInStockProducts.forEach((name, index) => {
    console.log(`  ${index + 1}. ${name}`);
});
console.log("\n");
