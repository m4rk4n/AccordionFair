using Microsoft.EntityFrameworkCore.Migrations;

namespace AccordionFair.Migrations
{
    public partial class AddedBitcoinPriceToOrderTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "BitcoinPrice",
                table: "Orders",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BitcoinPrice",
                table: "Orders");
        }
    }
}
