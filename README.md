# IE213.Q21 - Labs Repository

## 1. Thông tin sinh viên
- **Họ tên:** Dương Chí Cường  
- **MSSV:** 23520195  
- **Lớp:** IE213.Q21.2  

## 2. Môn học
- **Môn học:** IE213.Q21

# 3. Cấu trúc Repository

Repository được tổ chức theo nguyên tắc mỗi lab là một thư mục riêng biệt để giảng viên có thể theo dõi quá trình phát triển bài làm.
```
.
├── Lab01/
├── Lab02/
├── Lab03/
├── Lab04/
├── Lab05/
├── Lab06/
└── README.md
```
# 4. Danh sách các Lab

| Lab | Nội dung | Mô tả |
|-----|---------|------|
| Lab01 | Thiết lập môi trường. Thực hành viết lệnh với MongoDB. | Sử dụng MongoDB với các lệnh cơ bản |
| Lab02 | ... | (để sau) |
| Lab03 | ... | (để sau) |
| Lab04 | ... | (để sau) |
| Lab05 | ... | (để sau) |
| Lab06 | ... | (để sau) |

---
# 5. Cách chạy chương trình

Clone dự án về từ github, ở Lab 1 tất cả trình bày trong README.md
# 6. Chi tiết từng Lab

---

# Lab01
[Chi tiết Lab01](Lab01/README.md)

EM gói riêng 1 file README.md ở LAB01 để sai có cập nhận README tổng vẩn còn minh chứng là không chỉnh sửa lab củ. Nội Dung ở bản tổng và bản riêng LAb hoàn toàn giống nhau.
## 1. Mục tiêu
- Thiết lập môi trường.

- Thực hành viết lệnh với MongoDB.

## 2. Công cụ / môi trường

Các công cụ và môi trường được sử dụng trong bài thực hành:

- **MongoDB Atlas**  
  Dịch vụ cơ sở dữ liệu MongoDB trên nền tảng đám mây, dùng để tạo và quản lý cluster database.

- **MongoDB Compass**  
  Công cụ giao diện (GUI) giúp kết nối và quản lý MongoDB database trên máy tính.

- **Mongo Shell / MONGOSH**  
  Công cụ dòng lệnh dùng để thực thi các lệnh MongoDB như tạo database, thêm document, truy vấn dữ liệu.

- **Trình duyệt web (Google Chrome / Microsoft Edge / Firefox)**  
  Dùng để truy cập và quản lý MongoDB Atlas trên nền tảng web.

- **Máy tính cá nhân có kết nối Internet**  
  Dùng để cài đặt MongoDB Compass và kết nối tới MongoDB Atlas.

## 3. Cách làm và Giải thích chính
Bài 1: Thiết lập môi trường.
1.1 Đăng ký tài khoản MongoDB Atlas và tạo cluster miễn phí trên dịch vụ đám mây.
Đâu tiên đăng kí tài khoản
![Alt text](/Lab01/images/Screenshot%202026-03-10%20133557.png)
Tạo project
![Alt text](/Lab01/images/Screenshot%202026-03-10%20134048.png)
Connect với clushter
![Alt text](/Lab01/images/Screenshot%202026-03-10%20135146.png)

1.2 Tìm nạp dữ liệu mẫu trên MongoDB Atlas vào cluster.
Thêm dữ liệu mẩu:
![Alt text](/Lab01/images/Screenshot%202026-03-10%20140959.png)

![Alt text](/Lab01/images/Screenshot%202026-03-10%20141905.png)
1.3 Cài đặt MongoDB Compass trên máy tính.
Truy cập trang tải chính thức và tải:
![Alt text](/Lab01/images/Screenshot%202026-03-10%20141209.png)
1.4 Kết nối MongoDB Compass với cluster đã tạo trên MongoDB Atlas.
Lấy string:
Connect với clushter
![Alt text](/Lab01/images/Screenshot%202026-03-10%20135755.png)
Kết nôi vào compass:
![Alt text](/Lab01/images/Screenshot%202026-03-10%20140536.png)

Bài 2:
Lưu ý: các bài tập dưới đây không sử dụng giao diện để thêm trực tiếp dữ liệu, hãy dùng công
cụ MONGOSH có trong MongoDB Compass hoặc Mongo Shell để thực hiện việc này.
2.1 Tạo cơ sở dữ liệu có tên MSSV-IE213 trên cluster của bạn (trong đó MSSV là mã số sinh
viên của bạn).
Mở MongoDB Compass.

Kết nối tới cluster Atlas của bạn.

Sau khi kết nối xong, nhìn góc trên bên phải sẽ thấy nút:

>_ MONGOSH

Bấm vào đó để mở Mongo Shell.

Bước 2: Tạo database

Trong cửa sổ mongosh gõ lệnh:

use 23520195-IE213

MongoDB sẽ trả về:

switched to db 23520195-IE213

Bước 3: Tạo collection để database xuất hiện

Trong MongoDB, database chỉ xuất hiện khi có collection.
Gõ thêm:

db.createCollection("test")

