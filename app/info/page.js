"use client";
import React, { useState } from "react";
import Container from "../components/Container";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setInfo } from "@/lib/slices/infoSlice";

const Info = () => {
  const [fadeOut, setfadeOut] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [info, setinfo] = useState({
    name: "",
    gender: "",
    age: 0,
  });
  const [checkName, setcheckName] = useState(false);
  const [checkGender, setcheckGender] = useState(false);
  const [checkAge, setcheckAge] = useState(false);

  const inputInfo = (e, field) => {
    const value =
      field === "age" ? parseInt(e.target.value, 10) : e.target.value;
    if (field === "name") {
      setcheckName(false);
    } else if (field === "gender") {
      setcheckGender(false);
    } else if (field === "age") {
      setcheckAge(false);
    }
    setinfo((prevInfo) => ({ ...prevInfo, [field]: value }));
  };

  const saveInfo = () => {
    if (info.name && info.gender && info.age) {
      setfadeOut(true);
      setTimeout(() => {
        dispatch(setInfo(info));
        router.push("/story/s1");
      }, 1000);
    } else {
      if (!info.name) {
        setcheckName(true);
      }
      if(!info.gender){
        setcheckGender(true)
      }
      if(!info.age){
        setcheckAge(true)
      }
    }
  };

  return (
    <Container
      className={`flex flex-col items-center animate__animated ${
        fadeOut ? "animate__fadeOut" : " animate__fadeIn animate__delay-1s"
      }`}
    >
      <p className="mt-40 font-light text-center">
        ก่อนจะเดินทางไปด้วยกัน <br />{" "}
        <span className="font-semibold">ขอทำความรู้จักคุณหน่อย</span>
      </p>
      <form className="mt-7 flex flex-col gap-2 max-w-[250px] w-full relative">
        <input
          required
          type="text"
          value={info.name}
          onChange={(e) => inputInfo(e, "name")}
          placeholder="ชื่อเล่น"
          className={`outline-none transition-all h-10 w-full px-4 py-2 border ${
            checkName ? "border-red-400" : "border-[#E0E0E0]"
          } rounded-lg placeholder-[#828282]`}
        />
        <div
          className={`outline-none transition-all h-10 w-full border ${
            checkGender ? "border-red-400" : "border-[#E0E0E0]"
          } rounded-lg placeholder-[#828282]`}
        >
          <select
            className="outline-none h-[38px] pl-[13px] rounded-lg text-[#828282] w-full"
            id="custom-select"
            required
            value={info.gender}
            onChange={(e) => inputInfo(e, "gender")}
            style={{
              fontFamily: `Kanit`,
              backgroundPositionX: "10px",
            }}
          >
            <option value="" disabled selected className="text-[#828282]">
              เพศ
            </option>
            <option value="male" key="male">
              ชาย
            </option>
            <option value="female" key="female">
              หญิง
            </option>
            <option value="other" key="other">
              อื่นๆ
            </option>
          </select>
        </div>

        <input
          type="number"
          required
          value={info.age || ""}
          onChange={(e) => inputInfo(e, "age")}
          placeholder="อายุ"
          className={`outline-none transition-all h-10 w-full px-4 py-2 border ${
            checkAge ? "border-red-400" : "border-[#E0E0E0]"
          } rounded-lg placeholder-[#828282]`}
        />
      </form>
      <button
        onClick={saveInfo}
        className={`mt-[60px] px-4 py-2 bg-green-200 rounded-lg text-white font-medium animate__animated`}
      >
        เดินทางต่อ
      </button>
    </Container>
  );
};

export default Info;
