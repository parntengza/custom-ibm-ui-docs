# Data table

A data table shows rows of records in columns (Carbon `DataTable`). It is driven by data: you give it `headers` and `rows`, and it sorts, searches, selects, expands and pages them. Beyond Carbon it can hide and pin columns, export CSV, edit cells in place and resize columns.


HTML:

```html
<ui-data-table id="data-table-intro" heading="Contracts" description="Active contracts of the legal department"></ui-data-table>

<script type="module">
  const table = document.getElementById('data-table-intro');
  table.headers = [
    { key: 'name', header: 'Contract' },
    { key: 'party', header: 'Counterparty' },
    { key: 'status', header: 'Status' },
    { key: 'updated', header: 'Updated' },
  ];
  table.rows = [
    { id: '1', name: 'Service agreement', party: 'Acme Co., Ltd.', status: 'Signed', updated: '2026-09-30' },
    { id: '2', name: 'NDA', party: 'Globex', status: 'Draft', updated: '2026-10-01' },
    { id: '3', name: 'Lease renewal', party: 'Initech', status: 'In review', updated: '2026-09-12' },
    { id: '4', name: 'Master services', party: 'Umbrella', status: 'Signed', updated: '2026-08-21' },
  ];
</script>
```

React:

```tsx
const headers = [
  { key: 'name', header: 'Contract' },
  { key: 'party', header: 'Counterparty' },
  { key: 'status', header: 'Status' },
  { key: 'updated', header: 'Updated' },
];
const rows = [
  { id: '1', name: 'Service agreement', party: 'Acme Co., Ltd.', status: 'Signed', updated: '2026-09-30' },
  { id: '2', name: 'NDA', party: 'Globex', status: 'Draft', updated: '2026-10-01' },
  { id: '3', name: 'Lease renewal', party: 'Initech', status: 'In review', updated: '2026-09-12' },
  { id: '4', name: 'Master services', party: 'Umbrella', status: 'Signed', updated: '2026-08-21' },
];

<UiDataTable heading="Contracts" description="Active contracts of the legal department" headers={headers} rows={rows} />
```

React + Tailwind:

```tsx
<DataTable heading="Contracts" description="Active contracts of the legal department" headers={headers} rows={rows} />
```

`headers` and `rows` are the same in every version; the examples below show them once, in the HTML tab.

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/data-table
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-data-table
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@0.87.0/registry/data-table.json
#    to its target:
#    components/ui/primitives/data-table/column-resize.ts
#    components/ui/primitives/data-table/data-table.ts
#    components/ui/primitives/data-table/editable-grid.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    button, checkbox, core-column-resize, core-csv, core-grid, core-table, pagination, popover, radio, search, shared-element, shared-field, shared-localize, shared-skeleton, shared-slots, tooltip, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^0.87.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@0.87.0/registry/tw-data-table.json
#    to its target:
#    components/ui/react-tw/data-table.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-grid, core-table, tw-checkbox, tw-data-table-columns, tw-data-table-csv, tw-data-table-grid, tw-data-table-resize, tw-dom, tw-i18n, tw-pagination, tw-refs, tw-search, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">
  import '@purpurabog/ui/data-table';

  const table = document.querySelector('ui-data-table');
  table.headers = [{ key: 'name', header: 'Contract' }, { key: 'status', header: 'Status' }];
  table.rows = [{ id: '1', name: 'Service agreement', status: 'Signed' }];
</script>

<ui-data-table heading="Contracts"></ui-data-table>
```

React:

```tsx
import { UiDataTable } from '@purpurabog/ui/react';

<UiDataTable
  heading="Contracts"
  headers={[{ key: 'name', header: 'Contract' }, { key: 'status', header: 'Status' }]}
  rows={[{ id: '1', name: 'Service agreement', status: 'Signed' }]}
/>
```

React + Tailwind:

```tsx
import { DataTable } from '@/components/ui/react-tw/data-table';

<DataTable
  heading="Contracts"
  headers={[{ key: 'name', header: 'Contract' }, { key: 'status', header: 'Status' }]}
  rows={[{ id: '1', name: 'Service agreement', status: 'Signed' }]}
/>
```

Each header is `{ key, header }`: `key` is the row property the column shows. Each row needs a stable `id`, which keeps selection and open rows across sorting. `headers` and `rows` are properties, not attributes: set them from a script (or from your framework).

## Custom cells

By default a cell shows `row[key]` as text. `renderCell(row, header)` returns what to show instead: a formatted number, a link, a tag. `align: 'end'` puts a column's cells at the end, as for amounts. Sorting and search still use the raw values.


HTML:

```html
<ui-data-table id="data-table-cells" heading="Contracts"></ui-data-table>

<script type="module">
  const tagTypes = { Signed: 'green', Draft: 'gray', 'In review': 'blue' };
  const table = document.getElementById('data-table-cells');
  table.headers = [
    { key: 'name', header: 'Contract' },
    { key: 'amount', header: 'Amount (THB)', align: 'end' },
    { key: 'status', header: 'Status' },
  ];
  table.rows = [
    { id: '1', name: 'Service agreement', amount: 1250000, status: 'Signed' },
    { id: '2', name: 'NDA', amount: 0, status: 'Draft' },
    { id: '3', name: 'Lease renewal', amount: 480000, status: 'In review' },
  ];
  table.renderCell = (row, header) => {
    if (header.key === 'amount') return row.amount.toLocaleString('th-TH');
    if (header.key !== 'status') return row[header.key];
    const cell = document.createElement('span');
    cell.innerHTML = `<ui-tag size="sm" type="${tagTypes[row.status]}">${row.status}</ui-tag>`;
    return cell;
  };
</script>
```

React:

```tsx
import { html } from 'lit';
import type { DataTableHeader, DataTableRow } from '@purpurabog/ui';

