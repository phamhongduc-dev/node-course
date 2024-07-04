const { MongoClient } = require('mongodb');

// URL kết nối của bạn
const uri =
  'mongodb+srv://phamductv000:phamductv000@cluster0.9hmecmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const databaseName = 'task-manager';
// Tạo một client MongoDB mới
const client = new MongoClient(uri, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
});

// Hàm kết nối tới MongoDB
async function connectToDatabase() {
  try {
    // Kết nối tới MongoDB
    await client.connect();
    console.log('Đã kết nối thành công tới MongoDB');

    // Lấy ra database mà bạn muốn kết nối (thay 'databaseName' bằng tên database của bạn)
    const db = client.db(databaseName);

    // Trả về đối tượng database để sử dụng trong các phần khác của ứng dụng
    return db;
  } catch (error) {
    console.error('Lỗi kết nối tới MongoDB:', error);
  }
}

connectToDatabase();

// Xuất hàm kết nối để sử dụng ở nơi khác
module.exports = connectToDatabase;
