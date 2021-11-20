<template>
  <div>
    <b-table-simple hover small caption-top stacked>
      <caption>
        Items sold in August, grouped by Country and City:
      </caption>
      <colgroup>
        <col />
        <col />
      </colgroup>
      <colgroup>
        <col />
        <col />
        <col />
      </colgroup>
      <colgroup>
        <col />
        <col />
      </colgroup>
      <b-thead head-variant="dark">
        <b-tr>
          <b-th colspan="2">Region</b-th>
          <b-th colspan="3">Clothes</b-th>
          <b-th colspan="2">Accessories</b-th>
        </b-tr>
        <b-tr>
          <b-th>Country</b-th>
          <b-th>City</b-th>
          <b-th>Trousers</b-th>
          <b-th>Skirts</b-th>
          <b-th>Dresses</b-th>
          <b-th>Bracelets</b-th>
          <b-th>Rings</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr>
          <b-th rowspan="3" class="text-center">Belgium (3 Cities)</b-th>
          <b-th stacked-heading="City" class="text-left">Antwerp</b-th>
          <b-td stacked-heading="Clothes: Trousers">56</b-td>
          <b-td stacked-heading="Clothes: Skirts">22</b-td>
          <b-td stacked-heading="Clothes: Dresses">43</b-td>
          <b-td stacked-heading="Accessories: Bracelets" variant="success"
            >72</b-td
          >
          <b-td stacked-heading="Accessories: Rings">23</b-td>
        </b-tr>
        <b-tr>
          <b-th stacked-heading="City">Gent</b-th>
          <b-td stacked-heading="Clothes: Trousers">46</b-td>
          <b-td stacked-heading="Clothes: Skirts" variant="warning">18</b-td>
          <b-td stacked-heading="Clothes: Dresses">50</b-td>
          <b-td stacked-heading="Accessories: Bracelets">61</b-td>
          <b-td stacked-heading="Accessories: Rings" variant="danger">15</b-td>
        </b-tr>
        <b-tr>
          <b-th stacked-heading="City">Brussels</b-th>
          <b-td stacked-heading="Clothes: Trousers">51</b-td>
          <b-td stacked-heading="Clothes: Skirts">27</b-td>
          <b-td stacked-heading="Clothes: Dresses">38</b-td>
          <b-td stacked-heading="Accessories: Bracelets">69</b-td>
          <b-td stacked-heading="Accessories: Rings">28</b-td>
        </b-tr>
        <b-tr>
          <b-th rowspan="2" class="text-center"
            >The Netherlands (2 Cities)</b-th
          >
          <b-th stacked-heading="City">Amsterdam</b-th>
          <b-td stacked-heading="Clothes: Trousers" variant="success">89</b-td>
          <b-td stacked-heading="Clothes: Skirts">34</b-td>
          <b-td stacked-heading="Clothes: Dresses">69</b-td>
          <b-td stacked-heading="Accessories: Bracelets">85</b-td>
          <b-td stacked-heading="Accessories: Rings">38</b-td>
        </b-tr>
        <b-tr>
          <b-th stacked-heading="City">Utrecht</b-th>
          <b-td stacked-heading="Clothes: Trousers">80</b-td>
          <b-td stacked-heading="Clothes: Skirts" variant="danger">12</b-td>
          <b-td stacked-heading="Clothes: Dresses">43</b-td>
          <b-td stacked-heading="Accessories: Bracelets">36</b-td>
          <b-td stacked-heading="Accessories: Rings" variant="warning">19</b-td>
        </b-tr>
      </b-tbody>
      <b-tfoot>
        <b-tr>
          <b-td colspan="7" variant="secondary" class="text-right">
            Total Rows: <b>5</b>
          </b-td>
        </b-tr>
      </b-tfoot>
    </b-table-simple>
  </div>

  <!-- b-table-simple-stacked.vue -->
</template>
