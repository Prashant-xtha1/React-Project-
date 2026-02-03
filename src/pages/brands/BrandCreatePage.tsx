import { useForm } from "react-hook-form";
import { TableHeader } from "../../components/ui/TableHeader";
import { useAuth } from "../../hook/auth";
import { BrandDTO, type IBrandCreateData } from "./brand.contract";
import { FormLabel } from "../../components/form/FormLabel";
import { FileInput, FormInputControl, FormSelectInput } from "../../components/form/FormInput";
import { FormCancelButton, FormSubmitButton } from "../../components/form/FormAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import axiosInstance from "../../config/axios.config";
import { useNavigate } from "react-router";

export default function BrandCreatePage() {
  const { loggedInUser } = useAuth();
  const {control, handleSubmit, formState: {errors, isSubmitting}} = useForm<IBrandCreateData>({
    defaultValues: {
      name: "",
      status: "",
      logo: {} as File
    },
    resolver: zodResolver(BrandDTO)
  })

  const navigate = useNavigate()

  const submitHandler = async (data: IBrandCreateData) => {
    try {
      await axiosInstance.post('/brand', data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      toast.success("Brand Created Successfully");
      navigate(`/${loggedInUser?.role}/brands`)
    } catch {
      toast.error("Brand cannot be created a this moment...");
      
    }
  }

  return(
    <section className="p-6">
      <TableHeader title="Brand Create Page" showSearch={false} btnTxt="<- Go Back" btnUrl={`/${loggedInUser?.role}/brands`} />
      <div className="bg-white rounded-xl shadow-lg p-6">
        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4 text-gray-800" >

          <div className="flex items-center">
            <FormLabel htmlFor="title">Name:</FormLabel>
            <div className="w-3/4">
              <FormInputControl 
                control={control}
                name="name"
                type="text"
                placeholder="Enter Brand Title here..."
                errMsg={errors?.name?.message} />
            </div>
          </div>

          <div className="flex items-center">
            <FormLabel htmlFor="status">Status:</FormLabel>
            <div className="w-3/4">
              <FormSelectInput
                name="status"
                control={control}
                errMsg={errors?.status?.message}
                options={[
                  {label: "Published", value: 'active'},
                  {label: "Un-Published", value: 'inactive'}
                ]}
              />
            </div>
          </div>

          <div className="flex items-center">
            <FormLabel htmlFor="image">Logo:</FormLabel>
            <div className="w-3/4">
              <FileInput 
                name="logo"
                control={control}
                errMsg={errors?.logo?.message}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full justify-end ">
            <div className="w-3/4 flex gap-3">
              <FormCancelButton disabled={isSubmitting} label="Cancel" />
              <FormSubmitButton disabled={isSubmitting} label="Submit" />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}