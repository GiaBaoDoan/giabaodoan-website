import CareerCard from "@/components/carrers/CarrerCard";
import { Briefcase, GraduationCap, UsersRound } from "lucide-react";

const CarrerList = () => {
  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CareerCard
          icon={<UsersRound className="w-6 h-6" />}
          title="Collaborator"
          subtitle="Đối tác chiến lược"
          description="Trở thành đối tác chiến lược trong các dự án lớn với mức hoa hồng hấp dẫn và cơ hội phát triển dài hạn"
          tag="Partnership"
          location="Remote/Hybrid"
          highlights={[
            "Hoa hồng 15-30%",
            "Hỗ trợ marketing",
            "Dự án dài hạn",
            "Đào tạo chuyên sâu",
          ]}
          status="popular"
          href="#"
        />

        <CareerCard
          icon={<Briefcase className="w-6 h-6" />}
          title="Freelancer"
          subtitle="Chuyên gia tự do"
          description="Làm việc linh hoạt với các dự án đa dạng, phát triển kỹ năng và xây dựng portfolio chuyên nghiệp"
          tag="Contract"
          location="Remote"
          highlights={[
            "Linh hoạt thời gian",
            "Mức lương cạnh tranh",
            "Dự án đa dạng",
            "Skill development",
          ]}
          status="popular"
          href="#"
        />

        <CareerCard
          icon={<GraduationCap className="w-6 h-6" />}
          title="Thực Tập Sinh"
          subtitle="IT & Marketing"
          description="Chương trình thực tập chuyên nghiệp cho sinh viên IT và Marketing với mentor 1-1 và cơ hội full-time"
          tag="Internship"
          location="Office/Remote"
          highlights={[
            "Mentor 1-1",
            "Chứng chỉ hoàn thành",
            "Dự án thực tế",
            "Cơ hội full-time",
          ]}
          status="new"
          href="#"
        />
      </div>
    </div>
  );
};

export default CarrerList;
