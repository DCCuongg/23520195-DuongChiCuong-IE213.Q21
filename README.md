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

[Chi tiết Lab03](Lab03/README.md)

EM gói riêng 1 file README.md ở LAB02 để sai có cập nhận README tổng vẩn còn minh chứng là không chỉnh sửa lab củ. Nội Dung ở bản tổng và bản riêng LAb hoàn toàn giống nhau.
# 1. Mục tiêu
Yêu cầu

Trước khi làm bài tập này, sinh viên cần xem lại nội dung bài học Chương 2
- Phần xây dựng API cho review movie.

Mục tiêu

- Giúp sinh viên hiều được sâu sắc cách kết nối giữa các phần Controller,
Router, Data Access Object trong việc xây dựng mã nguồn.

- Giới thiệu một số phương thức trong việc gửi yêu cầu dưới dạng http từ máy
khách lên máy chủ.

- Thực hành tạo các tệp tin movies.controller.js, reviewDAO,
reviews.controller.js
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
## 3. Cách chạy

### Bài 1: Thiết lập định tuyến cho các thao tác với review trong ứng dụng minh hoạ

#### 1.1 Định tuyến  
Tạo route `/review` trong `movies.router.js`  
→ Endpoint: `/api/v1/movies/review`  

#### 1.2 → 1.4 Thiết lập các phương thức POST, PUT, DELETE  
Sử dụng `router.route()` để gom các method vào cùng 1 endpoint  
→ Gọi các hàm trong `ReviewsController`  

```js
// import express để tạo router
const express = require("express");

// tạo router
const router = express.Router();

// Import các Controller
const MoviesCtrl = require("./movies.controller");
const ReviewsCtrl = require("./reviews.controller");

// --- CÁC ĐỊNH TUYẾN PHIM (MOVIES) ---
router.route("/").get(MoviesCtrl.apiGetMovies);

// Lấy danh sách tất cả Ratings
router.route("/ratings").get(MoviesCtrl.apiGetRatings);

// Lấy chi tiết phim theo ID
router.route("/id/:id").get(MoviesCtrl.apiGetMovieById);


// ==========================================
// BÀI TẬP 1: Thiết lập định tuyến cho Review
// ==========================================

// Định tuyến cho đường dẫn /review
router
  .route("/review")
  .post(ReviewsCtrl.apiPostReview)   // Thêm review
  .put(ReviewsCtrl.apiUpdateReview)  // Sửa review
  .delete(ReviewsCtrl.apiDeleteReview); // Xóa review

// Lấy review theo movie
router.route("/review").get(ReviewsCtrl.apiGetReviews);

// export router để dùng trong server.js
module.exports = router;
```

#### Giải thích ngắn gọn  
- `POST /review` → thêm review  
- `PUT /review` → cập nhật review  
- `DELETE /review` → xoá review  
- `GET /review` → lấy danh sách review  

→ Tất cả xử lý thông qua `ReviewsController`
### Bài 2: Thiết lập Controller cho review

#### 2.1 Tạo file controller  
Tạo file `reviews.controller.js` trong thư mục `api`  
→ Dùng để xử lý request từ client (POST, PUT, DELETE)

```js
class ReviewsController {

}
module.exports = ReviewsController;
```

**Giải thích:**  
- Controller là lớp trung gian giữa Router và DAO  
- Nhận request từ client → xử lý → trả response  

---

#### 2.2 Import DAO  
Import `reviewsDAO.js` để thao tác với database  

```js
const ReviewsDAO = require("../dao/reviewsDao");
const MoviesDAO = require("../dao/moviesDao");
```

**Giải thích:**  
- DAO chứa logic làm việc với MongoDB  
- Controller chỉ gọi lại, không viết query trực tiếp  

---

#### 2.3 Phương thức apiPostReview()  
Xử lý thêm review từ client  

```js
static async apiPostReview(req, res) {
  try {
    const movieId = req.body.movie_id;
    const review = req.body.text;

    const userInfo = {
      name: req.body.name,
      _id: req.body.user_id
    };

    const date = new Date();

    await ReviewsDAO.addReview(movieId, userInfo, review, date);

    res.json({ status: "success" });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
```

