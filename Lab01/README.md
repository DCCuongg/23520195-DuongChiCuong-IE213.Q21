# Lab01

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

23520195-IE213
   └── test (collection)
![Alt text](/Lab01/images/Screenshot%202026-03-10%20142416.png)

2.2 Thêm các document sau đây vào collection có tên là employees trong db vừa được tạo ở
trên:
{"id":1,"name":{"first":"John","last":"Doe"},"age":48}
{"id":2,"name":{"first":"Jane","last":"Doe"},"age":16}
{"id":3,"name":{"first":"Alice","last":"A"},"age":32}
{"id":4,"name":{"first":"Bob","last":"B"},"age":64}

Bước 1: Chọn database đã tạo

Trong MONGOSH nhập:

use 23520195-IE213

Bước 2: Thêm các document vào collection employees

Dùng lệnh insertMany() để thêm nhiều document cùng lúc:

db.employees.insertMany([
  {"id":1,"name":{"first":"John","last":"Doe"},"age":48},
  {"id":2,"name":{"first":"Jane","last":"Doe"},"age":16},
  {"id":3,"name":{"first":"Alice","last":"A"},"age":32},
  {"id":4,"name":{"first":"Bob","last":"B"},"age":64}
])

Sau khi chạy thành công sẽ hiện dạng:

{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('69afc872f5662d0fdf8e74ca'),
    '1': ObjectId('69afc872f5662d0fdf8e74cb'),
    '2': ObjectId('69afc872f5662d0fdf8e74cc'),
    '3': ObjectId('69afc872f5662d0fdf8e74cd')
  }
}

![Alt text](/Lab01/images/Screenshot%202026-03-10%20143128.png)

Bước 3: Kiểm tra dữ liệu đã thêm

Gõ lệnh:

db.employees.find()

Kết quả database

23520195-IE213
   └── employees
        ├── {id:1, name:{first:"John", last:"Doe"}, age:48}
        ├── {id:2, name:{first:"Jane", last:"Doe"}, age:16}
        ├── {id:3, name:{first:"Alice", last:"A"}, age:32}
        └── {id:4, name:{first:"Bob", last:"B"}, age:64}

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

[
  { key: { _id: 1 }, name: "_id_" },
  { key: { id: 1 }, name: "id_1", unique: true }
]

Bước 4: Thử thêm document trùng id

Ví dụ thử thêm:

db.employees.insertOne(
  {"id":1,"name":{"first":"Test","last":"Test"},"age":20}
)

MongoDB sẽ báo lỗi:

E11000 duplicate key error

Điều này chứng tỏ id đã là duy nhất.

![Alt text](/Lab01/images/Screenshot%202026-03-10%20144407.png)

2.4 Hãy viết lệnh để tìm document có firstname là John và lastname là Doe.

Lệnh tìm firstname = John và lastname = Doe

Trong mongosh nhập:

db.employees.find({
  "name.first": "John",
  "name.last": "Doe"
})

Kết quả mong đợi

{
  _id: ObjectId('69afc872f5662d0fdf8e74ca'),
  id: 1,
  name: {
    first: 'John',
    last: 'Doe'
  },
  age: 48
}

Ảnh minh chứng:
![Alt text](/Lab01/images/Screenshot%202026-03-10%20144909.png)

2.5 Hãy viết lệnh để tìm những người có tuổi trên 30 và dưới 60.

Trong MongoDB dùng các toán tử:

$gt → greater than (lớn hơn)

$lt → less than (nhỏ hơn)

Lệnh trong mongosh

db.employees.find({
  age: { $gt: 30, $lt: 60 }
})

Kết quả với dữ liệu của bạn

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

Ảnh minh chứng: 
![Alt text](/Lab01/images/Screenshot%202026-03-10%20145333.png)

2.6 Thêm các document sau đây vào collection:
{"id":5,"name":{"first":"Rooney", "middle":"K", "last":"A"},"age":30}
{"id":6,"name":{"first":"Ronaldo", "middle":"T", "last":"B"},"age":60}
Sau đó viết lệnh để tìm tất cả các document có middle name.

Bước 1: Thêm 2 document vào collection employees

Trong mongosh chạy:

db.employees.insertMany([
  {"id":5,"name":{"first":"Rooney","middle":"K","last":"A"},"age":30},
  {"id":6,"name":{"first":"Ronaldo","middle":"T","last":"B"},"age":60}
])

MongoDB sẽ thêm 2 document mới vào collection employees.

{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('69afce70f5662d0fdf8e74cf'),
    '1': ObjectId('69afce70f5662d0fdf8e74d0')
  }
}

Bước 2: Tìm tất cả document có middle name

Vì middle nằm trong object name, ta dùng dot notation và toán tử $exists.

db.employees.find({
  "name.middle": { $exists: true }
})

Kết quả mong đợi

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

Ảnh minh chứng:
![Alt text](/Lab01/images/Screenshot%202026-03-10%20145838.png)

2.7 Cho rằng là những document nào đang có middle name là không đúng, hãy xoá middle
name ra khỏi các document đó.

Trong MongoDB dùng toán tử:

$unset

$unset dùng để xoá một field khỏi document.

Lệnh xoá middle name

Trong mongosh chạy:

db.employees.updateMany(
  { "name.middle": { $exists: true } },
  { $unset: { "name.middle": "" } }
)

KẾT quả 

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}

Kiểm tra kết quả

db.employees.find()

Kết quả:

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

Ảnh minh chứng:

![Alt text](/Lab01/images/Screenshot%202026-03-10%20150705.png)

