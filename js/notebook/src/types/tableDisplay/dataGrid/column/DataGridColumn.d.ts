import ColumnMenu from "../headerMenu/ColumnMenu";
import IndexMenu from "../headerMenu/IndexMenu";
import { BeakerXDataGrid } from "../BeakerXDataGrid";
import { IColumnOptions } from "../interface/IColumn";
import { CellRenderer, DataModel, TextRenderer } from "@phosphor/datagrid";
import { ALL_TYPES } from "../dataTypes";
import { HIGHLIGHTER_TYPE } from "../interface/IHighlighterState";
import ColumnManager from "./ColumnManager";
import ColumnFilter from "./ColumnFilter";
import { BeakerXDataStore } from "../store/BeakerXDataStore";
import { COLUMN_TYPES, SORT_ORDER } from "./enums";
import Highlighter from "../highlighter/Highlighter";
export default class DataGridColumn {
    index: number;
    name: string;
    type: COLUMN_TYPES;
    menu: ColumnMenu | IndexMenu;
    dataGrid: BeakerXDataGrid;
    store: BeakerXDataStore;
    columnManager: ColumnManager;
    columnFilter: ColumnFilter;
    formatFn: CellRenderer.ConfigFunc<string>;
    minValue: any;
    maxValue: any;
    longestStringValue: string;
    constructor(options: IColumnOptions, dataGrid: BeakerXDataGrid, columnManager: ColumnManager);
    static getColumnTypeByRegion(region: DataModel.CellRegion, position: number): COLUMN_TYPES;
    assignFormatFn(): void;
    createMenu(): void;
    addColumnFilter(): void;
    setDisplayType(displayType: ALL_TYPES | string): void;
    setTimeDisplayType(timeUnit: any): void;
    hide(): void;
    show(): void;
    search(filter: string): void;
    filter(filter: string, search?: boolean): void;
    resetFilter(): void;
    connectToColumnsChanged(): void;
    connectToCellHovered(): void;
    handleHeaderCellHovered(sender: BeakerXDataGrid, {data}: {
        data: any;
    }): void;
    getAlignment(): any;
    setAlignment(horizontalAlignment: TextRenderer.HorizontalAlignment): void;
    resetAlignment(): void;
    setWidth(width: number): void;
    getState(): any;
    getVisible(): boolean;
    getDataType(): any;
    getSortOrder(): any;
    getFilter(): any;
    getKeepTrigger(): any;
    getDataTypeName(): string;
    getDisplayType(): any;
    getFormatForTimes(): any;
    getPosition(): any;
    getRenderer(): any;
    getHighlighter(highlighterType: HIGHLIGHTER_TYPE): Highlighter[];
    toggleHighlighter(highlighterType: HIGHLIGHTER_TYPE): void;
    resetHighlighters(): void;
    sort(sortOrder: SORT_ORDER): void;
    toggleSort(): void;
    getValueResolver(): Function;
    move(destination: number): void;
    setDataTypePrecission(precission: number): void;
    addMinMaxValues(): void;
    resetState(): void;
    destroy(): void;
    toggleDataBarsRenderer(enable?: boolean): void;
    isFrozen(): boolean;
    toggleColumnFrozen(): void;
    recalculateLongestStringValue(displayType: ALL_TYPES | string): void;
    private resizeHTMLRows(valuesIterator);
    private updateColumnFilter(filter);
    private toggleVisibility(value);
    private onColumnsChanged(sender, args);
    private setColumnSortOrder(order);
}
