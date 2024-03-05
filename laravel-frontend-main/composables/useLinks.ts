import axios from "axios";
import { Ref } from "nuxt/dist/app/compat/capi";
import { RawLink, Link, PaginateResponse } from "~~/types";
interface UseLinksOptions {
    queries?: Ref<Record<string, string | number>>;
  }
  
export const useLinks = ({queries = ref({})}:UseLinksOptions = {}) => {
    const slug = "links"
    const paginatedData = ref<PaginateResponse<Link>>();
    const singleLink = ref<Link>();

    function adapter(link: RawLink): Link {
        return {
          ...link,
          created_at: new Date(link.created_at),
          updated_at: new Date(link.updated_at),
        };
    }

    //CRUD
    //get all
    async function index(qs?: Record<string, string | number>){
        qs = {...queries.value, ...qs};
        // @ts-expect-error page is number and that's ok
        const query = new URLSearchParams(qs).toString();
        const {data} = await axios.get<PaginateResponse<RawLink>>(
            `/api/${slug}?${query}`
        );
        return (paginatedData.value = {
            ...data,
            data:data.data.map((link)=>adapter(link))
        }) 
    }
    //get one by id
    async function find(id:string | number){
        const{data}=await axios.get<RawLink>(`/api/${slug}/${id}`);
        return (singleLink.value = adapter(data));
    }
    //create a new link
    async function create(payload:Partial<Link>){
        const {data} = await axios.post<RawLink>(`/api/${slug}/`,payload)
        return (singleLink.value = adapter(data))
    }
    //update existing link
    async function update(id:string | number, payload:Partial<Link>){
        const {data} = await axios.put<RawLink>(`/api/${slug}/${id}`, payload)
        return (singleLink.value = adapter(data))
    }
    //delete an existing link
    async function destroy(id: string | number){
        await axios.delete(`/api/${slug}/${id}`);
    }

    return{
        find,
        create,
        update,
        destroy,
        index,
        data:paginatedData,
        link:singleLink,
    }

}