**Giải thích:**  
- Lấy dữ liệu từ `req.body` (client gửi lên)  
- Tạo `date` để lưu thời gian  
- Gọi `addReview()` để insert vào DB  
- Trả `{ status: "success" }` nếu thành công  

---

#### 2.4 Phương thức apiUpdateReview()  
Xử lý cập nhật review  

```js
static async apiUpdateReview(req, res) {
  try {
    const reviewId = req.body.review_id;
    const text = req.body.text;
    const date = new Date();

    const ReviewResponse = await ReviewsDAO.updateReview(
      reviewId,
      req.body.user_id,
      text,
      date
    );

    if (ReviewResponse.error) {
      return res.status(400).json({ error: ReviewResponse.error });
    }

    if (ReviewResponse.modifiedCount === 0) {
      return res.status(404).json({ error: "Unable to update review" });
    }

    res.json({ status: "success" });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
```

**Giải thích:**  
- Lấy `review_id` và `user_id` từ client  
- Gọi DAO để update  
- `modifiedCount === 0` → không có dữ liệu bị sửa (sai user hoặc id)  
- Trả lỗi nếu update thất bại  

---

#### 2.5 Phương thức apiDeleteReview()  
Xử lý xoá review  

```js
static async apiDeleteReview(req, res) {
  try {
    const reviewId = req.body.review_id;
    const userId = req.body.user_id;

    await ReviewsDAO.deleteReview(reviewId, userId);

    res.json({ status: "success" });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
```

**Giải thích:**  
- Nhận `review_id` và `user_id`  
- Gọi DAO để xoá  
- Chỉ xoá nếu đúng user tạo review  

---

#### (Bổ sung) apiGetReviews()  

```js
static async apiGetReviews(req, res) {
  try {
    const reviews = await ReviewsDAO.getReviewsByMovieId(req.query.id);
    res.json(reviews);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
```

**Giải thích:**  
- Lấy `movie_id` từ query  
- Trả về danh sách review theo phim  


#### Tổng kết  
- Controller = xử lý request/response  
- DAO = thao tác DB  
- Tách riêng giúp code rõ ràng, dễ bảo trì  

---
### Bài 3: Thiết lập DAO cho review

#### 3.1 Tạo file DAO  
Tạo file `reviewsDAO.js` trong thư mục `DAO`  

```js
// Import MongoDB
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;

// Biến tham chiếu tới collection
let reviews;
```

**Giải thích:**  
- `mongodb` dùng để làm việc với MongoDB  
- `ObjectId` dùng để ép kiểu `_id` (Mongo không dùng string)  
- `reviews` là biến giữ collection để thao tác DB  

---

#### 3.2 Phương thức injectDB()  
Kết nối tới collection `reviews`  

```js
static async injectDB(conn) {
  if (reviews) return;

  try {
    reviews = await conn.db("sample_mflix").collection("reviews");
  } catch (e) {
    console.error(`Unable to establish collection: ${e}`);
  }
}
```

**Giải thích:**  
- Nhận `conn` (MongoClient) từ `index.js`  
- Gán collection vào biến `reviews`  
- Chỉ chạy 1 lần (tránh connect lại nhiều lần)  
- Phải gọi trước khi server chạy  

---

#### 3.3 Phương thức addReview()  
Thêm review vào DB  

```js
static async addReview(movieId, user, review, date) {
  try {
    const reviewDoc = {
      name: user.name,
      user_id: user._id,
      text: review,
      date: date,
      movie_id: new ObjectId(movieId)
    };

    return await reviews.insertOne(reviewDoc);

  } catch (e) {
    console.error(`Unable to post review: ${e}`);
    return { error: e };
  }
}
```

**Giải thích:**  
- Tạo object `reviewDoc`  
- Ép `movieId` → `ObjectId`  
- Dùng `insertOne()` để thêm vào DB  
- Trả về kết quả insert  

---