Nếu thành công sẽ hiện:

{ ok: 1 }
Bước 4: Kiểm tra database

Gõ:

show dbs

hoặc:

show databases

Bạn sẽ thấy database:

23520195-IE213
Kết quả mong muốn Database của bạn:
```
23520195-IE213
   └── test (collection)
```
![Alt text](/Lab01/images/Screenshot%202026-03-10%20142416.png)

2.2 Thêm các document sau đây vào collection có tên là employees trong db vừa được tạo ở
trên:
```
{"id":1,"name":{"first":"John","last":"Doe"},"age":48}
{"id":2,"name":{"first":"Jane","last":"Doe"},"age":16}
{"id":3,"name":{"first":"Alice","last":"A"},"age":32}
{"id":4,"name":{"first":"Bob","last":"B"},"age":64}
```
Bước 1: Chọn database đã tạo

Trong MONGOSH nhập:

use 23520195-IE213

Bước 2: Thêm các document vào collection employees

Dùng lệnh insertMany() để thêm nhiều document cùng lúc:
```
db.employees.insertMany([
  {"id":1,"name":{"first":"John","last":"Doe"},"age":48},
  {"id":2,"name":{"first":"Jane","last":"Doe"},"age":16},
  {"id":3,"name":{"first":"Alice","last":"A"},"age":32},
  {"id":4,"name":{"first":"Bob","last":"B"},"age":64}
])
```
Sau khi chạy thành công sẽ hiện dạng:
```
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('69afc872f5662d0fdf8e74ca'),
    '1': ObjectId('69afc872f5662d0fdf8e74cb'),
    '2': ObjectId('69afc872f5662d0fdf8e74cc'),
    '3': ObjectId('69afc872f5662d0fdf8e74cd')
  }
}
```
![Alt text](/Lab01/images/Screenshot%202026-03-10%20143128.png)

Bước 3: Kiểm tra dữ liệu đã thêm

Gõ lệnh:

db.employees.find()

Kết quả database
```
23520195-IE213
   └── employees
        ├── {id:1, name:{first:"John", last:"Doe"}, age:48}
        ├── {id:2, name:{first:"Jane", last:"Doe"}, age:16}
        ├── {id:3, name:{first:"Alice", last:"A"}, age:32}
        └── {id:4, name:{first:"Bob", last:"B"}, age:64}
```
![Alt text](/Lab01/images/Screenshot%202026-03-10%20143328.png)

2.3 Hãy biến trường id trong các document trên trở thành duy nhất. Có nghĩa là không thể thêm

Bước 1: Chọn database

Trong mongosh nhập:

use 23520195-IE213

Bước 2: Tạo unique index cho trường id

Chạy lệnh:

db.employees.createIndex({ id: 1 }, { unique: true })

MongoDB sẽ trả về dạng:

id_1

Bước 3: Kiểm tra index

Gõ:

db.employees.getIndexes()

Bạn sẽ thấy:
```
[
  { key: { _id: 1 }, name: "_id_" },
  { key: { id: 1 }, name: "id_1", unique: true }
]
```
Bước 4: Thử thêm document trùng id

Ví dụ thử thêm:
```
db.employees.insertOne(
  {"id":1,"name":{"first":"Test","last":"Test"},"age":20}
)
```
MongoDB sẽ báo lỗi:

E11000 duplicate key error

Điều này chứng tỏ id đã là duy nhất.

![Alt text](/Lab01/images/Screenshot%202026-03-10%20144407.png)

2.4 Hãy viết lệnh để tìm document có firstname là John và lastname là Doe.

Lệnh tìm firstname = John và lastname = Doe

Trong mongosh nhập:
```
db.employees.find({
  "name.first": "John",
  "name.last": "Doe"
})
```
Kết quả mong đợi
```
{
  _id: ObjectId('69afc872f5662d0fdf8e74ca'),
  id: 1,
  name: {
    first: 'John',
    last: 'Doe'
  },
  age: 48
}
```
Ảnh minh chứng:
![Alt text](/Lab01/images/Screenshot%202026-03-10%20144909.png)

2.5 Hãy viết lệnh để tìm những người có tuổi trên 30 và dưới 60.

Trong MongoDB dùng các toán tử:

$gt → greater than (lớn hơn)

$lt → less than (nhỏ hơn)

Lệnh trong mongosh
```
db.employees.find({
  age: { $gt: 30, $lt: 60 }
})
```
Kết quả với dữ liệu của bạn
```
{
  _id: ObjectId('69afc872f5662d0fdf8e74ca'),
  id: 1,
  name: {
    first: 'John',
    last: 'Doe'
  },
  age: 48
}
{
  _id: ObjectId('69afc872f5662d0fdf8e74cc'),
  id: 3,
  name: {
    first: 'Alice',
    last: 'A'
  },
  age: 32
}
```
Ảnh minh chứng: 
![Alt text](/Lab01/images/Screenshot%202026-03-10%20145333.png)

