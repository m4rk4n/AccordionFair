using Microsoft.EntityFrameworkCore.Migrations;

namespace AccordionFair.Migrations
{
    public partial class Added_OrderSubtotals_For_USD_and_BTC : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "BitcoinPrice",
                table: "Orders",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.AddColumn<double>(
                name: "OrderTotalInBitcoin",
                table: "Orders",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "OrderTotalInUSD",
                table: "Orders",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OrderTotalInBitcoin",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "OrderTotalInUSD",
                table: "Orders");

            migrationBuilder.AlterColumn<decimal>(
                name: "BitcoinPrice",
                table: "Orders",
                nullable: false,
                oldClrType: typeof(double));
        }
    }
}