#### 3.4 Phương thức updateReview()  
Cập nhật review  

```js
static async updateReview(reviewId, userId, text, date) {
  try {
    return await reviews.updateOne(
      { _id: new ObjectId(reviewId), user_id: userId },
      { $set: { text: text, date: date } }
    );

  } catch (e) {
    console.error(`Unable to update review: ${e}`);
    return { error: e };
  }
}
```

**Giải thích:**  
- Ép `reviewId` → `ObjectId`  
- Filter theo `_id` + `user_id` → đảm bảo đúng người sửa  
- `$set` để cập nhật field  
- Trả về `modifiedCount`  

---

#### 3.5 Phương thức deleteReview()  
Xoá review  

```js
static async deleteReview(reviewId, userId) {
  try {
    return await reviews.deleteOne({
      _id: new ObjectId(reviewId),
      user_id: userId
    });

  } catch (e) {
    console.error(`Unable to delete review: ${e}`);
    return { error: e };
  }
}
```

**Giải thích:**  
- Ép `reviewId` → ObjectId  
- Chỉ xoá nếu đúng `user_id`  
- Dùng `deleteOne()` để xoá  

---

#### 3.6 Kiểm thử API  
Test bằng Postman / Insomnia  

**Yêu cầu:**  
- `user_id` = MSSV  

**Test các API:**  
- POST `/review` → thêm review  
- PUT `/review` → sửa review  
- DELETE `/review` → xoá review  

---

#### (Bổ sung) Lấy review theo movie  

```js
static async getReviewsByMovieId(movieId) {
  try {
    const cursor = await reviews.find({
      movie_id: new ObjectId(movieId)
    });

    return await cursor.toArray();

  } catch (e) {
    console.error(`Unable to get reviews: ${e}`);
    return { error: e };
  }
}
```

**Giải thích:**  
- Tìm tất cả review theo `movie_id`  
- Dùng `find()` + `toArray()` để trả về danh sách 

--- 
### Bài 4: Hoàn thành back-end cho ứng dụng minh họa

#### 4.1 Thêm định tuyến  
Thêm 2 route để lấy dữ liệu phim và rating  

```js
// Lấy danh sách tất cả Ratings
router.route("/ratings").get(MoviesCtrl.apiGetRatings);

// Lấy chi tiết phim theo ID
router.route("/id/:id").get(MoviesCtrl.apiGetMovieById);
```

**Giải thích:**  
- `/ratings` → trả về danh sách rating (G, PG, R,...)  
- `/id/:id` → lấy chi tiết 1 phim theo id  
- `:id` là params (lấy bằng `req.params.id`)  

---

#### 4.2 Thêm controller  

```js
// Lấy chi tiết phim + review
static async apiGetMovieById(req, res) {
  try {
    let id = req.params.id || {};
    let movie = await MoviesDAO.getMovieById(id);

    if (!movie) {
      return res.status(404).json({ error: "Not found" });
    }

    res.json(movie);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

// Lấy danh sách ratings
static async apiGetRatings(req, res) {
  try {
    let ratings = await MoviesDAO.getRatings();
    res.json(ratings);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
```

**Giải thích:**  
- `apiGetMovieById`  
  - Lấy `id` từ URL  
  - Gọi DAO để lấy phim + review  
  - Trả 404 nếu không tồn tại  

- `apiGetRatings`  
  - Gọi DAO lấy danh sách rating  
  - Trả về dạng JSON  

---

#### 4.3 Thêm DAO  

```js
// Lấy danh sách rating
static async getRatings() {
  try {
    return await movies.distinct("rated");
  } catch (e) {
    console.error(`Unable to get ratings, ${e}`);
    return [];
  }
}

// Lấy chi tiết phim + review
static async getMovieById(id) {
  try {
    const pipeline = [
      {
        $match: {
          _id: new ObjectId(id)
        }
      },
      {
        $lookup: {
          from: "reviews",
          let: { id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$movie_id", "$$id"]
                }
              }
            },
            {
              $sort: { date: -1 }
            }
          ],
          as: "reviews"
        }
      },
      {
        $addFields: {
          reviews: "$reviews"
        }
      }
    ];

    return await movies.aggregate(pipeline).next();

  } catch (e) {
    console.error(`Error: ${e}`);
    throw e;
  }
}
```