2.6 Thêm các document sau đây vào collection:
```
{"id":5,"name":{"first":"Rooney", "middle":"K", "last":"A"},"age":30}
{"id":6,"name":{"first":"Ronaldo", "middle":"T", "last":"B"},"age":60}
```
Sau đó viết lệnh để tìm tất cả các document có middle name.

Bước 1: Thêm 2 document vào collection employees

Trong mongosh chạy:
```
db.employees.insertMany([
  {"id":5,"name":{"first":"Rooney","middle":"K","last":"A"},"age":30},
  {"id":6,"name":{"first":"Ronaldo","middle":"T","last":"B"},"age":60}
])
```
MongoDB sẽ thêm 2 document mới vào collection employees.
```
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('69afce70f5662d0fdf8e74cf'),
    '1': ObjectId('69afce70f5662d0fdf8e74d0')
  }
}
```
Bước 2: Tìm tất cả document có middle name

Vì middle nằm trong object name, ta dùng dot notation và toán tử $exists.
```
db.employees.find({
  "name.middle": { $exists: true }
})
```
Kết quả mong đợi
```
{
  _id: ObjectId('69afce70f5662d0fdf8e74cf'),
  id: 5,
  name: {
    first: 'Rooney',
    middle: 'K',
    last: 'A'
  },
  age: 30
}
{
  _id: ObjectId('69afce70f5662d0fdf8e74d0'),
  id: 6,
  name: {
    first: 'Ronaldo',
    middle: 'T',
    last: 'B'
  },
  age: 60
}
```
Ảnh minh chứng:
![Alt text](/Lab01/images/Screenshot%202026-03-10%20145838.png)

2.7 Cho rằng là những document nào đang có middle name là không đúng, hãy xoá middle
name ra khỏi các document đó.

Trong MongoDB dùng toán tử:

$unset

$unset dùng để xoá một field khỏi document.

Lệnh xoá middle name

Trong mongosh chạy:
```
db.employees.updateMany(
  { "name.middle": { $exists: true } },
  { $unset: { "name.middle": "" } }
)
```
KẾT quả 
```
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
```
Kiểm tra kết quả

db.employees.find()

Kết quả:
```
{
  _id: ObjectId('69afc872f5662d0fdf8e74ca'),
  id: 1,
  name: {
    first: 'John',
    last: 'Doe'
  },
  age: 48
}
{
  _id: ObjectId('69afc872f5662d0fdf8e74cb'),
  id: 2,
  name: {
    first: 'Jane',
    last: 'Doe'
  },
  age: 16
}
{
  _id: ObjectId('69afc872f5662d0fdf8e74cc'),
  id: 3,
  name: {
    first: 'Alice',
    last: 'A'
  },
  age: 32
}
{
  _id: ObjectId('69afc872f5662d0fdf8e74cd'),
  id: 4,
  name: {
    first: 'Bob',
    last: 'B'
  },
  age: 64
}
{
  _id: ObjectId('69afce70f5662d0fdf8e74cf'),
  id: 5,
  name: {
    first: 'Rooney',
    last: 'A'
  },
  age: 30
}
{
  _id: ObjectId('69afce70f5662d0fdf8e74d0'),
  id: 6,
  name: {
    first: 'Ronaldo',
    last: 'B'
  },
  age: 60
}
```
Ảnh minh chứng:

![Alt text](/Lab01/images/Screenshot%202026-03-10%20150705.png)

2.8 Hãy thêm trường dữ liệu organization: "UIT" vào tất cả các document trong employees
collection.

Trong MongoDB dùng toán tử:

$set

Lệnh trong mongosh

```
db.employees.updateMany(
  {},
  { $set: { organization: "UIT" } }
)
```

kết quả:



{
  acknowledged: true,
  insertedId: null,
  matchedCount: 6,
  modifiedCount: 6,
  upsertedCount: 0
}


Kiểm tra kết quả
db.employees.find()

kết quả:

![Alt text](/Lab01/images/Screenshot%202026-03-10%20151024.png)

2.9 Hãy điều chỉnh organization của nhân viên có id là 5 và 6 thành "USSH".

Ta dùng $set để cập nhật và $in để chọn nhiều giá trị id.

Lệnh trong mongosh
```
db.employees.updateMany(
  { id: { $in: [5, 6] } },
  { $set: { organization: "USSH" } }
)
```
Kết quả:
```
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
```
Kiểm tra kết quả

db.employees.find()

Ảnh kết quả:

![Alt text](/Lab01/images/Screenshot%202026-03-10%20151345.png)

![Alt text](/Lab01/images/Screenshot%202026-03-10%20151455.png)

2.10 Hãy viết lệnh để tính tổng tuổi và tuổi trung bình của nhân viên thuộc 2 organization là
UIT và USSH.

Trong MongoDB phải dùng Aggregation Pipeline.

Lệnh trong mongosh
```
db.employees.aggregate([
  {
    $match: { organization: { $in: ["UIT", "USSH"] } }
  },
  {
    $group: {
      _id: null,
      totalAge: { $sum: "$age" },
      averageAge: { $avg: "$age" }
    }
  }
])
```
Giải thích
$match
{ organization: { $in: ["UIT", "USSH"] } }

