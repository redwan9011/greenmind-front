import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxioPublic";
import Swal from "sweetalert2";

const imageBBKey = import.meta.env.VITE_IMAGEBB
const imageBBApi = `https://api.imgbb.com/1/upload?key=${imageBBKey}`
const AddProduct = () => {
const axiospublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = async(data)=> {
        const imageFile = { image: data.photo[0] }

        const res = await axiospublic.post(imageBBApi, imageFile, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        //    console.log(res.data.data.display_url );
        const image = res.data.data.display_url
        // console.log(image);
       
        const product = {
            photo : image,
            name : data.name,
            price: data.price,
            specifications: data.specifications,
            availability: data.availability,
            description: data.description,
            category: data.category,
            brand: data.brand

        }
        axiospublic.post( '/product' , product)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire("Add product Succesfully");
            }
            
        })
      }
     
    return (
        <div className="mb-10">
          <h1 className="my-8 text-3xl font-bold text-center">Add your Product</h1>
            <form  onSubmit={handleSubmit(onSubmit)} className="space-y-3 bg-slate-300 p-10">

        <div className="grid grid-cols-2 gap-4 ">
        <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input type="text" {...register("name"  , { required: true })} name='name' placeholder="product name" className="input " />
              {errors.name && <span className='text-red-500 mt-1'>This field is required</span>}
            </div>
            
          

            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="text" {...register("price"  , { required: true })} name='price' placeholder="price" className="input " />
              {errors.name && <span className='text-red-500 mt-1'>This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Specifications</span>
              </label>
              <input type="text" {...register("specifications"  , { required: true })} name='specifications' placeholder="Specifications" className="input " />
              {errors.name && <span className='text-red-500 mt-1'>This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Availability</span>
              </label>
              <input type="text" {...register("availability"  , { required: true })} name='availability' placeholder="availability" className="input " />
              {errors.name && <span className='text-red-500 mt-1'>This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <input type="text" {...register("brand"  , { required: true })} name='brand' placeholder="brand" className="input " />
              {errors.name && <span className='text-red-500 mt-1'>This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
             
              <textarea {...register("description"  , { required: true })} name='description' placeholder="description" className="textarea textarea-bordered"></textarea>
              {errors.name && <span className='text-red-500 mt-1'>This field is required</span>}
            </div>

            <div className='w-full '>
                  <label className="block mb-1 font-semibold"><span className='text-red-700 pr-2'>*</span>Select category</label>
                  <select {...register("category")} name="category" className="input border-none rounded-md w-full cursor-pointer">

                    <option value='Home'>Home</option>
                    <option value='Electronics'>Electronics</option>
                    <option value='Fashion'>Fashion</option>
                

                  </select>
                </div>

                <div className="w-full">
                  <label className="block mb-1">
                    <span className="font-semibold"><span className='text-red-700 pr-2'>*</span>Product Photo</span>
                  </label>
                  <input type="file" {...register("photo", { required: true })} name='photo' placeholder="photo url" className="file-input file-input-bordered w-full max-w-xs" />

                  {errors.photo && <span className='text-red-500 mt-1'>This field is required</span>}
                </div>
           
        </div>
        
            <div className="form-control pt-4">
                <input type="submit" value="Add Product" className='bg-black cursor-pointer text-white py-3 rounded-md font-semibold' />
            </div>
            </form>
        </div>
    );
};

export default AddProduct;