**Giải thích:**  
- `getRatings`  
  - Dùng `distinct("rated")` để lấy danh sách rating không trùng  

- `getMovieById`  
  - `$match` → lọc theo `_id`  
  - `$lookup` → join với collection `reviews`  
  - `$sort` → sắp xếp review mới nhất  
  - `aggregate()` → tổng hợp dữ liệu nhiều collection  

---

#### 4.4 Kiểm thử API  

**API cần test:**  
- GET `/api/v1/movies/id/:id`  
- GET `/api/v1/movies/ratings`  

**Kết quả mong đợi:**  
- API movie → trả về:
  - Thông tin phim  
  - Danh sách review  

- API ratings → trả về:
  - Danh sách rating (G, PG, R,...)  

---

#### Tổng kết  
- Router → định tuyến API  
- Controller → xử lý request  
- DAO → truy vấn MongoDB  
- `$lookup` → join dữ liệu giống SQL  
## 4. Kết quả đầu ra

### Danh sách API

| Method | Endpoint | Mô tả |
|--------|----------|------|
| GET | /api/v1/movies | Lấy danh sách phim |
| GET | /api/v1/movies/id/:id | Lấy chi tiết phim + review |
| GET | /api/v1/movies/ratings | Lấy danh sách rating |
| GET | /api/v1/movies/review?id=movieId | Lấy review theo movie |
| POST | /api/v1/movies/review | Thêm review |
| PUT | /api/v1/movies/review | Cập nhật review |
| DELETE | /api/v1/movies/review | Xoá review |

---

### Cách test API (Postman / Insomnia)

#### 1. Lấy danh sách phim
- Method: GET  
- URL:  
```
http://localhost:3000/api/v1/movies
```

---

#### 2. Lấy chi tiết phim + review
- Method: GET  
- URL:  
```
http://localhost:3000/api/v1/movies/id/{movieId}
```

---

#### 3. Lấy danh sách rating
- Method: GET  
- URL:  
```
http://localhost:3000/api/v1/movies/ratings
```

---

#### 4. Lấy review theo movie
- Method: GET  
- URL:  
```
http://localhost:3000/api/v1/movies/review?id={movieId}
```
![movies](./images/movie-detail-reviews.png)

---

#### 5. Thêm review
- Method: POST  
- URL:  
```
http://localhost:3000/api/v1/movies/review
```

- Body (JSON):
```json
{
  "movie_id": "ID_PHIM",
  "text": "Phim hay vl",
  "name": "Tên bạn",
  "user_id": "MSSV"
}
```
![add-review](./images/add-review.png)
![add-review](./images/movie-detail-reviews2.png)
---

#### 6. Cập nhật review
- Method: PUT  
- URL:  
```
http://localhost:3000/api/v1/movies/review
```

- Body (JSON):
```json
{
  "review_id": "ID_REVIEW",
  "user_id": "MSSV",
  "text": "Sửa lại nội dung"
}
```
![add-review](./images/update-review.png)
![add-review](./images/update-review2.png)
---

#### 7. Xoá review
- Method: DELETE  
- URL:  
```
http://localhost:3000/api/v1/movies/review
```

- Body (JSON):
```json
{
  "review_id": "ID_REVIEW",
  "user_id": "MSSV"
}
```
![add-review](./images/delete-review.png)
![add-review](./images/delete-review2.png)
---

### Chỗ chèn ảnh kết quả

#### GET movies
![movies](./images/movies.png)

#### GET movie by id
![movie-detail](./images/movie-detail.png)

#### GET ratings
![ratings](./images/ratings.png)

#### POST review
![add-review](./images/add-review.png)

#### PUT review
![update-review](./images/update-review.png)

#### DELETE review
![delete-review](./images/delete-review.png)