Chỉ lấy nhân viên thuộc:UIT,USSH

$group
```
{
  _id: null,
  totalAge: { $sum: "$age" },
  averageAge: { $avg: "$age" }
}
```
$sum → tính tổng tuổi

$avg → tính tuổi trung bình

_id: null → gộp tất cả thành một nhóm

Kết quả

```
{
  _id: null,
  totalAge: 250,
  averageAge: 41.666666666666664
}
```

Ảnh minh chứng:
![Alt text](/Lab01/images/Screenshot%202026-03-10%20151825.png)

## 4. Kết quả đầu ra (ở trên có rồi chỉ tổng hợp lại)

Bài 1: Thiết lập môi trường.
1.1 Đăng ký tài khoản MongoDB Atlas và tạo cluster miễn phí trên dịch vụ đám mây.
Đăng kí tài khoản
![Alt text](/Lab01/images/Screenshot%202026-03-10%20133557.png)
Tạo project
![Alt text](/Lab01/images/Screenshot%202026-03-10%20134048.png)
Connect với clushter
![Alt text](/Lab01/images/Screenshot%202026-03-10%20135146.png)

1.2 Tìm nạp dữ liệu mẫu trên MongoDB Atlas vào cluster.
Thêm dữ liệu mẩu:
![Alt text](/Lab01/images/Screenshot%202026-03-10%20140959.png)

![Alt text](/Lab01/images/Screenshot%202026-03-10%20141905.png)
1.3 Cài đặt MongoDB Compass trên máy tính.
Truy cập trang tải chính thức và tải:
![Alt text](/Lab01/images/Screenshot%202026-03-10%20141209.png)
1.4 Kết nối MongoDB Compass với cluster đã tạo trên MongoDB Atlas.
Lấy string:
Connect với clushter
![Alt text](/Lab01/images/Screenshot%202026-03-10%20135755.png)
Kết nôi vào compass:
![Alt text](/Lab01/images/Screenshot%202026-03-10%20140536.png)

Bài 2:
Lưu ý: các bài tập dưới đây không sử dụng giao diện để thêm trực tiếp dữ liệu, hãy dùng công
cụ MONGOSH có trong MongoDB Compass hoặc Mongo Shell để thực hiện việc này.
2.1 Tạo cơ sở dữ liệu có tên MSSV-IE213 trên cluster của bạn (trong đó MSSV là mã số sinh
viên của bạn).
Mở MongoDB Compass.


Kết quả mong muốn Database của bạn:
```
23520195-IE213
   └── test (collection)
```
![Alt text](/Lab01/images/Screenshot%202026-03-10%20142416.png)

2.2 Thêm các document sau đây vào collection có tên là employees trong db vừa được tạo ở
trên:
```
{"id":1,"name":{"first":"John","last":"Doe"},"age":48}
{"id":2,"name":{"first":"Jane","last":"Doe"},"age":16}
{"id":3,"name":{"first":"Alice","last":"A"},"age":32}
{"id":4,"name":{"first":"Bob","last":"B"},"age":64}
```

Sau khi chạy thành công sẽ hiện dạng:
```
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('69afc872f5662d0fdf8e74ca'),
    '1': ObjectId('69afc872f5662d0fdf8e74cb'),
    '2': ObjectId('69afc872f5662d0fdf8e74cc'),
    '3': ObjectId('69afc872f5662d0fdf8e74cd')
  }
}
```
![Alt text](/Lab01/images/Screenshot%202026-03-10%20143128.png)

Bước 3: Kiểm tra dữ liệu đã thêm

Kết quả database
```
23520195-IE213
   └── employees
        ├── {id:1, name:{first:"John", last:"Doe"}, age:48}
        ├── {id:2, name:{first:"Jane", last:"Doe"}, age:16}
        ├── {id:3, name:{first:"Alice", last:"A"}, age:32}
        └── {id:4, name:{first:"Bob", last:"B"}, age:64}
```
![Alt text](/Lab01/images/Screenshot%202026-03-10%20143328.png)

2.3 Hãy biến trường id trong các document trên trở thành duy nhất. Có nghĩa là không thể thêm


MongoDB sẽ báo lỗi:

E11000 duplicate key error

Điều này chứng tỏ id đã là duy nhất.

![Alt text](/Lab01/images/Screenshot%202026-03-10%20144407.png)

2.4 Hãy viết lệnh để tìm document có firstname là John và lastname là Doe.


Kết quả 
```
{
  _id: ObjectId('69afc872f5662d0fdf8e74ca'),
  id: 1,
  name: {
    first: 'John',
    last: 'Doe'
  },
  age: 48
}
```
Ảnh minh chứng:
![Alt text](/Lab01/images/Screenshot%202026-03-10%20144909.png)

2.5 Hãy viết lệnh để tìm những người có tuổi trên 30 và dưới 60.