const tagTypes: Record<string, string> = { Signed: 'green', Draft: 'gray', 'In review': 'blue' };
// renderCell returns what Lit can render: text, a DOM node or a lit `html` template
const renderCell = (row: DataTableRow, header: DataTableHeader) => {
  if (header.key === 'amount') return Number(row.amount).toLocaleString('th-TH');
  if (header.key === 'status') return html`<ui-tag size="sm" type=${tagTypes[String(row.status)]}>${row.status}</ui-tag>`;
  return String(row[header.key]);
};

<UiDataTable heading="Contracts" headers={headers} rows={rows} renderCell={renderCell} />
```

React + Tailwind:

```tsx
import { Tag } from '@/components/ui/react-tw/tag';

const tagTypes = { Signed: 'green', Draft: 'gray', 'In review': 'blue' } as const;

<DataTable
  heading="Contracts"
  headers={headers}
  rows={rows}
  renderCell={(row, header) => {
    if (header.key === 'amount') return Number(row.amount).toLocaleString('th-TH');
    if (header.key === 'status') return <Tag size="sm" type={tagTypes[row.status as keyof typeof tagTypes]}>{String(row.status)}</Tag>;
    return String(row[header.key]);
  }}
/>
```

In the web component and its React wrapper, `renderCell` returns anything Lit renders; in React + Tailwind it returns React nodes.

## Sorting

`sortable` gives every column a sort button that cycles none → ascending → descending → none; a header with `sortable: false` opts out. Numbers sort by value, text by locale. `sort-key` and `sort-direction` set the starting sort, and `ui-sort` fires with `{ key, direction }`.


HTML:

```html
<ui-data-table id="data-table-sort" heading="Contracts" sortable sort-key="amount" sort-direction="descending"></ui-data-table>
<p>Sort: <output id="data-table-sort-out">amount, descending</output></p>

<script type="module">
  const table = document.getElementById('data-table-sort');
  table.headers = [
    { key: 'name', header: 'Contract' },
    { key: 'party', header: 'Counterparty', sortable: false },
    { key: 'amount', header: 'Amount (THB)', align: 'end' },
    { key: 'updated', header: 'Updated' },
  ];
  table.rows = [
    { id: '1', name: 'Service agreement', party: 'Acme Co., Ltd.', amount: 1250000, updated: '2026-09-30' },
    { id: '2', name: 'NDA', party: 'Globex', amount: 0, updated: '2026-10-01' },
    { id: '3', name: 'Lease renewal', party: 'Initech', amount: 480000, updated: '2026-09-12' },
    { id: '4', name: 'Master services', party: 'Umbrella', amount: 9800000, updated: '2026-08-21' },
  ];
  table.addEventListener('ui-sort', (event) => {
    document.getElementById('data-table-sort-out').value = `${event.detail.key}, ${event.detail.direction}`;
  });
</script>
```

React:

```tsx
const [sort, setSort] = useState({ key: 'amount', direction: 'descending' });

<UiDataTable heading="Contracts" sortable sortKey={sort.key} sortDirection={sort.direction} headers={headers} rows={rows} onUiSort={(e) => setSort(e.detail)} />
<p>Sort: <output>{sort.key}, {sort.direction}</output></p>
```

React + Tailwind:

```tsx
const [sort, setSort] = useState<DataTableSort>({ key: 'amount', direction: 'descending' });

<DataTable heading="Contracts" sortable sortKey={sort.key} sortDirection={sort.direction} onSortChange={setSort} headers={headers} rows={rows} />
<p>Sort: <output>{sort.key}, {sort.direction}</output></p>
```

React + Tailwind also takes `defaultSortKey` / `defaultSortDirection`. `sortRow(a, b, context)` replaces the comparison; with `manual-sorting` (`manualSorting`) the table keeps `rows` in your order and only shows the sort, for sorting on the server.

## Sizes and zebra stripes

`size` sets the row height: `xs` 24px, `sm` 32px, `md` 40px, `lg` 48px (the default), `xl` 64px. `zebra` shades every other row. `static-width` makes the table as wide as its content instead of its container.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-select id="data-table-size-pick" inline label="Row size" value="lg">
    <option value="xs">xs</option>
    <option value="sm">sm</option>
    <option value="md">md</option>
    <option value="lg">lg</option>
    <option value="xl">xl</option>
  </ui-select>
  <ui-checkbox id="data-table-zebra-pick">Zebra stripes</ui-checkbox>
</div>
<ui-data-table id="data-table-size" heading="Signers"></ui-data-table>

<script type="module">
  const table = document.getElementById('data-table-size');
  table.headers = [
    { key: 'name', header: 'Name' },
    { key: 'role', header: 'Role' },
    { key: 'signed', header: 'Signed' },
  ];
  table.rows = [
    { id: '1', name: 'Anan P.', role: 'Managing director', signed: '2026-10-01' },
    { id: '2', name: 'Kanya S.', role: 'Legal counsel', signed: '2026-10-02' },
    { id: '3', name: 'Somchai D.', role: 'Witness', signed: '—' },
    { id: '4', name: 'Malee K.', role: 'Witness', signed: '2026-10-03' },
  ];
  const size = document.getElementById('data-table-size-pick');
  const zebra = document.getElementById('data-table-zebra-pick');
  size.addEventListener('change', () => (table.size = size.value));
  zebra.addEventListener('change', () => (table.zebra = zebra.checked));
</script>
```

React:

```tsx
<UiDataTable heading="Signers" size="sm" zebra headers={headers} rows={rows} />
```

React + Tailwind:

```tsx
<DataTable heading="Signers" size="sm" zebra headers={headers} rows={rows} />
```

Use `size="sm"` buttons in the toolbar and batch bar of `xs` and `sm` tables.

## Selection and batch actions

`selectable` adds a checkbox column and a select-all box in the header. A row with `disabled: true` can't be selected. Buttons in the `batch-actions` slot (`batchActions` in React + Tailwind) appear on a blue bar over the toolbar while rows are selected, with the count and Cancel. `ui-select` fires with `{ selected, rows }`; `selectedIds` (a property) holds the selected ids.


