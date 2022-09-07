import Upload from "../upload-image/Upload";
const TolovRejasi = () =>{
  return(
    <div className='py-14'>
          <div className="container mx-auto flex items-start justify-around">
              <div>
                  <h1 className="text-2xl font-semibold mb-3">To'lov rejasi (Рассрочка)</h1>
                  <p className="text-sm w-[400px] mb-16">Onlayn-savdodan maxsus to'lov rejasi! <br /> Orzularingizni ertangi kunga qoldirmang! <br /> Hozir xarid qiling, keyinroq katta chegirmalar bilan to‘lang!</p>
                  <h3 className="text-sm font-semibold mb-8">Bo'lib bo'lib sotib oling</h3>
                  <ul className="list-disc pl-6 font-medium mb-2">
                      <li>3 oy</li>
                      <li>6 oy</li>
                      <li>9 oy</li>
                      <li>12 oy</li>
                  </ul>
                  <p className="text-xs text-[#939EB4]">Faqat dastlabki to’lov va pasport talab qilinadi.</p>
              </div>
              <form className="p-8 ml-25 bg-white rounded-3xl  shadow-lg w-[40%] flex flex-col gap-4">
                  <input type="text" className="p-4 w-[100%] border-[1px] border-solid border-[#939EB4] rounded-lg outline-none text-[#939eb4] placeholder:text-[#939eb4]tolov__input tolov_1" placeholder='F.I.SH'/>
                  <input type="text" className="p-4 w-[100%] border-[1px] border-solid border-[#939EB4] rounded-lg outline-none text-[#939eb4] placeholder:text-[#939eb4]" placeholder='Telefon raqam'/>
                  <select name="" id="" className='p-4 w-[100%] border-[1px] border-solid border-[#939EB4] rounded-lg outline-none text-[#939eb4] placeholder:text-[#939eb4]'>
                      <option value="region">Region</option>
                      <option value="Andijon">Andijon</option>
                      <option value="Fargona">Farg'ona</option>
                      <option value="Namangan">Namangan</option>
                  </select>
                  <div className="upload__image">
                      <Upload/>
                  </div>
                  <input type="text" className="p-4 w-[100%] border-[1px] border-solid border-[#939EB4] rounded-lg outline-none text-[#939eb4] placeholder:text-[#939eb4]" placeholder='Matn'/>
                  <button className="p-4 w-[100%] mt-5 bg-[#2C3E50] border-[1px] border-solid border-[#2C3E50] rounded-lg outline-none text-white hover:text-[#2c3e50] hover:bg-transparent duration-200 ease-linear">Yuborish</button>
              </form>
          </div>
    </div>
  )
}

export default TolovRejasi;