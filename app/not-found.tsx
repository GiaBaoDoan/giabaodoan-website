const NotFound = () => {
  return (
    <div>
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-white mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-white mt-4 mb-2">
              Trang không tồn tại
            </h2>
            <p className="text-gray-400">
              Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              className="px-6 py-3 bg-white hover:bg-gray-200 text-black rounded-lg font-medium transition-colors"
              href="/"
            >
              Về trang chủ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
