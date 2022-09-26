import React, { useEffect } from 'react';
import Pagination from './Pagination/Pagination';

import './TrainList.css';
import TrainCard from "../TrainCard/TrainCard";

export default function TrainList() {
   return (
      <section className="trainList order_options">
         <div className="trainList_header">
            <div className="trains_totalCount">найдено 1</div>

            <div className="trainList_sort">
               <h5 className="trainList_sort-title">сортировать по:</h5>
               <select
                  className="trainList_sort-list"
                  name="sort"
                  value="sort"
               >
                  <option className="trainList_sort-item" value="time">
                     времени
                  </option>
                  <option className="trainList_sort-item" value="price_min">
                     стоимости
                  </option>
                  <option className="trainList_sort-item" value="duration">
                     длительности
                  </option>
               </select>
            </div>

            <div className="trainList_view">
               <h5 className="trainList-title">показывать по:</h5>
               <ul className="trainList_view-list">
                     <li
                        className='trainList_view-item trainList_view-item--active'
                     />
               </ul>
            </div>
         </div>

         <div className="trainList_train-list">
               <TrainCard/>
         </div>

         <Pagination />
      </section>
   );
}
