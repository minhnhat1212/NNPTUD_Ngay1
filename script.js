// Mẫu có sẵn
let student = {
    name: "Tung",
    family: "Nguyen",
    age: 18,
    scores: [9, 10, 8],
    birth: {
        year: 2008,
        month: 11,
        day: 1
    },
    getFullName: function () {
        return this.family + " " + this.name;
    },
    getBirthDay: function () {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`;
    },
    getAVGScore: function () {
        return this.scores.reduce(
            function (sum, e) {
                return sum += e;
            }
        ) / this.scores.length;
    }
}

// Tạo thêm đối tượng thứ 2 (Nguyễn Minh Nhật)
let student2 = {
    name: "Nhat",
    family: "Nguyen Minh", 
    age: 20, // Giả sử dựa trên MSSV/năm sinh thực tế hoặc ngẫu nhiên
    scores: [10, 9, 9],
    birth: {
        year: 2004,
        month: 1, 
        day: 1 
    },
    getFullName: function () {
        return this.family + " " + this.name;
    },
    getBirthDay: function () {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`;
    },
    getAVGScore: function () {
        return this.scores.reduce(
            function (sum, e) {
                return sum += e;
            }
        ) / this.scores.length;
    }
}

// Tạo thêm đối tượng thứ 3 (Ví dụ khác)
let student3 = {
    name: "Hoa",
    family: "Tran Thi",
    age: 19,
    scores: [8, 8, 9],
    birth: {
        year: 2005,
        month: 5,
        day: 10
    },
    getFullName: function () {
        return this.family + " " + this.name;
    },
    getBirthDay: function () {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`;
    },
    getAVGScore: function () {
        return this.scores.reduce(
            function (sum, e) {
                return sum += e;
            }
        ) / this.scores.length;
    }
}

// Kiểm tra kết quả
console.log("--- Student 1 (Mẫu) ---");
console.log("Full Name: " + student.getFullName());
console.log("Birthday: " + student.getBirthDay());
console.log("AVG Score: " + student.getAVGScore());

console.log("\n--- Student 2 (Nguyễn Minh Nhật) ---");
console.log("Full Name: " + student2.getFullName());
console.log("Birthday: " + student2.getBirthDay());
console.log("AVG Score: " + student2.getAVGScore());

console.log("\n--- Student 3 (Ví dụ khác) ---");
console.log("Full Name: " + student3.getFullName());
console.log("Birthday: " + student3.getBirthDay());
console.log("AVG Score: " + student3.getAVGScore());


// Phần JSON mẫu trong ảnh
let jsons = '{"name":"Tung","family":"Nguyen","age":18,"scores":[9,10,8],"birth":{"year":2008,"month":11,"day":1}}';
console.log("\n--- JSON Parse Example ---");
console.log(JSON.parse(jsons));

// JSON tương ứng cho 2 đối tượng mới
let json2 = JSON.stringify({
    name: student2.name,
    family: student2.family,
    age: student2.age,
    scores: student2.scores,
    birth: student2.birth
});
let json3 = JSON.stringify({
    name: student3.name,
    family: student3.family,
    age: student3.age,
    scores: student3.scores,
    birth: student3.birth
});

console.log("\n--- JSON 2 ---");
console.log(JSON.parse(json2));
console.log("\n--- JSON 3 ---");
console.log(JSON.parse(json3));