Kết quả với dữ liệu của bạn
```
{
  _id: ObjectId('69afc872f5662d0fdf8e74ca'),
  id: 1,
  name: {
    first: 'John',
    last: 'Doe'
  },
  age: 48
}
{
  _id: ObjectId('69afc872f5662d0fdf8e74cc'),
  id: 3,
  name: {
    first: 'Alice',
    last: 'A'
  },
  age: 32
}
```
Ảnh minh chứng: 
![Alt text](/Lab01/images/Screenshot%202026-03-10%20145333.png)

2.6 Thêm các document sau đây vào collection:
```
{"id":5,"name":{"first":"Rooney", "middle":"K", "last":"A"},"age":30}
{"id":6,"name":{"first":"Ronaldo", "middle":"T", "last":"B"},"age":60}
Sau đó viết lệnh để tìm tất cả các document có middle name.
```

Kết quả
```
{
  _id: ObjectId('69afce70f5662d0fdf8e74cf'),
  id: 5,
  name: {
    first: 'Rooney',
    middle: 'K',
    last: 'A'
  },
  age: 30
}
{
  _id: ObjectId('69afce70f5662d0fdf8e74d0'),
  id: 6,
  name: {
    first: 'Ronaldo',
    middle: 'T',
    last: 'B'
  },
  age: 60
}
```
Ảnh minh chứng:
![Alt text](/Lab01/images/Screenshot%202026-03-10%20145838.png)

2.7 Cho rằng là những document nào đang có middle name là không đúng, hãy xoá middle
name ra khỏi các document đó.

KẾT quả 
```
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
```

Kiểm tra kết quả

db.employees.find()

Kết quả:
```
{
  _id: ObjectId('69afc872f5662d0fdf8e74ca'),
  id: 1,
  name: {
    first: 'John',
    last: 'Doe'
  },
  age: 48
}
{
  _id: ObjectId('69afc872f5662d0fdf8e74cb'),
  id: 2,
  name: {
    first: 'Jane',
    last: 'Doe'
  },
  age: 16
}
{
  _id: ObjectId('69afc872f5662d0fdf8e74cc'),
  id: 3,
  name: {
    first: 'Alice',
    last: 'A'
  },
  age: 32
}
{
  _id: ObjectId('69afc872f5662d0fdf8e74cd'),
  id: 4,
  name: {
    first: 'Bob',
    last: 'B'
  },
  age: 64
}
{
  _id: ObjectId('69afce70f5662d0fdf8e74cf'),
  id: 5,
  name: {
    first: 'Rooney',
    last: 'A'
  },
  age: 30
}
{
  _id: ObjectId('69afce70f5662d0fdf8e74d0'),
  id: 6,
  name: {
    first: 'Ronaldo',
    last: 'B'
  },
  age: 60
}
```
Ảnh minh chứng:

![Alt text](/Lab01/images/Screenshot%202026-03-10%20150705.png)

2.8 Hãy thêm trường dữ liệu organization: "UIT" vào tất cả các document trong employees
collection.

kết quả:
```
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 6,
  modifiedCount: 6,
  upsertedCount: 0
}
```
Kiểm tra kết quả
db.employees.find()

kết quả:

![Alt text](/Lab01/images/Screenshot%202026-03-10%20151024.png)

2.9 Hãy điều chỉnh organization của nhân viên có id là 5 và 6 thành "USSH".

Kết quả:
```
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
```
Kiểm tra kết quả

db.employees.find()

Ảnh kết quả:

![Alt text](/Lab01/images/Screenshot%202026-03-10%20151345.png)

![Alt text](/Lab01/images/Screenshot%202026-03-10%20151455.png)

2.10 Hãy viết lệnh để tính tổng tuổi và tuổi trung bình của nhân viên thuộc 2 organization là
UIT và USSH.


Kết quả
```
{
  _id: null,
  totalAge: 250,
  averageAge: 41.666666666666664
}
```
Ảnh minh chứng:
![Alt text](/Lab01/images/Screenshot%202026-03-10%20151825.png)


---

# Lab02

# Lab01
[Chi tiết Lab02](Lab02/README.md)

EM gói riêng 1 file README.md ở LAB02 để sai có cập nhận README tổng vẩn còn minh chứng là không chỉnh sửa lab củ. Nội Dung ở bản tổng và bản riêng LAb hoàn toàn giống nhau.
# 1. Mục tiêu
- Thiết lập môi trường.
- Thực hành tạo các tệp tin server.js, index.js, api/movies.route.js.
# 2. Công cụ / môi trường

Các công cụ và môi trường được sử dụng trong bài thực hành:

- **MongoDB Atlas**  
  Dịch vụ cơ sở dữ liệu MongoDB trên nền tảng đám mây, dùng để tạo và quản lý cluster database.

- **MongoDB Compass**  
  Công cụ giao diện (GUI) giúp kết nối và quản lý MongoDB database trên máy tính.

- **Mongo Shell / MONGOSH**  
  Công cụ dòng lệnh dùng để thực thi các lệnh MongoDB như tạo database, thêm document, truy vấn dữ liệu.