## 5. Giải thích chính
1. Client (Postman / trình duyệt) gửi request tới API  
2. Router nhận request và định tuyến đến Controller tương ứng  
3. Controller:
   - Lấy dữ liệu từ `req` (body, params, query)  
   - Xử lý logic cơ bản  
   - Gọi các hàm trong DAO  
4. DAO:
   - Kết nối MongoDB (qua `injectDB`)  
   - Thực hiện truy vấn (`find`, `insertOne`, `updateOne`, `deleteOne`, `aggregate`)  
5. Kết quả trả ngược lại:
   - DAO → Controller → Client (JSON)

---

### Ý nghĩa từng phần

- **Router**  
  Định nghĩa các endpoint API (GET, POST, PUT, DELETE)

- **Controller**  
  Xử lý request/response, không làm việc trực tiếp với DB  

- **DAO (Data Access Object)**  
  Tầng thao tác dữ liệu với MongoDB  

- **MongoDB**  
  Lưu trữ dữ liệu phim (`movies`) và review (`reviews`)  

---

### Luồng cụ thể ví dụ (Thêm review)

1. Client gửi POST `/review` kèm dữ liệu  
2. Router → `apiPostReview`  
3. Controller lấy dữ liệu → gọi `addReview()`  
4. DAO dùng `insertOne()` lưu vào DB  
5. Trả `{ status: "success" }` về client  

---

### Điểm quan trọng

- Tách 3 lớp: Router → Controller → DAO → dễ bảo trì  
- Dùng `ObjectId` để đúng kiểu dữ liệu MongoDB  
- Dùng `$lookup` để join `movies` và `reviews`  
- API trả JSON → dễ test bằng Postman/Insomnia 
---

# Lab04

[Chi tiết Lab04](Lab04/README.md)

EM gói riêng 1 file README.md ở LAB04 để sai có cập nhận README tổng vẩn còn minh chứng là không chỉnh sửa lab củ. Nội Dung ở bản tổng và bản riêng LAb hoàn toàn giống nhau.
# 1. Mục tiêu
Yêu cầu

Trước khi làm bài tập này, sinh viên cần xem lại nội dung bài học Chương 3
– Phần thiết lập Frontend với Reactjs.

Mục tiêu

- Giúp sinh viên hiểu được cách thiết lập frontend trong MERN stack với
Reactjs.
- Giới thiệu một số package chủ yếu trong việc xây dựng mã nguồn fe.
- Thực hành xây dựng thanh Navigation Header bar với sự hỗ trợ của
bootstrap, cách chia các component trong dự án
## 2. Công cụ và Môi trường phát triển

Phần này mô tả các công cụ, thư viện và thiết lập môi trường đã được sử dụng để xây dựng Frontend cho dự án Movie Review.

### 2.1. Môi trường hệ thống
* **Node.js**: Phiên bản LTS (đã cài đặt để quản lý các gói thư viện).
* **NPM (Node Package Manager)**: Sử dụng để cài đặt và quản lý các phụ thuộc (dependencies).
* **Hệ điều hành**: Windows (sử dụng Terminal `MINGW64/Git Bash`).

### 2.2. Công cụ lập trình
* **Trình soạn thảo**: Visual Studio Code (VS Code).
* **Tiện ích hỗ trợ**:
    * *ES7+ React/Redux/React-Native snippets*: Hỗ trợ tạo nhanh cấu trúc Component.
    * *Prettier*: Định dạng mã nguồn chuẩn hóa.
* **Trình duyệt**: Google Chrome / Microsoft Edge cùng với **React Developer Tools** để debug.

### 2.3. Các thư viện chính đã cài đặt (Frontend)
Dự án đã sử dụng các package sau để xây dựng giao diện và điều hướng:

| Thư viện | Phiên bản | Công dụng |
| :--- | :--- | :--- |
| **React** | ^18.x | Thư viện chính xây dựng giao diện người dùng. |
| **Bootstrap** | ^5.x | Cung cấp CSS framework để xây dựng UI nhanh chóng. |
| **React-Bootstrap** | ^2.x | Các Component Bootstrap được tối ưu hóa cho React (Navbar, Container, Nav). |
| **React-Router-Dom** | ^6.x | Thư viện xử lý định tuyến (Routing), giúp chuyển trang mà không tải lại. |