2.8 Hãy thêm trường dữ liệu organization: "UIT" vào tất cả các document trong employees
collection.

Trong MongoDB dùng toán tử:

$set

Lệnh trong mongosh

db.employees.updateMany(
  {},
  { $set: { organization: "UIT" } }
)

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

db.employees.updateMany(
  { id: { $in: [5, 6] } },
  { $set: { organization: "USSH" } }
)

Kết quả:

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}

Kiểm tra kết quả

db.employees.find()

Ảnh kết quả:

![Alt text](/Lab01/images/Screenshot%202026-03-10%20151345.png)

![Alt text](/Lab01/images/Screenshot%202026-03-10%20151455.png)

2.10 Hãy viết lệnh để tính tổng tuổi và tuổi trung bình của nhân viên thuộc 2 organization là
UIT và USSH.

Trong MongoDB phải dùng Aggregation Pipeline.

Lệnh trong mongosh

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

Giải thích
$match
{ organization: { $in: ["UIT", "USSH"] } }

Chỉ lấy nhân viên thuộc:UIT,USSH

$group

{
  _id: null,
  totalAge: { $sum: "$age" },
  averageAge: { $avg: "$age" }
}

$sum → tính tổng tuổi

$avg → tính tuổi trung bình

_id: null → gộp tất cả thành một nhóm

Kết quả

{
  _id: null,
  totalAge: 250,
  averageAge: 41.666666666666664
}

Ảnh minh chứng:
![Alt text](/Lab01/images/Screenshot%202026-03-10%20151825.png)

## 4. Kết quả đầu ra

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

23520195-IE213
   └── test (collection)
![Alt text](/Lab01/images/Screenshot%202026-03-10%20142416.png)

2.2 Thêm các document sau đây vào collection có tên là employees trong db vừa được tạo ở
trên:
{"id":1,"name":{"first":"John","last":"Doe"},"age":48}
{"id":2,"name":{"first":"Jane","last":"Doe"},"age":16}
{"id":3,"name":{"first":"Alice","last":"A"},"age":32}
{"id":4,"name":{"first":"Bob","last":"B"},"age":64}


Sau khi chạy thành công sẽ hiện dạng:

{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('69afc872f5662d0fdf8e74ca'),
    '1': ObjectId('69afc872f5662d0fdf8e74cb'),
    '2': ObjectId('69afc872f5662d0fdf8e74cc'),
    '3': ObjectId('69afc872f5662d0fdf8e74cd')
  }
}

![Alt text](/Lab01/images/Screenshot%202026-03-10%20143128.png)

Bước 3: Kiểm tra dữ liệu đã thêm

Kết quả database

23520195-IE213
   └── employees
        ├── {id:1, name:{first:"John", last:"Doe"}, age:48}
        ├── {id:2, name:{first:"Jane", last:"Doe"}, age:16}
        ├── {id:3, name:{first:"Alice", last:"A"}, age:32}
        └── {id:4, name:{first:"Bob", last:"B"}, age:64}

![Alt text](/Lab01/images/Screenshot%202026-03-10%20143328.png)

2.3 Hãy biến trường id trong các document trên trở thành duy nhất. Có nghĩa là không thể thêm


MongoDB sẽ báo lỗi:

E11000 duplicate key error

Điều này chứng tỏ id đã là duy nhất.

![Alt text](/Lab01/images/Screenshot%202026-03-10%20144407.png)

2.4 Hãy viết lệnh để tìm document có firstname là John và lastname là Doe.


Kết quả 

{
  _id: ObjectId('69afc872f5662d0fdf8e74ca'),
  id: 1,
  name: {
    first: 'John',
    last: 'Doe'
  },
  age: 48
}

Ảnh minh chứng:
![Alt text](/Lab01/images/Screenshot%202026-03-10%20144909.png)

2.5 Hãy viết lệnh để tìm những người có tuổi trên 30 và dưới 60.

Kết quả với dữ liệu của bạn

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

Ảnh minh chứng: 
![Alt text](/Lab01/images/Screenshot%202026-03-10%20145333.png)

2.6 Thêm các document sau đây vào collection:
{"id":5,"name":{"first":"Rooney", "middle":"K", "last":"A"},"age":30}
{"id":6,"name":{"first":"Ronaldo", "middle":"T", "last":"B"},"age":60}
Sau đó viết lệnh để tìm tất cả các document có middle name.


Kết quả

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

Ảnh minh chứng:
![Alt text](/Lab01/images/Screenshot%202026-03-10%20145838.png)

2.7 Cho rằng là những document nào đang có middle name là không đúng, hãy xoá middle
name ra khỏi các document đó.

KẾT quả 

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}

Kiểm tra kết quả

db.employees.find()

Kết quả:

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

Ảnh minh chứng:

![Alt text](/Lab01/images/Screenshot%202026-03-10%20150705.png)

2.8 Hãy thêm trường dữ liệu organization: "UIT" vào tất cả các document trong employees
collection.

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

Kết quả:

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}

Kiểm tra kết quả

db.employees.find()

Ảnh kết quả:

![Alt text](/Lab01/images/Screenshot%202026-03-10%20151345.png)

![Alt text](/Lab01/images/Screenshot%202026-03-10%20151455.png)

2.10 Hãy viết lệnh để tính tổng tuổi và tuổi trung bình của nhân viên thuộc 2 organization là
UIT và USSH.


Kết quả

{
  _id: null,
  totalAge: 250,
  averageAge: 41.666666666666664
}

Ảnh minh chứng:
![Alt text](/Lab01/images/Screenshot%202026-03-10%20151825.png)