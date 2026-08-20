"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { consultancySchema } from "@/schemas/consultancySchema";
import { InputField } from "@/components/shared/FormHelper";

const ConsultancyForm = ({ inputStyle, labelStyle }) => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(consultancySchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setLoading(true);

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (data[key]) formData.append(key, data[key]);
    });
    formData.append("access_key", "5c6f388a-f4e7-4b8d-862a-b5e4b9cae663");
    formData.append("type", "Consultancy Request");
    formData.append("subject", "New Consultancy Request Form Submitted");
    formData.append("from_name", "WeCons - Consultancy");

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
        form.reset();
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

  return (
    <>
      <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        <InputField
          label="Name"
          name="name"
          form={form}
          inputStyle={inputStyle}
          labelStyle={labelStyle}
          required
        />
        <InputField
          label="Mobile"
          name="mobile"
          type="tel"
          form={form}
          inputStyle={inputStyle}
          labelStyle={labelStyle}
          required
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          form={form}
          inputStyle={inputStyle}
          labelStyle={labelStyle}
          required
        />
        <InputField
          label="Designation"
          name="designation"
          form={form}
          inputStyle={inputStyle}
          labelStyle={labelStyle}
        />
        <InputField
          label="Department"
          name="department"
          form={form}
          inputStyle={inputStyle}
          labelStyle={labelStyle}
        />
        <InputField
          label="Company Name"
          name="company_name"
          form={form}
          inputStyle={inputStyle}
          labelStyle={labelStyle}
        />
        <InputField
          label="Company Address"
          name="company_address"
          form={form}
          inputStyle={inputStyle}
          labelStyle={labelStyle}
        />
        <InputField
          label="Company Website"
          name="company_website"
          type="url"
          form={form}
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
    </>
  );
};

export default ConsultancyForm;
