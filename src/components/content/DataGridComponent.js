import React, { useEffect, useState, Fragment } from "react";
import DataGrid, { Pager, Paging, Column } from "devextreme-react/data-grid";
import { FaFilter, FaSearch, FaPlus } from "react-icons/fa";

import AddAccount from "../addAccount/AddAccount";
import Loading from "../loading/Loading";

import { getLocalStorage } from "../../helperFunctions/LocalStorageFunction";

import "./DataGrid.css";
import "devextreme/dist/css/dx.light.css";

const DataGridComponent = (props) => {
  /*State Tanımlamaları*/
  const [loading, setLoading] = useState(true);
  const [parseData, setParseData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartIsShown, setCartIsShown] = useState(false);

  /*local storage değişklik olduğunda component rerender edildi*/
  useEffect(() => {
    setParseData(JSON.parse(getLocalStorage("account")));
    setLoading(false);
  }, [JSON.stringify(getLocalStorage("account"))]);

  const allowedPageSizes = [1, 2, 3, 4, 5, 6, 7, 8, "all"]; //gösterilecek satır sayıları arrayde tutuldu

  /*Kullanıcı ekleme butonuna basıldığında modal yapısının ekranda gösterilip gösterilmeme durumu için setState fonksiyonu yazıldı*/
  const showAddAccountHandler = () => {
    setCartIsShown(!cartIsShown);
  };
  /*Verilerin aktarılırken beklenme süresinde loading componentinden yararlanıldı*/
  if (loading) {
    return <Loading />;
  }
  return (
    <Fragment>
      <div className="content">
        <div className="dataGridHeader">
          <div className="headerLeft">
            <div className="searchbar">
              <input
                type="text"
                placeholder="Search Objects..."
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
              <span className="searchSvg">
                <FaSearch />
              </span>
            </div>
            <div className="filter">
              <FaFilter />
            </div>
          </div>
          <button onClick={showAddAccountHandler} className="newAccount">
            <FaPlus />
            <p>Yeni Hesap Ekle</p>
          </button>
        </div>
        <DataGrid
          id="gridContainer"
          dataSource={parseData}
          columnAutoWidth={true}
          searchPanel={{
            visible: false,
            text: searchValue,
          }}
        >
          <Column
            dataField="accountLink"
            caption="Sosyal Medya Linki"
            width={30 + "%"}
            headerCellRender={({ column }) => (
              <div className="custom-header-cell">
                <span className="column-title">{column.caption}</span>
              </div>
            )}
          />
          <Column
            dataField="accountName"
            rowAlternationEnabled={true}
            width={30 + "%"}
            caption="Sosyal Medya Adı"
            headerCellRender={({ column }) => (
              <div className="custom-header-cell">
                <span className="column-title">{column.caption}</span>
              </div>
            )}
          />
          <Column
            dataField="accountDescription"
            caption="Açıklama"
            width={40 + "%"}
            headerCellRender={({ column }) => (
              <div className="custom-header-cell">
                <span className="column-title">{column.caption}</span>
              </div>
            )}
          />

          <Paging defaultPageSize={allowedPageSizes[4]} />
          <Pager
            displayMode={"compact"}
            visible={true}
            showPageSizeSelector={true}
            allowedPageSizes={allowedPageSizes}
          />
        </DataGrid>
        {cartIsShown && <AddAccount onShowCart={showAddAccountHandler} />}
      </div>
    </Fragment>
  );
};

export default DataGridComponent;
