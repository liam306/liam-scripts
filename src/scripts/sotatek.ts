(function () {
  const labels = [
    'Tuyệt mật, mật, nội bộ, công khai',
    'Đưa vào .gitignore trước khi push',
    'Từ chối và giải thích rằng khu vực này chỉ dành cho nhân viên có thẩm quyền',
    'Thông tin mật của dự án có thể bị lộ và đánh cắp',
    'Khóa ngay máy tính lại.',
    'Tài sản con người, tài sản thông tin, tài sản phần mềm, tài sản vật lý, tài sản dịch vụ',
    'Để tránh lộ thông tin quan trọng cho người không có thẩm quyền.',
    'Tất cả đáp án đều đúng',
    'Mất uy tín, hình ảnh của công ty không bị ảnh hưởng',
    'Cần có ý thức bảo mật thông tin lương của bản thân',
    'Tính bí mật, tính toàn vẹn, tính sẵn sàng',
    'Toiyeulaptrinh@123',
    'Thông tin là một loại tài sản cũng như các tài sản khác đều có giá trị đối với một tổ chức và cần được bảo vệ thích hợp.',
    'CTO, DD, Vice DD',
    'Đưa contact của C&B để đồng nghiệp liên hệ thắc mắc về phiếu lương của họ',
    '41',
    'Từ chối và khuyên đồng nghiệp liên hệ với bộ phận IT để có quyền truy cập chính thức.',
    'Chỉ sử dụng đúng với mục đích công việc, không truy cập vào các thông tin khác',
    'Khu vực làm việc riêng, tuân thủ các quy định riêng',
    'Chỉ những cá nhân được phép truy cập và phải ký vào bản cam kết bảo mật',
    'Sử dụng để tạo các template, quy trình phục vụ cho công ty',
    'Chỉ sử dụng email công ty cung cấp để phục vụ mục đích công việc',
    'Liên lạc với bộ phận IT để xác nhận và cảnh báo về trường hợp email giả mạo',
    'Cảnh cáo khách về rủi ro của mã QR không rõ nguồn gốc và liên hệ với bộ phận IT',
    'Gửi mail tới người đó và CC tới quản lý',
    'An toàn thông tin và dữ liệu của Công ty',
    'Thông báo với quản lý dự án/quản lý trực tiếp để sử dụng tài khoản khác để gửi mail cho Khách hàng',
    'Sử dụng máy ảo và đánh giá source code cẩn thận',
    'Ngắt kết nối mạng và thông báo với bộ phận IT ngay lập tức để tránh virus lây lan',
    'Tạo báo cáo đánh giá DAR để lựa chọn mã/thư viện mã nguồn mở phù hợp',
  ];
  const buttons = document.querySelectorAll('button[role="checkbox"]');
  buttons.forEach((button) => {
    // @ts-ignore
    const label = button.nextElementSibling.nextElementSibling;
    // @ts-ignore
    if (labels.includes(label.textContent.trim())) {
      // @ts-ignore
      button.click();
    }
  });
  const submitButton = document.querySelector('.flex.gap-4 button[disabled]');
  // @ts-ignore
  submitButton.removeAttribute('disabled');
  // @ts-ignore
  submitButton.click();
})();