- **Trình duyệt web (Google Chrome / Microsoft Edge / Firefox)**  
  Dùng để truy cập và quản lý MongoDB Atlas trên nền tảng web.

- **Máy tính cá nhân có kết nối Internet**  
  Dùng để cài đặt MongoDB Compass và kết nối tới MongoDB Atlas.

# 3. Cách làm và Giải thích chính
## 🚀 Bài 1: Thiết lập môi trường

### 🔹 1.1 Tải và cài đặt Node.js
- Truy cập trang chủ: https://nodejs.org  
![Alt text](/Lab02/images/1.1-1.png)
- Tải và cài đặt phiên bản phù hợp với hệ điều hành  
- Kiểm tra cài đặt:
```bash
node -v
```
![Alt text](/Lab02/images/1.1-2.png)
---

### 🔹 1.2 Cài đặt công cụ soạn thảo
Cài đặt một trong các công cụ:
- Visual Studio Code (máy em đã cài vs code) 
![Alt text](/Lab02/images/1.2-1.png)
- Sublime Text  
- Notepad++  

---

### 🔹 1.3 Khởi tạo cấu trúc thư mục
Tạo thư mục dự án, ví dụ:
```bash
movie-reviews/
└── backend/
```

```bash
cd Lab02
mkdir movie-reviews
cd movie-reviews
mkdir backend
cd backend
```
![Alt text](/Lab02/images/1.3-1.png)
---

### 🔹 1.4 Khởi tạo project Node.js
Di chuyển vào thư mục `backend` và chạy:
```bash
npm init
```
![Alt text](/Lab02/images/1.4-1.png)
---

### 🔹 1.5 Cài đặt dependencies
Cài đặt các thư viện cần thiết:
```bash
npm install mongodb express cors dotenv
```
![Alt text](/Lab02/images/1.5-1.png)
---

### 🔹 1.6 Cài đặt Nodemon
Cài đặt nodemon để tự động reload server:
```bash
npm install --save-dev nodemon
```
![Alt text](/Lab02/images/1.6-1.png)
Sử dụng:
```bash
npx nodemon index.js
```

---
# Hướng dẫn Bài 2: Thiết lập cấu trúc Backend

Tài liệu này hướng dẫn các bước khởi tạo máy chủ, quản lý biến môi trường và thiết lập định tuyến cơ bản cho ứng dụng Movie Reviews.

---

## 2.1 Khởi tạo máy chủ (`backend/server.js`)
Tệp `server.js` đóng vai trò là nơi khởi tạo máy chủ web chính.
* **Dependencies:** Yêu cầu cài đặt và import `express`, `cors`.
* **Middleware:** Sử dụng các phương thức của `express` và `cors` để xử lý dữ liệu và quyền truy cập.
* **Routing:** * Thiết lập định tuyến chính dẫn tới `/api/v1/movies` (chi tiết tại mục 2.4).
    * Xử lý lỗi **404** (Not Found) cho các yêu cầu truy cập vào các đường dẫn không tồn tại.
```js
// import các thư viện cần thiết
const express = require("express");
const cors = require("cors");
const movies = require("./api/movies.route");

// khởi tạo app
const app = express();

// middleware:
// - cors(): cho phép frontend gọi API
// - express.json(): đọc dữ liệu JSON từ request
app.use(cors());
app.use(express.json());

// routing:
// tất cả request tới /api/v1/movies sẽ được chuyển sang movies.route.js
app.use("/api/v1/movies", movies);

// xử lý lỗi 404:
// nếu không khớp route nào ở trên thì trả về not found
app.use((req, res) => {
  res.status(404).json({ error: "not found" });
});

// export app để dùng ở index.js
module.exports = app;
```
## 2.2 Quản lý biến môi trường (`backend/.env`)
Tạo tệp `.env` để lưu trữ các thông tin cấu hình nhạy cảm và linh hoạt:
* **MONGODB_URI:** Đường dẫn (URI) kết nối tới cơ sở dữ liệu trên MongoDB Atlas.
* **PORT:** Cổng dịch vụ web chạy (ví dụ: `3000`).

.gitignore
```
.env
node_modules/
```
.env
```env
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
```
![Alt text](/Lab02/images/2.2-1.png)
## 2.3 Quản lý kết nối và thực thi (`backend/index.js`)
Tệp `index.js` là điểm đầu vào của ứng dụng, chịu trách nhiệm:
* Quản lý việc kết nối tới cơ sở dữ liệu.
* Khởi tạo các đối tượng cần thiết.
* Kích hoạt máy chủ (Run server) để bắt đầu lắng nghe các yêu cầu.
```js
// import thư viện dotenv để đọc biến môi trường từ file .env
require("dotenv").config();

// import MongoDB client
const { MongoClient } = require("mongodb");

// import app từ server.js
const app = require("./server");

// lấy PORT và MONGODB_URI từ biến môi trường
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// tạo client kết nối MongoDB
const client = new MongoClient(MONGODB_URI);

async function startServer() {
  try {
    // kết nối tới MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // chạy server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1); // dừng chương trình nếu lỗi
  }
}

// gọi hàm để chạy server
startServer();
```
## 2.4 Định tuyến ứng dụng (`backend/api/movies.route.js`)
Tạo thư mục `api` và tệp `movies.route.js` để xử lý các logic định tuyến liên quan đến movies:
* **Nội dung:** Hiện tại thiết lập một định tuyến duy nhất là `/`.
* **Kết quả:** Trả về thông báo `'hello world'` cho phía máy khách.