HTML:

```html
<ui-data-table id="data-table-select" heading="Contracts" description="Select rows to act on them" selectable>
  <ui-button slot="batch-actions">Download</ui-button>
  <ui-button slot="batch-actions">Archive</ui-button>
</ui-data-table>
<p>Selected: <output id="data-table-select-out">2</output></p>

<script type="module">
  const table = document.getElementById('data-table-select');
  table.headers = [
    { key: 'name', header: 'Contract' },
    { key: 'party', header: 'Counterparty' },
    { key: 'status', header: 'Status' },
  ];
  table.rows = [
    { id: '1', name: 'Service agreement', party: 'Acme Co., Ltd.', status: 'Signed' },
    { id: '2', name: 'NDA', party: 'Globex', status: 'Draft' },
    { id: '3', name: 'Lease renewal', party: 'Initech', status: 'In review' },
    { id: '4', name: 'Board resolution', party: 'Vandelay', status: 'Archived', disabled: true },
  ];
  table.selectedIds = ['2'];
  table.addEventListener('ui-select', (event) => {
    document.getElementById('data-table-select-out').value = event.detail.selected.join(', ');
  });
</script>
```

React:

```tsx
const [selected, setSelected] = useState(['2']);

<UiDataTable heading="Contracts" description="Select rows to act on them" selectable headers={headers} rows={rows} selectedIds={selected} onUiSelect={(e) => setSelected(e.detail.selected)}>
  <UiButton slot="batch-actions">Download</UiButton>
  <UiButton slot="batch-actions" onClick={() => archive(selected)}>Archive</UiButton>
</UiDataTable>
```

React + Tailwind:

```tsx
const [selected, setSelected] = useState(['2']);

<DataTable
  heading="Contracts"
  description="Select rows to act on them"
  selectable
  headers={headers}
  rows={rows}
  selectedIds={selected}
  onSelectionChange={(ids) => setSelected(ids)}
  batchActions={
    <>
      <Button>Download</Button>
      <Button onClick={() => archive(selected)}>Archive</Button>
    </>
  }
/>
```

Select-all follows Carbon: when any row is selected, it clears the selection; otherwise it selects every enabled row the search shows. The host has `data-has-selection` while rows are selected, for your own styles.

## Pick one row

`radio` makes the selection a single choice with a radio column, for example to pick a template. Tab stops on the chosen row, and the arrow keys move and select. There is no batch bar.


HTML:

```html
<ui-data-table id="data-table-radio" heading="Pick a template" radio></ui-data-table>
<p>Template: <output id="data-table-radio-out"></output></p>

<script type="module">
  const table = document.getElementById('data-table-radio');
  table.headers = [
    { key: 'name', header: 'Template' },
    { key: 'type', header: 'Type' },
    { key: 'updated', header: 'Updated' },
  ];
  table.rows = [
    { id: 'nda', name: 'Standard NDA', type: 'Confidentiality', updated: '2026-06-01' },
    { id: 'lease', name: 'Office lease', type: 'Property', updated: '2026-03-15' },
    { id: 'msa', name: 'Master services', type: 'Services', updated: '2025-11-20', disabled: true },
  ];
  table.addEventListener('ui-select', (event) => {
    document.getElementById('data-table-radio-out').value = event.detail.rows.map((row) => row.name).join(', ');
  });
</script>
```

React:

```tsx
<UiDataTable heading="Pick a template" radio headers={headers} rows={rows} onUiSelect={(e) => setTemplate(e.detail.selected[0])} />
```

React + Tailwind:

```tsx
<DataTable heading="Pick a template" radio headers={headers} rows={rows} onSelectionChange={(ids) => setTemplate(ids[0])} />
```

## Toolbar and search

