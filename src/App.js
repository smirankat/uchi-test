import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Arrow from "./components/Arrow";
import Button from "./components/Button";
import Day from "./components/Day";
import Flex from "./components/Flex";
import Footer from "./components/Footer";
import Form from "./components/Form";
import FormButton from "./components/FormButton";
import Input from "./components/Input";
import InputContent from "./components/InputContent";
import Modal from "./components/Modal";
import Table from "./components/Table";
import TableCell from "./components/TableCell";
import Text from "./components/Text";
import Time from "./components/Time";
import Title from "./components/Title";

const AppWrapper = styled.div`
  max-width: 740px;
  width: 100%;
  position: relative;
  border: 1px solid #ddd;
`;

function App() {
  const DAYS_OF_THE_WEEK = ["M", "T", "W", "T", "F", "S", "S"];
  const DAYS = [];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const today = new Date("2019-03-29");
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [cellValue, setCellValue] = useState("");
  const [selectedTd, setSelectedTd] = useState(null);

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
  }, [date]);

  let daysDay = day - date.getDay() + 1,
    monthDays = new Date(year, month + 1, 0).getDate(),
    monthPrefix = new Date(year, month + 1, 0).getDay(),
    monthMonday = monthDays - monthPrefix + 1,
    prevMonthDays = new Date(year, month, 0).getDate(),
    prevMonthPrefix = new Date(year, month, 0).getDay(),
    prevMonthMonday = prevMonthDays - prevMonthPrefix + 1;

  (function() {
    if (day <= 7 - prevMonthPrefix) {
      for (let i = 1; i <= prevMonthPrefix; i++) {
        DAYS.push(prevMonthMonday++);
      }
      for (let i = 1; i <= 7 - prevMonthPrefix; i++) {
        DAYS.push(i);
      }
    }
    if (day > 7 - prevMonthPrefix && day < monthMonday) {
      if (today.getDay() === 0) {
        let beforeSunday = day - 6;
        for (let i = 1; i <= 7; i++) {
          DAYS.push(beforeSunday++);
        }
      } else {
        for (let i = 1; i <= 7; i++) {
          DAYS.push(daysDay++);
        }
      }
    }
    if (day >= monthMonday) {
      for (let i = 1; i <= monthPrefix; i++) {
        DAYS.push(monthMonday++);
      }
      for (let i = 1; i <= 7 - monthPrefix; i++) {
        DAYS.push(i);
      }
    }
  })();

  // let tdid;
  // let rowid;
  const openModal = () => {
    setShowModal(true);
  };
  const selectClick = (e) => {
    setSelectedTd(e.target);
    setShowDelete(true);
    if (selectedTd) {
      selectedTd.style.backgroundColor = selectedTd.closest(
        "tr"
      ).style.backgroundColor;
    }
    e.target.style.backgroundColor = "#B2B6FC";
    // tdid = e.target.dataset.tdid;
    // rowid = e.target.closest("tr").dataset.rowid;
  };
  const handleFormClick = (e) => {
    e.preventDefault();
    if (selectedTd) {
      selectedTd.textContent = cellValue;
    } else {
      alert("Please,select a time in the table");
    }
    setCellValue("");
    setShowModal(false);
  };
  const deleteContent = () => {
    selectedTd.textContent = "";
    selectedTd.style.backgroundColor = selectedTd.closest(
      "tr"
    ).style.backgroundColor;
    setSelectedTd(null);
    setShowModal(false);
    setShowDelete(false);
  };
  return (
    <Flex justify="center">
      <AppWrapper>
        <Title color={""}>
          Interview Calendar <Button onClick={openModal}>+</Button>
        </Title>
        <Flex borderBottom="1px solid #ddd" borderTop="1px solid #ddd">
          <Flex width="60px" backgroundColor={"#F6F6F6"}></Flex>
          <Flex direction="column" width="100%">
            <Flex backgroundColor={"#F6F6F6"}>
              {DAYS_OF_THE_WEEK.map((d, index) => (
                <Day key={index} size={"14px"}>
                  {d}
                </Day>
              ))}
            </Flex>
            <Flex backgroundColor={"#F6F6F6"}>
              {DAYS.map((d, index) => (
                <Day
                  key={index}
                  lineHeight={"calc(14px + 1vw)"}
                  size={"calc(14px + 1vw)"}
                  isToday={d === date.getDate()}
                  // isSelected={d === day}
                  // onClick={() => setDate(new Date(year, month, d))}
                >
                  <div>{d}</div>
                </Day>
              ))}
            </Flex>
            <Flex backgroundColor={"#F6F6F6"}>
              <Arrow onClick={() => setDate(new Date(year, month - 1, 1))}>
                &#8249;
              </Arrow>
              <Day size={"18px"} width="auto">
                {MONTHS[month]}&nbsp;{year}
              </Day>
              <Arrow onClick={() => setDate(new Date(year, month + 1, 1))}>
                {" "}
                &#8250;
              </Arrow>
            </Flex>
          </Flex>
        </Flex>

        <Flex justify="stretch" borderBottom="1px solid #ddd">
          <Flex direction={"column"}>
            {[...Array(12)].map((x, i) => (
              <Time key={i}>{i === 0 ? "09" : 9 + i}:00</Time>
            ))}
          </Flex>

          <Table>
            <tbody>
              {Array.from({ length: 13 }).map((_, rowIndex) => (
                <tr
                  key={rowIndex}
                  //  data-rowid={rowIndex}
                >
                  {Array.from({ length: 7 }).map((cell, index) => (
                    <TableCell
                      key={index}
                      height={
                        rowIndex === 0 || rowIndex === 12 ? "3.8%" : undefined
                      }
                      backgroundColor={
                        ((rowIndex === 0 && index === 5) ||
                          rowIndex === 4 ||
                          (rowIndex === 7 && index === 3) ||
                          (rowIndex === 9 && index === 4) ||
                          (rowIndex === 12 && index === 1)) &&
                        "#eaebfe"
                      }
                      boxShadow={
                        (rowIndex === 0 &&
                          index === 5 &&
                          "inset 0 -2px 0 2px white") ||
                        (rowIndex === 12 &&
                          index === 1 &&
                          "inset 0 2px 0 2px white")
                      }
                      borderBottom={rowIndex === 12 && "none"}
                      borderRight={index === 6 && "none"}
                      onClick={selectClick}
                      // isSelectedTd={cell === selectedTd}
                      // data-tdid={index}
                    ></TableCell>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Flex>
        <Footer color={"red"}>
          <Button onClick={() => setDate(new Date())} size="calc(14px + 2vw)">
            Today
          </Button>
          {showDelete && (
            <Button onClick={deleteContent} size="calc(14px + 2vw)">
              Delete
            </Button>
          )}
        </Footer>
        {showModal && (
          <Modal onClick={() => setShowModal(false)}>
            <Form onClick={(e) => e.stopPropagation()}>
              <Text size="calc(14px + 2vw)" weight="600">
                https://calendar.com
              </Text>
              <Text>Enter event time:</Text>
              <Text>YYYY-MM-DD HH:mm:ss</Text>
              <Input>
                <InputContent
                  onInput={(e) => setCellValue(e.target.textContent)}
                ></InputContent>
              </Input>
              <Flex align="end">
                <FormButton
                  onClick={deleteContent}
                  weight="600"
                  borderRight="1px solid #69697B"
                >
                  Cancel
                </FormButton>
                <FormButton onClick={handleFormClick}>OK</FormButton>
              </Flex>
            </Form>
          </Modal>
        )}
      </AppWrapper>
    </Flex>
  );
}

export default App;