> **Ví dụ:** Khi máy khách truy cập vào địa chỉ `localhost:3000/api/v1/movies`, hệ thống sẽ trả về chuỗi văn bản: `hello world`.
```js
// import express để tạo router
const express = require("express");

// tạo router
const router = express.Router();

// định tuyến GET "/" (tương ứng với /api/v1/movies)
// khi client truy cập sẽ trả về "hello world"
router.route("/").get((req, res) => {
  res.send("hello world");
});

// export router để dùng trong server.js
module.exports = router;
```
## 2.5 Truy xuất dữ liệu với DAO (`backend/dao/moviesDAO.js`)
- Tạo thư mục dao trong thư mục backend, tạo tệp tin moviesDAO.js trong thư mục này.
- Tệp tin moviesDAO.js hiện tại sẽ bao gồm class MoviesDAO chứa 2 phương thức chính là:
- injectDBO: dùng để tham chiếu tới dữ liệu collection movies trên sample_mflix.
- getMovies(): để trả về danh sách các movies và số lượng các movies trả về thông qua
2 tham số: moviesList và totalNumMovies, với bộ lọc mặc định là: không có bộ lọc, bắt đầu từ
trang 0, và mỗi trang có 20 phim là tối đa.

```js
// import MongoDB
const { ObjectId } = require("mongodb");

// biến lưu collection movies
let movies;

// class xử lý truy xuất dữ liệu (DAO)
class MoviesDAO {
  // injectDB:
  // dùng để kết nối tới collection "movies" trong database
  static async injectDB(conn) {
    if (movies) {
      return;
    }
    try {
      movies = await conn.db("sample_mflix").collection("movies");
    } catch (e) {
      console.error(`Unable to establish collection handles: ${e}`);
    }
  }

  // getMovies:
  // lấy danh sách movies và tổng số lượng
  static async getMovies({
    filters = null,
    page = 0,
    moviesPerPage = 20,
  } = {}) {
    let query;
    if (filters) {
      if ("title" in filters) {
        // Tìm kiếm văn bản dựa trên tiêu đề
        query = { $text: { $search: filters["title"] } };
      } else if ("rated" in filters) {
        // Tìm kiếm chính xác theo độ tuổi (G, PG, R...)
        query = { "rated": { $eq: filters["rated"] } };
      }
    }

    let cursor;
    
    try {
      // Tìm kiếm với query, sau đó giới hạn số lượng và bỏ qua các trang trước đó
      cursor = await movies
        .find(query)
        .limit(moviesPerPage)
        .skip(moviesPerPage * page);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { moviesList: [], totalNumMovies: 0 };
    }

    try {
      const moviesList = await cursor.toArray();
      const totalNumMovies = await movies.countDocuments(query);

      return { moviesList, totalNumMovies };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { moviesList: [], totalNumMovies: 0 };
    }
  }
}

// export class để dùng ở controller hoặc route
module.exports = MoviesDAO;
```
- Khởi tạo đối tượng của lớp MoviesDAO trong tệp tin index.js để sử dụng phương thức
injectDBO. Phương thức này sẽ được gọi sau khi kết nối tới cơ sở dữ liệu trên MongoAtlas
Cloud và trước khi máy chủ được chạy.
injectDBO
```js
// import thư viện dotenv để đọc biến môi trường từ file .env
require("dotenv").config();

// import MongoDB client
const { MongoClient } = require("mongodb");

// import app từ server.js
const app = require("./server");
// --- Import MoviesDAO ---
const MoviesDAO = require("./dao/moviesDao");
// lấy PORT và MONGODB_URI từ biến môi trường
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// tạo client kết nối MongoDB
const client = new MongoClient(MONGODB_URI);

async function startServer() {
  try {
    // kết nối tới MongoDB
    await client.connect();
    console.log("Connected to MongoDB");
    // --- Gọi injectDB trước khi chạy server ---
    // Chúng ta truyền đối tượng client vừa kết nối vào để DAO lấy database
    await MoviesDAO.injectDB(client);
    console.log("MoviesDAO initialized");
    // chạy server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1); // dừng chương trình nếu lỗi
  }
}

// gọi hàm để chạy server
startServer();
```
## 2.6 Thiết lập CONTROLLER cho ứng dụng web (backend/api/movies.controller.js)
Controller đóng vai trò là "người điều phối". Nó tiếp nhận yêu cầu (request) từ client, trích xuất các tham số từ URL, gọi đến DAO để lấy dữ liệu và cuối cùng trả kết quả về cho client dưới dạng JSON.