### 2.4. Lệnh thiết lập môi trường đã thực hiện
Để thiết lập dự án từ đầu, các câu lệnh sau đã được thực thi thành công:

```bash
# 1. Khởi tạo template React
npx create-react-app frontend

# 2. Di chuyển vào thư mục frontend
cd frontend

# 3. Cài đặt các thư viện bổ trợ
npm install bootstrap react-bootstrap react-router-dom

# 4. Khởi chạy ứng dụng ở chế độ phát triển
npm start
```
---
## 3. Cách chạy
### Bài 1: Thiết lập nơi làm việc với frontend của dự án.

#### 1.1 Tạo template frontend với React
* Tạo template frontend với **React** trong thư mục **Movie Review** (ứng dụng minh họa).
* Chạy ứng dụng lên với câu lệnh `npm start` để thấy được kết quả (lưu ý `cd` vào thư mục `frontend` trước khi chạy).
Thực hiện các lệnh sau để khởi tạo dự án:
```bash
# Di chuyển vào thư mục gốc
cd "Movie Review"

# Tạo ứng dụng React tên là frontend
npx create-react-app frontend

# Truy cập và chạy thử ứng dụng
cd frontend
npm start
```
![add-review](./Lab04/images/1.png)
#### 1.2 Cài đặt các package hỗ trợ xây dựng dự án
Cài đặt các thư viện bổ trợ sau:
* **Bootstrap**: Hỗ trợ xây dựng giao diện người dùng (UI).
* **React router dom**: Hỗ trợ cơ chế định tuyến (Routing).

Cài đặt các thư viện cần thiết cho UI và định tuyến:
```
npm install bootstrap react-bootstrap react-router-dom
```
về sau Cấu hình: Thêm dòng sau vào đầu file src/index.js để kích hoạt CSS Bootstrap:
```js
import 'bootstrap/dist/css/bootstrap.min.css';
```
![add-review](./Lab04/images/2.png)
---

### Bài 2: Xây dựng Navigation Header bar cho ứng dụng.

#### 2.1 Xây dựng các component cơ sở
Xây dựng các component để định tuyến nội dung ứng dụng (tạo trong thư mục `components` bên trong `frontend` và import vào `App.js`):
* **movies-list**: Hiển thị thông tin danh sách phim.
* **movie**: Hiển thị phim với các review.
* **add-review**: Hỗ trợ thêm review cho khách.
* **login**: Trang đăng nhập cho khách.
Để dễ dàng quản lý mã nguồn và các tệp CSS riêng biệt cho từng thành phần, mỗi component sẽ được đặt trong một thư mục riêng tại `src/components/`.

**Cấu trúc thư mục mong muốn em sẽ làm:**
```text
src/
└── components/
    ├── MoviesList/
    │   ├── MoviesList.js
    │   └── MoviesList.css
    ├── Movie/
    │   ├── Movie.js
    │   └── Movie.css
    ├── AddReview/
    │   ├── AddReview.js
    │   └── AddReview.css
    └── Login/
        ├── Login.js
        └── Login.css
```
![add-review](./Lab04/images/2.1.1.png)
thực hiện viết tam cấu trúc của MoviesList.js củng như tương tự với các hàm khác. Để triển khai thanh nav mà không lỗi.
```js
import React from 'react';
import './MoviesList.css';

function MoviesList() {
  return (
    <div className="movies-list-container">
      <h2>Movies List</h2>
    </div>
  );
}

export default MoviesList;
``` 
#### 2.2 Tích hợp Navbar
* Lấy **Navbar Component** từ thư viện **React-Bootstrap**.
* Đưa vào phần mã nguồn JSX của hàm `App()` trong tệp tin `App.js`.
đầu tiên bọc BrowserRouter cho file index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Thêm dòng này
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2. Bọc App bằng BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
```
sau đó triển khai vào app.js nhưu 2.3
#### 2.3 Điều chỉnh thông tin hiển thị
* Thay đổi tên logo thành: **Movie Reviews**.
* Liên kết thứ nhất: Thay **Home** thành **Movies**.
* Liên kết thứ hai: Thay **Link** thành trạng thái **Login/Logout** của người dùng.
* **Lưu ý**: Sử dụng React hook `useState` để lưu giữ và thay đổi trạng thái đăng nhập của người dùng. Ví dụ: `const [user, setUser] = useState(null);`.

Logo: Sử dụng <Navbar.Brand> với nội dung Movie Reviews.

Menu:

Liên kết Movies: Điều hướng người dùng về danh sách phim.

Trạng thái Login/Logout: Sử dụng Hook useState để quản lý.

Mã nguồn thực hiện:
```js
// Sử dụng useState để lưu giữ trạng thái đăng nhập
const [user, setUser] = useState(null);

