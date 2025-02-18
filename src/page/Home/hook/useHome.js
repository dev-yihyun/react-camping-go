import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useHome = () => {
    const userId = localStorage.getItem("userId");
    const [campInfo, setCampInfo] = useState();
    const navigate = useNavigate();

    const [totalData, setTotalData] = useState(0);

    const numOfRows = 10;
    const pageButtonNumber = 5;
    const savedPageGroup = sessionStorage.getItem("currentPageGroup");
    const [currentPageGroup, setCurrentPageGroup] = useState(
        savedPageGroup ? Number(savedPageGroup) : 0
    );

    const totalPage = Math.ceil(totalData / numOfRows);

    const savedPage = sessionStorage.getItem("currentPage");
    const pageNo = useRef(savedPage ? Number(savedPage) : 1);

    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getData = async () => {
        setLoading(true);
        const response = await fetch(
            `https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=${numOfRows}&pageNo=${pageNo.current}&MobileOS=ETC&MobileApp=WebTest&serviceKey=${process.env.REACT_APP_API_KEY}&_type=JSON`,
            {
                method: "GET",
            }
        );

        if (!response.ok) {
            console.error(`오류: ${response.status}`);
            setLoading(false);
            setIsError(true);
            throw new Error("서버 요청 실패");
        }
        return response.json();
    };
    const fetchDataSuccess = (data) => {
        setCampInfo(data?.response?.body?.items?.item);
        setTotalData(data?.response?.body?.totalCount);
        setLoading(false);
        setIsError(false);
    };
    const fetchDataError = (error) => {
        console.error(`오류: ${error}`);
        setLoading(false);
        setIsError(true);
    };
    const fetchDataMutation = useMutation({
        mutationFn: getData,
        onSuccess: fetchDataSuccess,
        onError: fetchDataError,
    });

    const fetchData = () => {
        fetchDataMutation.mutate();
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!userId) {
        alert("로그인 후 이용 가능합니다.");
        navigate("/");
    }

    const setPageGroup = (newGroup) => {
        setCurrentPageGroup(newGroup);
        sessionStorage.setItem("currentPageGroup", newGroup);
    };

    const onGoPage = (index) => {
        pageNo.current = currentPageGroup * pageButtonNumber + index + 1;
        sessionStorage.setItem("currentPage", pageNo.current);
        fetchData();
    };

    const onPrevPage = () => {
        if (currentPageGroup > 0) {
            setPageGroup(currentPageGroup - 1);
            pageNo.current = (currentPageGroup - 1) * pageButtonNumber + 1;
            sessionStorage.setItem("currentPage", pageNo.current);
            fetchData();
        }
    };
    const onPrev = () => {
        if (pageNo.current > 1) {
            pageNo.current -= 1;
            sessionStorage.setItem("currentPage", pageNo.current);
            fetchData();
            if (pageNo.current <= currentPageGroup * pageButtonNumber) {
                setPageGroup(currentPageGroup - 1);
            }
        }
    };
    const onNext = () => {
        if (pageNo.current < totalPage) {
            pageNo.current += 1;
            sessionStorage.setItem("currentPage", pageNo.current);
            fetchData();
            if (pageNo.current > (currentPageGroup + 1) * pageButtonNumber) {
                setPageGroup(currentPageGroup + 1);
            }
        }
    };
    const onNextPage = () => {
        if (currentPageGroup < totalPage - 1) {
            setPageGroup(currentPageGroup + 1);
            pageNo.current = (currentPageGroup + 1) * pageButtonNumber + 1;
            sessionStorage.setItem("currentPage", pageNo.current);
            fetchData();
        }
    };

    return {
        userId,
        loading,
        isError,
        campInfo,
        pageButtonNumber,
        totalPage,
        currentPageGroup,
        pageNo,
        onPrev,
        onPrevPage,
        onGoPage,
        onNext,
        onNextPage,
    };
};
