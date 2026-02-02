import { useForm } from "react-hook-form";
import { TableHeader } from "../../components/ui/TableHeader";
import { useAuth } from "../../hook/auth";
import { BannerEditDTO, type IBannerEditData } from "./banner.contract";
import { FormLabel } from "../../components/form/FormLabel";
import { FileInput, FormInputControl, FormSelectInput } from "../../components/form/FormInput";
import { FormCancelButton, FormSubmitButton } from "../../components/form/FormAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import axiosInstance from "../../config/axios.config";
import { useNavigate } from "react-router";

export default function BannerEditPage() {
  const { loggedInUser } = useAuth();
  const {control, handleSubmit, formState: {errors, isSubmitting}} = useForm<IBannerEditData>({
    defaultValues: {
      title: "",
      url: "",
      status: "",
      image: null
    },
    resolver: zodResolver(BannerEditDTO)
  })

  const navigate = useNavigate()

  const submitHandler = async (data: IBannerEditData) => {
    try {
      // await axiosInstance.post('/banner', data, {
      //   headers: {
      //     "Content-Type": "multipart/form-data"
      //   }
      // })
      // toast.success("Banner Edited Successfully");
      // navigate(`/${loggedInUser?.role}/banners`)
    } catch {
      toast.error("Banner cannot be edited a this moment...");
      
    }
  }

  return(
    <section className="p-6">
      <TableHeader title="Banner Edit Page" showSearch={false} btnTxt="<- Go Back" btnUrl={`/${loggedInUser?.role}/banners`} />
      <div className="bg-white rounded-xl shadow-lg p-6">
        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4 text-gray-800" >

          <div className="flex items-center">
            <FormLabel htmlFor="title">Title:</FormLabel>
            <div className="w-3/4">
              <FormInputControl 
                control={control}
                name="title"
                type="text"
                placeholder="Enter Banner Title here..."
                errMsg={errors?.title?.message} />
            </div>
          </div>

          <div className="flex items-center">
            <FormLabel htmlFor="url">Url:</FormLabel>
            <div className="w-3/4">
              <FormInputControl 
                control={control}
                name="url"
                type="url"
                placeholder="Enter Banner Link here..."
                errMsg={errors?.url?.message} />
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
            <FormLabel htmlFor="image">Image:</FormLabel>
            <div className="w-3/4">
              <FileInput 
                name="image"
                control={control}
                errMsg={errors?.image?.message}
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