# Giới thiệu về Firebase

## Agenda

- Firebase là gì
- Giới thiệu các dịch cụ của Firebase
- Demo sử dụng Firebase để hosting webapp

### Firebase là gì

Firebase là platform do Google cung cấp, nhằm hỗ trợ việc tạo ra các web application, mobile application với chất lượng cao.

Với việc sử dụng Firebase, developer có thể tập trung vào việc phát triển application mà không cần lo về việc sản phẩm của mình sẽ hoạt động và được quản lý thể nào ở phía Backend.

Khái niệm Backend nhắc tới trong câu trên để chỉ việc xử lý và lưu trữ dữ liệu trong service, ở vùng “phía sau” mà người dùng không nhìn thấy.

Firebase là một trong những BaaS (Backend as a service).

Serverless architecture được chú ý như một giải pháp đáp ứng yêu cầu release một dịch vụ trong thời gian ngắn, trong bối cảnh đó, BaaS ra mắt người dùng.

BaaS hướng đến thiết bị chủ yếu là mobile nên còn được gọi với một tên gọi khác là MBaaS.

Các thuật ngữ liên quan: BaaS, SaaS, PaaS, IaaS

### Giới thiệu các dịch cụ của Firebase

#### FIREBASE ANALYTICS

Bằng Firebase Analytics, ta có thể phân tích sự tương tác của người dùng với ứng dụng cũng như tình trạng sử dụng ứng dụng đó.

Firebase có sẵn chức năng tạo report. Nhìn report ấy, chúng ta có thể nắm được một cách rõ ràng hoạt động của người dùng.

Bằng việc cài đặt SDK (Software Development Kit, cụ thể hơn với trường hợp này là FirebaseAnalytics.unitypackage), chức năng phân tích các access trở nên khả dụng. Khi đó, ta không chỉ xem được hoạt động của người dùng mà còn có thể biết được thông tin về thuộc tính hoạt động hay hiệu quả quảng cáo, tình trạng trả phí, v.v.

#### FIREBASE HOSTING

Firebase Hosting là dịch vụ deploy trang web và web app chỉ bằng những thao tác đơn giản.

Khi tạo một app, nhiều trường hợp nhà phát triển sẽ muốn xử lý một số chức năng trên trang web.

Ví dụ tiêu biểu nhất là trường hợp của Điều khoản dịch vụ (Terms of service) hoặc Chính sách bảo mật (Privacy policy), ta thường sẽ sử dụng trang web có sẵn để hiển thị chúng thay vì tạo riêng một trang trong application.

Khi sử dụng Firebase Hosting, ta có thể sử dụng web page cho ứng dụng iOS và Android của mình.

Với các ưu điểm thao tác nhanh, đơn giản, tính an toàn cao, Firebase hosting giúp các nhà phát triển tạo lập ứng dụng một cách đơn giản hơn so với việc tự tạo hay thuê server thực.

#### FIREBASE CLOUD MESSAGING

Với Firebase Cloud Messaging, ta có thể gửi nhận tin nhắn miễn phí. Khái niệm “Gửi message” ở đây còn dùng để chỉ việc push thông báo.

Khi tên nhắn mới được gửi tới, người dùng có thể nhận được thông báo. Ví dụ, với trường hợp người dùng sử dụng iPhone, khi có mail hay thông báo từ application, ở góc trên bên phải icon của app đó sẽ xuất hiện dấu tròn nhỏ màu đỏ, hay tiện lợi hơn, trong dấu tròn đỏ ấy sẽ hiển thị số lượng thông báo, tin nhắn mới.

Thêm vào đó, ta cũng có thể thiết lập để tin nhắn chỉ gửi tới những đối tượng mà ta mong muốn, ví dụ như việc gửi thông báo yêu cầu viết feedback sản phẩm cho những khách hàng thường xuyên sử dụng sản phẩm.

#### FIREBASE AUTHENTICATION

Firebase Authentication là chức năng dùng để xác thực người dùng bằng Password, số điện thoại hoặc tài khoản Google, Facebook hay Twitter, v.v.

Việc xác thực người dùng là một chức năng quan trọng trong phát triển ứng dụng. Tuy nhiên, việc đối ứng với nhiều phương pháp xác thực khác nhau sẽ tốn nhiều thời gian và công sức.

Firebase Authentication giúp thực hiện việc chia sẻ ID giữa các ứng dụng, giúp người dùng dễ dàng tiếp cận sản phẩm hơn. Vì thế, nó là một chức năng rất quý.

#### FIREBASE STORAGE

Firebase Cloud Storage hỗ trợ việc quản lý, chia sẻ các content người dùng upload lên như ảnh, video; cũng như sử dụng những tài nguyên ấy cho ứng dụng của bạn.

Data được lưu trữ trong Google Cloud Storage buckets, và có thể được access từ server.

Đây cũng là một chức năng quan trọng và tiện lợi cho việc phát triển dịch vụ.

#### FIREBASE TEST LAB

Firebase Test Lab được sử dụng để test ứng dụng trên nền tẳng cloud.

Bằng cách sử dụng Test Lab, ta có thể test hoạt động của ứng dụng trên nhiều thiết bị đa dạng, nhờ đó có thể xác minh được app sẽ chạy thế nào trên thiết bị thực của người dùng.

#### FIREBASE CRASHLYTICS

Firebase Crashlytics là công cụ báo cáo các hoạt động bất thường (crash) phát sinh trên ứng dụng theo thời gian thực (real time).

Tool giúp ích cho việc truy vết các vấn đề bất thường hạ thấp chất lượng sản phẩm, nhờ đó ta có thể đặt thứ tự ưu tiên để có phương hướng xử lý thích hợp.

Công cụ này còn hỗ trợ việc chia nhóm các bất thường phát sinh, truy xuất tình trạng có liên quan đến crash ấy, giúp tiết kiệm thời gian xử lý sự cố.

#### FIREBASE FUNCTIONS

Cloud Functions Firebase cho phép bạn chạy code backend tự động để phản hồi tới các sự kiện được kích hoạt bởi tính năng của Firebase và HTTPS request. Code của bạn được lưu trữ trong mây của Google và chạy trong một môi trường được quản lý. Bạn không cần quản lý và mở rộng các máy chủ.

### Demo sử dụng Firebase để hosting webapp