1. Cấu trúc thư mục
Bạn hãy tạo tệp tin tại đường dẫn sau: backend/api/movies.controller.js.

2. Mã nguồn chi tiết
Trong file này, chúng ta sẽ định nghĩa class MoviesController với phương thức apiGetMovies.
```js
// Thay vì dùng import, ta dùng require
const MoviesDAO = require("../dao/moviesDAO");

class MoviesController {
  static async apiGetMovies(req, res, next) {
    // 1. Xác định số lượng phim mỗi trang (mặc định là 20)
    // Dữ liệu từ query string luôn là chuỗi, nên cần ép kiểu số (int)
    const moviesPerPage = req.query.moviesPerPage
      ? parseInt(req.query.moviesPerPage, 10)
      : 20;

    // 2. Xác định số trang hiện tại (mặc định là trang 0)
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    // 3. Khởi tạo bộ lọc (filters) dựa trên tham số truyền vào từ URL
    let filters = {};
    if (req.query.rated) {
      filters.rated = req.query.rated;
    } else if (req.query.title) {
      filters.title = req.query.title;
    }

    // 4. Gọi phương thức getMovies từ MoviesDAO với các tham số đã xử lý
    const { moviesList, totalNumMovies } = await MoviesDAO.getMovies({
      filters,
      page,
      moviesPerPage,
    });

    // 5. Cấu trúc đối tượng phản hồi để trả về cho Client
    let response = {
      movies: moviesList,
      page: page,
      filters: filters,
      entries_per_page: moviesPerPage,
      total_results: totalNumMovies,
    };

    // Gửi kết quả dưới dạng JSON
    res.json(response);
  }
}

// Xuất class theo kiểu CommonJS để các file khác có thể require
module.exports = MoviesController;
```
## 2.7 Đưa Controller vào định tuyến (api/movies.route.js)
Sau khi đã có DAO để lấy dữ liệu và Controller để điều phối, bước cuối cùng là tạo một Route (định tuyến) để liên kết URL từ trình duyệt với logic xử lý trong code.

1. Cấu trúc thư mục
Tệp tin này thường nằm cùng thư mục với controller: backend/api/movies.route.js.

2. Mã nguồn chi tiết
```js
// import express để tạo router
const express = require("express");

// tạo router
const router = express.Router();
const MoviesCtrl = require("./movies.controller");
// Định nghĩa route cho đường dẫn gốc "/"
// Khi máy khách truy cập: localhost:5000/api/v1/movies/
router.route("/").get(MoviesCtrl.apiGetMovies);
// định tuyến GET "/" (tương ứng với /api/v1/movies)
// khi client truy cập sẽ trả về "hello world"
router.route("/").get((req, res) => {
  res.send("hello world");
});

// export router để dùng trong server.js
module.exports = router;
```
Kết quả ở phần tổng kết.
# 4 Tổng kết
- Đã cài đặt Node.js  
- Đã tạo project Node.js  
- Đã cài các thư viện cần thiết  
- Đã thiết lập môi trường phát triển với nodemon  
## Chạy và kiểm tra ứng dụng

### Bước 1: Cài đặt thư viện
```bash
npm install
```

---

### Bước 2: Chạy server
```bash
node index.js
```
hoặc dùng nodemon:
```bash
npx nodemon index.js
```

---

### Bước 3: Kiểm tra trên trình duyệt
Mở trình duyệt và truy cập:

```
http://localhost:3000/api/v1/movies
```

---

### Kết quả mong đợi
Nếu hệ thống hoạt động đúng, bạn sẽ nhận được:

```
hello world
```
![Alt text](/Lab02/images/4-1.png)

### Chạy api http://localhost:3000/api/v1/movies

Lên trinh duyệt chạy http://localhost:3000/api/v1/movies
![Alt text](/Lab02/images/4-2.png)

Chạy thử trên postman
![Alt text](/Lab02/images/4-3.png)


---

# Lab03

## 1. Mục tiêu
*(để sau)*

## 2. Công cụ / môi trường
*(để sau)*

## 3. Cách chạy
*(để sau)*

## 4. Kết quả đầu ra
*(để sau)*

## 5. Giải thích chính
*(để sau)*

---

# Lab04

## 1. Mục tiêu
*(để sau)*

## 2. Công cụ / môi trường
*(để sau)*

## 3. Cách chạy
*(để sau)*

## 4. Kết quả đầu ra
*(để sau)*

## 5. Giải thích chính
*(để sau)*

---

# Lab05

## 1. Mục tiêu
*(để sau)*

## 2. Công cụ / môi trường
*(để sau)*

## 3. Cách chạy
*(để sau)*

## 4. Kết quả đầu ra
*(để sau)*

## 5. Giải thích chính
*(để sau)*

---

# Lab06

## 1. Mục tiêu
*(để sau)*

## 2. Công cụ / môi trường
*(để sau)*

## 3. Cách chạy
*(để sau)*

## 4. Kết quả đầu ra
*(để sau)*

## 5. Giải thích chính
*(để sau)*