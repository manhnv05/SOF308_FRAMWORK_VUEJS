<template>
  <div class="container-fluid">
    <!-- Thêm bài viết -->
    <div class="card mb-4 w-100">
      <div class="card-header">
        <h5 class="card-title mb-0">Thêm Bài Viết Mới</h5>
      </div>
      <div class="card-body">
        <form id="articleForm">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-3">
              <label for="title" class="form-label">Tiêu đề</label>
              <input type="text" class="form-control" id="title" required />
            </div>
            <div class="col-lg-6 col-md-12 mb-3">
              <label for="category" class="form-label">Thể loại</label>
              <select class="form-select" id="category" required>
                <option value="">Chọn thể loại...</option>
                <option value="mien-bac">Miền Bắc</option>
                <option value="mien-trung">Miền Trung</option>
                <option value="mien-nam">Miền Nam</option>
              </select>
            </div>
          </div>

          <div class="mb-3">
            <label for="content" class="form-label">Nội dung</label>
            <textarea
              class="form-control"
              id="content"
              rows="5"
              required
            ></textarea>
          </div>

          <div class="mb-3">
            <label for="image" class="form-label">Hình ảnh</label>
            <input
              type="file"
              class="form-control"
              id="image"
              accept="image/*"
            />
          </div>

          <div class="d-flex gap-3 flex-wrap">
            <button type="submit" class="btn btn-them">
              <i class="bi bi-plus-circle me-2"></i>Thêm bài viết
            </button>
            <button type="submit" class="btn btn-success">
              <i class="bi bi-arrow-clockwise me-2"></i>Sửa bài viết
            </button>
            <button type="submit" class="btn btn-danger">
              <i class="bi bi-trash me-2"></i>Xoá bài viết
            </button>
            <button type="reset" class="btn btn-secondary">
              <i class="bi bi-arrow-counterclockwise me-2"></i>Làm mới
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Danh sách bài viết -->
    <div class="card w-100">
      <div class="card-header">
        <h5 class="card-title mb-0">Danh Sách Bài Viết</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col" style="width: 5%">#</th>
                <th scope="col" style="width: 15%">Hình ảnh</th>
                <th scope="col" style="width: 20%">Tiêu đề</th>
                <th scope="col" style="width: 15%">Thể loại</th>
                <th scope="col" style="width: 40%">Nội dung</th>
                <th scope="col" style="width: 5%">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  <img
                    src="#"
                    alt="Bài viết"
                    class="img-thumbnail"
                    style="width: 150px"
                  />
                </td>
                <td>Khám phá Cần Thơ</td>
                <td>Du lịch</td>
                <td>
                  Khám phá chợ nổi Cái Răng và lối sống của người dân miền Tây
                  sông nước...
                </td>
                <td>
                  <div class="d-flex gap-2">
                    <button class="btn btn-warning btn-sm w-100">
                      <i class="bi bi-pencil-square"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "ArticleManagement",
};
</script>

<style>
/* Điều chỉnh nút */
.btn-them {
  background-color: #ff7e39;
}

.btn-them:hover {
  background-color: #f35b09;
}

/* Căn chỉnh khoảng cách */
.container-fluid {
  padding: 3rem;
}

.card {
  margin-bottom: 2rem;
}

.card-body {
  padding: 2rem;
}

.table thead th {
  text-align: center;
}

.table tbody td {
  vertical-align: middle;
  text-align: left;
  word-wrap: break-word;
}

/* Hình ảnh trong bảng */
.img-thumbnail {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
</style>