`searchable` adds a search field to the toolbar. It stays a magnifier until pressed (Carbon's expandable search); `search-persistent` keeps it open. Typing keeps the rows where any cell shown contains the text, and fires `ui-filter` with `{ value }`. Put more controls, such as an overflow menu and a primary button, in the `toolbar` slot (`toolbar` in React + Tailwind).


HTML:

```html
<ui-data-table id="data-table-toolbar" heading="Contracts" searchable selectable>
  <ui-overflow-menu slot="toolbar" size="lg" label="Settings" placement="bottom-end" tooltip-placement="top">
    <svg slot="icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M27 16.76V15.24l1.92-1.68A2 2 0 0 0 29.3 11l-2.36-4a2 2 0 0 0-1.73-1 2 2 0 0 0-.64.1l-2.43.82a11.35 11.35 0 0 0-1.31-.75l-.51-2.52a2 2 0 0 0-2-1.61h-4.68a2 2 0 0 0-2 1.61l-.51 2.52a11.48 11.48 0 0 0-1.32.75l-2.38-.86A2 2 0 0 0 6.79 6a2 2 0 0 0-1.73 1L2.7 11a2 2 0 0 0 .41 2.51L5 15.24v1.52l-1.89 1.68A2 2 0 0 0 2.7 21l2.36 4a2 2 0 0 0 1.73 1 2 2 0 0 0 .64-.1l2.43-.82a11.35 11.35 0 0 0 1.31.75l.51 2.52a2 2 0 0 0 2 1.61h4.72a2 2 0 0 0 2-1.61l.51-2.52a11.48 11.48 0 0 0 1.32-.75l2.42.82a2 2 0 0 0 .64.1 2 2 0 0 0 1.73-1l2.28-4a2 2 0 0 0-.41-2.51ZM16 22a6 6 0 1 1 6-6 5.94 5.94 0 0 1-6 6Z" /></svg>
    <ui-menu-item label="Compact rows"></ui-menu-item>
    <ui-menu-item label="Show archived"></ui-menu-item>
  </ui-overflow-menu>
  <ui-button slot="toolbar">Add contract</ui-button>
  <ui-button slot="batch-actions">Archive</ui-button>
</ui-data-table>
<p>Search: <output id="data-table-toolbar-out"></output></p>

<script type="module">
  const table = document.getElementById('data-table-toolbar');
  table.headers = [
    { key: 'name', header: 'Contract' },
    { key: 'party', header: 'Counterparty' },
    { key: 'status', header: 'Status' },
  ];
  table.rows = [
    { id: '1', name: 'Service agreement', party: 'Acme Co., Ltd.', status: 'Signed' },
    { id: '2', name: 'NDA', party: 'Globex', status: 'Draft' },
    { id: '3', name: 'Lease renewal', party: 'Initech', status: 'In review' },
    { id: '4', name: 'Master services', party: 'Umbrella', status: 'Signed' },
  ];
  table.addEventListener('ui-filter', (event) => {
    document.getElementById('data-table-toolbar-out').value = event.detail.value;
  });
</script>
```

React:

```tsx
<UiDataTable heading="Contracts" searchable selectable headers={headers} rows={rows} onUiFilter={(e) => setSearch(e.detail.value)}>
  <UiOverflowMenu slot="toolbar" size="lg" label="Settings" placement="bottom-end" tooltipPlacement="top">
    <svg slot="icon" viewBox="0 0 32 32" aria-hidden="true">{settingsPath}</svg>
    <UiMenuItem label="Compact rows" />
    <UiMenuItem label="Show archived" />
  </UiOverflowMenu>
  <UiButton slot="toolbar">Add contract</UiButton>
  <UiButton slot="batch-actions">Archive</UiButton>
</UiDataTable>
```

React + Tailwind:

```tsx
<DataTable
  heading="Contracts"
  searchable
  selectable
  headers={headers}
  rows={rows}
  onFilterChange={setSearch}
  toolbar={
    <>
      <OverflowMenu size="lg" label="Settings" placement="bottom-end" tooltipPlacement="top" icon={<svg viewBox="0 0 32 32" aria-hidden="true">{settingsPath}</svg>}>
        <MenuItem label="Compact rows" />
        <MenuItem label="Show archived" />
      </OverflowMenu>
      <Button>Add contract</Button>
    </>
  }
  batchActions={<Button>Archive</Button>}
/>
```

`filter-text` (`filterText`) sets the search from your code. `filterRows(row, text, headers)` replaces the test; `manual-filtering` (`manualFiltering`) keeps every row so you can search on the server. Screen readers hear "3 of 12 rows" once typing pauses.

## Expandable rows

Set `renderExpandedRow(row)` and each row gets a chevron that opens a full-width row of detail under it. `expand-all` (`expandAll`) adds a header button that opens or closes every row. `expandedIds` holds the open rows, and `ui-expand` fires with `{ expandedIds, expanded, id }`.


HTML:

```html
<ui-data-table id="data-table-expand" heading="Contracts" expand-all></ui-data-table>

<script type="module">
  const table = document.getElementById('data-table-expand');
  table.headers = [
    { key: 'name', header: 'Contract' },
    { key: 'party', header: 'Counterparty' },
    { key: 'status', header: 'Status' },
  ];
  table.rows = [
    { id: '1', name: 'Service agreement', party: 'Acme Co., Ltd.', status: 'Signed', owner: 'Kanya S.', ends: '2027-09-30' },
    { id: '2', name: 'NDA', party: 'Globex', status: 'Draft', owner: 'Anan P.', ends: '2028-10-01' },
    { id: '3', name: 'Lease renewal', party: 'Initech', status: 'In review', owner: 'Malee K.', ends: '2029-01-31' },
  ];
  table.expandedIds = ['2'];
  table.renderExpandedRow = (row) => {
    const detail = document.createElement('p');
    detail.style.margin = '0';
    detail.textContent = `Owner: ${row.owner} · Ends on ${row.ends}`;
    return detail;
  };
</script>
```

React:

```tsx
<UiDataTable
  heading="Contracts"
  expandAll
  headers={headers}
  rows={rows}
  expandedIds={['2']}
  renderExpandedRow={(row: DataTableRow) => `Owner: ${row.owner} · Ends on ${row.ends}`}
/>
```

React + Tailwind:

```tsx
<DataTable
  heading="Contracts"
  expandAll
  headers={headers}
  rows={rows}
  defaultExpandedIds={['2']}
  renderExpandedRow={(row) => <p className="m-0">Owner: {String(row.owner)} · Ends on {String(row.ends)}</p>}
/>
```

## Pages

`page-size` (`pageSize`) adds a [pagination](https://parntengza.github.io/kanok-ui-docs/en/pagination/) bar under the table that pages the sorted, searched rows. `page-sizes` lists the choices and `ui-page-change` fires with `{ page, pageSize }`. Select-all then acts on the page, and the batch bar offers "Select all (N)" for every row the search keeps.


HTML:

```html
<ui-data-table id="data-table-pages" heading="Contracts" sortable searchable selectable page-size="10">
  <ui-button slot="batch-actions">Delete</ui-button>
</ui-data-table>

<script type="module">
  const table = document.getElementById('data-table-pages');
  const statuses = ['Draft', 'In review', 'Signed', 'Archived'];
  const parties = ['Acme', 'Globex', 'Initech', 'Umbrella'];
  table.headers = [
    { key: 'name', header: 'Contract' },
    { key: 'party', header: 'Counterparty' },
    { key: 'status', header: 'Status' },
  ];
  table.rows = Array.from({ length: 47 }, (_, i) => ({
    id: `c${i + 1}`,
    name: `Contract ${String(i + 1).padStart(3, '0')}`,
    party: parties[i % 4],
    status: statuses[i % 4],
  }));
</script>
```

React:

```tsx
<UiDataTable heading="Contracts" sortable searchable selectable pageSize={10} headers={headers} rows={rows} onUiPageChange={(e) => console.log(e.detail)}>
  <UiButton slot="batch-actions">Delete</UiButton>
</UiDataTable>
```

React + Tailwind:

```tsx
<DataTable heading="Contracts" sortable searchable selectable defaultPageSize={10} headers={headers} rows={rows} onPageChange={(change) => console.log(change)} batchActions={<Button>Delete</Button>} />
```

To page on the server, give `rows` one page only, put your own `ui-pagination` under the table, sort and search on the server (`manual-sorting`, `manual-filtering`), and set `total-selected` and `total-count` so the batch bar counts and offers "Select all (N)" across pages (`ui-select-all` fires; select them yourself).

## Show and hide columns

`column-settings` (`columnSettings`) adds a Columns button to the toolbar with a checkbox list of the columns. A header with `hideable: false` always shows, and one with `hidden: true` starts hidden; Reset goes back to that. `ui-columns-change` fires with `{ hiddenColumns, key, hidden }`; save `hiddenColumns` and set it again to restore the user's choice. Hidden columns leave the search and the CSV export too.


HTML:

```html
<ui-data-table id="data-table-columns" heading="Contracts" searchable column-settings></ui-data-table>
<p>Hidden: <output id="data-table-columns-out">updated</output></p>

<script type="module">
  const table = document.getElementById('data-table-columns');
  table.headers = [
    { key: 'name', header: 'Contract', hideable: false },
    { key: 'party', header: 'Counterparty' },
    { key: 'status', header: 'Status' },
    { key: 'updated', header: 'Updated', hidden: true },
  ];
  table.rows = [
    { id: '1', name: 'Service agreement', party: 'Acme Co., Ltd.', status: 'Signed', updated: '2026-09-30' },
    { id: '2', name: 'NDA', party: 'Globex', status: 'Draft', updated: '2026-10-01' },
    { id: '3', name: 'Lease renewal', party: 'Initech', status: 'In review', updated: '2026-09-12' },
  ];
  table.addEventListener('ui-columns-change', (event) => {
    document.getElementById('data-table-columns-out').value = event.detail.hiddenColumns.join(', ');
  });
</script>
```

React:

```tsx
<UiDataTable heading="Contracts" searchable columnSettings headers={headers} rows={rows} hiddenColumns={hidden} onUiColumnsChange={(e) => setHidden(e.detail.hiddenColumns)} />
```

React + Tailwind:

```tsx
<DataTable heading="Contracts" searchable columnSettings headers={headers} rows={rows} hiddenColumns={hidden} onColumnsChange={(change) => setHidden(change.hiddenColumns)} />
```

## Sticky header and pinned columns

`sticky-header` (`stickyHeader`) keeps the header row in view while the body scrolls in a box up to `--ui-data-table-max-height` tall (300px, as Carbon). For wide tables, `pinned: 'start'` on the first header keeps that column (and the select column before it) in view while the rest scrolls sideways, and `pinned: 'end'` on the last header keeps row actions at the end. Pinning starts at 672px of window width.


HTML:

```html
<div style="max-inline-size: 560px">
  <ui-data-table id="data-table-scroll" heading="Contracts" description="40 rows: scroll down, then sideways" sticky-header selectable></ui-data-table>
</div>

<script type="module">
  const table = document.getElementById('data-table-scroll');
  const parties = ['Acme Co., Ltd.', 'Globex', 'Initech', 'Umbrella'];
  table.headers = [
    { key: 'name', header: 'Contract', pinned: 'start' },
    { key: 'party', header: 'Counterparty' },
    { key: 'owner', header: 'Owner' },
    { key: 'department', header: 'Department' },
    { key: 'updated', header: 'Updated' },
    { key: 'action', header: 'Action', pinned: 'end' },
  ];
  table.rows = Array.from({ length: 40 }, (_, i) => ({
    id: String(i + 1),
    name: `Contract ${i + 1}`,
    party: parties[i % 4],
    owner: 'Somchai Jaidee',
    department: 'Legal department',
    updated: `2026-09-${String((i % 28) + 1).padStart(2, '0')}`,
    action: 'Open',
  }));
</script>
```

React:

```tsx
<UiDataTable heading="Contracts" stickyHeader selectable headers={[{ key: 'name', header: 'Contract', pinned: 'start' }, …, { key: 'action', header: 'Action', pinned: 'end' }]} rows={rows} />
```

React + Tailwind:

```tsx
<DataTable heading="Contracts" stickyHeader selectable headers={[{ key: 'name', header: 'Contract', pinned: 'start' }, …, { key: 'action', header: 'Action', pinned: 'end' }]} rows={rows} />
```

Change the box's height with CSS: `ui-data-table { --ui-data-table-max-height: 480px; }`.

## Export CSV

`csv-export` (`csvExport`) adds an Export CSV button to the toolbar: it downloads the columns shown and the rows shown (searched and sorted, every page) as a CSV file for Excel, named after `csv-file-name` or the heading. It fires a cancelable `ui-csv-export` first with `{ csv, rows, fileName }`. `toCsv({ scope })` and `downloadCsv({ scope, fileName })` export `'shown'`, `'selected'` or `'all'` rows from your own buttons. This demo shows the CSV instead of downloading it.


HTML:

```html
<ui-data-table id="data-table-csv" heading="Contracts" searchable selectable csv-export>
  <ui-button id="data-table-csv-selected" slot="batch-actions">Export selected</ui-button>
</ui-data-table>
<pre id="data-table-csv-out" style="margin: 0; white-space: pre-wrap; font: var(--ui-font-code)"></pre>

<script type="module">
  const table = document.getElementById('data-table-csv');
  const out = document.getElementById('data-table-csv-out');
  table.headers = [
    { key: 'name', header: 'Contract' },
    { key: 'party', header: 'Counterparty' },
    { key: 'amount', header: 'Amount (THB)', align: 'end' },
  ];
  table.rows = [
    { id: '1', name: 'Service agreement', party: 'Acme Co., Ltd.', amount: 1250000 },
    { id: '2', name: 'NDA', party: 'Globex', amount: 0 },
    { id: '3', name: 'Lease renewal', party: 'Initech', amount: 480000 },
  ];
  table.addEventListener('ui-csv-export', (event) => {
    event.preventDefault(); // the demo shows the file instead of downloading it
    out.textContent = event.detail.csv;
  });
  document.getElementById('data-table-csv-selected').addEventListener('click', () => {
    out.textContent = table.toCsv({ scope: 'selected' }); // or table.downloadCsv({ scope: 'selected' })
  });
</script>
```

React:

```tsx
import type { UiDataTable as DataTableElement } from '@purpurabog/ui';

const table = useRef<DataTableElement>(null);

<UiDataTable ref={table} heading="Contracts" searchable selectable csvExport headers={headers} rows={rows}>
  <UiButton slot="batch-actions" onClick={() => table.current?.downloadCsv({ scope: 'selected', fileName: 'Selected contracts' })}>Export selected</UiButton>
</UiDataTable>
```

React + Tailwind:

```tsx
import { dataTableToCsv, downloadCsv } from '@/components/ui/react-tw/data-table-csv';

const [selected, setSelected] = useState<string[]>([]);

<DataTable
  heading="Contracts"
  searchable
  selectable
  csvExport
  headers={headers}
  rows={rows}
  selectedIds={selected}
  onSelectionChange={setSelected}
  batchActions={
    <Button onClick={() => downloadCsv(dataTableToCsv(headers, rows.filter((r) => selected.includes(r.id))), 'Selected contracts')}>Export selected</Button>
  }
/>
```

The file is UTF-8 with a byte order mark so Excel reads Thai correctly; every cell is quoted, and cells that start like a formula are made safe.

## Edit cells in place

Give a header `editable: 'text'`, `'number'` or `'select'` (with `options`) and its cells can be edited: the table becomes a grid with one Tab stop, where the arrow keys move between cells. Enter, F2, a double click or typing opens the editor; Enter saves, Escape cancels. `validate(value, row)` returns a message to keep the editor open. A saved edit is written into `rows` and fires `ui-cell-edit` with `{ rowId, key, value, previous, row }`.


HTML:

```html
<ui-data-table id="data-table-edit" heading="Contracts" description="Focus a cell and press Enter, or double-click it"></ui-data-table>
<p>Last edit: <output id="data-table-edit-out"></output></p>

<script type="module">
  const table = document.getElementById('data-table-edit');
  table.headers = [
    { key: 'name', header: 'Name', editable: 'text', validate: (value) => (String(value).trim() ? '' : 'Name is required') },
    { key: 'amount', header: 'Amount (THB)', editable: 'number', align: 'end', validate: (value) => (Number(value) >= 0 ? '' : 'Must be 0 or more') },
    { key: 'status', header: 'Status', editable: 'select', options: [
      { value: 'draft', label: 'Draft' },
      { value: 'review', label: 'In review' },
      { value: 'signed', label: 'Signed' },
    ] },
    { key: 'owner', header: 'Owner' },
  ];
  table.rows = [
    { id: '1', name: 'Office lease 2026', amount: 250000, status: 'review', owner: 'Ananya' },
    { id: '2', name: 'NDA – Acme', amount: 0, status: 'signed', owner: 'Boonsri' },
    { id: '3', name: 'Software licence', amount: 48000, status: 'draft', owner: 'Chai' },
  ];
  table.addEventListener('ui-cell-edit', (event) => {
    const { key, previous, value } = event.detail;
    document.getElementById('data-table-edit-out').value = `${key}: ${previous} → ${value}`;
  });
</script>
```

React:

```tsx
<UiDataTable heading="Contracts" headers={headers} rows={rows} onUiCellEdit={(e) => save(e.detail.rowId, e.detail.key, e.detail.value)} />
```

React + Tailwind:

```tsx
const [rows, setRows] = useState(initialRows);

<DataTable heading="Contracts" headers={headers} rows={rows} onCellEdit={(edit) => setRows(edit.rows)} />
```

The web component writes the new value into `rows` itself; to undo an edit the server refused, set `rows` back. React + Tailwind hands you the new `rows` in `onCellEdit`: set them, or keep yours to refuse the edit.

## Resize columns

`resizable` puts a handle on the end edge of each column header: drag it, or Tab to it and use the arrow keys (Shift for 16px steps). A header's `resizable: false` opts out; `width`, `minWidth` (default 50) and `maxWidth` bound it. `columnWidths` holds the widths, and `ui-column-resize` fires with `{ key, width, widths }` after each resize: save `widths` to restore them later.


HTML:

```html
<ui-data-table id="data-table-resize" heading="Contracts" description="Drag a header's end edge; Amount is fixed" resizable sortable></ui-data-table>
<p>Widths: <output id="data-table-resize-out"></output></p>

<script type="module">
  const table = document.getElementById('data-table-resize');
  table.headers = [
    { key: 'name', header: 'Name', minWidth: 120 },
    { key: 'status', header: 'Status' },
    { key: 'owner', header: 'Owner' },
    { key: 'amount', header: 'Amount (THB)', align: 'end', resizable: false },
  ];
  table.rows = [
    { id: '1', name: 'Office lease 2026', status: 'In review', owner: 'Ananya', amount: 250000 },
    { id: '2', name: 'NDA – Acme', status: 'Signed', owner: 'Boonsri', amount: 0 },
    { id: '3', name: 'Software licence', status: 'Draft', owner: 'Chai', amount: 48000 },
  ];
  table.addEventListener('ui-column-resize', (event) => {
    document.getElementById('data-table-resize-out').value = JSON.stringify(event.detail.widths);
  });
</script>
```

React:

```tsx
<UiDataTable heading="Contracts" resizable sortable headers={headers} rows={rows} columnWidths={widths} onUiColumnResize={(e) => setWidths(e.detail.widths)} />
```

React + Tailwind:

```tsx
<DataTable heading="Contracts" resizable sortable headers={headers} rows={rows} columnWidths={widths} onColumnResize={(change) => setWidths(change.widths)} />
```

## Empty, loading and skeleton

With no rows the body says "No data"; put your own message in the `empty` slot (`emptyText`). While a search finds nothing it says "No results found" (`no-results` slot, `noResultsText`). `loading` keeps the toolbar and headers and shows skeleton rows (`loading-rows`) while the data reloads. Before the first data arrives, show `ui-data-table-skeleton` in the table's place.


HTML:

```html
<ui-data-table id="data-table-empty" heading="Contracts">
  <div slot="empty"><strong>No contracts yet</strong><br />Create one to get started.</div>
</ui-data-table>
<div><ui-button id="data-table-reload" kind="tertiary" size="sm">Reload</ui-button></div>
<ui-data-table id="data-table-loading" heading="Signers" searchable></ui-data-table>
<ui-data-table-skeleton column-count="3" row-count="3"></ui-data-table-skeleton>

<script type="module">
  const headers = [
    { key: 'name', header: 'Name' },
    { key: 'role', header: 'Role' },
    { key: 'signed', header: 'Signed' },
  ];
  const empty = document.getElementById('data-table-empty');
  empty.headers = headers;
  empty.rows = [];
  const loading = document.getElementById('data-table-loading');
  loading.headers = headers;
  loading.rows = [
    { id: '1', name: 'Anan P.', role: 'Managing director', signed: '2026-10-01' },
    { id: '2', name: 'Kanya S.', role: 'Legal counsel', signed: '2026-10-02' },
  ];
  document.getElementById('data-table-reload').addEventListener('click', () => {
    loading.loading = true;
    setTimeout(() => (loading.loading = false), 1500);
  });
</script>
```

React:

```tsx
<UiDataTable heading="Contracts" headers={headers} rows={[]}>
  <div slot="empty"><strong>No contracts yet</strong><br />Create one to get started.</div>
</UiDataTable>
<UiDataTable heading="Signers" searchable loading={reloading} headers={headers} rows={rows} />
<UiDataTableSkeleton columnCount={3} rowCount={3} />
```

React + Tailwind:

```tsx
import { DataTable, DataTableSkeleton } from '@/components/ui/react-tw/data-table';

<DataTable heading="Contracts" headers={headers} rows={[]} emptyText={<><strong>No contracts yet</strong><br />Create one to get started.</>} />
<DataTable heading="Signers" searchable loading={reloading} headers={headers} rows={rows} />
<DataTableSkeleton columnCount={3} rowCount={3} />
```

The skeleton is hidden from screen readers: put `aria-busy` and a status message on the region around it. It takes `headers` to show real column names, `size`, `zebra`, `hide-header` and `hide-toolbar`.

## Keyboard

| Key | Does |
|---|---|
| Tab | Moves through the toolbar, the sort buttons, the checkboxes and the controls in cells; a radio table and an editable grid are one Tab stop each |
| Space | Toggles a checkbox; picks the focused radio row |
| Up / Down | In a radio table, move to the previous / next row and select it |
| Arrow keys, Home / End, Ctrl + Home / End | In an editable grid, move between cells |
| Enter, F2 | In an editable grid, edit the cell (or press the control in it) |
| Escape | Cancels an edit; clears the search |

## Accessibility

- The table is a real `<table>` named by its `heading` (or `label`), with `aria-sort` on sorted columns. Each row's checkbox, radio and chevron is named with the row's first cell ("Select row, Service agreement").
- A polite status says "Sorted by Contract, ascending" after a sort and "3 of 12 rows" when typing in the search pauses, instead of re-reading the whole table as Carbon's live `<tbody>` does.
- While `loading`, the table is `aria-busy`. The batch bar's count is a status, so the new count is read when rows are selected.
- An editable grid follows the WAI-ARIA grid pattern: cells that can't be edited are `aria-readonly`, and editable cells say "Press Enter to edit".

Unstyled React parts with the same behaviour: [Headless Data table](https://parntengza.github.io/kanok-ui-docs/en/headless-data-table/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-data-table>` · React `UiDataTable`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `size` | `size` | `DataTableSize` | `'lg'` |  |
| `zebra` | `zebra` | `boolean` | `false` | Alternate row backgrounds (Carbon `useZebraStyles`). |
| `static-width` | `staticWidth` | `boolean` | `false` | Width follows the content instead of filling the container (Carbon `useStaticWidth`). |
| `sortable` | `sortable` | `boolean` | `false` | Every column sorts unless its header sets `sortable: false`. |
| `sort-key` | `sortKey` | `string` | `''` | Key of the sorted column. |
| `sort-direction` | `sortDirection` | `DataTableSortDirection` | `'none'` |  |
| `manual-sorting` | `manualSorting` | `boolean` | `false` | Keep `rows` in the given order; the headers still show and announce the sort (server-side sorting). |
| `heading` | `heading` | `string` | `''` | Heading above the table; also names the table (Carbon `TableContainer` title). |
| `description` | `description` | `string` | `''` |  |
| `label` | `label` | `string` | `''` | Accessible name when there is no `heading`. |
| `selectable` | `selectable` | `boolean` | `false` | Checkbox column with select-all; batch actions appear while rows are selected. |
| `radio` | `radio` | `boolean` | `false` | Single selection with a radio column (Carbon `radio`). |
| `searchable` | `searchable` | `boolean` | `false` | Filter field in the toolbar (Carbon `TableToolbarSearch`). |
| `search-persistent` | `searchPersistent` | `boolean` | `false` | Keep the search open instead of collapsing it to its magnifier (Carbon `persistent`). |
| `filter-text` | `filterText` | `string` | `''` | The filter text; rows with a cell containing it stay. |
| `manual-filtering` | `manualFiltering` | `boolean` | `false` | Keep every row; filter yourself on `ui-filter` (server-side filtering). |
| `search-label` | `searchLabel` | `string` | `''` | Search label; defaults to the translation plus the table's name ("Filter table: Contracts"). |
| `search-placeholder` | `searchPlaceholder` | `string` | `''` | Search placeholder; defaults to the translation ("Filter table"). |
| `expand-all` | `expandAll` | `boolean` | `false` | Header button that expands / collapses every row (Carbon `TableExpandHeader enableToggle`). |
| `sticky-header` | `stickyHeader` | `boolean` | `false` | Keep the header visible while the body scrolls (Carbon `stickyHeader`). |
| `resizable` | `resizable` | `boolean` | `false` | Every column gets a resize handle (a header's `resizable` overrides). |
| `loading` | `loading` | `boolean` | `false` | Skeleton rows in the body while data loads; the toolbar, headers and search stay, the table is `aria-busy`. |
| `loading-rows` | `loadingRows` | `number` | `0` | Skeleton rows while `loading` (default: the rows shown now, else the page size, else 5). |
| `page-size` | `pageSize` | `number` | `0` | Rows per page: a `ui-pagination` under the table pages the sorted, filtered rows (0: every row, no pagination). |
| `page` | `page` | `number` | `1` | Current page (from 1) with `page-size`; a new filter text goes back to page 1. |
| `page-sizes` | `pageSizes` | `string` | `'10,25,50'` | Page-size choices of the built-in pagination, comma-separated. |
| `total-selected` | `totalSelected` | `number \| undefined` |  | Selected count for the batch bar when the selection includes rows not in `rows` (server paging; Carbon `totalSelected`). |
| `total-count` | `totalCount` | `number \| undefined` |  | Rows across every page (server paging): the batch bar offers "Select all (N)" and fires `ui-select-all` (Carbon `totalCount` / `onSelectAll`). |
| `column-settings` | `columnSettings` | `boolean` | `false` | A "Columns" button in the toolbar: a checkbox list that shows / hides columns (no Carbon counterpart). |
| `csv-export` | `csvExport` | `boolean` | `false` | An "Export CSV" button in the toolbar that downloads the rows and columns shown (no Carbon counterpart). |
| `csv-file-name` | `csvFileName` | `string` | `''` | Name of the downloaded file (`.csv` is added); default: the heading, else "table". |

#### Properties

| Property | Type | Description |
|---|---|---|
| `sortRow` | `(a: unknown, b: unknown, context: DataTableSortContext) => number \| undefined` | Replaces the comparison; return as for `Array.prototype.sort` in the given `direction`. |
| `renderCell` | `(row: DataTableRow, header: DataTableHeader) => unknown \| undefined` | Renders one cell; return any Lit value. |
| `selectedIds` | `string[]` | Ids of the selected rows. |
| `filterRows` | `(row: DataTableRow, text: string, headers: DataTableHeader[]) => boolean \| undefined` | Replaces the row test: return true to keep `row` for `text`. |
| `renderExpandedRow` | `(row: DataTableRow) => unknown \| undefined` | Content of a row's expansion; setting it makes rows expandable. |
| `expandedIds` | `string[]` | Ids of the expanded rows. |
| `columnWidths` | `Record<string, number>` | Column widths in px by header key: the resized ones, or saved ones to restore. |
| `hiddenColumns` | `string[] \| undefined` | Keys of the columns not shown (a header with `hideable: false` always shows); set it to restore a saved choice. Unset: the headers marked `hidden`. |
| `selectedRows` | `DataTableRow[]` | (read-only) Selected rows, in `rows` order. |
| `visibleHeaders` | `DataTableHeader[]` | (read-only) The columns on screen: `headers` without those in `hiddenColumns`. |
| `filteredRows` | `DataTableRow[]` | (read-only) `rows` the filter keeps (Carbon `filterRows`: a trimmed, case-insensitive substring of any non-boolean cell on screen). |
| `visibleRows` | `DataTableRow[]` | (read-only) `rows` after filtering, in display order. |
| `pageCount` | `number` | (read-only) Pages of the sorted, filtered rows with `page-size` (at least 1). |
| `shownRows` | `DataTableRow[]` | (read-only) `visibleRows` on the current page — all of them without `page-size`. |

#### Methods

| Method | Description |
|---|---|
| `focus(options)` | `el.focus()` lands on the first control (or the scrollable box). Not delegatesFocus: clicking a plain cell would then pull focus to the first control, the toolbar search. |
| `toCsv({ scope = 'shown' })` | The columns shown and the rows of `scope` as CSV: `'shown'` (filtered and sorted, every page), `'selected'` or `'all'`. |
| `downloadCsv({ scope = 'shown', fileName })` | Downloads `toCsv({ scope })` as `fileName` (default: `csv-file-name`, the heading, else "table"). |
| `sortBy(key, direction)` | Sorts by `key` (or clears with `none`), as a click on its header would, and fires `ui-sort`. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-expand` | `onUiExpand` |  |
| `ui-select` | `onUiSelect` |  |
| `ui-sort` | `onUiSort` |  |
| `ui-columns-change` | `onUiColumnsChange` |  |

### `<ui-data-table-skeleton>` · React `UiDataTableSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `row-count` | `rowCount` | `number` | `5` |  |
| `column-count` | `columnCount` | `number` | `5` |  |
| `size` | `size` | `DataTableSize` | `'lg'` |  |
| `zebra` | `zebra` | `boolean` | `false` |  |
| `hide-header` | `hideHeader` | `boolean` | `false` | Hide the title / description placeholder (Carbon `showHeader={false}`). |
| `hide-toolbar` | `hideToolbar` | `boolean` | `false` | Hide the toolbar placeholder (Carbon `showToolbar={false}`). |

#### Properties

| Property | Type | Description |
|---|---|---|
| `headers` | `Pick<DataTableHeader, 'header'>[] \| undefined` | Header texts to show instead of bars (only `header` is read). |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The container |
| `table` | The `<table>` |


