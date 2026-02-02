import { useForm } from "react-hook-form";
import { TableHeader } from "../../components/ui/TableHeader";
import { useAuth } from "../../hook/auth";
import { BrandEditDTO, type IBrandEditData } from "./brand.contract";
import { FormLabel } from "../../components/form/FormLabel";
import { FileInput, FormInputControl, FormSelectInput } from "../../components/form/FormInput";
import { FormCancelButton, FormSubmitButton } from "../../components/form/FormAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import axiosInstance from "../../config/axios.config";
import { useNavigate, useParams } from "react-router";
import { useCallback, useEffect, useState } from "react";

export default function BrandEditPage() {
  const { loggedInUser } = useAuth();
  const params = useParams()
  const [ loading, setLoading ] = useState<boolean>(true);

  const {control, handleSubmit, setValue, formState: {errors, isSubmitting}} = useForm<IBrandEditData>({
    defaultValues: {
      title: "",
      url: "",
      status: "",
      image: null
    },
    resolver: zodResolver(BrandEditDTO)
  })

  const navigate = useNavigate()

  const submitHandler = async (data: IBrandEditData) => {
    try {
      await axiosInstance.put('/brand/' + params.id, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      toast.success("Brand Edited Successfully");
      navigate(`/${loggedInUser?.role}/brands`)
    } catch {
      toast.error("Brand cannot be edited at this moment...");
      
    }
  }

  const getBrandDetail = useCallback(async() => {
    try {
      const response = await axiosInstance.get("/brand/" + params.id)
      setValue("title", response.data.title);
      setValue("url", response.data.url)
      setValue("status", response.data.status);
    } catch {
      toast.error("Brand details cannot be fetched at this moment...")
      navigate(`/${loggedInUser?.role}/brands`)
    } finally {
      setLoading(false)
    }
  }, [params])

  useEffect(() => {
    // once component renders, fetch api data and update brand state
    getBrandDetail();
  }, [getBrandDetail]);

  return(
    <section className="p-6">
      <TableHeader title="Brand Edit Page" showSearch={false} btnTxt="<- Go Back" btnUrl={`/${loggedInUser?.role}/brands`} />
      <div className="bg-white rounded-xl shadow-lg p-6">
        {
          loading ? <>Loading...</> : <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4 text-gray-800" >

          <div className="flex items-center">
            <FormLabel htmlFor="title">Title:</FormLabel>
            <div className="w-3/4">
              <FormInputControl 
                control={control}
                name="title"
                type="text"
                placeholder="Enter Brand Title here..."
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
                placeholder="Enter Brand Link here..."
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
        }
      </div>
    </section>
  )
}