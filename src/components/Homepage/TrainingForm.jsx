"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { studentSchema, professionSchema } from "@/schemas/trainingSchemas";
import { InputField } from "@/components/shared/FormHelper";

const TrainingForm = ({ inputStyle, labelStyle }) => {
  const [trainingType, setTrainingType] = useState("");
  const [loading, setLoading] = useState(false);

  const studentForm = useForm({
    resolver: zodResolver(studentSchema),
    mode: "onBlur",
  });

  const professionForm = useForm({
    resolver: zodResolver(professionSchema),
    mode: "onBlur",
  });

  const onStudentSubmit = async (data) => {
    setLoading(true);

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (data[key]) formData.append(key, data[key]);
    });
    formData.append("access_key", "5c6f388a-f4e7-4b8d-862a-b5e4b9cae663");
    formData.append("type", "Student Training");
    formData.append("subject", "New Student Training Form Submitted");
    formData.append("from_name", "WeCons - Student Training");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Form submitted successfully", {
          style: {
            background: "#22c55e",
            color: "white",
          },
        });
        studentForm.reset();
      } else {
        toast.error("Failed to submit form", {
          style: {
            background: "#ef4444",
            color: "white",
          },
        });
      }
    } catch (error) {
      toast.error("Something went wrong", {
        style: {
          background: "#ef4444",
          color: "white",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const onProfessionSubmit = async (data) => {
    setLoading(true);

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (data[key]) formData.append(key, data[key]);
    });
    formData.append("access_key", "5c6f388a-f4e7-4b8d-862a-b5e4b9cae663");
    formData.append("type", "Professional Training");
    formData.append("subject", "New Professional Training Form Submitted");
    formData.append("from_name", "WeCons - Professional Training");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Form submitted successfully");
        professionForm.reset();
      } else {
        toast.error("Failed to submit form");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-5">
        <label className={labelStyle}>Student / Profession</label>
        <select
          className={inputStyle}
          value={trainingType}
          onChange={(e) => setTrainingType(e.target.value)}
        >
          <option value="">Select</option>
          <option value="student">Student</option>
          <option value="profession">Profession</option>
        </select>
      </div>

      {trainingType === "student" && (
        <form
          className="space-y-5"
          onSubmit={studentForm.handleSubmit(onStudentSubmit)}
        >
          <InputField
            label="Name"
            name="name"
            form={studentForm}
            inputStyle={inputStyle}
            labelStyle={labelStyle}
            required
          />
          <InputField
            label="Mobile"
            name="mobile"
            type="tel"
            form={studentForm}
            inputStyle={inputStyle}
            labelStyle={labelStyle}
            required
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            form={studentForm}
            inputStyle={inputStyle}
            labelStyle={labelStyle}
            required
          />
          <InputField
            label="Department"
            name="department"
            form={studentForm}
            inputStyle={inputStyle}
            labelStyle={labelStyle}
          />
          <InputField
            label="Institute"
            name="institute"
            form={studentForm}
            inputStyle={inputStyle}
            labelStyle={labelStyle}
          />
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="py-[15px] border-0 shadow-none bg-[#8acbcf] rounded-[25px] text-[#12383d] md:text-[16px] text-[14px] font-bold w-full disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      )}

      {trainingType === "profession" && (
        <form
          className="space-y-5"
          onSubmit={professionForm.handleSubmit(onProfessionSubmit)}
        >
          <InputField
            label="Name"
            name="name"
            form={professionForm}
            inputStyle={inputStyle}
            labelStyle={labelStyle}
            required
          />
          <InputField
            label="Mobile"
            name="mobile"
            type="tel"
            form={professionForm}
            inputStyle={inputStyle}
            labelStyle={labelStyle}
            required
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            form={professionForm}
            inputStyle={inputStyle}
            labelStyle={labelStyle}
            required
          />
          <InputField
            label="Designation"
            name="designation"
            form={professionForm}
            inputStyle={inputStyle}
            labelStyle={labelStyle}
          />
          <InputField
            label="Department"
            name="department"
            form={professionForm}
            inputStyle={inputStyle}
            labelStyle={labelStyle}
          />
          <InputField
            label="Company Name"
            name="company_name"
            form={professionForm}
            inputStyle={inputStyle}
            labelStyle={labelStyle}
          />
          <InputField
            label="Company Address"
            name="company_address"
            form={professionForm}
            inputStyle={inputStyle}
            labelStyle={labelStyle}
          />
          <InputField
            label="Company Website"
            name="company_website"
            type="url"
            form={professionForm}
            inputStyle={inputStyle}
            labelStyle={labelStyle}
          />
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="py-[15px] border-0 shadow-none bg-[#8acbcf] rounded-[25px] text-[#12383d] md:text-[16px] text-[14px] font-bold w-full disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TrainingForm;
