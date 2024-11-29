<template>
<div class="card-container">
  <!-- Card 1 -->
  <div class="card">
    <div class="card-image">
      <a href="/blogs/hoat-dong/nha-xuat-ban-kim-dong-len-tieng-vi-bi-gia-mao">
        <img src="//file.hstatic.net/200000343865/article/giamao_15038d56bdc647ae8f76f5e352ca75a3_large.jpg" 
             alt="Nhà xuất bản Kim Đồng lên tiếng vì bị giả mạo">
      </a>
    </div>
    <div class="card-body">
      <div class="card-date">
        <i class="fa fa-calendar" aria-hidden="true"></i> 20/09/24
      </div>
      <div class="card-author">
        <i class="fa fa-user" aria-hidden="true"></i> Nhà xuất bản Kim Đồng
      </div>
      <h3 class="card-title">
        <a href="/blogs/hoat-dong/nha-xuat-ban-kim-dong-len-tieng-vi-bi-gia-mao">Nhà xuất bản Kim Đồng lên tiếng vì bị giả mạo</a>
      </h3>
      <p class="card-description">
        Ngày 23-8, Nhà xuất bản Kim Đồng (NXB) đã có thông báo về việc trên Facebook đang có đối tượng giả mạo NXB Kim Đồng để tổ chức cuộc thi dành cho thiếu nhi...
      </p>
    </div>
  </div>

  <!-- Card 2 -->
  <div class="card">
    <div class="card-image">
      <a href="/blogs/hoat-dong/nxb-kim-dong-tuyen-dung-ke-toan-vien">
        <img src="//file.hstatic.net/200000343865/article/logo_nxb_kim_dong_ee4cf429a1074fb5a39467eb32d6e5eb_large.png" 
             alt="NXB Kim Đồng tuyển dụng kế toán viên">
      </a>
    </div>
    <div class="card-body">
      <div class="card-date">
        <i class="fa fa-calendar" aria-hidden="true"></i> 18/09/24
      </div>
      <div class="card-author">
        <i class="fa fa-user" aria-hidden="true"></i> Nhà xuất bản Kim Đồng
      </div>
      <h3 class="card-title">
        <a href="/blogs/hoat-dong/nxb-kim-dong-tuyen-dung-ke-toan-vien">NXB Kim Đồng tuyển dụng kế toán viên</a>
      </h3>
      <p class="card-description">
        Nhà xuất bản Kim Đồng cần tuyển: - Vị trí công việc: Kế toán viên chuyên trách hoạt động đấu thầu - Số lượng: 01 - Địa điểm làm việc: Phòng Kế toán - Nhà xuất bản Kim Đồng...
      </p>
    </div>
  </div>

  <!-- Add more cards as needed -->
</div>

</template>
<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image img {
  width: 100%;
  height: auto;
}

.card-body {
  padding: 16px;
}

.card-date,
.card-author {
  font-size: 14px;
  color: #777;
}

.card-title {
  font-size: 18px;
  margin: 8px 0;
  color: #333;
}

.card-title a {
  text-decoration: none;
  color: inherit;
}

.card-title a:hover {
  color: #007bff;
}

.card-description {
  font-size: 14px;
  color: #555;
}

</style>