// Hàm giả lập đăng nhập và đăng xuất
async function login(user = null) { setUser(user); }
async function logout() { setUser(null); }

// JSX cho Navbar
<Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="/">Movie Reviews</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
        {user ? (
          <Nav.Link onClick={logout} style={{ cursor: 'pointer' }}>
            Logout ({user.name})
          </Nav.Link>
        ) : (
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
```
---

### Bài 3: Thiết lập các định tuyến cho các component.

#### 3.1 Cấu hình bộ định tuyến
Trong tệp tin `App.js`, sử dụng thẻ `<Switch>` hoặc `<Routes>` (import từ `react-router-dom`) để định tuyến cho 4 component đã tạo ở bài 2.1.
Sử dụng thẻ <Routes> từ thư viện react-router-dom (phiên bản v6) để bao bọc các tuyến đường trong ứng dụng, đảm bảo tính điều hướng Single Page Application (SPA). 

#### 3.2 Các định tuyến chi tiết
Thiết lập các đường dẫn cụ thể như sau:
* **“/”**: Đến component `MoviesList`.
* **“/movies/:id/review”**: Đến component `AddReview`.
* **“/movies/:id”**: Đến component `Movie`.
* **“/login”**: Đến component `Login`.

Dưới đây là chi tiết các tuyến đường (routes) được thiết lập trong ứng dụng để điều hướng giữa các thành phần giao diện:

| Đường dẫn (Path) | Thành phần (Component) | Ghi chú |
| :--- | :--- | :--- |
| `/` | `MoviesList` | Trang mặc định hiển thị danh sách phim khi vừa truy cập. |
| `/movies` | `MoviesList` | Trang hiển thị danh sách toàn bộ phim. |
| `/movies/:id` | `Movie` | Xem chi tiết thông tin phim và các đánh giá dựa trên `ID`. |
| `/movies/:id/review` | `AddReview` | Giao diện cho phép người dùng thêm đánh giá mới cho phim. |
| `/login` | `Login` | Trang đăng nhập vào hệ thống để thực hiện các chức năng đánh giá. |

Mã nguồn triển khai chi tiết (App.js):

```js
<Container className="mt-3">
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/movies/:id" element={<Movie user={user} />} />
          <Route path="/movies/:id/review" element={<AddReview user={user} />} />
          <Route path="/login" element={<Login login={login} />} />
        </Routes>
      </Container>
```
## 4. Kết quả đầu ra
hiển thị thành công trang chủ và thánh nav
![add-review](./Lab04/images/4.1.png)

hiển thị thành công trang movies và điều hướng hoạt động tốt
![add-review](./Lab04/images/4.2.png)

hiển thị thành công trang login và điều hướng hoạt động tốt
![add-review](./Lab04/images/4.3.png)

hiển thị thành công trang movies detail và điều hướng hoạt động tốt
![add-review](./Lab04/images/4.4.png)

hiển thị thành công trang movies review và điều hướng hoạt động tốt
![add-review](./Lab04/images/4.5.png)
## 5. Giải thích chính
trình bày ở cách làm 3. không có giải thích đặc biệt khác.
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