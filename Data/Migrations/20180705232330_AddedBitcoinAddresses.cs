using Microsoft.EntityFrameworkCore.Migrations;

namespace AccordionFair.Migrations
{
    public partial class AddedBitcoinAddresses : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BitcoinAddress",
                table: "Orders",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BitcoinAddress",
                table: "Orders");
        }
    }
}
